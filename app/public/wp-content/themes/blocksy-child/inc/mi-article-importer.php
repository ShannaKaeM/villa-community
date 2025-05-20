<?php
/**
 * Article Importer
 * 
 * Imports article data from a CSV file
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Import articles from CSV
 */
class MI_Article_Importer {
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
        // Default to the Articles CSV in the docs/SITE DATA directory
        if (empty($csv_file)) {
            $csv_file = get_stylesheet_directory() . '/docs/SITE DATA/Articles_Data__Final_Trim_.csv';
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
        $required_columns = ['title', 'content', 'article_type_id'];
        foreach ($required_columns as $column) {
            if (!isset($columns[$column])) {
                $this->log[] = "Error: Required column '$column' not found in CSV";
                fclose($handle);
                return false;
            }
        }
        
        // Track imported articles
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
            
            // Get article data
            $title = isset($columns['title']) && isset($data[$columns['title']]) ? $data[$columns['title']] : '';
            $slug = isset($columns['slug']) && isset($data[$columns['slug']]) ? $data[$columns['slug']] : '';
            $content = isset($columns['content']) && isset($data[$columns['content']]) ? $data[$columns['content']] : '';
            $excerpt = isset($columns['excerpt']) && isset($data[$columns['excerpt']]) ? $data[$columns['excerpt']] : '';
            $featured_image = isset($columns['featured_image']) && isset($data[$columns['featured_image']]) ? $data[$columns['featured_image']] : '';
            $author_id = isset($columns['author_id']) && isset($data[$columns['author_id']]) ? intval($data[$columns['author_id']]) : 1;
            $article_type_id = isset($columns['article_type_id']) && isset($data[$columns['article_type_id']]) ? intval($data[$columns['article_type_id']]) : 0;
            $location_id = isset($columns['location_id']) && isset($data[$columns['location_id']]) ? intval($data[$columns['location_id']]) : 0;
            
            // Skip if missing required data
            if (empty($title) || empty($content)) {
                $this->log[] = "Skipped: Row missing required data (title or content)";
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
                if (get_user_by('id', $author_id)) {
                    $valid_user_id = $author_id;
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
                'post_content'  => $content,
                'post_excerpt'  => $excerpt,
                'post_status'   => 'publish', // Force publish status
                'post_type'     => 'article',
                'post_author'   => $valid_user_id,
            );
            
            // Check if article already exists by slug
            $existing_post = get_page_by_path($slug, OBJECT, 'article');
            
            if ($existing_post) {
                // Update existing article
                $post_data['ID'] = $existing_post->ID;
                $post_id = wp_update_post($post_data);
                
                if (is_wp_error($post_id)) {
                    $this->log[] = "Error: Could not update article '$title': " . $post_id->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Updated: Article '$title'";
                $updated++;
            } else {
                // Create new article
                $post_id = wp_insert_post($post_data);
                
                if (is_wp_error($post_id)) {
                    $this->log[] = "Error: Could not create article '$title': " . $post_id->get_error_message();
                    $skipped++;
                    continue;
                }
                
                $this->log[] = "Created: Article '$title'";
                $imported++;
            }
            
            // Set article type - try by ID first, then by name if ID fails
            if ($article_type_id) {
                // Try by ID first
                $term = get_term($article_type_id, 'article_type');
                if ($term && !is_wp_error($term)) {
                    wp_set_object_terms($post_id, $term->term_id, 'article_type');
                } else {
                    // If ID fails, try to find by name based on ID patterns
                    $type_name = '';
                    switch($article_type_id) {
                        case 19: $type_name = 'Guide'; break;
                        case 20: $type_name = 'Review'; break;
                        case 21: $type_name = 'News'; break;
                    }
                    
                    if (!empty($type_name)) {
                        $term = get_term_by('name', $type_name, 'article_type');
                        if ($term && !is_wp_error($term)) {
                            wp_set_object_terms($post_id, $term->term_id, 'article_type');
                        }
                    }
                }
            }
            
            // Set location if available - try by ID first, then by name if ID fails
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
            
            // Save article meta using both standard post meta and Carbon Fields format
            // Standard post meta first
            update_post_meta($post_id, 'article_excerpt', $excerpt);
            
            // Handle featured image if provided
            if (!empty($featured_image)) {
                update_post_meta($post_id, 'article_featured_image', $featured_image);
            }
            
            // Now update Carbon Fields meta if the function exists
            if (function_exists('carbon_set_post_meta')) {
                carbon_set_post_meta($post_id, 'article_excerpt', $excerpt);
                
                if (!empty($featured_image)) {
                    // If it's a numeric ID, use it directly
                    if (is_numeric($featured_image)) {
                        carbon_set_post_meta($post_id, 'article_featured_image', $featured_image);
                    }
                }
            }
        }
        
        fclose($handle);
        
        $this->log[] = "Import completed: $imported articles imported, $updated articles updated, $skipped articles skipped";
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
 * Admin page for importing articles
 */
class MI_Article_Importer_Admin {
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
            'edit.php?post_type=article',
            'Import Articles',
            'Import Articles',
            'manage_options',
            'mi-import-articles',
            [$this, 'render_admin_page']
        );
    }
    
    /**
     * Render admin page
     */
    public function render_admin_page() {
        ?>
        <div class="wrap">
            <h1>Import Articles</h1>
            
            <p>This tool imports articles from the Articles_Data__Final_Trim_.csv file.</p>
            
            <form method="post" action="">
                <?php wp_nonce_field('mi_import_articles', 'mi_import_articles_nonce'); ?>
                
                <p>
                    <input type="submit" name="mi_import_articles" class="button button-primary" value="Import Articles">
                </p>
            </form>
            
            <?php
            // Display import log if available
            if (isset($_GET['import_log']) && !empty($_GET['import_log'])) {
                $log = get_transient('mi_article_import_log');
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
            isset($_POST['mi_import_articles']) && 
            isset($_POST['mi_import_articles_nonce']) && 
            wp_verify_nonce($_POST['mi_import_articles_nonce'], 'mi_import_articles')
        ) {
            // Run import
            $importer = new MI_Article_Importer();
            $importer->import();
            
            // Save log
            set_transient('mi_article_import_log', $importer->get_log(), HOUR_IN_SECONDS);
            
            // Redirect to show log
            wp_redirect(add_query_arg('import_log', '1', wp_get_referer()));
            exit;
        }
    }
}

// Initialize admin page
if (is_admin()) {
    new MI_Article_Importer_Admin();
}

/**
 * Run article import from code
 */
function mi_import_articles() {
    $importer = new MI_Article_Importer();
    return $importer->import();
}
