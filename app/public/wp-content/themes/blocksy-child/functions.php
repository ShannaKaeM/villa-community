<?php
/**
 * Blocksy Child Theme Functions
 */

// Load Composer autoloader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

// Enqueue parent theme stylesheet
function blocksy_child_enqueue_styles() {
    wp_enqueue_style(
        'blocksy-parent-style',
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme('blocksy')->get('Version')
    );
    
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
require_once get_stylesheet_directory() . '/inc/carbon-fields-setup.php';
require_once get_stylesheet_directory() . '/inc/setup.php';

// WindPress integration - Uncomment when ready to activate
// require_once get_stylesheet_directory() . '/inc/windpress-setup.php';

/**
 * Add your custom functions below this line
 */
