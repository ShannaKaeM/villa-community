<?php
/**
 * Taxonomy Importer
 * 
 * Imports taxonomy terms from a CSV file
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Import taxonomy terms from CSV
 */
class MI_Taxonomy_Importer {
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
        // Default to the Categories.csv in the docs/SITE DATA directory
        if (empty($csv_file)) {
            $csv_file = get_stylesheet_directory() . '/docs/SITE DATA/Categories.csv';
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
        $required_columns = ['id', 'name', 'type', 'description'];
        foreach ($required_columns as $column) {
            if (!isset($columns[$column])) {
                $this->log[] = "Error: Required column '$column' not found in CSV";
                fclose($handle);
                return false;
            }
        }
        
        // Track imported terms
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
            
            // Get term data
            $term_id = isset($columns['id']) && isset($data[$columns['id']]) ? $data[$columns['id']] : '';
            $name = isset($columns['name']) && isset($data[$columns['name']]) ? $data[$columns['name']] : '';
            $type = isset($columns['type']) && isset($data[$columns['type']]) ? $data[$columns['type']] : '';
            $icon = isset($columns['icon']) && isset($data[$columns['icon']]) ? $data[$columns['icon']] : '';
            $description = isset($columns['description']) && isset($data[$columns['description']]) ? $data[$columns['description']] : '';
            $display_order = isset($columns['display_order']) && isset($data[$columns['display_order']]) ? intval($data[$columns['display_order']]) : 0;
            $status = isset($columns['status']) && isset($data[$columns['status']]) ? $data[$columns['status']] : 'active';
            $is_featured = isset($columns['is_featured']) && isset($data[$columns['is_featured']]) ? 
                (strtolower($data[$columns['is_featured']]) === 'true' || $data[$columns['is_featured']] === '1') : false;
            
            // Skip if missing required data
            if (empty($name) || empty($type)) {
                $this->log[] = "Skipped: Row missing required data (name or type)";
                $skipped++;
                continue;
            }
            
            // Create term if it doesn't exist
            $term = term_exists($name, $type);
            
            if (!$term) {
                $term_args = [
                    'description' => $description,
                    'slug' => sanitize_title($name),
                ];
                
                $result = wp_insert_term($name, $type, $term_args);
                
                if (is_wp_error($result)) {
                    $this->log[] = "Error: Could not create term '$name' in taxonomy '$type': " . $result->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $term_id = $result['term_id'];
                $this->log[] = "Created: Term '$name' in taxonomy '$type'";
                $imported++;
            } else {
                $term_id = $term['term_id'];
                
                // Update existing term
                $term_args = [
                    'description' => $description,
                ];
                
                $result = wp_update_term($term_id, $type, $term_args);
                
                if (is_wp_error($result)) {
                    $this->log[] = "Error: Could not update term '$name' in taxonomy '$type': " . $result->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Updated: Term '$name' in taxonomy '$type'";
                $updated++;
            }
            
            // Save term meta - we need to use regular term meta since Carbon Fields might not be fully initialized yet
            // Save icon as text - we'll use this in our templates
            if (!empty($icon)) {
                $icon_meta_key = $type . '_icon_text';
                update_term_meta($term_id, $icon_meta_key, $icon);
                
                // Also store the specific field name for reference
                switch ($type) {
                    case 'property_type':
                        update_term_meta($term_id, 'property_type_icon_text', $icon);
                        break;
                    case 'location':
                        update_term_meta($term_id, 'location_image_text', $icon);
                        break;
                    case 'amenity':
                        update_term_meta($term_id, 'amenity_icon_text', $icon);
                        break;
                    case 'business_type':
                        update_term_meta($term_id, 'business_type_icon_text', $icon);
                        break;
                    case 'article_type':
                        update_term_meta($term_id, 'article_type_icon_text', $icon);
                        break;
                    case 'user_type':
                        update_term_meta($term_id, 'user_type_icon_text', $icon);
                        break;
                }
            }
            
            // Save description as term meta for consistency
            if (!empty($description)) {
                $desc_meta_key = $type . '_description';
                update_term_meta($term_id, $desc_meta_key, $description);
            }
            
            // Save display order
            if ($display_order > 0) {
                $order_meta_key = $type . '_display_order';
                update_term_meta($term_id, $order_meta_key, $display_order);
            }
            
            // Save featured status
            if ($is_featured) {
                $featured_meta_key = 'is_featured';
                update_term_meta($term_id, $featured_meta_key, '1');
            }
        }
        
        fclose($handle);
        
        $this->log[] = "Import completed: $imported terms imported, $updated terms updated, $skipped terms skipped";
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
 * Admin page for importing taxonomies
 */
class MI_Taxonomy_Importer_Admin {
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
            'tools.php',
            'Import Taxonomies',
            'Import Taxonomies',
            'manage_options',
            'mi-import-taxonomies',
            [$this, 'render_admin_page']
        );
    }
    
    /**
     * Render admin page
     */
    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1>Import Taxonomies</h1>
            
            <p>This tool imports taxonomy terms from the Categories.csv file.</p>
            
            <form method="post" action="">
                <?php wp_nonce_field('mi_import_taxonomies', 'mi_import_taxonomies_nonce'); ?>
                
                <p>
                    <input type="submit" name="mi_import_taxonomies" class="button button-primary" value="Import Taxonomies">
                </p>
            </form>
            
            <?php
            // Display import log if available
            if (isset($_GET['import_log']) && !empty($_GET['import_log'])) {
                $log = get_transient('mi_taxonomy_import_log');
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
            isset($_POST['mi_import_taxonomies']) && 
            isset($_POST['mi_import_taxonomies_nonce']) && 
            wp_verify_nonce($_POST['mi_import_taxonomies_nonce'], 'mi_import_taxonomies')
        ) {
            // Run import
            $importer = new MI_Taxonomy_Importer();
            $importer->import();
            
            // Save log
            set_transient('mi_taxonomy_import_log', $importer->get_log(), HOUR_IN_SECONDS);
            
            // Redirect to show log
            wp_redirect(add_query_arg('import_log', '1', wp_get_referer()));
            exit;
        }
    }
}

// Initialize admin page
if (is_admin()) {
    new MI_Taxonomy_Importer_Admin();
}

/**
 * Run taxonomy import from code
 */
function mi_import_taxonomies() {
    $importer = new MI_Taxonomy_Importer();
    return $importer->import();
}
