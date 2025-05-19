<?php
/**
 * Carbon Fields setup and configuration
 */

// Check if Carbon Fields is available
if (!class_exists('\Carbon_Fields\Container') || !class_exists('\Carbon_Fields\Field')) {
    // Add admin notice about missing Carbon Fields
    add_action('admin_notices', function() {
        echo '<div class="error"><p>Carbon Fields is not installed or activated. Please install it via Composer or as a plugin.</p></div>';
    });
    
    // Define dummy functions to prevent errors
    if (!function_exists('carbon_get_theme_option')) {
        function carbon_get_theme_option($option_name) {
            return '';
        }
    }
    
    if (!function_exists('carbon_get_post_meta')) {
        function carbon_get_post_meta($id, $name) {
            return '';
        }
    }
    
    // Return early
    return;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

// Boot Carbon Fields
add_action('after_setup_theme', 'crb_load');
function crb_load() {
    // Carbon Fields is already loaded via Composer autoloader
    \Carbon_Fields\Carbon_Fields::boot();
}

// Register fields
add_action('carbon_fields_register_fields', 'mi_register_carbon_fields');
function mi_register_carbon_fields() {
    // Theme Options
    Container::make('theme_options', __('Theme Options', 'blocksy-child'))
        ->add_tab(__('General', 'blocksy-child'), array(
            Field::make('text', 'mi_copyright_text', __('Copyright Text', 'blocksy-child'))
                ->set_default_value('© ' . date('Y') . ' Your Company. All rights reserved.')
        ));
    
    // We'll add more fields later
}

/**
 * Helper function to get Carbon Fields value
 */
function mi_get_theme_option($option_name, $default = '') {
    $value = carbon_get_theme_option($option_name);
    return !empty($value) ? $value : $default;
}
