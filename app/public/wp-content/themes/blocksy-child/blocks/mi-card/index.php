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
    
    register_block_type(__DIR__, array(
        'render_callback' => 'mi_render_card_block',
        'editor_style' => 'mi-card-editor-style',
        'style' => 'mi-card-style'
    ));
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
    $attributes = wp_parse_args($attributes, array(
        'variant' => 'property',
        'postId' => 0,
        'className' => '',
        'count' => 3,
        'columns' => 3
    ));

    // Get properties
    $args = array(
        'post_type' => 'property',
        'posts_per_page' => $attributes['count'],
        'orderby' => 'date',
        'order' => 'DESC'
    );
    
    $query = new WP_Query($args);
    $properties = [];
    
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
    
    // Set up the context for Timber
    $context = Timber::context();
    $context['attributes'] = $attributes;
    $context['properties'] = $properties;
    $context['block'] = $block;
    $context['mb'] = $block; // For compatibility with get_block_wrapper_attributes
    
    // Determine which Twig template to use
    $templates = ['blocks/mi-card.twig'];
    
    // Check for variant-specific template
    if ($attributes['variant'] !== 'default') {
        array_unshift($templates, 'blocks/mi-card-' . $attributes['variant'] . '.twig');
    }
    
    // Render the Twig template
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
 * Prepare property data.
 *
 * @param WP_Post $post The post object.
 * @return array The prepared data.
 */
function mi_prepare_property_data($post) {
    // Get basic post data
    $data = mi_prepare_post_data($post);
    
    // Add property-specific data if Carbon Fields is active
    if (function_exists('carbon_get_post_meta')) {
        $data['bedrooms'] = carbon_get_post_meta($post->ID, 'property_bedrooms');
        $data['bathrooms'] = carbon_get_post_meta($post->ID, 'property_bathrooms');
        $data['area'] = carbon_get_post_meta($post->ID, 'property_area');
        $data['price'] = carbon_get_post_meta($post->ID, 'property_price');
        $data['location'] = carbon_get_post_meta($post->ID, 'property_location');
        $data['featured'] = carbon_get_post_meta($post->ID, 'property_featured');
        $data['status'] = carbon_get_post_meta($post->ID, 'property_status');
    }
    
    // Get property type terms
    $property_types = get_the_terms($post->ID, 'property_type');
    if ($property_types && !is_wp_error($property_types)) {
        $data['property_types'] = [];
        foreach ($property_types as $term) {
            $data['property_types'][] = [
                'name' => $term->name,
                'slug' => $term->slug
            ];
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
