<?php
/**
 * Carbon Fields setup and configuration
 */

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
