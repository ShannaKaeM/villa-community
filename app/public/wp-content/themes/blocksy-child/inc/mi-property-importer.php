<?php
/**
 * Property Importer
 * 
 * Imports property data from a CSV file
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Import properties from CSV
 */
class MI_Property_Importer {
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
        // Default to the Properties.csv in the docs/SITE DATA directory
        if (empty($csv_file)) {
            $csv_file = get_stylesheet_directory() . '/docs/SITE DATA/Properties.csv';
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
        $required_columns = ['title', 'description', 'property_type_id', 'location_id', 'address', 'city', 'state'];
        foreach ($required_columns as $column) {
            if (!isset($columns[$column])) {
                $this->log[] = "Error: Required column '$column' not found in CSV";
                fclose($handle);
                return false;
            }
        }
        
        // Track imported properties
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
            
            // Get property data
            $title = isset($columns['title']) && isset($data[$columns['title']]) ? $data[$columns['title']] : '';
            $slug = isset($columns['slug']) && isset($data[$columns['slug']]) ? $data[$columns['slug']] : '';
            $description = isset($columns['description']) && isset($data[$columns['description']]) ? $data[$columns['description']] : '';
            $user_id = isset($columns['user_id']) && isset($data[$columns['user_id']]) ? intval($data[$columns['user_id']]) : 1;
            $property_type_id = isset($columns['property_type_id']) && isset($data[$columns['property_type_id']]) ? intval($data[$columns['property_type_id']]) : 0;
            $location_id = isset($columns['location_id']) && isset($data[$columns['location_id']]) ? intval($data[$columns['location_id']]) : 0;
            $amenity_ids = isset($columns['amenity_ids']) && isset($data[$columns['amenity_ids']]) ? $data[$columns['amenity_ids']] : '';
            $address = isset($columns['address']) && isset($data[$columns['address']]) ? $data[$columns['address']] : '';
            $city = isset($columns['city']) && isset($data[$columns['city']]) ? $data[$columns['city']] : '';
            $state = isset($columns['state']) && isset($data[$columns['state']]) ? $data[$columns['state']] : '';
            $zip_code = isset($columns['zip_code']) && isset($data[$columns['zip_code']]) ? $data[$columns['zip_code']] : '';
            $latitude = isset($columns['latitude']) && isset($data[$columns['latitude']]) ? $data[$columns['latitude']] : '';
            $longitude = isset($columns['longitude']) && isset($data[$columns['longitude']]) ? $data[$columns['longitude']] : '';
            $bedrooms = isset($columns['bedrooms']) && isset($data[$columns['bedrooms']]) ? intval($data[$columns['bedrooms']]) : 0;
            $bathrooms = isset($columns['bathrooms']) && isset($data[$columns['bathrooms']]) ? floatval($data[$columns['bathrooms']]) : 0;
            $max_guests = isset($columns['max_guests']) && isset($data[$columns['max_guests']]) ? intval($data[$columns['max_guests']]) : 0;
            $nightly_rate = isset($columns['nightly_rate']) && isset($data[$columns['nightly_rate']]) ? floatval($data[$columns['nightly_rate']]) : 0;
            $booking_url = isset($columns['booking_url']) && isset($data[$columns['booking_url']]) ? $data[$columns['booking_url']] : '';
            $ical_url = isset($columns['ical_url']) && isset($data[$columns['ical_url']]) ? $data[$columns['ical_url']] : '';
            $has_direct_booking = isset($columns['has_direct_booking']) && isset($data[$columns['has_direct_booking']]) ? 
                (strtolower($data[$columns['has_direct_booking']]) === 'true' || $data[$columns['has_direct_booking']] === '1') : false;
            $status = isset($columns['status']) && isset($data[$columns['status']]) ? $data[$columns['status']] : 'publish';
            $is_featured = isset($columns['is_featured']) && isset($data[$columns['is_featured']]) ? 
                (strtolower($data[$columns['is_featured']]) === 'true' || $data[$columns['is_featured']] === '1') : false;
            
            // Skip if missing required data
            if (empty($title) || empty($description)) {
                $this->log[] = "Skipped: Row missing required data (title or description)";
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
                'post_title'    => $title,
                'post_name'     => $slug,
                'post_content'  => $description,
                'post_status'   => 'publish', // Force publish status
                'post_type'     => 'property',
                'post_author'   => $valid_user_id,
            );
            
            // Check if property already exists by slug
            $existing_post = get_page_by_path($slug, OBJECT, 'property');
            
            if ($existing_post) {
                // Update existing property
                $post_data['ID'] = $existing_post->ID;
                $post_id = wp_update_post($post_data);
                
                if (is_wp_error($post_id)) {
                    $this->log[] = "Error: Could not update property '$title': " . $post_id->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Updated: Property '$title'";
                $updated++;
            } else {
                // Create new property
                $post_id = wp_insert_post($post_data);
                
                if (is_wp_error($post_id)) {
                    $this->log[] = "Error: Could not create property '$title': " . $post_id->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Created: Property '$title'";
                $imported++;
            }
            
            // Set property type - try by ID first, then by name if ID fails
            if ($property_type_id) {
                // Try by ID first
                $term = get_term($property_type_id, 'property_type');
                if ($term && !is_wp_error($term)) {
                    wp_set_object_terms($post_id, $term->term_id, 'property_type');
                } else {
                    // If ID fails, try to find by name based on ID patterns
                    $type_name = '';
                    switch($property_type_id) {
                        case 4: $type_name = 'House'; break;
                        case 5: $type_name = 'Condo'; break;
                        case 6: $type_name = 'Cottage'; break;
                    }
                    
                    if (!empty($type_name)) {
                        $term = get_term_by('name', $type_name, 'property_type');
                        if ($term && !is_wp_error($term)) {
                            wp_set_object_terms($post_id, $term->term_id, 'property_type');
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
            
            // Set amenities - try by ID first, then by name if ID fails
            if (!empty($amenity_ids)) {
                $amenity_ids_array = explode(',', $amenity_ids);
                $amenity_ids_array = array_map('trim', $amenity_ids_array);
                $amenity_ids_array = array_filter($amenity_ids_array);
                
                $amenity_terms = [];
                
                if (!empty($amenity_ids_array)) {
                    foreach ($amenity_ids_array as $amenity_id) {
                        // Try by ID first
                        $term = get_term($amenity_id, 'amenity');
                        if ($term && !is_wp_error($term)) {
                            $amenity_terms[] = $term->term_id;
                        } else {
                            // If ID fails, try to find by name based on ID patterns
                            $amenity_name = '';
                            switch($amenity_id) {
                                case 7: $amenity_name = 'Pool'; break;
                                case 8: $amenity_name = 'Hot Tub'; break;
                                case 9: $amenity_name = 'Pet Friendly'; break;
                                case 10: $amenity_name = 'WiFi'; break;
                                case 11: $amenity_name = 'Ocean View'; break;
                            }
                            
                            if (!empty($amenity_name)) {
                                $term = get_term_by('name', $amenity_name, 'amenity');
                                if ($term && !is_wp_error($term)) {
                                    $amenity_terms[] = $term->term_id;
                                }
                            }
                        }
                    }
                    
                    if (!empty($amenity_terms)) {
                        wp_set_object_terms($post_id, $amenity_terms, 'amenity');
                    }
                }
            }
            
            // Save property meta using both standard post meta and Carbon Fields format
            // Standard post meta first
            update_post_meta($post_id, 'property_address', $address);
            update_post_meta($post_id, 'property_city', $city);
            update_post_meta($post_id, 'property_state', $state);
            update_post_meta($post_id, 'property_zip_code', $zip_code);
            
            if (!empty($latitude)) {
                update_post_meta($post_id, 'property_latitude', $latitude);
            }
            
            if (!empty($longitude)) {
                update_post_meta($post_id, 'property_longitude', $longitude);
            }
            
            if ($bedrooms > 0) {
                update_post_meta($post_id, 'property_bedrooms', $bedrooms);
            }
            
            if ($bathrooms > 0) {
                update_post_meta($post_id, 'property_bathrooms', $bathrooms);
            }
            
            if ($max_guests > 0) {
                update_post_meta($post_id, 'property_max_guests', $max_guests);
            }
            
            if ($nightly_rate > 0) {
                update_post_meta($post_id, 'property_nightly_rate', $nightly_rate);
            }
            
            if (!empty($booking_url)) {
                update_post_meta($post_id, 'property_booking_url', $booking_url);
            }
            
            if (!empty($ical_url)) {
                update_post_meta($post_id, 'property_ical_url', $ical_url);
            }
            
            update_post_meta($post_id, 'property_has_direct_booking', $has_direct_booking ? '1' : '0');
            update_post_meta($post_id, 'property_is_featured', $is_featured ? '1' : '0');
            
            // Now update Carbon Fields meta
            // We need to do this after the post is created and all standard meta is set
            // This ensures Carbon Fields can properly store and retrieve the values
            if (function_exists('carbon_set_post_meta')) {
                // Location information
                carbon_set_post_meta($post_id, 'property_address', $address);
                carbon_set_post_meta($post_id, 'property_city', $city);
                carbon_set_post_meta($post_id, 'property_state', $state);
                carbon_set_post_meta($post_id, 'property_zip', $zip_code);
                
                if (!empty($latitude)) {
                    carbon_set_post_meta($post_id, 'property_latitude', $latitude);
                }
                
                if (!empty($longitude)) {
                    carbon_set_post_meta($post_id, 'property_longitude', $longitude);
                }
                
                // Property details
                if ($bedrooms > 0) {
                    carbon_set_post_meta($post_id, 'property_bedrooms', $bedrooms);
                }
                
                if ($bathrooms > 0) {
                    carbon_set_post_meta($post_id, 'property_bathrooms', $bathrooms);
                }
                
                if ($max_guests > 0) {
                    carbon_set_post_meta($post_id, 'property_max_guests', $max_guests);
                }
                
                // Pricing
                if ($nightly_rate > 0) {
                    carbon_set_post_meta($post_id, 'property_nightly_rate', $nightly_rate);
                }
                
                // Booking
                if (!empty($booking_url)) {
                    carbon_set_post_meta($post_id, 'property_booking_url', $booking_url);
                }
                
                if (!empty($ical_url)) {
                    carbon_set_post_meta($post_id, 'property_ical_url', $ical_url);
                }
                
                carbon_set_post_meta($post_id, 'property_has_direct_booking', $has_direct_booking);
                carbon_set_post_meta($post_id, 'property_is_featured', $is_featured);
            }
        }
        
        fclose($handle);
        
        $this->log[] = "Import completed: $imported properties imported, $updated properties updated, $skipped properties skipped";
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
 * Admin page for importing properties
 */
class MI_Property_Importer_Admin {
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
            'edit.php?post_type=property',
            'Import Properties',
            'Import Properties',
            'manage_options',
            'mi-import-properties',
            [$this, 'render_admin_page']
        );
    }
    
    /**
     * Render admin page
     */
    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1>Import Properties</h1>
            
            <p>This tool imports properties from the Properties.csv file.</p>
            
            <form method="post" action="">
                <?php wp_nonce_field('mi_import_properties', 'mi_import_properties_nonce'); ?>
                
                <p>
                    <input type="submit" name="mi_import_properties" class="button button-primary" value="Import Properties">
                </p>
            </form>
            
            <?php
            // Display import log if available
            if (isset($_GET['import_log']) && !empty($_GET['import_log'])) {
                $log = get_transient('mi_property_import_log');
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
            isset($_POST['mi_import_properties']) && 
            isset($_POST['mi_import_properties_nonce']) && 
            wp_verify_nonce($_POST['mi_import_properties_nonce'], 'mi_import_properties')
        ) {
            // Run import
            $importer = new MI_Property_Importer();
            $importer->import();
            
            // Save log
            set_transient('mi_property_import_log', $importer->get_log(), HOUR_IN_SECONDS);
            
            // Redirect to show log
            wp_redirect(add_query_arg('import_log', '1', wp_get_referer()));
            exit;
        }
    }
}

// Initialize admin page
if (is_admin()) {
    new MI_Property_Importer_Admin();
}

/**
 * Run property import from code
 */
function mi_import_properties() {
    $importer = new MI_Property_Importer();
    return $importer->import();
}
