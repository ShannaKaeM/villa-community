<?php
/**
 * Blocksy Child Theme Functions
 */

// Load Composer autoloader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

// Enqueue stylesheets in the correct order
function blocksy_child_enqueue_styles() {
    // 1. First load parent theme stylesheet
    wp_enqueue_style(
        'blocksy-parent-style',
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme('blocksy')->get('Version')
    );
    
    // 2. Then load child theme stylesheet for any additional customizations
    wp_enqueue_style(
        'blocksy-child-style',
        get_stylesheet_uri(),
        array('blocksy-parent-style'),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'blocksy_child_enqueue_styles');

// Include setup files
require_once get_stylesheet_directory() . '/inc/timber-setup.php';

// Carbon Fields setup - this must come before any other Carbon Fields files
require_once get_stylesheet_directory() . '/inc/carbon-fields-setup.php';

// Only include Carbon Fields dependent files if Carbon Fields is available
if (class_exists('\Carbon_Fields\Container') && class_exists('\Carbon_Fields\Field')) {
    // Include property system
    require_once get_stylesheet_directory() . '/inc/carbon-fields-properties.php';
}

// Include general setup
require_once get_stylesheet_directory() . '/inc/setup.php';

// Include block system
require_once get_stylesheet_directory() . '/inc/blocks/loader.php';

/**
 * Add your custom functions below this line
 */
