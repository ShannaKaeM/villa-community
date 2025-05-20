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
            'variant' => ['type' => 'string', 'default' => 'property'],
            'columns' => ['type' => 'number', 'default' => 3],
            'count' => ['type' => 'number', 'default' => 3],
            'cardSize' => ['type' => 'string', 'default' => 'normal'],
            'title' => ['type' => 'string', 'default' => 'Card Title'],
            'description' => ['type' => 'string', 'default' => 'This is a sample card description.'],
            'imageUrl' => ['type' => 'string', 'default' => ''],
            'imageAlt' => ['type' => 'string', 'default' => ''],
            'linkUrl' => ['type' => 'string', 'default' => '#'],
            'linkText' => ['type' => 'string', 'default' => 'Learn More'],
            'buttonSize' => ['type' => 'string', 'default' => 'md'],
            'buttonColor' => ['type' => 'string', 'default' => 'primary'],
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
    
    // Define structured mock data for editor preview and fallback
    $mock_data = [
        'property' => [
            'title' => 'Sample Property',
            'excerpt' => 'This is a sample property description with all the features you would expect.',
            'thumbnail' => get_stylesheet_directory_uri() . '/docs/Images/Generated Image May 14, 2025 - 12_20PM.jpeg',
            'permalink' => '#',
            'location' => 'Sample Location',
            'price' => '$500,000',
            'status' => 'For Sale',
            'bedrooms' => '3',
            'bathrooms' => '2',
            'area' => '1,500 sq ft',
            'featured' => true
        ],
        'business' => [
            'title' => 'Sample Business',
            'excerpt' => 'This is a sample business description with all the details you would expect.',
            'thumbnail' => get_stylesheet_directory_uri() . '/docs/Images/Generated Image May 14, 2025 - 12_20PM.jpeg',
            'permalink' => '#',
            'location' => 'Business District',
            'business_type' => 'Retail',
            'price' => '$1,200,000',
            'status' => 'For Sale',
            'phone' => '(555) 123-4567',
            'email' => 'info@samplebusiness.com',
            'website' => 'https://www.example.com',
            'address' => '123 Business Ave',
            'featured' => true
        ],
        'generic' => [
            'title' => 'Sample Card',
            'excerpt' => 'This is a sample card description.',
            'thumbnail' => get_stylesheet_directory_uri() . '/docs/Images/Generated Image May 14, 2025 - 12_20PM.jpeg',
            'permalink' => '#',
            'featured' => false
        ]
    ];
    
    // If we're in the editor, create mock cards based on the attributes and mock data
    if (defined('REST_REQUEST') && REST_REQUEST) {
        $variant = $attributes['variant'];
        $mock_item = $mock_data[$variant];
        
        // Override mock data with any attributes provided
        if ($variant === 'generic') {
            $mock_item['title'] = $attributes['title'];
            $mock_item['excerpt'] = $attributes['description'];
            $mock_item['thumbnail'] = $attributes['imageUrl'] ?: $mock_item['thumbnail'];
            $mock_item['permalink'] = $attributes['linkUrl'];
        }
        
        // Create the requested number of cards
        for ($i = 0; $i < $attributes['count']; $i++) {
            $cards[] = $mock_item;
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
            $data['phone'] = carbon_get_post_meta($post->ID, 'business_phone');
            $data['email'] = carbon_get_post_meta($post->ID, 'business_email');
            $data['website'] = carbon_get_post_meta($post->ID, 'business_website');
            $data['address'] = carbon_get_post_meta($post->ID, 'business_address');
            
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
