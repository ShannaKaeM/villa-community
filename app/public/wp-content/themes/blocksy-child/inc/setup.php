<?php
/**
 * Theme setup and includes
 */

// Theme setup
function mi_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('automatic-feed-links');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));
    
    // Register nav menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'blocksy-child'),
        'footer' => __('Footer Menu', 'blocksy-child'),
    ));
}
add_action('after_setup_theme', 'mi_theme_setup');

// Register custom block category
function mi_register_block_categories($categories) {
    return array_merge(
        $categories,
        [
            [
                'slug' => 'miblocks',
                'title' => __('MI Blocks', 'blocksy-child'),
                'icon'  => 'dashicons-block-default',
            ],
        ]
    );
}
add_filter('block_categories_all', 'mi_register_block_categories');

// Register and load custom blocks
function mi_register_blocks() {
    // Check if blocks directory exists
    $blocks_dir = get_stylesheet_directory() . '/blocks';
    if (is_dir($blocks_dir)) {
        // Get all block directories
        $block_folders = glob($blocks_dir . '/*', GLOB_ONLYDIR);
        
        // Loop through each block directory
        foreach ($block_folders as $block_folder) {
            $block_php = $block_folder . '/Block.php';
            if (file_exists($block_php)) {
                require_once $block_php;
            }
        }
    }
}
add_action('init', 'mi_register_blocks', 20);

// Blocksy integration functions
function mi_blocksy_integration() {
    // Add any Blocksy-specific integration code here
}
add_action('init', 'mi_blocksy_integration');
