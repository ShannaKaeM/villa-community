<?php
/**
 * Block System Loader
 * 
 * Loads all components of the improved block system
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

// Load core classes
require_once __DIR__ . '/class-block-registry.php';
require_once __DIR__ . '/class-component-manager.php';
require_once __DIR__ . '/class-carbon-fields-helper.php';

/**
 * Initialize the block system
 */
function mi_initialize_block_system() {
    // Create necessary directories if they don't exist
    $dirs = [
        get_stylesheet_directory() . '/blocks',
        get_stylesheet_directory() . '/views/blocks',
        get_stylesheet_directory() . '/views/components',
    ];
    
    foreach ($dirs as $dir) {
        if (!file_exists($dir)) {
            wp_mkdir_p($dir);
        }
    }
    
    // Add Twig namespaces for components
    add_filter('timber/locations', function($paths) {
        $paths['components'] = [get_stylesheet_directory() . '/views/components'];
        return $paths;
    });
}
add_action('after_setup_theme', 'mi_initialize_block_system');

/**
 * Register a sample component (for testing)
 */
function mi_register_sample_component() {
    // Create a sample component if it doesn't exist
    $sample_component = get_stylesheet_directory() . '/views/components/card.twig';
    
    if (!file_exists($sample_component)) {
        $content = <<<TWIG
{# Card Component #}
<div class="mi-card {{ classes }}">
    {% if image %}
        <div class="mi-card__image">
            <img src="{{ image.src }}" alt="{{ image.alt|default(title) }}">
        </div>
    {% endif %}
    
    <div class="mi-card__content">
        {% if title %}
            <h3 class="mi-card__title">{{ title }}</h3>
        {% endif %}
        
        {% if description %}
            <div class="mi-card__description">{{ description }}</div>
        {% endif %}
        
        {% if link %}
            <a href="{{ link.url }}" class="mi-card__link" {% if link.target %}target="{{ link.target }}"{% endif %}>
                {{ link.text|default('Read more') }}
            </a>
        {% endif %}
    </div>
</div>
TWIG;
        
        // Create directory if it doesn't exist
        wp_mkdir_p(dirname($sample_component));
        
        // Write sample component
        file_put_contents($sample_component, $content);
    }
}
add_action('after_setup_theme', 'mi_register_sample_component');

/**
 * Register custom blocks
 */
function mi_register_custom_blocks() {
    // Include the MI Card block
    require_once get_stylesheet_directory() . '/blocks/mi-card/index.php';
}
add_action('init', 'mi_register_custom_blocks', 5);

/**
 * Add Twig functions for blocks and components
 */
function mi_add_twig_functions($twig) {
    // Add function to get properties
    $twig->addFunction(new \Twig\TwigFunction('get_properties', function($args = []) {
        $helper = MI_Carbon_Fields_Helper::get_instance();
        return $helper->get_properties($args);
    }));
    
    return $twig;
}
add_filter('timber/twig', 'mi_add_twig_functions');
