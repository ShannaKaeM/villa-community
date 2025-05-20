<?php
/**
 * User Profile Importer
 * 
 * Imports user profile data from a CSV file
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Import user profiles from CSV
 */
class MI_User_Profile_Importer {
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
        // Default to the Users CSV in the docs/SITE DATA directory
        if (empty($csv_file)) {
            $csv_file = get_stylesheet_directory() . '/docs/SITE DATA/Users_Data__No_id_2_.csv';
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
        $required_columns = ['name', 'email'];
        foreach ($required_columns as $column) {
            if (!isset($columns[$column])) {
                $this->log[] = "Error: Required column '$column' not found in CSV";
                fclose($handle);
                return false;
            }
        }
        
        // Track imported user profiles
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
            
            // Get user profile data
            $name = isset($columns['name']) && isset($data[$columns['name']]) ? $data[$columns['name']] : '';
            $email = isset($columns['email']) && isset($data[$columns['email']]) ? $data[$columns['email']] : '';
            $user_type_id = isset($columns['user_type_id']) && isset($data[$columns['user_type_id']]) ? intval($data[$columns['user_type_id']]) : 0;
            $location_id = isset($columns['location_id']) && isset($data[$columns['location_id']]) ? intval($data[$columns['location_id']]) : 0;
            $phone = isset($columns['phone']) && isset($data[$columns['phone']]) ? $data[$columns['phone']] : '';
            $bio = isset($columns['bio']) && isset($data[$columns['bio']]) ? $data[$columns['bio']] : '';
            $profile_image = isset($columns['profile_image']) && isset($data[$columns['profile_image']]) ? $data[$columns['profile_image']] : '';
            
            // Skip if missing required data
            if (empty($name) || empty($email)) {
                $this->log[] = "Skipped: Row missing required data (name or email)";
                $skipped++;
                continue;
            }
            
            // Generate slug from name
            $slug = sanitize_title($name);
            
            // Make sure we have a valid author - default to ihost-admin
            $valid_user_id = 1; // Default to admin
            
            // Try to find ihost-admin user
            $ihost_admin = get_user_by('login', 'ihost-admin');
            if ($ihost_admin) {
                $valid_user_id = $ihost_admin->ID;
            } else {
                // Fall back to any admin user
                $admin_users = get_users(['role' => 'administrator', 'number' => 1]);
                if (!empty($admin_users)) {
                    $valid_user_id = $admin_users[0]->ID;
                }
            }
            
            // Prepare post data
            $post_data = array(
                'post_title'    => $name,
                'post_name'     => $slug,
                'post_content'  => $bio,
                'post_status'   => 'publish', // Force publish status
                'post_type'     => 'user_profile',
                'post_author'   => $valid_user_id,
            );
            
            // Check if user profile already exists by slug
            $existing_post = get_page_by_path($slug, OBJECT, 'user_profile');
            
            if ($existing_post) {
                // Update existing user profile
                $post_data['ID'] = $existing_post->ID;
                $post_id = wp_update_post($post_data);
                
                if (is_wp_error($post_id)) {
                    $this->log[] = "Error: Could not update user profile '$name': " . $post_id->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Updated: User Profile '$name'";
                $updated++;
            } else {
                // Create new user profile
                $post_id = wp_insert_post($post_data);
                
                if (is_wp_error($post_id)) {
                    $this->log[] = "Error: Could not create user profile '$name': " . $post_id->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Created: User Profile '$name'";
                $imported++;
            }
            
            // Set user type - try by ID first, then by name if ID fails
            if ($user_type_id) {
                // Try by ID first
                $term = get_term($user_type_id, 'user_type');
                if ($term && !is_wp_error($term)) {
                    wp_set_object_terms($post_id, $term->term_id, 'user_type');
                } else {
                    // If ID fails, try to find by name based on ID patterns
                    $type_name = '';
                    switch($user_type_id) {
                        case 12: $type_name = 'Admin'; break;
                        case 13: $type_name = 'Owner'; break;
                        case 14: $type_name = 'Visitor'; break;
                        case 15: $type_name = 'Business Owner'; break;
                    }
                    
                    if (!empty($type_name)) {
                        $term = get_term_by('name', $type_name, 'user_type');
                        if ($term && !is_wp_error($term)) {
                            wp_set_object_terms($post_id, $term->term_id, 'user_type');
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
            
            // Save user profile meta using both standard post meta and Carbon Fields format
            // Standard post meta first
            update_post_meta($post_id, 'user_profile_email', $email);
            update_post_meta($post_id, 'user_profile_phone', $phone);
            update_post_meta($post_id, 'user_profile_bio', $bio);
            
            // Handle profile image if provided
            if (!empty($profile_image)) {
                update_post_meta($post_id, 'user_profile_image', $profile_image);
            }
            
            // Now update Carbon Fields meta if the function exists
            if (function_exists('carbon_set_post_meta')) {
                carbon_set_post_meta($post_id, 'user_profile_email', $email);
                carbon_set_post_meta($post_id, 'user_profile_phone', $phone);
                carbon_set_post_meta($post_id, 'user_profile_bio', $bio);
                
                if (!empty($profile_image)) {
                    // If it's a numeric ID, use it directly
                    if (is_numeric($profile_image)) {
                        carbon_set_post_meta($post_id, 'user_profile_image', $profile_image);
                    }
                }
            }
        }
        
        fclose($handle);
        
        $this->log[] = "Import completed: $imported user profiles imported, $updated user profiles updated, $skipped user profiles skipped";
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
 * Admin page for importing user profiles
 */
class MI_User_Profile_Importer_Admin {
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
            'edit.php?post_type=user_profile',
            'Import User Profiles',
            'Import User Profiles',
            'manage_options',
            'mi-import-user-profiles',
            [$this, 'render_admin_page']
        );
    }
    
    /**
     * Render admin page
     */
    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1>Import User Profiles</h1>
            
            <p>This tool imports user profiles from the Users_Data__No_id_2_.csv file.</p>
            
            <form method="post" action="">
                <?php wp_nonce_field('mi_import_user_profiles', 'mi_import_user_profiles_nonce'); ?>
                
                <p>
                    <input type="submit" name="mi_import_user_profiles" class="button button-primary" value="Import User Profiles">
                </p>
            </form>
            
            <?php
            // Display import log if available
            if (isset($_GET['import_log']) && !empty($_GET['import_log'])) {
                $log = get_transient('mi_user_profile_import_log');
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
            isset($_POST['mi_import_user_profiles']) && 
            isset($_POST['mi_import_user_profiles_nonce']) && 
            wp_verify_nonce($_POST['mi_import_user_profiles_nonce'], 'mi_import_user_profiles')
        ) {
            // Run import
            $importer = new MI_User_Profile_Importer();
            $importer->import();
            
            // Save log
            set_transient('mi_user_profile_import_log', $importer->get_log(), HOUR_IN_SECONDS);
            
            // Redirect to show log
            wp_redirect(add_query_arg('import_log', '1', wp_get_referer()));
            exit;
        }
    }
}

// Initialize admin page
if (is_admin()) {
    new MI_User_Profile_Importer_Admin();
}

/**
 * Run user profile import from code
 */
function mi_import_user_profiles() {
    $importer = new MI_User_Profile_Importer();
    return $importer->import();
}
