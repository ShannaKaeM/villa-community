<?php
/**
 * MI Card Block
 * 
 * A property card component using Timber/Twig and Tailwind CSS classes
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register the block
 */
function mi_register_card_block() {
    // Register block styles
    wp_register_style(
        'mi-card-style',
        get_stylesheet_directory_uri() . '/blocks/mi-card/assets/css/style.css',
        array(),
        filemtime(get_stylesheet_directory() . '/blocks/mi-card/assets/css/style.css')
    );
    
    // Register editor styles
    wp_register_style(
        'mi-card-editor-style',
        get_stylesheet_directory_uri() . '/blocks/mi-card/assets/css/editor.css',
        array(),
        filemtime(get_stylesheet_directory() . '/blocks/mi-card/assets/css/editor.css')
    );
    
    register_block_type(__DIR__, [
        'render_callback' => 'mi_render_card_block',
        'editor_style' => 'mi-card-editor-style',
        'style' => 'mi-card-style'
    ]);
}
add_action('init', 'mi_register_card_block');

/**
 * Render the block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block content.
 * @param WP_Block $block      Block instance.
 * @return string  The rendered output.
 */
function mi_render_card_block($attributes, $content, $block) {
    // Check if Timber is active
    if (!class_exists('Timber')) {
        return '<div class="error">Timber plugin is required for this block.</div>';
    }

    // Default attributes
    $attributes = wp_parse_args($attributes, [
        'variant' => 'property',
        'postId' => 0,
        'className' => '',
        'count' => 3,
        'columns' => 3
    ]);

    $properties = [];
    $businesses = [];
    
    // Handle different variants
    if ($attributes['variant'] === 'property') {
        // Get properties
        $args = [
            'post_type' => 'property',
            'posts_per_page' => $attributes['count'],
            'orderby' => 'date',
            'order' => 'DESC'
        ];
        
        $query = new WP_Query($args);
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post = get_post();
                $properties[] = mi_prepare_property_data($post);
            }
        }
        wp_reset_postdata();
        
        // If no properties found, use current post
        if (empty($properties) && $attributes['postId']) {
            $post = get_post($attributes['postId']);
            if ($post) {
                $properties[] = mi_prepare_property_data($post);
            }
        }
    } elseif ($attributes['variant'] === 'business') {
        // Get businesses
        $args = [
            'post_type' => 'business',
            'posts_per_page' => $attributes['count'],
            'orderby' => 'date',
            'order' => 'DESC'
        ];
        
        $query = new WP_Query($args);
        
        if ($query->have_posts()) {
            while ($query->have_posts()) {
                $query->the_post();
                $post = get_post();
                $businesses[] = mi_prepare_business_data($post);
            }
        }
        wp_reset_postdata();
    }
    
    // Set up the context for Timber
    $context = Timber::context();
    $context['attributes'] = $attributes;
    $context['properties'] = $properties;
    $context['businesses'] = $businesses;
    $context['block'] = $block;
    $context['mb'] = $block; // For compatibility with get_block_wrapper_attributes
    
    // Add theme URI to context for loading images
    $context['theme'] = [
        'uri' => get_stylesheet_directory_uri()
    ];
    
    // Add sample data for generic cards if needed
    if ($attributes['variant'] === 'generic') {
        $context['generic_cards'] = [
            [
                'title' => 'Sample Card 1',
                'description' => 'This is a sample card that you can customize with your own content.',
                'image' => [
                    'src' => $context['theme']['uri'] . '/docs/Images/Generated Image May 14, 2025 - 12_20PM.jpeg',
                    'alt' => 'Sample Image 1'
                ],
                'link' => [
                    'url' => '#',
                    'text' => 'Learn More'
                ]
            ],
            [
                'title' => 'Sample Card 2',
                'description' => 'Add your own content to these cards by editing the block in the WordPress editor.',
                'image' => [
                    'src' => $context['theme']['uri'] . '/docs/Images/Generated Image May 14, 2025 - 12_24PM (3).jpeg',
                    'alt' => 'Sample Image 2'
                ],
                'link' => [
                    'url' => '#',
                    'text' => 'Learn More'
                ]
            ],
            [
                'title' => 'Sample Card 3',
                'description' => 'These cards can be used for any content type, not just properties or businesses.',
                'image' => [
                    'src' => $context['theme']['uri'] . '/docs/Images/Generated Image May 14, 2025 - 12_24PM (5).jpeg',
                    'alt' => 'Sample Image 3'
                ],
                'link' => [
                    'url' => '#',
                    'text' => 'Learn More'
                ]
            ]
        ];
    }
    
    // Determine which Twig template to use
    $templates = ['blocks/mi-card.twig'];
    
    // Render the Twig template using the views structure
    return Timber::compile($templates, $context);
}

