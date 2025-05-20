<?php
/**
 * Custom Post Type and Taxonomy Registration
 * 
 * Registers all custom post types and taxonomies for the Villa Community site
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register the Property custom post type
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
        'description'        => __('Property listings for rental or sale.', 'blocksy-child'),
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
        'menu_icon'          => 'dashicons-admin-home',
        'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'),
        'show_in_rest'       => true, // Enable Gutenberg editor
    );

    register_post_type('property', $args);
}
add_action('init', 'mi_register_property_post_type');

/**
 * Register Property Type taxonomy
 */
function mi_register_property_type_taxonomy() {
    $labels = array(
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

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'property-type'),
        'show_in_rest'      => true, // Enable in Gutenberg
    );

    register_taxonomy('property_type', array('property'), $args);
}
add_action('init', 'mi_register_property_type_taxonomy');

/**
 * Register Location taxonomy
 */
function mi_register_location_taxonomy() {
    $labels = array(
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

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'location'),
        'show_in_rest'      => true, // Enable in Gutenberg
    );

    register_taxonomy('location', array('property', 'business', 'user_profile', 'article'), $args);
}
add_action('init', 'mi_register_location_taxonomy');

/**
 * Register Amenity taxonomy
 */
function mi_register_amenity_taxonomy() {
    $labels = array(
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

    $args = array(
        'hierarchical'      => true, // Making it hierarchical (like categories)
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'amenity'),
        'show_in_rest'      => true, // Enable in Gutenberg
    );

    register_taxonomy('amenity', array('property'), $args);
}
add_action('init', 'mi_register_amenity_taxonomy');

/**
 * Register Business Type taxonomy
 */
function mi_register_business_type_taxonomy() {
    $labels = array(
        'name'              => _x('Business Types', 'taxonomy general name', 'blocksy-child'),
        'singular_name'     => _x('Business Type', 'taxonomy singular name', 'blocksy-child'),
        'search_items'      => __('Search Business Types', 'blocksy-child'),
        'all_items'         => __('All Business Types', 'blocksy-child'),
        'parent_item'       => __('Parent Business Type', 'blocksy-child'),
        'parent_item_colon' => __('Parent Business Type:', 'blocksy-child'),
        'edit_item'         => __('Edit Business Type', 'blocksy-child'),
        'update_item'       => __('Update Business Type', 'blocksy-child'),
        'add_new_item'      => __('Add New Business Type', 'blocksy-child'),
        'new_item_name'     => __('New Business Type Name', 'blocksy-child'),
        'menu_name'         => __('Business Types', 'blocksy-child'),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'business-type'),
        'show_in_rest'      => true, // Enable in Gutenberg
    );

    register_taxonomy('business_type', array('business'), $args);
}
add_action('init', 'mi_register_business_type_taxonomy');

/**
 * Register Article Type taxonomy
 */
function mi_register_article_type_taxonomy() {
    $labels = array(
        'name'              => _x('Article Types', 'taxonomy general name', 'blocksy-child'),
        'singular_name'     => _x('Article Type', 'taxonomy singular name', 'blocksy-child'),
        'search_items'      => __('Search Article Types', 'blocksy-child'),
        'all_items'         => __('All Article Types', 'blocksy-child'),
        'parent_item'       => __('Parent Article Type', 'blocksy-child'),
        'parent_item_colon' => __('Parent Article Type:', 'blocksy-child'),
        'edit_item'         => __('Edit Article Type', 'blocksy-child'),
        'update_item'       => __('Update Article Type', 'blocksy-child'),
        'add_new_item'      => __('Add New Article Type', 'blocksy-child'),
        'new_item_name'     => __('New Article Type Name', 'blocksy-child'),
        'menu_name'         => __('Article Types', 'blocksy-child'),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'article-type'),
        'show_in_rest'      => true, // Enable in Gutenberg
    );

    register_taxonomy('article_type', array('article'), $args); // Attached to article post type
}
add_action('init', 'mi_register_article_type_taxonomy');

/**
 * Register User Type taxonomy
 */
function mi_register_user_type_taxonomy() {
    $labels = array(
        'name'              => _x('User Types', 'taxonomy general name', 'blocksy-child'),
        'singular_name'     => _x('User Type', 'taxonomy singular name', 'blocksy-child'),
        'search_items'      => __('Search User Types', 'blocksy-child'),
        'all_items'         => __('All User Types', 'blocksy-child'),
        'parent_item'       => __('Parent User Type', 'blocksy-child'),
        'parent_item_colon' => __('Parent User Type:', 'blocksy-child'),
        'edit_item'         => __('Edit User Type', 'blocksy-child'),
        'update_item'       => __('Update User Type', 'blocksy-child'),
        'add_new_item'      => __('Add New User Type', 'blocksy-child'),
        'new_item_name'     => __('New User Type Name', 'blocksy-child'),
        'menu_name'         => __('User Types', 'blocksy-child'),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'user-type'),
        'show_in_rest'      => true, // Enable in Gutenberg
    );

    register_taxonomy('user_type', array('user_profile'), $args); // For user profiles
}
add_action('init', 'mi_register_user_type_taxonomy');

