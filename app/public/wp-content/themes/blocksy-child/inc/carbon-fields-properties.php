<?php
/**
 * Carbon Fields Property Fields
 * 
 * Registers all Carbon Fields for the property post type
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

use Carbon_Fields\Container;
use Carbon_Fields\Field;

/**
 * Register property fields
 */
function mi_register_property_fields() {
    Container::make('post_meta', __('Property Details', 'blocksy-child'))
        ->where('post_type', '=', 'property')
        ->set_context('normal')
        ->set_priority('high')
        ->add_tab(__('Location', 'blocksy-child'), [
            Field::make('text', 'property_address', __('Address', 'blocksy-child'))
                ->set_required(true)
                ->set_help_text(__('Full street address of the property', 'blocksy-child')),
            
            Field::make('text', 'property_city', __('City', 'blocksy-child'))
                ->set_required(true)
                ->set_help_text(__('City where the property is located', 'blocksy-child')),
            
            Field::make('text', 'property_state', __('State/Province', 'blocksy-child'))
                ->set_required(true)
                ->set_help_text(__('State or province where the property is located', 'blocksy-child')),
            
            Field::make('text', 'property_zip', __('ZIP/Postal Code', 'blocksy-child'))
                ->set_help_text(__('ZIP or postal code of the property', 'blocksy-child')),
            
            Field::make('text', 'property_latitude', __('Latitude', 'blocksy-child'))
                ->set_help_text(__('Latitude coordinates for map display', 'blocksy-child')),
            
            Field::make('text', 'property_longitude', __('Longitude', 'blocksy-child'))
                ->set_help_text(__('Longitude coordinates for map display', 'blocksy-child')),
        ])
        ->add_tab(__('Property Details', 'blocksy-child'), [
            Field::make('number', 'property_bedrooms', __('Bedrooms', 'blocksy-child'))
                ->set_required(true)
                ->set_min(0)
                ->set_step(1)
                ->set_help_text(__('Number of bedrooms in the property', 'blocksy-child')),
            
            Field::make('number', 'property_bathrooms', __('Bathrooms', 'blocksy-child'))
                ->set_required(true)
                ->set_min(0)
                ->set_step(0.5)
                ->set_help_text(__('Number of bathrooms in the property', 'blocksy-child')),
            
            Field::make('number', 'property_max_guests', __('Maximum Guests', 'blocksy-child'))
                ->set_required(true)
                ->set_min(1)
                ->set_step(1)
                ->set_help_text(__('Maximum number of guests allowed', 'blocksy-child')),
        ])
        ->add_tab(__('Pricing', 'blocksy-child'), [
            Field::make('number', 'property_nightly_rate', __('Nightly Rate ($)', 'blocksy-child'))
                ->set_required(true)
                ->set_min(0)
                ->set_step(1)
                ->set_help_text(__('Base nightly rate in USD', 'blocksy-child')),
        ])
        ->add_tab(__('Booking', 'blocksy-child'), [
            Field::make('text', 'property_booking_url', __('Booking URL', 'blocksy-child'))
                ->set_attribute('type', 'url')
                ->set_help_text(__('External booking URL for this property', 'blocksy-child')),
            
            Field::make('text', 'property_ical_url', __('iCal URL', 'blocksy-child'))
                ->set_attribute('type', 'url')
                ->set_help_text(__('iCal feed URL for synchronizing availability', 'blocksy-child')),
            
            Field::make('checkbox', 'property_has_direct_booking', __('Has Direct Booking', 'blocksy-child'))
                ->set_help_text(__('Check if this property can be booked directly on the site', 'blocksy-child')),
        ])
        ->add_tab(__('Gallery', 'blocksy-child'), [
            Field::make('image', 'property_featured_image', __('Featured Image', 'blocksy-child'))
                ->set_help_text(__('Main image for this property', 'blocksy-child')),
            
            Field::make('media_gallery', 'property_gallery', __('Property Gallery', 'blocksy-child'))
                ->set_type(['image'])
                ->set_help_text(__('Additional images of the property', 'blocksy-child')),
        ])
        ->add_tab(__('Features', 'blocksy-child'), [
            Field::make('checkbox', 'property_is_featured', __('Featured Property', 'blocksy-child'))
                ->set_help_text(__('Check to mark this property as featured', 'blocksy-child')),
            
            Field::make('complex', 'property_amenities_details', __('Amenity Details', 'blocksy-child'))
                ->add_fields([
                    Field::make('text', 'name', __('Amenity Name', 'blocksy-child'))
                        ->set_required(true),
                    Field::make('textarea', 'description', __('Description', 'blocksy-child')),
                    Field::make('image', 'icon', __('Icon', 'blocksy-child')),
                ])
                ->set_layout('tabbed-horizontal')
                ->set_help_text(__('Add detailed information about specific amenities', 'blocksy-child')),
        ]);
}
add_action('carbon_fields_register_fields', 'mi_register_property_fields');

