<?php
/**
 * Carbon Fields Helper
 * 
 * Provides utilities for integrating Carbon Fields with blocks and components
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

class MI_Carbon_Fields_Helper {
    /**
     * Instance of this class
     *
     * @var MI_Carbon_Fields_Helper
     */
    private static $instance = null;

    /**
     * Get instance of this class
     *
     * @return MI_Carbon_Fields_Helper
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    private function __construct() {
        // Add Timber functions
        add_filter('timber/twig', [$this, 'add_twig_functions']);
    }

    /**
     * Add Twig functions for Carbon Fields
     *
     * @param \Twig\Environment $twig Twig environment
     * @return \Twig\Environment
     */
    public function add_twig_functions($twig) {
        // Add Carbon Fields functions
        $twig->addFunction(new \Twig\TwigFunction('carbon_get', [$this, 'get_carbon_field']));
        $twig->addFunction(new \Twig\TwigFunction('carbon_image', [$this, 'get_carbon_image']));
        $twig->addFunction(new \Twig\TwigFunction('carbon_gallery', [$this, 'get_carbon_gallery']));
        $twig->addFunction(new \Twig\TwigFunction('carbon_complex', [$this, 'get_carbon_complex']));
        
        // Add taxonomy icon function
        $twig->addFunction(new \Twig\TwigFunction('taxonomy_icon', [$this, 'get_taxonomy_icon']));
        
        return $twig;
    }

    /**
     * Get a Carbon Field value
     *
     * @param string $field_name Field name
     * @param string $container_type Container type (post, term, user, option)
     * @param int|string $container_id Container ID
     * @return mixed
     */
    public function get_carbon_field($field_name, $container_type = 'post', $container_id = null) {
        if (!function_exists('carbon_get_post_meta')) {
            return null;
        }
        
        switch ($container_type) {
            case 'post':
                return carbon_get_post_meta($container_id, $field_name);
            
            case 'term':
                return carbon_get_term_meta($container_id, $field_name);
            
            case 'user':
                return carbon_get_user_meta($container_id, $field_name);
            
            case 'option':
                return carbon_get_theme_option($field_name);
            
            default:
                return null;
        }
    }

    /**
     * Get a Carbon Fields image as a Timber Image
     *
     * @param string $field_name Field name
     * @param string $container_type Container type (post, term, user, option)
     * @param int|string $container_id Container ID
     * @return \Timber\Image|null
     */
    public function get_carbon_image($field_name, $container_type = 'post', $container_id = null) {
        $image_id = $this->get_carbon_field($field_name, $container_type, $container_id);
        
        if (!$image_id) {
            return null;
        }
        
        return new \Timber\Image($image_id);
    }

    /**
     * Get a Carbon Fields gallery as Timber Images
     *
     * @param string $field_name Field name
     * @param string $container_type Container type (post, term, user, option)
     * @param int|string $container_id Container ID
     * @return array
     */
    public function get_carbon_gallery($field_name, $container_type = 'post', $container_id = null) {
        $gallery = $this->get_carbon_field($field_name, $container_type, $container_id);
        
        if (!$gallery || !is_array($gallery)) {
            return [];
        }
        
        $images = [];
        
        foreach ($gallery as $image_id) {
            $images[] = new \Timber\Image($image_id);
        }
        
        return $images;
    }

    /**
     * Get a Carbon Fields complex field
     *
     * @param string $field_name Field name
     * @param string $container_type Container type (post, term, user, option)
     * @param int|string $container_id Container ID
     * @return array
     */
    public function get_carbon_complex($field_name, $container_type = 'post', $container_id = null) {
        $complex = $this->get_carbon_field($field_name, $container_type, $container_id);
        
        if (!$complex || !is_array($complex)) {
            return [];
        }
        
        return $complex;
    }

    /**
     * Get all Carbon Fields for a post
     *
     * @param int $post_id Post ID
     * @return array
     */
    public function get_all_post_fields($post_id) {
        if (!function_exists('carbon_get_post_meta')) {
            return [];
        }
        
        // This is a placeholder - Carbon Fields doesn't have a built-in way to get all fields
        // You would need to know the field names in advance
        
        return [];
    }

    /**
     * Get properties with Carbon Fields
     *
     * @param array $args WP_Query arguments
     * @return array
     */
    public function get_properties($args = []) {
        $default_args = [
            'post_type' => 'property',
            'posts_per_page' => -1,
            'post_status' => 'publish',
        ];
        
        $query_args = wp_parse_args($args, $default_args);
        
        $properties = \Timber\Timber::get_posts($query_args);
        
        // Enhance properties with Carbon Fields data
        foreach ($properties as &$property) {
            $property->cf = $this->get_property_fields($property->ID);
        }
        
        return $properties;
    }

    /**
     * Get property fields
     *
     * @param int $property_id Property ID
     * @return array
     */
    public function get_property_fields($property_id) {
        if (!function_exists('carbon_get_post_meta')) {
            return [];
        }
        
        // Get common property fields
        $fields = [
            'address' => carbon_get_post_meta($property_id, 'property_address'),
            'city' => carbon_get_post_meta($property_id, 'property_city'),
            'state' => carbon_get_post_meta($property_id, 'property_state'),
            'zip' => carbon_get_post_meta($property_id, 'property_zip'),
            'latitude' => carbon_get_post_meta($property_id, 'property_latitude'),
            'longitude' => carbon_get_post_meta($property_id, 'property_longitude'),
            'bedrooms' => carbon_get_post_meta($property_id, 'property_bedrooms'),
            'bathrooms' => carbon_get_post_meta($property_id, 'property_bathrooms'),
            'max_guests' => carbon_get_post_meta($property_id, 'property_max_guests'),
            'nightly_rate' => carbon_get_post_meta($property_id, 'property_nightly_rate'),
            'booking_url' => carbon_get_post_meta($property_id, 'property_booking_url'),
            'is_featured' => carbon_get_post_meta($property_id, 'property_is_featured'),
        ];
        
        // Get featured image
        $featured_image_id = carbon_get_post_meta($property_id, 'property_featured_image');
        if ($featured_image_id) {
            $fields['featured_image'] = new \Timber\Image($featured_image_id);
        }
        
        return $fields;
    }
    
    /**
     * Get taxonomy icon text
     * 
     * This retrieves the emoji icon for a taxonomy term
     *
     * @param int $term_id Term ID
     * @param string $taxonomy Taxonomy name
     * @return string Icon text (emoji)
     */
    public function get_taxonomy_icon($term_id, $taxonomy) {
        // First try the specific field name
        $icon_meta_key = '';
        switch ($taxonomy) {
            case 'property_type':
                $icon_meta_key = 'property_type_icon_text';
                break;
            case 'location':
                $icon_meta_key = 'location_image_text';
                break;
            case 'amenity':
                $icon_meta_key = 'amenity_icon_text';
                break;
            case 'business_type':
                $icon_meta_key = 'business_type_icon_text';
                break;
            case 'article_type':
                $icon_meta_key = 'article_type_icon_text';
                break;
            case 'user_type':
                $icon_meta_key = 'user_type_icon_text';
                break;
            default:
                $icon_meta_key = $taxonomy . '_icon_text';
        }
        
        // Get the icon from term meta
        $icon = get_term_meta($term_id, $icon_meta_key, true);
        
        // If not found, try the generic field name
        if (empty($icon)) {
            $icon = get_term_meta($term_id, $taxonomy . '_icon_text', true);
        }
        
        return $icon;
    }
}

// Initialize Carbon Fields Helper
MI_Carbon_Fields_Helper::get_instance();
