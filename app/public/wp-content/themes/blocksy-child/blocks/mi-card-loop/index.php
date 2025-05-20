<?php
/**
 * MI Card Loop Block
 *
 * A flexible card component that can display single or multiple cards in a grid
 */

// Register the block
function mi_register_card_loop_block() {
    if (!function_exists('register_block_type')) {
        return;
    }
    
    // Make sure all dependencies are loaded
    if (!class_exists('Timber\Timber')) {
        add_action('admin_notices', function() {
            echo '<div class="error"><p>Timber not found. The MI Card Loop block requires Timber to be installed and activated.</p></div>';
        });
        return;
    }
    
    // Register block script
    wp_register_script(
        'mi-card-loop-block',
        get_stylesheet_directory_uri() . '/blocks/mi-card-loop/Block.js',
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
        filemtime(get_stylesheet_directory() . '/blocks/mi-card-loop/Block.js')
    );
    
    // Register block styles
    wp_register_style(
        'mi-card-loop-block-style',
        get_stylesheet_directory_uri() . '/blocks/mi-card-loop/Block.styles.css',
        [],
        filemtime(get_stylesheet_directory() . '/blocks/mi-card-loop/Block.styles.css')
    );
    
    // Register the block
    register_block_type('mi/card-loop', [
        'editor_script' => 'mi-card-loop-block',
        'editor_style' => 'mi-card-loop-block-style',
        'style' => 'mi-card-loop-block-style',
        'render_callback' => 'mi_render_card_loop_block',
        'attributes' => [
            'variant' => ['type' => 'string', 'default' => 'generic'],
            'columns' => ['type' => 'number', 'default' => 3],
            'count' => ['type' => 'number', 'default' => 3],
            'title' => ['type' => 'string', 'default' => 'Card Title'],
            'description' => ['type' => 'string', 'default' => 'This is a sample card description.'],
            'imageUrl' => ['type' => 'string', 'default' => ''],
            'imageAlt' => ['type' => 'string', 'default' => ''],
            'linkUrl' => ['type' => 'string', 'default' => '#'],
            'linkText' => ['type' => 'string', 'default' => 'Learn More'],
            'price' => ['type' => 'string', 'default' => ''],
            'status' => ['type' => 'string', 'default' => ''],
            'featured' => ['type' => 'boolean', 'default' => false],
            'location' => ['type' => 'string', 'default' => ''],
            'bedrooms' => ['type' => 'string', 'default' => ''],
            'bathrooms' => ['type' => 'string', 'default' => ''],
            'area' => ['type' => 'string', 'default' => ''],
            'className' => ['type' => 'string', 'default' => '']
        ]
    ]);
}
add_action('init', 'mi_register_card_loop_block');

/**
 * Render card loop block with Timber
 */
function mi_render_card_loop_block($attributes, $content, $block) {
    // Set up Timber context
    $context = Timber\Timber::context();
    
    // Add attributes to context
    $context['attributes'] = $attributes;
    $context['content'] = $content;
    $context['block'] = $block;
    
    // Create mock cards for the editor
    $cards = [];
    
    // If we're in the editor, create mock cards based on the attributes
    if (defined('REST_REQUEST') && REST_REQUEST) {
        for ($i = 0; $i < $attributes['count']; $i++) {
            $cards[] = [
                'title' => $attributes['title'],
                'excerpt' => $attributes['description'],
                'thumbnail' => $attributes['imageUrl'] ?: get_stylesheet_directory_uri() . '/docs/Images/Generated Image May 14, 2025 - 12_20PM.jpeg',
                'permalink' => $attributes['linkUrl'],
                'location' => $attributes['location'] ?: 'Sample Location',
                'price' => $attributes['price'] ?: '$500,000',
                'status' => $attributes['status'] ?: 'For Sale',
                'bedrooms' => $attributes['bedrooms'] ?: '3',
                'bathrooms' => $attributes['bathrooms'] ?: '2',
                'area' => $attributes['area'] ?: '1,500 sq ft',
                'featured' => $attributes['featured']
            ];
        }
    } else {
        // For front-end, fetch real data based on variant
        if ($attributes['variant'] == 'property') {
            $cards = mi_get_property_cards($attributes['count']);
        } elseif ($attributes['variant'] == 'business') {
            $cards = mi_get_business_cards($attributes['count']);
        } else {
            // For generic cards, just use the attributes
            for ($i = 0; $i < $attributes['count']; $i++) {
                $cards[] = [
                    'title' => $attributes['title'],
                    'excerpt' => $attributes['description'],
                    'thumbnail' => $attributes['imageUrl'] ?: get_stylesheet_directory_uri() . '/docs/Images/Generated Image May 14, 2025 - 12_20PM.jpeg',
                    'permalink' => $attributes['linkUrl'],
                    'location' => $attributes['location'],
                    'price' => $attributes['price'],
                    'status' => $attributes['status'],
                    'bedrooms' => $attributes['bedrooms'],
                    'bathrooms' => $attributes['bathrooms'],
                    'area' => $attributes['area'],
                    'featured' => $attributes['featured']
                ];
            }
        }
    }
    
    $context['cards'] = $cards;
    
    // Render the template
    return Timber\Timber::compile('blocks/mi-card-loop/Block.twig', $context);
}