/**
 * Register property post type
 */
function mi_register_property_post_type() {
    $labels = [
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
        'not_found_in_trash' => __('No properties found in Trash.', 'blocksy-child'),
    ];

    $args = [
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => ['slug' => 'property'],
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'menu_icon'          => 'dashicons-admin-home',
        'supports'           => ['title', 'editor', 'thumbnail', 'excerpt'],
        'show_in_rest'       => true,
    ];

    register_post_type('property', $args);
}
add_action('init', 'mi_register_property_post_type');

/**
 * Register property taxonomies
 */
function mi_register_property_taxonomies() {
    // Property Type Taxonomy
    $type_labels = [
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
    ];

    $type_args = [
        'hierarchical'      => true,
        'labels'            => $type_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => ['slug' => 'property-type'],
        'show_in_rest'      => true,
    ];

    register_taxonomy('property_type', ['property'], $type_args);

    // Location Taxonomy
    $location_labels = [
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
    ];

    $location_args = [
        'hierarchical'      => true,
        'labels'            => $location_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => ['slug' => 'location'],
        'show_in_rest'      => true,
    ];

    register_taxonomy('location', ['property'], $location_args);

    // Amenity Taxonomy
    $amenity_labels = [
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
    ];

    $amenity_args = [
        'hierarchical'      => true,
        'labels'            => $amenity_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => ['slug' => 'amenity'],
        'show_in_rest'      => true,
    ];

    register_taxonomy('amenity', ['property'], $amenity_args);
}
add_action('init', 'mi_register_property_taxonomies');

/**
 * Register term meta for icons
 */
function mi_register_taxonomy_term_meta() {
    // Add term meta for icons
    Container::make('term_meta', __('Additional Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'property_type')
        ->add_fields([
            Field::make('image', 'property_type_icon', __('Icon', 'blocksy-child'))
                ->set_help_text(__('Upload an icon for this property type', 'blocksy-child')),
            Field::make('textarea', 'property_type_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this property type', 'blocksy-child')),
        ]);
    
    Container::make('term_meta', __('Additional Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'location')
        ->add_fields([
            Field::make('image', 'location_icon', __('Icon', 'blocksy-child'))
                ->set_help_text(__('Upload an icon for this location', 'blocksy-child')),
            Field::make('textarea', 'location_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this location', 'blocksy-child')),
            Field::make('text', 'location_latitude', __('Latitude', 'blocksy-child'))
                ->set_help_text(__('Latitude coordinates for map display', 'blocksy-child')),
            Field::make('text', 'location_longitude', __('Longitude', 'blocksy-child'))
                ->set_help_text(__('Longitude coordinates for map display', 'blocksy-child')),
        ]);
    
    Container::make('term_meta', __('Additional Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'amenity')
        ->add_fields([
            Field::make('image', 'amenity_icon', __('Icon', 'blocksy-child'))
                ->set_help_text(__('Upload an icon for this amenity', 'blocksy-child')),
            Field::make('textarea', 'amenity_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this amenity', 'blocksy-child')),
        ]);
}
add_action('carbon_fields_register_fields', 'mi_register_taxonomy_term_meta');
