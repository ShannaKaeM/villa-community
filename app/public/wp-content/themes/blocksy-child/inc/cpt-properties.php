<?php
/**
 * Custom Post Type: Properties
 * 
 * Registers the property post type and taxonomies
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register the Property post type
 */
function mi_register_property_post_type() {
    $labels = array(
        'name'               => _x('Properties', 'post type general name', 'blocksy-child'),
        'singular_name'      => _x('Property', 'post type singular name', 'blocksy-child'),
        'menu_name'          => _x('Properties', 'admin menu', 'blocksy-child'),
        'name_admin_bar'     => _x('Property', 'add new on admin bar', 'blocksy-child'),
        'add_new'            => _x('Add New', 'property', 'blocksy-child'),
        'add_new_item'       => __('Add New Property', 'blocksy-child'),
        'new_item'           => __('New Property', 'blocksy-child'),
        'edit_item'          => __('Edit Property', 'blocksy-child'),
        'view_item'          => __('View Property', 'blocksy-child'),
        'all_items'          => __('All Properties', 'blocksy-child'),
        'search_items'       => __('Search Properties', 'blocksy-child'),
        'parent_item_colon'  => __('Parent Properties:', 'blocksy-child'),
        'not_found'          => __('No properties found.', 'blocksy-child'),
        'not_found_in_trash' => __('No properties found in Trash.', 'blocksy-child')
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'property'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-building',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );

    register_post_type('property', $args);
}
add_action('init', 'mi_register_property_post_type');

/**
 * Register Property taxonomies
 */
function mi_register_property_taxonomies() {
    // Property Type Taxonomy
    $type_labels = array(
        'name'              => _x('Property Types', 'taxonomy general name', 'blocksy-child'),
        'singular_name'     => _x('Property Type', 'taxonomy singular name', 'blocksy-child'),
        'search_items'      => __('Search Property Types', 'blocksy-child'),
        'all_items'         => __('All Property Types', 'blocksy-child'),
        'parent_item'       => __('Parent Property Type', 'blocksy-child'),
        'parent_item_colon' => __('Parent Property Type:', 'blocksy-child'),
        'edit_item'         => __('Edit Property Type', 'blocksy-child'),
        'update_item'       => __('Update Property Type', 'blocksy-child'),
        'add_new_item'      => __('Add New Property Type', 'blocksy-child'),
        'new_item_name'     => __('New Property Type Name', 'blocksy-child'),
        'menu_name'         => __('Property Types', 'blocksy-child'),
    );

    $type_args = array(
        'hierarchical'      => true,
        'labels'            => $type_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'property-type'),
        'show_in_rest'      => true,
    );

    register_taxonomy('property_type', ['property'], $type_args);

    // Location Taxonomy
    $location_labels = array(
        'name'              => _x('Locations', 'taxonomy general name', 'blocksy-child'),
        'singular_name'     => _x('Location', 'taxonomy singular name', 'blocksy-child'),
        'search_items'      => __('Search Locations', 'blocksy-child'),
        'all_items'         => __('All Locations', 'blocksy-child'),
        'parent_item'       => __('Parent Location', 'blocksy-child'),
        'parent_item_colon' => __('Parent Location:', 'blocksy-child'),
        'edit_item'         => __('Edit Location', 'blocksy-child'),
        'update_item'       => __('Update Location', 'blocksy-child'),
        'add_new_item'      => __('Add New Location', 'blocksy-child'),
        'new_item_name'     => __('New Location Name', 'blocksy-child'),
        'menu_name'         => __('Locations', 'blocksy-child'),
    );

    $location_args = array(
        'hierarchical'      => true,
        'labels'            => $location_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'location'),
        'show_in_rest'      => true,
    );

    register_taxonomy('property_location', ['property'], $location_args);

    // Amenities Taxonomy
    $amenities_labels = array(
        'name'              => _x('Amenities', 'taxonomy general name', 'blocksy-child'),
        'singular_name'     => _x('Amenity', 'taxonomy singular name', 'blocksy-child'),
        'search_items'      => __('Search Amenities', 'blocksy-child'),
        'all_items'         => __('All Amenities', 'blocksy-child'),
        'parent_item'       => __('Parent Amenity', 'blocksy-child'),
        'parent_item_colon' => __('Parent Amenity:', 'blocksy-child'),
        'edit_item'         => __('Edit Amenity', 'blocksy-child'),
        'update_item'       => __('Update Amenity', 'blocksy-child'),
        'add_new_item'      => __('Add New Amenity', 'blocksy-child'),
        'new_item_name'     => __('New Amenity Name', 'blocksy-child'),
        'menu_name'         => __('Amenities', 'blocksy-child'),
    );

    $amenities_args = array(
        'hierarchical'      => false,
        'labels'            => $amenities_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'amenity'),
        'show_in_rest'      => true,
    );

    register_taxonomy('property_amenity', ['property'], $amenities_args);
}
add_action('init', 'mi_register_property_taxonomies');