/**
 * Get property cards for the front-end
 */
function mi_get_property_cards($count) {
    $args = array(
        'post_type' => 'property',
        'posts_per_page' => $count,
        'post_status' => 'publish'
    );
    
    $properties = [];
    $query = new WP_Query($args);
    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post = get_post();
            
            // Get property data using Carbon Fields
            $property_data = mi_prepare_property_data($post);
            
            $properties[] = $property_data;
        }
        wp_reset_postdata();
    }
    
    return $properties;
}

/**
 * Get business cards for the front-end
 */
function mi_get_business_cards($count) {
    $args = array(
        'post_type' => 'business',
        'posts_per_page' => $count,
        'post_status' => 'publish'
    );
    
    $businesses = [];
    $query = new WP_Query($args);
    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post = get_post();
            
            // Get business data using Carbon Fields
            $business_data = mi_prepare_business_data($post);
            
            $businesses[] = $business_data;
        }
        wp_reset_postdata();
    }
    
    return $businesses;
}

/**
 * Helper function to prepare property data
 * This function should already exist in your theme
 */
if (!function_exists('mi_prepare_property_data')) {
    function mi_prepare_property_data($post) {
        $data = [
            'title' => get_the_title($post),
            'excerpt' => get_the_excerpt($post),
            'thumbnail' => get_the_post_thumbnail_url($post, 'medium'),
            'permalink' => get_permalink($post),
        ];
        
        // Add Carbon Fields data if available
        if (function_exists('carbon_get_post_meta')) {
            $data['bedrooms'] = carbon_get_post_meta($post->ID, 'property_bedrooms');
            $data['bathrooms'] = carbon_get_post_meta($post->ID, 'property_bathrooms');
            $data['price'] = carbon_get_post_meta($post->ID, 'property_price');
            $data['status'] = carbon_get_post_meta($post->ID, 'property_status');
            $data['area'] = carbon_get_post_meta($post->ID, 'property_area');
            $data['featured'] = carbon_get_post_meta($post->ID, 'property_featured');
            
            // Get location taxonomy
            $locations = get_the_terms($post->ID, 'location');
            if ($locations && !is_wp_error($locations)) {
                $data['location'] = $locations[0]->name;
            }
        }
        
        return $data;
    }
}

/**
 * Helper function to prepare business data
 * This function should already exist in your theme
 */
if (!function_exists('mi_prepare_business_data')) {
    function mi_prepare_business_data($post) {
        $data = [
            'title' => get_the_title($post),
            'excerpt' => get_the_excerpt($post),
            'thumbnail' => get_the_post_thumbnail_url($post, 'medium'),
            'permalink' => get_permalink($post),
        ];
        
        // Add Carbon Fields data if available
        if (function_exists('carbon_get_post_meta')) {
            $data['price'] = carbon_get_post_meta($post->ID, 'business_price');
            $data['status'] = carbon_get_post_meta($post->ID, 'business_status');
            $data['featured'] = carbon_get_post_meta($post->ID, 'business_featured');
            
            // Get business type taxonomy
            $business_types = get_the_terms($post->ID, 'business_type');
            if ($business_types && !is_wp_error($business_types)) {
                $data['business_type'] = $business_types[0]->name;
            }
            
            // Get location taxonomy
            $locations = get_the_terms($post->ID, 'location');
            if ($locations && !is_wp_error($locations)) {
                $data['location'] = $locations[0]->name;
            }
        }
        
        return $data;
    }
}
