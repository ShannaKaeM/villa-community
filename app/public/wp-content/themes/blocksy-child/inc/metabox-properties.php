<?php
/**
 * Meta Box fields for Properties CPT
 */

// Register Meta Box fields for Properties
add_filter('rwmb_meta_boxes', 'mi_register_property_meta_boxes');

function mi_register_property_meta_boxes($meta_boxes) {
    // Property Details Meta Box
    $meta_boxes[] = [
        'title'      => __('Property Details', 'blocksy-child'),
        'id'         => 'property_details',
        'post_types' => ['property'],
        'context'    => 'normal',
        'priority'   => 'high',
        'fields'     => [
            // Location Information
            [
                'name'       => __('Address', 'blocksy-child'),
                'id'         => 'property_address',
                'type'       => 'text',
                'size'       => 50,
            ],
            [
                'name'       => __('City', 'blocksy-child'),
                'id'         => 'property_city',
                'type'       => 'text',
            ],
            [
                'name'       => __('State', 'blocksy-child'),
                'id'         => 'property_state',
                'type'       => 'text',
                'size'       => 2,
            ],
            [
                'name'       => __('ZIP Code', 'blocksy-child'),
                'id'         => 'property_zip_code',
                'type'       => 'text',
            ],
            [
                'name'       => __('Latitude', 'blocksy-child'),
                'id'         => 'property_latitude',
                'type'       => 'text',
                'desc'       => __('For map display', 'blocksy-child'),
            ],
            [
                'name'       => __('Longitude', 'blocksy-child'),
                'id'         => 'property_longitude',
                'type'       => 'text',
                'desc'       => __('For map display', 'blocksy-child'),
            ],
            
            // Property Specifications
            [
                'type' => 'divider',
            ],
            [
                'name'       => __('Bedrooms', 'blocksy-child'),
                'id'         => 'property_bedrooms',
                'type'       => 'number',
                'min'        => 0,
                'step'       => 1,
            ],
            [
                'name'       => __('Bathrooms', 'blocksy-child'),
                'id'         => 'property_bathrooms',
                'type'       => 'number',
                'min'        => 0,
                'step'       => 0.5,
            ],
            [
                'name'       => __('Maximum Guests', 'blocksy-child'),
                'id'         => 'property_max_guests',
                'type'       => 'number',
                'min'        => 1,
                'step'       => 1,
            ],
            
            // Pricing
            [
                'type' => 'divider',
            ],
            [
                'name'       => __('Nightly Rate ($)', 'blocksy-child'),
                'id'         => 'property_nightly_rate',
                'type'       => 'number',
                'min'        => 0,
                'step'       => 1,
            ],
        ],
    ];
    
    // Booking Information Meta Box
    $meta_boxes[] = [
        'title'      => __('Booking Information', 'blocksy-child'),
        'id'         => 'property_booking',
        'post_types' => ['property'],
        'context'    => 'normal',
        'priority'   => 'default',
        'fields'     => [
            [
                'name'       => __('Booking URL', 'blocksy-child'),
                'id'         => 'property_booking_url',
                'type'       => 'url',
                'desc'       => __('External booking URL if applicable', 'blocksy-child'),
            ],
            [
                'name'       => __('iCal URL', 'blocksy-child'),
                'id'         => 'property_ical_url',
                'type'       => 'url',
                'desc'       => __('iCal feed URL for availability sync', 'blocksy-child'),
            ],
            [
                'name'       => __('Direct Booking Available', 'blocksy-child'),
                'id'         => 'property_has_direct_booking',
                'type'       => 'checkbox',
                'desc'       => __('Check if booking can be made directly on this site', 'blocksy-child'),
            ],
        ],
    ];
    
    // Property Status Meta Box
    $meta_boxes[] = [
        'title'      => __('Property Status', 'blocksy-child'),
        'id'         => 'property_status',
        'post_types' => ['property'],
        'context'    => 'side',
        'priority'   => 'default',
        'fields'     => [
            [
                'name'       => __('Featured Property', 'blocksy-child'),
                'id'         => 'property_is_featured',
                'type'       => 'checkbox',
                'desc'       => __('Check to mark as featured property', 'blocksy-child'),
            ],
            [
                'name'       => __('View Count', 'blocksy-child'),
                'id'         => 'property_views',
                'type'       => 'number',
                'min'        => 0,
                'readonly'   => true,
                'desc'       => __('Number of times this property has been viewed', 'blocksy-child'),
            ],
        ],
    ];
    
    return $meta_boxes;
}
