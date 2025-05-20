<?php
/**
 * Carbon Fields Property Fields
 * 
 * Registers all Carbon Fields for the property post type and other custom post types
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

// Import Carbon Fields classes
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
            
            Field::make('text', 'property_zip_code', __('ZIP/Postal Code', 'blocksy-child'))
                ->set_help_text(__('ZIP or postal code of the property', 'blocksy-child')),
            
            Field::make('text', 'property_latitude', __('Latitude', 'blocksy-child'))
                ->set_help_text(__('Latitude coordinates for map display', 'blocksy-child')),
            
            Field::make('text', 'property_longitude', __('Longitude', 'blocksy-child'))
                ->set_help_text(__('Longitude coordinates for map display', 'blocksy-child')),
        ])
        ->add_tab(__('Property Details', 'blocksy-child'), [
            Field::make('text', 'property_bedrooms', __('Bedrooms', 'blocksy-child'))
                ->set_required(true)
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '1')
                ->set_help_text(__('Number of bedrooms in the property', 'blocksy-child')),
            
            Field::make('text', 'property_bathrooms', __('Bathrooms', 'blocksy-child'))
                ->set_required(true)
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '0.5')
                ->set_help_text(__('Number of bathrooms in the property', 'blocksy-child')),
            
            Field::make('text', 'property_max_guests', __('Maximum Guests', 'blocksy-child'))
                ->set_required(true)
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '1')
                ->set_help_text(__('Maximum number of guests allowed', 'blocksy-child')),
        ])
        ->add_tab(__('Pricing & Booking', 'blocksy-child'), [
            Field::make('text', 'property_nightly_rate', __('Nightly Rate ($)', 'blocksy-child'))
                ->set_required(true)
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '0.01')
                ->set_help_text(__('Base nightly rate for the property', 'blocksy-child')),
            
            Field::make('text', 'property_booking_url', __('Booking URL', 'blocksy-child'))
                ->set_attribute('type', 'url')
                ->set_help_text(__('External URL for booking this property', 'blocksy-child')),
            
            Field::make('text', 'property_ical_url', __('iCal URL', 'blocksy-child'))
                ->set_attribute('type', 'url')
                ->set_help_text(__('iCal URL for syncing availability', 'blocksy-child')),
            
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
 * Register business fields
 */
function mi_register_business_fields() {
    Container::make('post_meta', __('Business Details', 'blocksy-child'))
        ->where('post_type', '=', 'business')
        ->set_context('normal')
        ->set_priority('high')
        ->add_tab(__('Contact Information', 'blocksy-child'), [
            Field::make('text', 'business_address', __('Address', 'blocksy-child'))
                ->set_required(true)
                ->set_help_text(__('Street address of the business', 'blocksy-child')),
            
            Field::make('text', 'business_city', __('City', 'blocksy-child'))
                ->set_required(true)
                ->set_help_text(__('City where the business is located', 'blocksy-child')),
            
            Field::make('text', 'business_state', __('State/Province', 'blocksy-child'))
                ->set_required(true)
                ->set_help_text(__('State or province where the business is located', 'blocksy-child')),
            
            Field::make('text', 'business_zip_code', __('ZIP/Postal Code', 'blocksy-child'))
                ->set_help_text(__('ZIP or postal code of the business', 'blocksy-child')),
            
            Field::make('text', 'business_phone', __('Phone', 'blocksy-child'))
                ->set_help_text(__('Business phone number', 'blocksy-child')),
            
            Field::make('text', 'business_email', __('Email', 'blocksy-child'))
                ->set_attribute('type', 'email')
                ->set_help_text(__('Business email address', 'blocksy-child')),
        ])
        ->add_tab(__('Online Presence', 'blocksy-child'), [
            Field::make('text', 'business_website', __('Website', 'blocksy-child'))
                ->set_attribute('type', 'url')
                ->set_help_text(__('Business website URL', 'blocksy-child')),
            
            Field::make('complex', 'business_social_media', __('Social Media', 'blocksy-child'))
                ->add_fields([
                    Field::make('select', 'platform', __('Platform', 'blocksy-child'))
                        ->set_options([
                            'facebook' => 'Facebook',
                            'twitter' => 'Twitter',
                            'instagram' => 'Instagram',
                            'linkedin' => 'LinkedIn',
                            'youtube' => 'YouTube',
                            'pinterest' => 'Pinterest',
                            'other' => 'Other'
                        ]),
                    Field::make('text', 'url', __('URL', 'blocksy-child'))
                        ->set_attribute('type', 'url')
                        ->set_required(true),
                ])
                ->set_layout('tabbed-horizontal')
                ->set_help_text(__('Add social media links for the business', 'blocksy-child')),
        ])
        ->add_tab(__('Business Hours', 'blocksy-child'), [
            Field::make('complex', 'business_hours', __('Hours of Operation', 'blocksy-child'))
                ->add_fields([
                    Field::make('select', 'day', __('Day', 'blocksy-child'))
                        ->set_options([
                            'monday' => 'Monday',
                            'tuesday' => 'Tuesday',
                            'wednesday' => 'Wednesday',
                            'thursday' => 'Thursday',
                            'friday' => 'Friday',
                            'saturday' => 'Saturday',
                            'sunday' => 'Sunday'
                        ])
                        ->set_required(true),
                    Field::make('text', 'open', __('Opening Time', 'blocksy-child'))
                        ->set_attribute('type', 'time')
                        ->set_required(true),
                    Field::make('text', 'close', __('Closing Time', 'blocksy-child'))
                        ->set_attribute('type', 'time')
                        ->set_required(true),
                    Field::make('checkbox', 'closed', __('Closed', 'blocksy-child')),
                ])
                ->set_layout('tabbed-horizontal')
                ->set_help_text(__('Set business hours for each day of the week', 'blocksy-child')),
        ])
        ->add_tab(__('Location', 'blocksy-child'), [
            Field::make('text', 'business_latitude', __('Latitude', 'blocksy-child'))
                ->set_help_text(__('Latitude coordinates for map display', 'blocksy-child')),
            
            Field::make('text', 'business_longitude', __('Longitude', 'blocksy-child'))
                ->set_help_text(__('Longitude coordinates for map display', 'blocksy-child')),
        ])
        ->add_tab(__('Additional Details', 'blocksy-child'), [
            Field::make('checkbox', 'business_is_featured', __('Featured Business', 'blocksy-child'))
                ->set_help_text(__('Check to mark this business as featured', 'blocksy-child')),
            
            Field::make('checkbox', 'business_is_claimed', __('Claimed Business', 'blocksy-child'))
                ->set_help_text(__('Check if this business has been claimed by its owner', 'blocksy-child')),
            
            Field::make('select', 'business_status', __('Status', 'blocksy-child'))
                ->set_options([
                    'pending' => 'Pending',
                    'active' => 'Active',
                    'inactive' => 'Inactive'
                ])
                ->set_default_value('pending')
                ->set_help_text(__('Current status of the business listing', 'blocksy-child')),
        ]);
}
add_action('carbon_fields_register_fields', 'mi_register_business_fields');

