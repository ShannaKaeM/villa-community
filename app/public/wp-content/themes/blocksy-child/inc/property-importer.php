<?php
/**
 * Property Data Importer
 * 
 * Provides functionality to import property data from CSV
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

class MI_Property_Importer {
    
    private $csv_file;
    
    public function __construct() {
        // Set the path to the CSV file
        $this->csv_file = get_stylesheet_directory() . '/docs/SITE DATA/Cleaned_Properties_Data.csv';
        
        // Add admin page
        add_action('admin_menu', array($this, 'add_admin_menu'));
        
        // Handle import action
        add_action('admin_init', array($this, 'handle_import'));
    }
    
    /**
     * Add admin menu page
     */
    public function add_admin_menu() {
        add_submenu_page(
            'edit.php?post_type=property',
            __('Import Properties', 'blocksy-child'),
            __('Import Properties', 'blocksy-child'),
            'manage_options',
            'property-importer',
            array($this, 'render_admin_page')
        );
    }
    
    /**
     * Render the admin page
     */
    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1><?php echo esc_html__('Import Properties', 'blocksy-child'); ?></h1>
            
            <div class="card" style="max-width: 800px; padding: 20px; margin-top: 20px;">
                <h2><?php echo esc_html__('Import Sample Properties', 'blocksy-child'); ?></h2>
                <p><?php echo esc_html__('This will import sample property data from the CSV file. Any existing properties with the same title will be skipped.', 'blocksy-child'); ?></p>
                
                <?php
                // Check if CSV file exists
                if (!file_exists($this->csv_file)) {
                    echo '<div class="notice notice-error"><p>';
                    echo esc_html__('CSV file not found. Please make sure the file exists at: ', 'blocksy-child') . $this->csv_file;
                    echo '</p></div>';
                } else {
                    // Count properties in CSV
                    $file = fopen($this->csv_file, 'r');
                    $count = -1; // Start at -1 to exclude header row
                    while (($data = fgetcsv($file)) !== FALSE) {
                        $count++;
                    }
                    fclose($file);
                    
                    echo '<p>';
                    echo sprintf(
                        esc_html__('Found %d properties in the CSV file.', 'blocksy-child'),
                        $count
                    );
                    echo '</p>';
                    
                    // Count existing properties
                    $existing_count = wp_count_posts('property')->publish;
                    echo '<p>';
                    echo sprintf(
                        esc_html__('You currently have %d published properties.', 'blocksy-child'),
                        $existing_count
                    );
                    echo '</p>';
                    
                    // Import form
                    ?>
                    <form method="post" action="">
                        <?php wp_nonce_field('import_properties_nonce', 'import_properties_nonce'); ?>
                        <input type="hidden" name="action" value="import_properties">
                        <p>
                            <button type="submit" class="button button-primary">
                                <?php echo esc_html__('Import Properties', 'blocksy-child'); ?>
                            </button>
                        </p>
                    </form>
                    <?php
                }
                ?>
            </div>
        </div>
        <?php
    }
    
    /**
     * Handle the import action
     */
    public function handle_import() {
        // Check if we're importing properties
        if (!isset($_POST['action']) || $_POST['action'] !== 'import_properties') {
            return;
        }
        
        // Verify nonce
        if (!isset($_POST['import_properties_nonce']) || !wp_verify_nonce($_POST['import_properties_nonce'], 'import_properties_nonce')) {
            wp_die(__('Security check failed. Please try again.', 'blocksy-child'));
        }
        
        // Check permissions
        if (!current_user_can('manage_options')) {
            wp_die(__('You do not have permission to import properties.', 'blocksy-child'));
        }
        
        // Check if CSV file exists
        if (!file_exists($this->csv_file)) {
            wp_die(__('CSV file not found.', 'blocksy-child'));
        }
        
        // Start importing
        $this->import_properties();
        
        // Redirect back to the importer page with a success message
        wp_redirect(admin_url('edit.php?post_type=property&page=property-importer&imported=true'));
        exit;
    }
    
    /**
     * Import properties from CSV
     */
    private function import_properties() {
        // Open the CSV file
        $file = fopen($this->csv_file, 'r');
        
        // Get the header row
        $header = fgetcsv($file);
        
        // Initialize counters
        $imported = 0;
        $skipped = 0;
        
        // Load categories from CSV for mapping
        $categories_csv = get_stylesheet_directory() . '/docs/SITE DATA/Categories.csv';
        $category_map = $this->load_category_map($categories_csv);
        
        // Process each row
        while (($data = fgetcsv($file)) !== FALSE) {
            // Create an associative array of the row data
            $row = array_combine($header, $data);
            
            // Check if property with this title already exists
            $existing = get_page_by_title($row['title'], OBJECT, 'property');
            
            if ($existing) {
                $skipped++;
                continue;
            }
            
            // Create property post
            $post_data = array(
                'post_title'    => $row['title'],
                'post_content'  => $row['description'],
                'post_status'   => 'publish',
                'post_type'     => 'property',
                'post_name'     => $row['slug'],
            );
            
            // Insert the post
            $post_id = wp_insert_post($post_data);
            
            if (!$post_id || is_wp_error($post_id)) {
                $skipped++;
                continue;
            }
            
            // Set property type taxonomy
            if (!empty($row['property_type_id'])) {
                $property_type_id = intval($row['property_type_id']);
                if (isset($category_map['property_type'][$property_type_id])) {
                    $term_id = $this->get_or_create_term(
                        $category_map['property_type'][$property_type_id]['name'],
                        'property_type',
                        $category_map['property_type'][$property_type_id]
                    );
                    wp_set_object_terms($post_id, $term_id, 'property_type');
                }
            }
            
            // Set location taxonomy
            if (!empty($row['location_id'])) {
                $location_id = intval($row['location_id']);
                if (isset($category_map['location'][$location_id])) {
                    $term_id = $this->get_or_create_term(
                        $category_map['location'][$location_id]['name'],
                        'location',
                        $category_map['location'][$location_id]
                    );
                    wp_set_object_terms($post_id, $term_id, 'location');
                }
            }
            
            // Set amenities taxonomy
            if (!empty($row['amenity_ids'])) {
                $amenity_ids = explode(',', $row['amenity_ids']);
                $term_ids = [];
                
                foreach ($amenity_ids as $amenity_id) {
                    $amenity_id = intval(trim($amenity_id));
                    if (isset($category_map['amenity'][$amenity_id])) {
                        $term_id = $this->get_or_create_term(
                            $category_map['amenity'][$amenity_id]['name'],
                            'amenity',
                            $category_map['amenity'][$amenity_id]
                        );
                        $term_ids[] = $term_id;
                    }
                }
                
                if (!empty($term_ids)) {
                    wp_set_object_terms($post_id, $term_ids, 'amenity');
                }
            }
            
            // Set meta fields
            update_post_meta($post_id, 'property_address', $row['address']);
            update_post_meta($post_id, 'property_city', $row['city']);
            update_post_meta($post_id, 'property_state', $row['state']);
            update_post_meta($post_id, 'property_zip_code', $row['zip_code']);
            update_post_meta($post_id, 'property_latitude', $row['latitude']);
            update_post_meta($post_id, 'property_longitude', $row['longitude']);
            update_post_meta($post_id, 'property_bedrooms', intval($row['bedrooms']));
            update_post_meta($post_id, 'property_bathrooms', floatval($row['bathrooms']));
            update_post_meta($post_id, 'property_max_guests', intval($row['max_guests']));
            update_post_meta($post_id, 'property_nightly_rate', floatval($row['nightly_rate']));
            update_post_meta($post_id, 'property_booking_url', $row['booking_url']);
            update_post_meta($post_id, 'property_ical_url', $row['ical_url']);
            update_post_meta($post_id, 'property_has_direct_booking', $row['has_direct_booking'] === '1');
            update_post_meta($post_id, 'property_is_featured', $row['is_featured'] === '1');
            update_post_meta($post_id, 'property_views', intval($row['views']));
            
            // Set featured image if provided
            if (!empty($row['featured_image'])) {
                // Here you would need to handle the image import
                // This is a simplified version that assumes the image ID exists
                set_post_thumbnail($post_id, intval($row['featured_image']));
            }
            
            $imported++;
        }
        
        // Close the file
        fclose($file);
        
        // Store import results in a transient
        set_transient('property_import_results', array(
            'imported' => $imported,
            'skipped' => $skipped
        ), 60);
        
        return array(
            'imported' => $imported,
            'skipped' => $skipped
        );
    }
    
    /**
     * Load category map from CSV
     * 
     * @param string $csv_file Path to the categories CSV file
     * @return array Category map indexed by type and ID
     */
    private function load_category_map($csv_file) {
        if (!file_exists($csv_file)) {
            return [];
        }
        
        $category_map = [
            'property_type' => [],
            'location' => [],
            'amenity' => []
        ];
        
        $file = fopen($csv_file, 'r');
        
        // Get the header row
        $header = fgetcsv($file);
        
        // Process each row
        while (($data = fgetcsv($file)) !== FALSE) {
            $row = array_combine($header, $data);
            
            // Only process property_type, location, and amenity types
            if (!in_array($row['type'], ['property_type', 'location', 'amenity'])) {
                continue;
            }
            
            $category_map[$row['type']][intval($row['id'])] = [
                'name' => $row['name'],
                'description' => $row['description'],
                'icon' => $row['icon'],
                'display_order' => intval($row['display_order']),
                'is_featured' => $row['is_featured'] === 'True'
            ];
        }
        
        fclose($file);
        
        return $category_map;
    }
    
    /**
     * Get or create a taxonomy term
     * 
     * @param string $name Term name
     * @param string $taxonomy Taxonomy name
     * @param array $data Term data
     * @return int Term ID
     */
    private function get_or_create_term($name, $taxonomy, $data) {
        // Check if term exists
        $term = get_term_by('name', $name, $taxonomy);
        
        if ($term) {
            // Update existing term
            update_term_meta($term->term_id, 'icon', $data['icon']);
            update_term_meta($term->term_id, 'display_order', $data['display_order']);
            update_term_meta($term->term_id, 'is_featured', $data['is_featured']);
            
            return $term->term_id;
        } else {
            // Create new term
            $result = wp_insert_term($name, $taxonomy, [
                'description' => $data['description']
            ]);
            
            if (!is_wp_error($result)) {
                $term_id = $result['term_id'];
                update_term_meta($term_id, 'icon', $data['icon']);
                update_term_meta($term_id, 'display_order', $data['display_order']);
                update_term_meta($term_id, 'is_featured', $data['is_featured']);
                
                return $term_id;
            }
            
            return 0;
        }
    }
}

// Initialize the importer
new MI_Property_Importer();
