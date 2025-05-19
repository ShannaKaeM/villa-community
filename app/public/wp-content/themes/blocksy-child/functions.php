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

// Carbon Fields setup - this MUST come first before any other includes
require_once get_stylesheet_directory() . '/inc/carbon-fields-setup.php';

// Include setup files
require_once get_stylesheet_directory() . '/inc/timber-setup.php';

// Include CPT and taxonomy registration
require_once get_stylesheet_directory() . '/inc/mi-cpt-registration.php';

// Include Carbon Fields property fields
require_once get_stylesheet_directory() . '/inc/mi-property-fields.php';

// Include taxonomy importer
require_once get_stylesheet_directory() . '/inc/mi-taxonomy-importer.php';

// Include property importer
require_once get_stylesheet_directory() . '/inc/mi-property-importer.php';

// Include business importer
require_once get_stylesheet_directory() . '/inc/mi-business-importer.php';

// Include article importer
require_once get_stylesheet_directory() . '/inc/mi-article-importer.php';

// Include user profile importer
require_once get_stylesheet_directory() . '/inc/mi-user-profile-importer.php';

// Block registration diagnostic tool has been removed

// Include general setup
require_once get_stylesheet_directory() . '/inc/setup.php';

// Include block system
require_once get_stylesheet_directory() . '/inc/blocks/loader.php';

/**
 * Add your custom functions below this line
 */