/**
 * Register Business custom post type
 */
function mi_register_business_post_type() {
    $labels = array(
        'name'               => _x('Businesses', 'post type general name', 'blocksy-child'),
        'singular_name'      => _x('Business', 'post type singular name', 'blocksy-child'),
        'menu_name'          => _x('Businesses', 'admin menu', 'blocksy-child'),
        'name_admin_bar'     => _x('Business', 'add new on admin bar', 'blocksy-child'),
        'add_new'            => _x('Add New', 'business', 'blocksy-child'),
        'add_new_item'       => __('Add New Business', 'blocksy-child'),
        'new_item'           => __('New Business', 'blocksy-child'),
        'edit_item'          => __('Edit Business', 'blocksy-child'),
        'view_item'          => __('View Business', 'blocksy-child'),
        'all_items'          => __('All Businesses', 'blocksy-child'),
        'search_items'       => __('Search Businesses', 'blocksy-child'),
        'parent_item_colon'  => __('Parent Businesses:', 'blocksy-child'),
        'not_found'          => __('No businesses found.', 'blocksy-child'),
        'not_found_in_trash' => __('No businesses found in Trash.', 'blocksy-child')
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __('Local businesses in the community.', 'blocksy-child'),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'business'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 6,
        'menu_icon'          => 'dashicons-store',
        'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'),
        'show_in_rest'       => true, // Enable Gutenberg editor
    );

    register_post_type('business', $args);
}
add_action('init', 'mi_register_business_post_type');

/**
 * Register Article custom post type
 */
function mi_register_article_post_type() {
    $labels = array(
        'name'               => _x('Articles', 'post type general name', 'blocksy-child'),
        'singular_name'      => _x('Article', 'post type singular name', 'blocksy-child'),
        'menu_name'          => _x('Articles', 'admin menu', 'blocksy-child'),
        'name_admin_bar'     => _x('Article', 'add new on admin bar', 'blocksy-child'),
        'add_new'            => _x('Add New', 'article', 'blocksy-child'),
        'add_new_item'       => __('Add New Article', 'blocksy-child'),
        'new_item'           => __('New Article', 'blocksy-child'),
        'edit_item'          => __('Edit Article', 'blocksy-child'),
        'view_item'          => __('View Article', 'blocksy-child'),
        'all_items'          => __('All Articles', 'blocksy-child'),
        'search_items'       => __('Search Articles', 'blocksy-child'),
        'parent_item_colon'  => __('Parent Articles:', 'blocksy-child'),
        'not_found'          => __('No articles found.', 'blocksy-child'),
        'not_found_in_trash' => __('No articles found in Trash.', 'blocksy-child')
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __('Articles, guides, and news for the community.', 'blocksy-child'),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'article'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 7,
        'menu_icon'          => 'dashicons-media-document',
        'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'),
        'show_in_rest'       => true, // Enable Gutenberg editor
    );

    register_post_type('article', $args);
}
add_action('init', 'mi_register_article_post_type');

/**
 * Register User Profile custom post type
 */
function mi_register_user_profile_post_type() {
    $labels = array(
        'name'               => _x('User Profiles', 'post type general name', 'blocksy-child'),
        'singular_name'      => _x('User Profile', 'post type singular name', 'blocksy-child'),
        'menu_name'          => _x('User Profiles', 'admin menu', 'blocksy-child'),
        'name_admin_bar'     => _x('User Profile', 'add new on admin bar', 'blocksy-child'),
        'add_new'            => _x('Add New', 'user profile', 'blocksy-child'),
        'add_new_item'       => __('Add New User Profile', 'blocksy-child'),
        'new_item'           => __('New User Profile', 'blocksy-child'),
        'edit_item'          => __('Edit User Profile', 'blocksy-child'),
        'view_item'          => __('View User Profile', 'blocksy-child'),
        'all_items'          => __('All User Profiles', 'blocksy-child'),
        'search_items'       => __('Search User Profiles', 'blocksy-child'),
        'parent_item_colon'  => __('Parent User Profiles:', 'blocksy-child'),
        'not_found'          => __('No user profiles found.', 'blocksy-child'),
        'not_found_in_trash' => __('No user profiles found in Trash.', 'blocksy-child')
    );

    $args = array(
        'labels'             => $labels,
        'description'        => __('Extended user profiles for community members.', 'blocksy-child'),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'user-profile'),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 8,
        'menu_icon'          => 'dashicons-admin-users',
        'supports'           => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields', 'revisions'),
        'show_in_rest'       => true, // Enable Gutenberg editor
    );

    register_post_type('user_profile', $args);
}
add_action('init', 'mi_register_user_profile_post_type');