/**
 * Register article fields
 */
function mi_register_article_fields() {
    Container::make('post_meta', __('Article Details', 'blocksy-child'))
        ->where('post_type', '=', 'article')
        ->set_context('normal')
        ->set_priority('high')
        ->add_fields([
            Field::make('textarea', 'article_excerpt', __('Excerpt', 'blocksy-child'))
                ->set_help_text(__('A short summary of the article', 'blocksy-child')),
            
            Field::make('image', 'article_featured_image', __('Featured Image', 'blocksy-child'))
                ->set_help_text(__('Main image for this article', 'blocksy-child')),
            
            Field::make('association', 'article_related_properties', __('Related Properties', 'blocksy-child'))
                ->set_types([
                    [
                        'type' => 'post',
                        'post_type' => 'property',
                    ]
                ])
                ->set_help_text(__('Select properties related to this article', 'blocksy-child')),
            
            Field::make('association', 'article_related_businesses', __('Related Businesses', 'blocksy-child'))
                ->set_types([
                    [
                        'type' => 'post',
                        'post_type' => 'business',
                    ]
                ])
                ->set_help_text(__('Select businesses related to this article', 'blocksy-child')),
        ]);
}
add_action('carbon_fields_register_fields', 'mi_register_article_fields');

/**
 * Register user profile fields
 */
function mi_register_user_profile_fields() {
    Container::make('post_meta', __('User Profile Details', 'blocksy-child'))
        ->where('post_type', '=', 'user_profile')
        ->set_context('normal')
        ->set_priority('high')
        ->add_fields([
            Field::make('text', 'user_email', __('Email', 'blocksy-child'))
                ->set_attribute('type', 'email')
                ->set_required(true)
                ->set_help_text(__('User email address', 'blocksy-child')),
            
            Field::make('text', 'user_phone', __('Phone', 'blocksy-child'))
                ->set_help_text(__('User phone number', 'blocksy-child')),
            
            Field::make('textarea', 'user_bio', __('Biography', 'blocksy-child'))
                ->set_help_text(__('Short biography or description', 'blocksy-child')),
            
            Field::make('image', 'user_profile_image', __('Profile Image', 'blocksy-child'))
                ->set_help_text(__('User profile picture', 'blocksy-child')),
            
            Field::make('association', 'user_properties', __('Properties', 'blocksy-child'))
                ->set_types([
                    [
                        'type' => 'post',
                        'post_type' => 'property',
                    ]
                ])
                ->set_help_text(__('Properties associated with this user', 'blocksy-child')),
            
            Field::make('association', 'user_businesses', __('Businesses', 'blocksy-child'))
                ->set_types([
                    [
                        'type' => 'post',
                        'post_type' => 'business',
                    ]
                ])
                ->set_help_text(__('Businesses associated with this user', 'blocksy-child')),
        ]);
}
add_action('carbon_fields_register_fields', 'mi_register_user_profile_fields');

