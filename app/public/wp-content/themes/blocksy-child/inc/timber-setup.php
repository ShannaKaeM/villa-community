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
    $context['blocksy_options'] = function_exists('blocksy_get_options') ? blocksy_get_options() : [];
    
    // Add menu locations
    $context['menu'] = [
        'primary' => new Timber\Menu('primary'),
        'footer' => new Timber\Menu('footer')
    ];
    
    return $context;
});
