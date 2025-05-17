<?php
/**
 * Timber setup and configuration
 * Using Composer-based Timber (not the plugin)
 */

// Check if Timber exists
if (!class_exists('Timber\\Timber')) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>Timber not found. Make sure you have run "composer install" in your theme directory.</p></div>';
    });
    return;
}

// Initialize Timber
Timber\Timber::init();

// Set Timber directories
Timber::$dirname = ['views', 'views/blocks', 'views/components', 'views/templates'];

/**
 * Add to Timber context
 */
add_filter('timber/context', function($context) {
    // Add site-wide data
    $context['site'] = new Timber\Site();
    
    // Add Blocksy options to Timber context
    $context['blocksy_options'] = [];
    
    // Only try to get Blocksy options if the function exists
    if (function_exists('blocksy_get_options')) {
        // The function requires a specific option ID or 'all'
        $context['blocksy_options'] = blocksy_get_options('all');
    }
    
    // Add menu locations safely
    $context['menu'] = [];
    
    // Only add menus if they exist
    if (has_nav_menu('primary')) {
        try {
            $context['menu']['primary'] = Timber\Timber::get_menu('primary');
        } catch (\Exception $e) {
            // Fallback if menu fails to load
        }
    }
    
    if (has_nav_menu('footer')) {
        try {
            $context['menu']['footer'] = Timber\Timber::get_menu('footer');
        } catch (\Exception $e) {
            // Fallback if menu fails to load
        }
    }
    
    return $context;
});