/**
 * Register term meta for icons and additional information
 */
function mi_register_taxonomy_term_meta() {
    // Add term meta for property types
    Container::make('term_meta', __('Property Type Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'property_type')
        ->add_fields([
            Field::make('image', 'property_type_icon', __('Icon', 'blocksy-child'))
                ->set_help_text(__('Upload an icon for this property type', 'blocksy-child')),
            Field::make('textarea', 'property_type_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this property type', 'blocksy-child')),
            Field::make('text', 'property_type_display_order', __('Display Order', 'blocksy-child'))
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '1')
                ->set_help_text(__('Order for display in lists (lower numbers shown first)', 'blocksy-child')),
        ]);
    
    // Add term meta for locations
    Container::make('term_meta', __('Location Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'location')
        ->add_fields([
            Field::make('image', 'location_image', __('Location Image', 'blocksy-child'))
                ->set_help_text(__('Upload an image for this location', 'blocksy-child')),
            Field::make('textarea', 'location_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this location', 'blocksy-child')),
            Field::make('text', 'location_latitude', __('Latitude', 'blocksy-child'))
                ->set_help_text(__('Latitude coordinates for map display', 'blocksy-child')),
            Field::make('text', 'location_longitude', __('Longitude', 'blocksy-child'))
                ->set_help_text(__('Longitude coordinates for map display', 'blocksy-child')),
            Field::make('text', 'location_display_order', __('Display Order', 'blocksy-child'))
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '1')
                ->set_help_text(__('Order for display in lists (lower numbers shown first)', 'blocksy-child')),
        ]);
    
    // Add term meta for amenities
    Container::make('term_meta', __('Amenity Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'amenity')
        ->add_fields([
            Field::make('image', 'amenity_icon', __('Icon', 'blocksy-child'))
                ->set_help_text(__('Upload an icon for this amenity', 'blocksy-child')),
            Field::make('textarea', 'amenity_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this amenity', 'blocksy-child')),
            Field::make('text', 'amenity_display_order', __('Display Order', 'blocksy-child'))
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '1')
                ->set_help_text(__('Order for display in lists (lower numbers shown first)', 'blocksy-child')),
        ]);
    
    // Add term meta for business types
    Container::make('term_meta', __('Business Type Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'business_type')
        ->add_fields([
            Field::make('image', 'business_type_icon', __('Icon', 'blocksy-child'))
                ->set_help_text(__('Upload an icon for this business type', 'blocksy-child')),
            Field::make('textarea', 'business_type_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this business type', 'blocksy-child')),
            Field::make('text', 'business_type_display_order', __('Display Order', 'blocksy-child'))
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '1')
                ->set_help_text(__('Order for display in lists (lower numbers shown first)', 'blocksy-child')),
        ]);
    
    // Add term meta for article types
    Container::make('term_meta', __('Article Type Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'article_type')
        ->add_fields([
            Field::make('image', 'article_type_icon', __('Icon', 'blocksy-child'))
                ->set_help_text(__('Upload an icon for this article type', 'blocksy-child')),
            Field::make('textarea', 'article_type_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this article type', 'blocksy-child')),
            Field::make('text', 'article_type_display_order', __('Display Order', 'blocksy-child'))
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '1')
                ->set_help_text(__('Order for display in lists (lower numbers shown first)', 'blocksy-child')),
        ]);
    
    // Add term meta for user types
    Container::make('term_meta', __('User Type Details', 'blocksy-child'))
        ->where('term_taxonomy', '=', 'user_type')
        ->add_fields([
            Field::make('image', 'user_type_icon', __('Icon', 'blocksy-child'))
                ->set_help_text(__('Upload an icon for this user type', 'blocksy-child')),
            Field::make('textarea', 'user_type_description', __('Extended Description', 'blocksy-child'))
                ->set_help_text(__('A more detailed description of this user type', 'blocksy-child')),
            Field::make('text', 'user_type_display_order', __('Display Order', 'blocksy-child'))
                ->set_attribute('type', 'number')
                ->set_attribute('min', '0')
                ->set_attribute('step', '1')
                ->set_help_text(__('Order for display in lists (lower numbers shown first)', 'blocksy-child')),
        ]);
}
add_action('carbon_fields_register_fields', 'mi_register_taxonomy_term_meta');
