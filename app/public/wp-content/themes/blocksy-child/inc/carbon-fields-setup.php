<?php
/**
 * Carbon Fields setup and configuration
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Boot Carbon Fields
 * 
 * This is the ONLY place where Carbon Fields should be booted
 */
function mi_boot_carbon_fields() {
    // Only proceed if Carbon Fields is available
    if (!class_exists('\Carbon_Fields\Carbon_Fields')) {
        // Add admin notice about missing Carbon Fields
        add_action('admin_notices', function() {
            echo '<div class="error"><p>Carbon Fields is not available. Please make sure it is installed via Composer.</p></div>';
        });
        return;
    }
    
    // Boot Carbon Fields - this is the critical part
    \Carbon_Fields\Carbon_Fields::boot();
}

// Initialize Carbon Fields
// The priority of 5 ensures it runs very early, before any other code tries to use Carbon Fields
add_action('after_setup_theme', 'mi_boot_carbon_fields', 5);

/**
 * Register theme options
 */
function mi_register_theme_options() {
    if (!class_exists('\Carbon_Fields\Container') || !class_exists('\Carbon_Fields\Field')) {
        return;
    }
    
    \Carbon_Fields\Container::make('theme_options', __('Theme Options', 'blocksy-child'))
        ->add_tab(__('General', 'blocksy-child'), array(
            \Carbon_Fields\Field::make('text', 'mi_copyright_text', __('Copyright Text', 'blocksy-child'))
                ->set_default_value('© ' . date('Y') . ' Villa Community. All rights reserved.')
        ));
}
add_action('carbon_fields_register_fields', 'mi_register_theme_options');

/**
 * Helper function to get Carbon Fields value
 */
function mi_get_theme_option($option_name, $default = '') {
    if (!function_exists('carbon_get_theme_option')) {
        return $default;
    }
    $value = carbon_get_theme_option($option_name);
    return !empty($value) ? $value : $default;
}