/**
 * Prepare basic post data.
 *
 * @param WP_Post $post The post object.
 * @return array The prepared data.
 */
function mi_prepare_post_data($post) {
    $title = get_the_title($post);
    $excerpt = has_excerpt($post) ? get_the_excerpt($post) : wp_trim_words(get_the_content('', false, $post), 20);
    $permalink = get_permalink($post);
    $image_id = get_post_thumbnail_id($post);
    $image_url = $image_id ? wp_get_attachment_image_url($image_id, 'large') : '';
    
    return array(
        'title' => $title,
        'excerpt' => $excerpt,
        'link' => $permalink,
        'image_url' => $image_url
    );
}

/**
 * Prepare property data for the card
 *
 * @param object $post The post object
 * @return array The prepared data
 */
function mi_prepare_property_data($post) {
    $data = [
        'id' => $post->ID,
        'title' => get_the_title($post),
        'permalink' => get_permalink($post),
        'thumbnail' => get_the_post_thumbnail_url($post, 'large'),
        'excerpt' => get_the_excerpt($post),
        'date' => get_the_date('', $post),
        'price' => '',
        'location' => '',
        'bedrooms' => '',
        'bathrooms' => '',
        'area' => '',
        'features' => []
    ];
    
    // Get Carbon Fields data if available
    if (function_exists('carbon_get_post_meta')) {
        $data['bedrooms'] = carbon_get_post_meta($post->ID, 'property_bedrooms');
        $data['bathrooms'] = carbon_get_post_meta($post->ID, 'property_bathrooms');
        $data['price'] = carbon_get_post_meta($post->ID, 'property_price');
        $data['location'] = carbon_get_post_meta($post->ID, 'property_location');
        $data['area'] = carbon_get_post_meta($post->ID, 'property_area');
        
        // Get features as an array
        $features = carbon_get_post_meta($post->ID, 'property_features');
        if (is_array($features)) {
            $data['features'] = $features;
        }
    }
    
    // Get amenities
    $amenities = get_the_terms($post->ID, 'amenity');
    if ($amenities && !is_wp_error($amenities)) {
        $data['amenities'] = [];
        foreach ($amenities as $term) {
            $data['amenities'][] = [
                'name' => $term->name,
                'slug' => $term->slug
            ];
        }
    }
    
    return $data;
}

/**
 * Prepare business data for the card
 *
 * @param object $post The post object
 * @return array The prepared data
 */
function mi_prepare_business_data($post) {
    $data = [
        'id' => $post->ID,
        'title' => get_the_title($post),
        'permalink' => get_permalink($post),
        'thumbnail' => get_the_post_thumbnail_url($post, 'large'),
        'excerpt' => get_the_excerpt($post),
        'date' => get_the_date('', $post),
        'phone' => '',
        'email' => '',
        'website' => '',
        'address' => '',
        'hours' => '',
        'categories' => []
    ];
    
    // Get Carbon Fields data if available
    if (function_exists('carbon_get_post_meta')) {
        $data['phone'] = carbon_get_post_meta($post->ID, 'business_phone');
        $data['email'] = carbon_get_post_meta($post->ID, 'business_email');
        $data['website'] = carbon_get_post_meta($post->ID, 'business_website');
        $data['address'] = carbon_get_post_meta($post->ID, 'business_address');
        $data['hours'] = carbon_get_post_meta($post->ID, 'business_hours');
        
        // Get categories
        $categories = get_the_terms($post->ID, 'business_category');
        if (is_array($categories) && !is_wp_error($categories)) {
            foreach ($categories as $category) {
                $data['categories'][] = [
                    'name' => $category->name,
                    'slug' => $category->slug,
                    'link' => get_term_link($category)
                ];
            }
        }
    }
    
    return $data;
}
