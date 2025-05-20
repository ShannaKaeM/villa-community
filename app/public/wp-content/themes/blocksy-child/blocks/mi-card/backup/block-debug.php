<?php
/**
 * Block Registration Debug Script
 * 
 * Add this to a page template temporarily to debug block registration
 */

// Get all registered blocks
$registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

// Output debug information
echo '<div style="background: #f1f1f1; padding: 20px; margin: 20px; border: 1px solid #ddd;">';
echo '<h2>Block Registration Debug</h2>';

// Check if our blocks are registered
$mi_blocks = [];
foreach ($registered_blocks as $block_name => $block) {
    if (strpos($block_name, 'mi/') === 0) {
        $mi_blocks[$block_name] = $block;
    }
}

// Output MI blocks
echo '<h3>MI Blocks Registered: ' . count($mi_blocks) . '</h3>';
if (count($mi_blocks) > 0) {
    echo '<ul>';
    foreach ($mi_blocks as $block_name => $block) {
        echo '<li><strong>' . esc_html($block_name) . '</strong>';
        echo '<ul>';
        echo '<li>Category: ' . esc_html($block->category ?? 'none') . '</li>';
        echo '<li>Render Callback: ' . (is_callable($block->render_callback) ? 'Yes' : 'No') . '</li>';
        echo '</ul>';
        echo '</li>';
    }
    echo '</ul>';
} else {
    echo '<p>No MI blocks found!</p>';
}

// Check registered block categories
$block_categories = [];
if (function_exists('get_block_categories')) {
    $block_categories = get_block_categories(get_post());
} else {
    global $wp_block_editor_context;
    if (!isset($wp_block_editor_context)) {
        $wp_block_editor_context = new WP_Block_Editor_Context();
    }
    $block_categories = get_block_categories($wp_block_editor_context);
}

// Output block categories
echo '<h3>Block Categories: ' . count($block_categories) . '</h3>';
echo '<ul>';
foreach ($block_categories as $category) {
    echo '<li><strong>' . esc_html($category['title']) . '</strong> (slug: ' . esc_html($category['slug']) . ')</li>';
}
echo '</ul>';

echo '</div>';
?>
