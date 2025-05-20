<?php
/**
 * Business Importer
 * 
 * Imports business data from a CSV file
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Import businesses from CSV
 */
class MI_Business_Importer {
    /**
     * CSV file path
     */
    private $csv_file;
    
    /**
     * Log of import actions
     */
    private $log = [];
    
    /**
     * Constructor
     */
    public function __construct($csv_file = '') {
        // Default to the Businesses CSV in the docs/SITE DATA directory
        if (empty($csv_file)) {
            $csv_file = get_stylesheet_directory() . '/docs/SITE DATA/Businesses_Data__Trimmed_Final_.csv';
        }
        
        $this->csv_file = $csv_file;
    }
    
    /**
     * Run the import
     */
    public function import() {
        // Check if file exists
        if (!file_exists($this->csv_file)) {
            $this->log[] = 'Error: CSV file not found at ' . $this->csv_file;
            return false;
        }
        
        // Open the CSV file
        $handle = fopen($this->csv_file, 'r');
        if (!$handle) {
            $this->log[] = 'Error: Could not open CSV file';
            return false;
        }
        
        // Read header row
        $header = fgetcsv($handle);
        if (!$header) {
            $this->log[] = 'Error: Could not read CSV header';
            fclose($handle);
            return false;
        }
        
        // Map header columns to indices
        $columns = array_flip($header);
        
        // Check required columns
        $required_columns = ['name', 'description', 'business_type_id', 'location_id', 'address', 'city', 'state'];
        foreach ($required_columns as $column) {
            if (!isset($columns[$column])) {
                $this->log[] = "Error: Required column '$column' not found in CSV";
                fclose($handle);
                return false;
            }
        }
        
        // Track imported businesses
        $imported = 0;
        $updated = 0;
        $skipped = 0;
        
        // Process each row
        while (($data = fgetcsv($handle)) !== false) {
            // Skip empty rows
            if (empty($data) || count($data) < count($required_columns)) {
                $skipped++;
                continue;
            }
            
            // Get business data
            $name = isset($columns['name']) && isset($data[$columns['name']]) ? $data[$columns['name']] : '';
            $slug = isset($columns['slug']) && isset($data[$columns['slug']]) ? $data[$columns['slug']] : '';
            $description = isset($columns['description']) && isset($data[$columns['description']]) ? $data[$columns['description']] : '';
            $short_description = isset($columns['short_description']) && isset($data[$columns['short_description']]) ? $data[$columns['short_description']] : '';
            $user_id = isset($columns['user_id']) && isset($data[$columns['user_id']]) ? intval($data[$columns['user_id']]) : 1;
            $business_type_id = isset($columns['business_type_id']) && isset($data[$columns['business_type_id']]) ? intval($data[$columns['business_type_id']]) : 0;
            $location_id = isset($columns['location_id']) && isset($data[$columns['location_id']]) ? intval($data[$columns['location_id']]) : 0;
            $address = isset($columns['address']) && isset($data[$columns['address']]) ? $data[$columns['address']] : '';
            $city = isset($columns['city']) && isset($data[$columns['city']]) ? $data[$columns['city']] : '';
            $state = isset($columns['state']) && isset($data[$columns['state']]) ? $data[$columns['state']] : '';
            $zip_code = isset($columns['zip_code']) && isset($data[$columns['zip_code']]) ? $data[$columns['zip_code']] : '';
            $phone = isset($columns['phone']) && isset($data[$columns['phone']]) ? $data[$columns['phone']] : '';
            $email = isset($columns['email']) && isset($data[$columns['email']]) ? $data[$columns['email']] : '';
            $website = isset($columns['website']) && isset($data[$columns['website']]) ? $data[$columns['website']] : '';
            $social_media = isset($columns['social_media']) && isset($data[$columns['social_media']]) ? $data[$columns['social_media']] : '';
            $hours = isset($columns['hours']) && isset($data[$columns['hours']]) ? $data[$columns['hours']] : '';
            $latitude = isset($columns['latitude']) && isset($data[$columns['latitude']]) ? $data[$columns['latitude']] : '';
            $longitude = isset($columns['longitude']) && isset($data[$columns['longitude']]) ? $data[$columns['longitude']] : '';
            $is_claimed = isset($columns['is_claimed']) && isset($data[$columns['is_claimed']]) ? 
                (strtolower($data[$columns['is_claimed']]) === 'true' || $data[$columns['is_claimed']] === '1') : false;
            $status = isset($columns['status']) && isset($data[$columns['status']]) ? $data[$columns['status']] : 'publish';
            $is_featured = isset($columns['is_featured']) && isset($data[$columns['is_featured']]) ? 
                (strtolower($data[$columns['is_featured']]) === 'true' || $data[$columns['is_featured']] === '1') : false;
            
            // Skip if missing required data
            if (empty($name) || empty($description)) {
                $this->log[] = "Skipped: Row missing required data (name or description)";
                $skipped++;
                continue;
            }
            
            // Make sure we have a valid author - default to ihost-admin
            $valid_user_id = 1; // Default to admin
            
            // Try to find ihost-admin user
            $ihost_admin = get_user_by('login', 'ihost-admin');
            if ($ihost_admin) {
                $valid_user_id = $ihost_admin->ID;
            } else {
                // Try to use the specified user ID
                if (get_user_by('id', $user_id)) {
                    $valid_user_id = $user_id;
                } else {
                    // Fall back to any admin user
                    $admin_users = get_users(['role' => 'administrator', 'number' => 1]);
                    if (!empty($admin_users)) {
                        $valid_user_id = $admin_users[0]->ID;
                    }
                }
            }
            
            // Prepare post data
            $post_data = array(
                'post_title'    => $name,
                'post_name'     => $slug,
                'post_content'  => $description,
                'post_excerpt'  => $short_description,
                'post_status'   => 'publish', // Force publish status
                'post_type'     => 'business',
                'post_author'   => $valid_user_id,
            );
            
            // Check if business already exists by slug
            $existing_post = get_page_by_path($slug, OBJECT, 'business');
            
            if ($existing_post) {
                // Update existing business
                $post_data['ID'] = $existing_post->ID;
                $post_id = wp_update_post($post_data);
                
                if (is_wp_error($post_id)) {
                    $this->log[] = "Error: Could not update business '$name': " . $post_id->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Updated: Business '$name'";
                $updated++;
            } else {
                // Create new business
                $post_id = wp_insert_post($post_data);
                
                if (is_wp_error($post_id)) {
                    $this->log[] = "Error: Could not create business '$name': " . $post_id->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Created: Business '$name'";
                $imported++;
            }
            
            // Set business type - try by ID first, then by name if ID fails
            if ($business_type_id) {
                // Try by ID first
                $term = get_term($business_type_id, 'business_type');
                if ($term && !is_wp_error($term)) {
                    wp_set_object_terms($post_id, $term->term_id, 'business_type');
                } else {
                    // If ID fails, try to find by name based on ID patterns
                    $type_name = '';
                    switch($business_type_id) {
                        case 1: $type_name = 'Restaurant'; break;
                        case 2: $type_name = 'Shop'; break;
                        case 3: $type_name = 'Service'; break;
                        case 4: $type_name = 'Bar'; break;
                    }
                    
                    if (!empty($type_name)) {
                        $term = get_term_by('name', $type_name, 'business_type');
                        if ($term && !is_wp_error($term)) {
                            wp_set_object_terms($post_id, $term->term_id, 'business_type');
                        }
                    }
                }
            }
            
            // Set location - try by ID first, then by name if ID fails
            if ($location_id) {
                // Try by ID first
                $term = get_term($location_id, 'location');
                if ($term && !is_wp_error($term)) {
                    wp_set_object_terms($post_id, $term->term_id, 'location');
                } else {
                    // If ID fails, try to find by name based on ID patterns
                    $location_name = '';
                    switch($location_id) {
                        case 16: $location_name = 'North Topsail Beach'; break;
                        case 17: $location_name = 'Surf City'; break;
                        case 18: $location_name = 'Topsail Beach'; break;
                    }
                    
                    if (!empty($location_name)) {
                        $term = get_term_by('name', $location_name, 'location');
                        if ($term && !is_wp_error($term)) {
                            wp_set_object_terms($post_id, $term->term_id, 'location');
                        }
                    }
                }
            }
            
            // Save business meta using Carbon Fields format
            // We'll use regular post meta first, and then update Carbon Fields meta when appropriate
            
            // Contact information
            update_post_meta($post_id, 'business_address', $address);
            update_post_meta($post_id, 'business_city', $city);
            update_post_meta($post_id, 'business_state', $state);
            update_post_meta($post_id, 'business_zip_code', $zip_code);
            update_post_meta($post_id, 'business_phone', $phone);
            update_post_meta($post_id, 'business_email', $email);
            
            // Online presence
            update_post_meta($post_id, 'business_website', $website);
            
            // Social media - parse if it's a JSON string
            if (!empty($social_media)) {
                $social_media_array = json_decode($social_media, true);
                if (is_array($social_media_array)) {
                    foreach ($social_media_array as $platform => $url) {
                        update_post_meta($post_id, 'business_social_' . $platform, $url);
                    }
                } else {
                    update_post_meta($post_id, 'business_social_media', $social_media);
                }
            }
            
            // Business hours - parse if it's a JSON string
            if (!empty($hours)) {
                $hours_array = json_decode($hours, true);
                if (is_array($hours_array)) {
                    foreach ($hours_array as $day => $hours_data) {
                        update_post_meta($post_id, 'business_hours_' . $day, $hours_data);
                    }
                } else {
                    update_post_meta($post_id, 'business_hours', $hours);
                }
            }
            
            // Location data
            if (!empty($latitude)) {
                update_post_meta($post_id, 'business_latitude', $latitude);
            }
            
            if (!empty($longitude)) {
                update_post_meta($post_id, 'business_longitude', $longitude);
            }
            
            // Business status
            update_post_meta($post_id, 'business_is_claimed', $is_claimed ? '1' : '0');
            update_post_meta($post_id, 'business_is_featured', $is_featured ? '1' : '0');
            
            // Now update Carbon Fields meta if the function exists
            if (function_exists('carbon_set_post_meta')) {
                // Contact information
                carbon_set_post_meta($post_id, 'business_address', $address);
                carbon_set_post_meta($post_id, 'business_city', $city);
                carbon_set_post_meta($post_id, 'business_state', $state);
                carbon_set_post_meta($post_id, 'business_zip_code', $zip_code);
                carbon_set_post_meta($post_id, 'business_phone', $phone);
                carbon_set_post_meta($post_id, 'business_email', $email);
                
                // Online presence
                carbon_set_post_meta($post_id, 'business_website', $website);
                
                // Business status
                carbon_set_post_meta($post_id, 'business_is_claimed', $is_claimed);
                carbon_set_post_meta($post_id, 'business_is_featured', $is_featured);
            }
        }
        
        fclose($handle);
        
        $this->log[] = "Import completed: $imported businesses imported, $updated businesses updated, $skipped businesses skipped";
        return true;
    }
    
    /**
     * Get the import log
     */
    public function get_log() {
        return $this->log;
    }
}

/**
 * Admin page for importing businesses
 */
class MI_Business_Importer_Admin {
    /**
     * Constructor
     */
    public function __construct() {
        add_action('admin_menu', [$this, 'add_admin_menu']);
        add_action('admin_init', [$this, 'handle_import']);
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_submenu_page(
            'edit.php?post_type=business',
            'Import Businesses',
            'Import Businesses',
            'manage_options',
            'mi-import-businesses',
            [$this, 'render_admin_page']
        );
    }
    
    /**
     * Render admin page
     */
    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1>Import Businesses</h1>
            
            <p>This tool imports businesses from the Businesses_Data__Trimmed_Final_.csv file.</p>
            
            <form method="post" action="">
                <?php wp_nonce_field('mi_import_businesses', 'mi_import_businesses_nonce'); ?>
                
                <p>
                    <input type="submit" name="mi_import_businesses" class="button button-primary" value="Import Businesses">
                </p>
            </form>
            
            <?php
            // Display import log if available
            if (isset($_GET['import_log']) && !empty($_GET['import_log'])) {
                $log = get_transient('mi_business_import_log');
                if ($log) {
                    echo '<h2>Import Log</h2>';
                    echo '<div class="notice notice-info">';
                    echo '<ul>';
                    foreach ($log as $entry) {
                        echo '<li>' . esc_html($entry) . '</li>';
                    }
                    echo '</ul>';
                    echo '</div>';
                }
            }
            ?>
        </div>
        <?php
    }
    
    /**
     * Handle import
     */
    public function handle_import() {
        if (
            isset($_POST['mi_import_businesses']) && 
            isset($_POST['mi_import_businesses_nonce']) && 
            wp_verify_nonce($_POST['mi_import_businesses_nonce'], 'mi_import_businesses')
        ) {
            // Run import
            $importer = new MI_Business_Importer();
            $importer->import();
            
            // Save log
            set_transient('mi_business_import_log', $importer->get_log(), HOUR_IN_SECONDS);
            
            // Redirect to show log
            wp_redirect(add_query_arg('import_log', '1', wp_get_referer()));
            exit;
        }
    }
}

// Initialize admin page
if (is_admin()) {
    new MI_Business_Importer_Admin();
}

/**
 * Run business import from code
 */
function mi_import_businesses() {
    $importer = new MI_Business_Importer();
    return $importer->import();
}
