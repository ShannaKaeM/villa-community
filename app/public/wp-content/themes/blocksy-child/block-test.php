<?php
/**
 * Simple Block Registration Test
 * Add this code to a page using the PHP Everywhere plugin or similar
 */

// Get all registered blocks
function mi_check_block_registration() {
    $output = '';
    
    // Check if block registry is available
    if (!class_exists('WP_Block_Type_Registry')) {
        return '<p>Block registry not available</p>';
    }
    
    // Get all registered blocks
    $registry = WP_Block_Type_Registry::get_instance();
    $blocks = $registry->get_all_registered();
    
    // Start output
    $output .= '<div style="background: #f5f5f5; border: 1px solid #ddd; padding: 20px; margin: 20px 0;">';
    $output .= '<h2>Block Registration Test</h2>';
    
    // Check for our specific blocks
    $mi_blocks = array();
    foreach ($blocks as $name => $block) {
        if (strpos($name, 'mi/') === 0) {
            $mi_blocks[$name] = $block;
        }
    }
    
    if (count($mi_blocks) > 0) {
        $output .= '<h3>Found ' . count($mi_blocks) . ' MI blocks:</h3>';
        $output .= '<ul>';
        foreach ($mi_blocks as $name => $block) {
            $output .= '<li>' . esc_html($name) . ' (Category: ' . esc_html($block->category ?? 'none') . ')</li>';
        }
        $output .= '</ul>';
    } else {
        $output .= '<p><strong>No MI blocks found!</strong> This means they are not being registered properly.</p>';
    }
    
    // Check block categories
    $categories = WP_Block_Categories_Registry::get_instance()->get_all_registered();
    $output .= '<h3>Block Categories:</h3>';
    $output .= '<ul>';
    foreach ($categories as $category) {
        $output .= '<li>' . esc_html($category['title']) . ' (Slug: ' . esc_html($category['slug']) . ')</li>';
    }
    $output .= '</ul>';
    
    $output .= '</div>';
    
    return $output;
}

echo mi_check_block_registration();
?>
