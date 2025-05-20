<?php
/**
 * MI Block Debug Page
 */

// Add admin menu
function mi_add_block_debug_page() {
    add_management_page(
        'MI Block Debug',
        'MI Block Debug',
        'manage_options',
        'mi-block-debug',
        'mi_block_debug_page_content'
    );
}
add_action('admin_menu', 'mi_add_block_debug_page');

// Page content
function mi_block_debug_page_content() {
    ?>
    <div class="wrap">
        <h1>MI Block Debug</h1>
        
        <div class="card">
            <h2>Registered MI Blocks</h2>
            <?php
            // Get all registered blocks
            $registry = WP_Block_Type_Registry::get_instance();
            $blocks = $registry->get_all_registered();
            
            // Check for our specific blocks
            $mi_blocks = array();
            foreach ($blocks as $name => $block) {
                if (strpos($name, 'mi/') === 0) {
                    $mi_blocks[$name] = $block;
                }
            }
            
            if (count($mi_blocks) > 0) {
                echo '<table class="widefat striped">';
                echo '<thead><tr><th>Block Name</th><th>Category</th><th>Render Callback</th><th>Editor Script</th></tr></thead>';
                echo '<tbody>';
                foreach ($mi_blocks as $name => $block) {
                    echo '<tr>';
                    echo '<td>' . esc_html($name) . '</td>';
                    echo '<td>' . esc_html($block->category ?? 'none') . '</td>';
                    echo '<td>' . (is_callable($block->render_callback) ? '✅ Yes' : '❌ No') . '</td>';
                    echo '<td>' . esc_html($block->editor_script ?? 'none') . '</td>';
                    echo '</tr>';
                }
                echo '</tbody></table>';
            } else {
                echo '<div class="notice notice-error"><p><strong>No MI blocks found!</strong> This means they are not being registered properly.</p></div>';
            }
            ?>
        </div>
        
        <div class="card">
            <h2>Registered Block Categories</h2>
            <?php
            // Check block categories - using the correct method for WordPress version
            echo '<table class="widefat striped">';
            echo '<thead><tr><th>Title</th><th>Slug</th><th>Icon</th></tr></thead>';
            echo '<tbody>';
            
            // Different ways to get categories depending on WP version
            if (function_exists('get_block_categories')) {
                // For WordPress 5.8+
                $post = get_post();
                if (!$post) {
                    // Create a temporary post object
                    $post = (object) ['post_type' => 'post'];
                }
                $categories = get_block_categories($post);
                
                foreach ($categories as $category) {
                    echo '<tr>';
                    echo '<td>' . esc_html($category['title']) . '</td>';
                    echo '<td>' . esc_html($category['slug']) . '</td>';
                    echo '<td>' . esc_html($category['icon'] ?? 'none') . '</td>';
                    echo '</tr>';
                }
            } else {
                echo '<tr><td colspan="3">Cannot retrieve block categories</td></tr>';
            }
            echo '</tbody></table>';
            ?>
        </div>
        
        <div class="card">
            <h2>Block Files Check</h2>
            <?php
            $theme_dir = get_stylesheet_directory();
            $block_dir = $theme_dir . '/blocks/mi-card';
            
            echo '<table class="widefat striped">';
            echo '<thead><tr><th>File</th><th>Exists</th><th>Size</th></tr></thead>';
            echo '<tbody>';
            
            $files_to_check = array(
                '/blocks/mi-card/block.json',
                '/blocks/mi-card/index.php',
                '/blocks/mi-card/mi-card.php',
                '/blocks/mi-card/variants/property.php',
                '/blocks/mi-card/assets/js/editor.js',
                '/blocks/mi-card/assets/css/style.css',
                '/blocks/mi-card/assets/css/editor.css',
            );
            
            foreach ($files_to_check as $file) {
                $full_path = $theme_dir . $file;
                $exists = file_exists($full_path);
                $size = $exists ? filesize($full_path) : 0;
                
                echo '<tr>';
                echo '<td>' . esc_html($file) . '</td>';
                echo '<td>' . ($exists ? '✅ Yes' : '❌ No') . '</td>';
                echo '<td>' . ($exists ? esc_html(size_format($size)) : 'N/A') . '</td>';
                echo '</tr>';
            }
            
            echo '</tbody></table>';
            ?>
        </div>
    </div>
    <?php
}
?>
