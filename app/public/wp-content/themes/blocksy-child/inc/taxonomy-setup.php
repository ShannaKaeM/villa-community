<?php
/**
 * Taxonomy Setup
 * 
 * Add icons to taxonomies and import initial terms
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

class MI_Taxonomy_Setup {
    
    private $categories_csv;
    
    public function __construct() {
        // Set the path to the CSV file
        $this->categories_csv = get_stylesheet_directory() . '/docs/SITE DATA/Categories.csv';
        
        // Add admin page
        add_action('admin_menu', array($this, 'add_admin_menu'));
        
        // Handle import action
        add_action('admin_init', array($this, 'handle_import'));
        
        // Add icon column to taxonomy admin tables
        add_filter('manage_edit-property_type_columns', array($this, 'add_icon_column'));
        add_filter('manage_edit-location_columns', array($this, 'add_icon_column'));
        add_filter('manage_edit-amenity_columns', array($this, 'add_icon_column'));
        
        // Display icon in the column
        add_filter('manage_property_type_custom_column', array($this, 'display_icon_column'), 10, 3);
        add_filter('manage_location_custom_column', array($this, 'display_icon_column'), 10, 3);
        add_filter('manage_amenity_custom_column', array($this, 'display_icon_column'), 10, 3);
        
        // Add icon field to taxonomy forms
        add_action('property_type_add_form_fields', array($this, 'add_icon_field'));
        add_action('location_add_form_fields', array($this, 'add_icon_field'));
        add_action('amenity_add_form_fields', array($this, 'add_icon_field'));
        
        add_action('property_type_edit_form_fields', array($this, 'edit_icon_field'), 10, 2);
        add_action('location_edit_form_fields', array($this, 'edit_icon_field'), 10, 2);
        add_action('amenity_edit_form_fields', array($this, 'edit_icon_field'), 10, 2);
        
        // Save icon field
        add_action('created_property_type', array($this, 'save_icon_field'));
        add_action('edited_property_type', array($this, 'save_icon_field'));
        add_action('created_location', array($this, 'save_icon_field'));
        add_action('edited_location', array($this, 'save_icon_field'));
        add_action('created_amenity', array($this, 'save_icon_field'));
        add_action('edited_amenity', array($this, 'save_icon_field'));
    }
    
    /**
     * Add admin menu page
     */
    public function add_admin_menu() {
        add_submenu_page(
            'edit.php?post_type=property',
            __('Import Taxonomies', 'blocksy-child'),
            __('Import Taxonomies', 'blocksy-child'),
            'manage_options',
            'taxonomy-importer',
            array($this, 'render_admin_page')
        );
    }
    
    /**
     * Render the admin page
     */
    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1><?php echo esc_html__('Import Taxonomies', 'blocksy-child'); ?></h1>
            
            <div class="card" style="max-width: 800px; padding: 20px; margin-top: 20px;">
                <h2><?php echo esc_html__('Import Property Types, Locations, and Amenities', 'blocksy-child'); ?></h2>
                <p><?php echo esc_html__('This will import taxonomy terms from the CSV file. Any existing terms with the same name will be updated.', 'blocksy-child'); ?></p>
                
                <?php
                // Check if CSV file exists
                if (!file_exists($this->categories_csv)) {
                    echo '<div class="notice notice-error"><p>';
                    echo esc_html__('CSV file not found. Please make sure the file exists at: ', 'blocksy-child') . $this->categories_csv;
                    echo '</p></div>';
                } else {
                    // Count categories in CSV
                    $file = fopen($this->categories_csv, 'r');
                    $count = -1; // Start at -1 to exclude header row
                    $property_types = 0;
                    $locations = 0;
                    $amenities = 0;
                    
                    // Skip header row
                    fgetcsv($file);
                    
                    while (($data = fgetcsv($file)) !== FALSE) {
                        $count++;
                        $type = $data[2]; // type column
                        
                        if ($type === 'property_type') {
                            $property_types++;
                        } elseif ($type === 'location') {
                            $locations++;
                        } elseif ($type === 'amenity') {
                            $amenities++;
                        }
                    }
                    fclose($file);
                    
                    echo '<p>';
                    echo sprintf(
                        esc_html__('Found %d total categories in the CSV file:', 'blocksy-child'),
                        $count
                    );
                    echo '</p>';
                    
                    echo '<ul>';
                    echo '<li>' . sprintf(esc_html__('Property Types: %d', 'blocksy-child'), $property_types) . '</li>';
                    echo '<li>' . sprintf(esc_html__('Locations: %d', 'blocksy-child'), $locations) . '</li>';
                    echo '<li>' . sprintf(esc_html__('Amenities: %d', 'blocksy-child'), $amenities) . '</li>';
                    echo '</ul>';
                    
                    // Import form
                    ?>
                    <form method="post" action="">
                        <?php wp_nonce_field('import_taxonomies_nonce', 'import_taxonomies_nonce'); ?>
                        <input type="hidden" name="action" value="import_taxonomies">
                        <p>
                            <button type="submit" class="button button-primary">
                                <?php echo esc_html__('Import Taxonomies', 'blocksy-child'); ?>
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
        // Check if we're importing taxonomies
        if (!isset($_POST['action']) || $_POST['action'] !== 'import_taxonomies') {
            return;
        }
        
        // Verify nonce
        if (!isset($_POST['import_taxonomies_nonce']) || !wp_verify_nonce($_POST['import_taxonomies_nonce'], 'import_taxonomies_nonce')) {
            wp_die(__('Security check failed. Please try again.', 'blocksy-child'));
        }
        
        // Check permissions
        if (!current_user_can('manage_options')) {
            wp_die(__('You do not have permission to import taxonomies.', 'blocksy-child'));
        }
        
        // Check if CSV file exists
        if (!file_exists($this->categories_csv)) {
            wp_die(__('CSV file not found.', 'blocksy-child'));
        }
        
        // Start importing
        $results = $this->import_taxonomies();
        
        // Store results in transient
        set_transient('taxonomy_import_results', $results, 60);
        
        // Redirect back to the importer page with a success message
        wp_redirect(admin_url('edit.php?post_type=property&page=taxonomy-importer&imported=true'));
        exit;
    }
    
    /**
     * Import taxonomies from CSV
     */
    private function import_taxonomies() {
        // Open the CSV file
        $file = fopen($this->categories_csv, 'r');
        
        // Get the header row
        $header = fgetcsv($file);
        
        // Initialize counters
        $imported = [
            'property_type' => 0,
            'location' => 0,
            'amenity' => 0,
        ];
        
        $updated = [
            'property_type' => 0,
            'location' => 0,
            'amenity' => 0,
        ];
        
        // Process each row
        while (($data = fgetcsv($file)) !== FALSE) {
            // Create an associative array of the row data
            $row = array_combine($header, $data);
            
            // Only process property_type, location, and amenity types
            if (!in_array($row['type'], ['property_type', 'location', 'amenity'])) {
                continue;
            }
            
            // Map CSV type to WordPress taxonomy
            $taxonomy = $row['type'];
            
            // Check if term exists
            $term = get_term_by('name', $row['name'], $taxonomy);
            
            // Prepare term data
            $term_data = [
                'description' => $row['description'],
            ];
            
            if ($term) {
                // Update existing term
                wp_update_term($term->term_id, $taxonomy, $term_data);
                update_term_meta($term->term_id, 'icon', $row['icon']);
                update_term_meta($term->term_id, 'display_order', intval($row['display_order']));
                update_term_meta($term->term_id, 'is_featured', $row['is_featured'] === 'True');
                
                $updated[$taxonomy]++;
            } else {
                // Create new term
                $result = wp_insert_term($row['name'], $taxonomy, $term_data);
                
                if (!is_wp_error($result)) {
                    $term_id = $result['term_id'];
                    update_term_meta($term_id, 'icon', $row['icon']);
                    update_term_meta($term_id, 'display_order', intval($row['display_order']));
                    update_term_meta($term_id, 'is_featured', $row['is_featured'] === 'True');
                    
                    $imported[$taxonomy]++;
                }
            }
        }
        
        // Close the file
        fclose($file);
        
        return [
            'imported' => $imported,
            'updated' => $updated,
        ];
    }
    
    /**
     * Add icon column to taxonomy admin tables
     */
    public function add_icon_column($columns) {
        $new_columns = array();
        
        foreach ($columns as $key => $value) {
            if ($key === 'name') {
                $new_columns[$key] = $value;
                $new_columns['icon'] = __('Icon', 'blocksy-child');
            } else {
                $new_columns[$key] = $value;
            }
        }
        
        return $new_columns;
    }
    
    /**
     * Display icon in the column
     */
    public function display_icon_column($content, $column_name, $term_id) {
        if ($column_name === 'icon') {
            $icon = get_term_meta($term_id, 'icon', true);
            if ($icon) {
                return '<span style="font-size: 24px;">' . $icon . '</span>';
            }
        }
        
        return $content;
    }
    
    /**
     * Add icon field to taxonomy add form
     */
    public function add_icon_field() {
        ?>
        <div class="form-field">
            <label for="term_meta[icon]"><?php _e('Icon', 'blocksy-child'); ?></label>
            <input type="text" name="term_meta[icon]" id="term_meta[icon]" value="">
            <p class="description"><?php _e('Enter an emoji or icon character', 'blocksy-child'); ?></p>
        </div>
        <?php
    }
    
    /**
     * Add icon field to taxonomy edit form
     */
    public function edit_icon_field($term, $taxonomy) {
        $icon = get_term_meta($term->term_id, 'icon', true);
        ?>
        <tr class="form-field">
            <th scope="row" valign="top">
                <label for="term_meta[icon]"><?php _e('Icon', 'blocksy-child'); ?></label>
            </th>
            <td>
                <input type="text" name="term_meta[icon]" id="term_meta[icon]" value="<?php echo esc_attr($icon); ?>">
                <p class="description"><?php _e('Enter an emoji or icon character', 'blocksy-child'); ?></p>
            </td>
        </tr>
        <?php
    }
    
    /**
     * Save icon field
     */
    public function save_icon_field($term_id) {
        if (isset($_POST['term_meta'])) {
            $term_meta = $_POST['term_meta'];
            update_term_meta($term_id, 'icon', $term_meta['icon']);
        }
    }
}

// Initialize the taxonomy setup
new MI_Taxonomy_Setup();
