<?php
/**
 * MI Card Block
 * 
 * A simple property card component
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
    
    // Register editor script
    wp_register_script(
        'mi-card-editor-script',
        get_stylesheet_directory_uri() . '/blocks/mi-card/assets/js/editor.js',
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-data'),
        filemtime(get_stylesheet_directory() . '/blocks/mi-card/assets/js/editor.js'),
        true
    );
    
    // Register the block
    register_block_type(__DIR__, array(
        'render_callback' => 'mi_render_card_block',
        'editor_script' => 'mi-card-editor-script',
        'editor_style' => 'mi-card-editor-style',
        'style' => 'mi-card-style',
    ));
}
add_action('init', 'mi_register_card_block');

/**
 * Render the block
 */
function mi_render_card_block($attributes, $content, $block) {
    // Get the count and columns
    $count = isset($attributes['count']) ? $attributes['count'] : 3;
    $columns = isset($attributes['columns']) ? $attributes['columns'] : 3;
    
    // Get the latest properties
    $args = array(
        'post_type' => 'property',
        'posts_per_page' => $count,
        'orderby' => 'date',
        'order' => 'DESC',
    );
    
    $query = new WP_Query($args);
    $content_data = array();
    
    if ($query->have_posts()) {
        while ($query->have_posts()) {
            $query->the_post();
            $post = get_post();
            
            // Basic post data
            $post_data = array(
                'id' => $post->ID,
                'title' => get_the_title($post),
                'excerpt' => get_the_excerpt($post),
                'permalink' => get_permalink($post),
                'date' => get_the_date('', $post),
            );
            
            // Featured image
            if (has_post_thumbnail($post)) {
                $image_id = get_post_thumbnail_id($post);
                $image = wp_get_attachment_image_src($image_id, 'medium_large');
                if ($image) {
                    $post_data['featured_image'] = array(
                        'id' => $image_id,
                        'src' => $image[0],
                        'width' => $image[1],
                        'height' => $image[2],
                    );
                }
            } else {
                // Placeholder image
                $post_data['featured_image'] = array(
                    'id' => 0,
                    'src' => get_stylesheet_directory_uri() . '/assets/images/placeholder.jpg',
                    'width' => 800,
                    'height' => 600,
                );
            }
            
            // Property data from Carbon Fields
            if (function_exists('carbon_get_post_meta')) {
                // Basic property details
                $post_data['address'] = carbon_get_post_meta($post->ID, 'property_address');
                $post_data['city'] = carbon_get_post_meta($post->ID, 'property_city');
                $post_data['state'] = carbon_get_post_meta($post->ID, 'property_state');
                $post_data['zip'] = carbon_get_post_meta($post->ID, 'property_zip');
                $post_data['bedrooms'] = carbon_get_post_meta($post->ID, 'property_bedrooms');
                $post_data['bathrooms'] = carbon_get_post_meta($post->ID, 'property_bathrooms');
                $post_data['square_feet'] = carbon_get_post_meta($post->ID, 'property_square_feet');
                $post_data['nightly_rate'] = carbon_get_post_meta($post->ID, 'property_nightly_rate');
                $post_data['max_guests'] = carbon_get_post_meta($post->ID, 'property_max_guests');
                $post_data['booking_url'] = carbon_get_post_meta($post->ID, 'property_booking_url');
                
                // Status flags
                $post_data['is_featured'] = carbon_get_post_meta($post->ID, 'property_is_featured');
                $post_data['is_claimed'] = carbon_get_post_meta($post->ID, 'property_is_claimed');
            }
            
            // Property type
            $property_types = get_the_terms($post->ID, 'property_type');
            if ($property_types && !is_wp_error($property_types)) {
                $post_data['property_type'] = array();
                foreach ($property_types as $term) {
                    $post_data['property_type'][] = array(
                        'id' => $term->term_id,
                        'name' => $term->name,
                        'slug' => $term->slug,
                        'icon' => get_term_meta($term->term_id, 'property_type_icon_text', true),
                    );
                }
            }
            
            // Amenities
            $amenities = get_the_terms($post->ID, 'amenity');
            if ($amenities && !is_wp_error($amenities)) {
                $post_data['amenities'] = array();
                foreach ($amenities as $term) {
                    $post_data['amenities'][] = array(
                        'id' => $term->term_id,
                        'name' => $term->name,
                        'slug' => $term->slug,
                        'icon' => get_term_meta($term->term_id, 'amenity_icon_text', true),
                    );
                }
            }
            
            // Location taxonomy
            $locations = get_the_terms($post->ID, 'location');
            if ($locations && !is_wp_error($locations)) {
                $post_data['location_terms'] = array();
                foreach ($locations as $term) {
                    $post_data['location_terms'][] = array(
                        'id' => $term->term_id,
                        'name' => $term->name,
                        'slug' => $term->slug,
                        'icon' => get_term_meta($term->term_id, 'location_image_text', true),
                    );
                }
            }
            
            $content_data[] = $post_data;
        }
    }
    wp_reset_postdata();
    
    // Template args
    $args = array(
        'variant' => 'property',
        'layout' => 'grid',
        'columns' => $columns,
        'showImage' => true,
        'showTitle' => true,
        'showExcerpt' => true,
        'showMeta' => true,
        'showAmenities' => true,
        'showLocation' => true,
        'showPrice' => true,
        'showButton' => true,
        'buttonText' => 'View Details',
        'className' => isset($attributes['className']) ? $attributes['className'] : '',
    );
    
    // Start output buffering
    ob_start();
    
    // Include the template
    include __DIR__ . '/mi-card.php';
    
    // Return the buffered content
    return ob_get_clean();
}
