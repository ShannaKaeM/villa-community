# Comprehensive Carbon Fields, Timber, and Tailwind CSS Implementation Guide

## Overview

This guide provides a complete walkthrough of our integrated implementation using Carbon Fields for custom fields, Timber/Twig for templating, and Tailwind CSS for styling. It covers installation, setup, custom post types, taxonomies, custom fields, block creation with Twig templates, and direct Tailwind CSS styling.

## Table of Contents

1. [Setup and Installation](#setup-and-installation)
2. [Custom Post Types and Taxonomies](#custom-post-types-and-taxonomies)
3. [Custom Fields Implementation](#custom-fields-implementation)
4. [Timber and Twig Integration](#timber-and-twig-integration)
5. [Tailwind CSS Implementation](#tailwind-css-implementation)
6. [Block System with Twig Templates](#block-system-with-twig-templates)
7. [Implementation Workflow](#implementation-workflow)
8. [Troubleshooting](#troubleshooting)

## Setup and Installation

### Installation Options

#### Option 1: Install Carbon Fields as a Plugin (Recommended for Development)

1. Download the Carbon Fields plugin from the WordPress repository:
   - Go to your WordPress admin → Plugins → Add New
   - Search for "Carbon Fields"
   - Install and activate the plugin by Carbon Fields

2. Alternative: Download from GitHub
   - Visit https://github.com/htmlburger/carbon-fields-plugin/releases
   - Download the latest release
   - Upload and install via the WordPress admin

#### Option 2: Install Carbon Fields via Composer (Recommended for Production)

1. Make sure Composer is installed on your system
2. Navigate to your theme directory in the terminal
3. Create a composer.json file if you don't have one:

```json
{
  "require": {
    "htmlburger/carbon-fields": "^3.3",
    "timber/timber": "^1.19"
  },
  "autoload": {
    "files": [
      "vendor/htmlburger/carbon-fields/core/functions.php"
    ]
  }
}
```

4. Run Composer to install Carbon Fields:

```bash
composer install
```

5. Make sure your theme's functions.php includes the Composer autoloader:

```php
// Load Composer autoloader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}
```

### Initialization in WordPress

Create a dedicated file for initializing Carbon Fields:

```php
// File: /inc/carbon-fields-setup.php

<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

// Boot Carbon Fields
add_action('after_setup_theme', 'crb_load');
function crb_load() {
    \Carbon_Fields\Carbon_Fields::boot();
}

// Load field definitions
add_action('carbon_fields_register_fields', 'mi_register_custom_fields');
function mi_register_custom_fields() {
    // Field definitions will go here
    // Or include separate files for different field groups
    require_once get_stylesheet_directory() . '/inc/mi-property-fields.php';
    require_once get_stylesheet_directory() . '/inc/mi-business-fields.php';
    require_once get_stylesheet_directory() . '/inc/mi-article-fields.php';
    require_once get_stylesheet_directory() . '/inc/mi-user-profile-fields.php';
}
```

Include this file in your functions.php:

```php
// Carbon Fields setup - this MUST come first before any other includes
require_once get_stylesheet_directory() . '/inc/carbon-fields-setup.php';
```

## Custom Post Types and Taxonomies

### Custom Post Type Registration

Create a file for registering custom post types:

```php
// File: /inc/mi-cpt-registration.php

<?php
// Register Property CPT
function mi_register_property_cpt() {
    $labels = array(
        'name'               => 'Properties',
        'singular_name'      => 'Property',
        'menu_name'          => 'Properties',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Property',
        'edit_item'          => 'Edit Property',
        'new_item'           => 'New Property',
        'view_item'          => 'View Property',
        'search_items'       => 'Search Properties',
        'not_found'          => 'No properties found',
        'not_found_in_trash' => 'No properties found in Trash',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'publicly_queryable'  => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'property'),
        'capability_type'     => 'post',
        'has_archive'         => true,
        'hierarchical'        => false,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-building',
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest'        => true,
    );

    register_post_type('property', $args);
}
add_action('init', 'mi_register_property_cpt');

// Similar functions for business, article, and user_profile CPTs
// ...

// Include the other CPT registration functions here
```

### Taxonomy Registration

Create a file for registering taxonomies:

```php
// File: /inc/mi-taxonomy-registration.php

<?php
// Register Property Type Taxonomy
function mi_register_property_type_taxonomy() {
    $labels = array(
        'name'              => 'Property Types',
        'singular_name'     => 'Property Type',
        'search_items'      => 'Search Property Types',
        'all_items'         => 'All Property Types',
        'parent_item'       => 'Parent Property Type',
        'parent_item_colon' => 'Parent Property Type:',
        'edit_item'         => 'Edit Property Type',
        'update_item'       => 'Update Property Type',
        'add_new_item'      => 'Add New Property Type',
        'new_item_name'     => 'New Property Type Name',
        'menu_name'         => 'Property Types',
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'property-type'),
        'show_in_rest'      => true,
    );

    register_taxonomy('property_type', array('property'), $args);
}
add_action('init', 'mi_register_property_type_taxonomy');

// Similar functions for location, amenity, business_type, article_type, and user_type taxonomies
// ...

// Include the other taxonomy registration functions here
```

Include these files in your functions.php:

```php
// Include CPT and taxonomy registration
require_once get_stylesheet_directory() . '/inc/mi-cpt-registration.php';
require_once get_stylesheet_directory() . '/inc/mi-taxonomy-registration.php';
```
## Custom Fields Implementation

### Property Fields

Create a dedicated file for property fields:

```php
// File: /inc/mi-property-fields.php

<?php
use Carbon_Fields\Container;
use Carbon_Fields\Field;

// Register Property Fields
function mi_register_property_fields() {
    Container::make('post_meta', 'Property Details')
        ->where('post_type', '=', 'property')
        ->add_tab('Location', array(
            Field::make('text', 'property_address', 'Address')
                ->set_width(50),
            Field::make('text', 'property_city', 'City')
                ->set_width(25),
            Field::make('text', 'property_state', 'State')
                ->set_width(25),
            Field::make('text', 'property_zip', 'ZIP Code')
                ->set_width(25),
            Field::make('text', 'property_country', 'Country')
                ->set_width(25)
                ->set_default_value('USA'),
            Field::make('text', 'property_latitude', 'Latitude')
                ->set_width(25),
            Field::make('text', 'property_longitude', 'Longitude')
                ->set_width(25),
        ))
        ->add_tab('Property Details', array(
            Field::make('text', 'property_bedrooms', 'Bedrooms')
                ->set_attribute('type', 'number')
                ->set_width(25),
            Field::make('text', 'property_bathrooms', 'Bathrooms')
                ->set_attribute('type', 'number')
                ->set_width(25),
            Field::make('text', 'property_square_feet', 'Square Feet')
                ->set_attribute('type', 'number')
                ->set_width(25),
            Field::make('text', 'property_max_guests', 'Max Guests')
                ->set_attribute('type', 'number')
                ->set_width(25),
            Field::make('checkbox', 'property_is_featured', 'Featured Property')
                ->set_width(25),
            Field::make('checkbox', 'property_is_claimed', 'Claimed Property')
                ->set_width(25),
        ))
        ->add_tab('Pricing', array(
            Field::make('text', 'property_nightly_rate', 'Nightly Rate')
                ->set_attribute('type', 'number')
                ->set_width(25),
            Field::make('text', 'property_weekly_rate', 'Weekly Rate')
                ->set_attribute('type', 'number')
                ->set_width(25),
            Field::make('text', 'property_monthly_rate', 'Monthly Rate')
                ->set_attribute('type', 'number')
                ->set_width(25),
            Field::make('text', 'property_cleaning_fee', 'Cleaning Fee')
                ->set_attribute('type', 'number')
                ->set_width(25),
            Field::make('text', 'property_booking_url', 'Booking URL')
                ->set_width(50),
        ))
        ->add_tab('Gallery', array(
            Field::make('media_gallery', 'property_gallery', 'Property Gallery')
                ->set_type(array('image')),
        ));
}
add_action('carbon_fields_register_fields', 'mi_register_property_fields');
```

### Taxonomy Term Meta

Add custom fields to taxonomy terms:

```php
// Add to mi-property-fields.php or create a separate file

// Register Term Meta for Property Types
function mi_register_property_type_term_meta() {
    Container::make('term_meta', 'Property Type Options')
        ->where('term_taxonomy', '=', 'property_type')
        ->add_fields(array(
            Field::make('text', 'property_type_icon_text', 'Icon (Emoji or Text)')
                ->set_help_text('Enter an emoji or text to represent this property type'),
            Field::make('image', 'property_type_icon_image', 'Icon Image'),
            Field::make('textarea', 'property_type_description', 'Description')
                ->set_rows(3),
            Field::make('text', 'property_type_display_order', 'Display Order')
                ->set_attribute('type', 'number')
                ->set_default_value(10),
        ));
}
add_action('carbon_fields_register_fields', 'mi_register_property_type_term_meta');

// Similar functions for other taxonomies (location, amenity, etc.)
```

## Data Importers

### Taxonomy Importer

Create a file for importing taxonomy terms:

```php
// File: /inc/mi-taxonomy-importer.php

<?php
// Add admin menu item
function mi_add_taxonomy_importer_menu() {
    add_submenu_page(
        'edit.php?post_type=property',
        'Import Taxonomies',
        'Import Taxonomies',
        'manage_options',
        'mi-taxonomy-importer',
        'mi_taxonomy_importer_page'
    );
}
add_action('admin_menu', 'mi_add_taxonomy_importer_menu');

// Create the importer page
function mi_taxonomy_importer_page() {
    // Handle form submission
    if (isset($_POST['mi_import_taxonomies']) && isset($_FILES['taxonomy_csv'])) {
        mi_process_taxonomy_import();
    }
    
    // Display the form
    ?>
    <div class="wrap">
        <h1>Import Taxonomy Terms</h1>
        <form method="post" enctype="multipart/form-data">
            <table class="form-table">
                <tr>
                    <th scope="row"><label for="taxonomy_csv">CSV File</label></th>
                    <td>
                        <input type="file" name="taxonomy_csv" id="taxonomy_csv" accept=".csv" required>
                        <p class="description">Upload a CSV file with taxonomy terms.</p>
                    </td>
                </tr>
            </table>
            <?php submit_button('Import Terms', 'primary', 'mi_import_taxonomies'); ?>
        </form>
    </div>
    <?php
}

// Process the import
function mi_process_taxonomy_import() {
    // Implementation details for CSV parsing and term creation
    // ...
}

// Helper function to create terms programmatically
function mi_import_taxonomies() {
    // Implementation for programmatic import
    // ...
}
```

### Property Importer

Create a file for importing properties:

```php
// File: /inc/mi-property-importer.php

<?php
// Add admin menu item
function mi_add_property_importer_menu() {
    add_submenu_page(
        'edit.php?post_type=property',
        'Import Properties',
        'Import Properties',
        'manage_options',
        'mi-property-importer',
        'mi_property_importer_page'
    );
}
add_action('admin_menu', 'mi_add_property_importer_menu');

// Create the importer page
function mi_property_importer_page() {
    // Handle form submission
    if (isset($_POST['mi_import_properties']) && isset($_FILES['property_csv'])) {
        mi_process_property_import();
    }
    
    // Display the form
    ?>
    <div class="wrap">
        <h1>Import Properties</h1>
        <form method="post" enctype="multipart/form-data">
            <table class="form-table">
                <tr>
                    <th scope="row"><label for="property_csv">CSV File</label></th>
                    <td>
                        <input type="file" name="property_csv" id="property_csv" accept=".csv" required>
                        <p class="description">Upload a CSV file with property data.</p>
                    </td>
                </tr>
            </table>
            <?php submit_button('Import Properties', 'primary', 'mi_import_properties'); ?>
        </form>
    </div>
    <?php
}

// Process the import
function mi_process_property_import() {
    // Implementation details for CSV parsing and property creation
    // ...
}

// Helper function to create properties programmatically
function mi_import_properties() {
    // Implementation for programmatic import
    // ...
}
```

## Block System

### Block Structure

Our block system follows a standardized structure:

```
/blocks/
  /mi-card/
    index.php           # Block registration and rendering
    block.json          # Block metadata
    mi-card.php         # Main template
    /assets/
      /js/
        editor.js       # Block editor script
      /css/
        editor.css      # Block editor styles
        style.css       # Frontend styles
    /variants/
      property.php      # Property variant template
      business.php      # Business variant template
      article.php       # Article variant template
      user.php          # User variant template
```

### Block Registration

Here's how we register a block:

```php
// File: /blocks/mi-card/index.php

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
```
### Block Rendering

Here's how we render a block:

```php
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
            
            // Get taxonomies
            $taxonomies = array('property_type', 'location', 'amenity');
            foreach ($taxonomies as $taxonomy) {
                $terms = get_the_terms($post->ID, $taxonomy);
                if ($terms && !is_wp_error($terms)) {
                    $post_data[$taxonomy] = array();
                    foreach ($terms as $term) {
                        $post_data[$taxonomy][] = array(
                            'id' => $term->term_id,
                            'name' => $term->name,
                            'slug' => $term->slug,
                            'icon' => get_term_meta($term->term_id, $taxonomy . '_icon_text', true),
                        );
                    }
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
```

### Block Editor JavaScript

Here's how we set up the block editor interface:

```javascript
/**
 * MI Card Block Editor Script
 */

(function() {
    const { registerBlockType } = wp.blocks;
    const { __ } = wp.i18n;
    const { InspectorControls, useBlockProps } = wp.blockEditor;
    const { PanelBody, RangeControl, Placeholder } = wp.components;
    const { Fragment, createElement } = wp.element;
    
    // Register the block
    registerBlockType('mi/card', {
        edit: function(props) {
            const { attributes, setAttributes } = props;
            const blockProps = useBlockProps();
            
            return createElement(
                Fragment,
                null,
                createElement(
                    InspectorControls,
                    null,
                    createElement(
                        PanelBody,
                        { title: __('Settings'), initialOpen: true },
                        createElement(RangeControl, {
                            label: __('Number of Properties'),
                            value: attributes.count,
                            onChange: function(value) { setAttributes({ count: value }); },
                            min: 1,
                            max: 12
                        }),
                        createElement(RangeControl, {
                            label: __('Columns'),
                            value: attributes.columns,
                            onChange: function(value) { setAttributes({ columns: value }); },
                            min: 1,
                            max: 4
                        })
                    )
                ),
                createElement(
                    'div',
                    blockProps,
                    createElement(
                        Placeholder,
                        {
                            icon: 'index-card',
                            label: __('MI Property Card'),
                            instructions: __('Displays the latest properties in a card layout.')
                        },
                        createElement(
                            'p',
                            null,
                            __('This block will show') + ' ' + attributes.count + ' ' + __('properties in') + ' ' + attributes.columns + ' ' + __('columns.')
                        )
                    )
                )
            );
        },
        
        save: function() {
            return null; // Dynamic block rendered in PHP
        }
    });
})();
```

### Block Template

Here's how we structure the main template:

```php
<?php
/**
 * MI Card Template
 *
 * @param array $args Template arguments.
 * @param object $block Block object.
 * @param array $content_data Content data for the card.
 */

// Set defaults based on block attributes
$defaults = [
    'variant' => 'property',
    'layout' => 'grid',
    'columns' => 3,
    'showImage' => true,
    'showTitle' => true,
    'showExcerpt' => true,
    'showMeta' => true,
    'showAmenities' => true,
    'showLocation' => true,
    'showPrice' => true,
    'showButton' => true,
    'buttonText' => 'View Details',
    'className' => '',
];

// Merge defaults with args
$args = wp_parse_args($args, $defaults);

// Convert camelCase to snake_case for template variables
$show_image = $args['showImage'];
$show_title = $args['showTitle'];
$show_excerpt = $args['showExcerpt'];
$show_meta = $args['showMeta'];
$show_amenities = $args['showAmenities'];
$show_location = $args['showLocation'];
$show_price = $args['showPrice'];
$show_button = $args['showButton'];
$button_text = $args['buttonText'];

// Get the variant
$variant = $args['variant'];

// Get the class name
$class_name = 'mi-card';

// Add variant class
$class_name .= ' mi-card--' . $variant;

// Add layout class
$class_name .= ' mi-card--' . $args['layout'];

// Add columns class
$class_name .= ' mi-card--columns-' . $args['columns'];

// Add custom class if provided
if (!empty($args['className'])) {
    $class_name .= ' ' . $args['className'];
}

// Get the block ID
$block_id = isset($block->attributes['id']) ? $block->attributes['id'] : 'mi-card-' . uniqid();
?>

<div id="<?php echo esc_attr($block_id); ?>" class="<?php echo esc_attr($class_name); ?>">
    <?php if (!empty($content_data)) : ?>
        <div class="mi-card__container">
            <?php foreach ($content_data as $item) : ?>
                <?php 
                // Include the variant template
                $variant_template = __DIR__ . '/variants/' . $variant . '.php';
                if (file_exists($variant_template)) {
                    include $variant_template;
                } else {
                    // Fallback to default template
                    include __DIR__ . '/variants/default.php';
                }
                ?>
            <?php endforeach; ?>
        </div>
    <?php else : ?>
        <div class="mi-card__empty">
            <p>No content found. Please check your content source settings.</p>
        </div>
    <?php endif; ?>
</div>
```

## Timber and Twig Integration

### Installing Timber

Timber is installed alongside Carbon Fields via Composer as shown in the installation section above. The `composer.json` file includes both packages:

```json
{
  "require": {
    "htmlburger/carbon-fields": "^3.3",
    "timber/timber": "^1.19"
  },
  "autoload": {
    "files": [
      "vendor/htmlburger/carbon-fields/core/functions.php"
    ]
  }
}
```

### Initializing Timber

Create a dedicated file for initializing Timber:

```php
// File: /inc/timber-setup.php

<?php
// Initialize Timber
if (!class_exists('Timber')) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin or install via Composer.</p></div>';
    });
    return;
}

// Set up Timber locations
Timber::$locations = array(
    get_stylesheet_directory() . '/views',
    get_stylesheet_directory() . '/blocks',
);

// Add Twig functions
add_filter('timber/twig', 'mi_add_twig_functions');
function mi_add_twig_functions($twig) {
    // Add a function to get block wrapper attributes
    $twig->addFunction(new Twig\TwigFunction('get_block_wrapper_attributes', function() {
        return get_block_wrapper_attributes();
    }));
    
    return $twig;
}
```

Include this file in your functions.php:

```php
// Timber setup
require_once get_stylesheet_directory() . '/inc/timber-setup.php';
```

### Creating Twig Templates

Create a directory structure for your Twig templates:

```
/views
  /components
    card.twig
    button.twig
  /layouts
    base.twig
    single.twig
    archive.twig
  /partials
    header.twig
    footer.twig
/blocks
  mi-card.twig
  property.twig
```

### Example Twig Template

Here's an example of a property card template using Twig:

```twig
{# /blocks/property.twig #}
{% set data = attributes ? attributes : mock %}
<div {{ mb.get_block_wrapper_attributes() }}>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{{ data.columns|default(3) }} gap-6">
        {% for property in data.properties %}
            <div class="bg-white rounded-[var(--radius-btn)] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative">
                    {% if property.image_url %}
                        <img src="{{ property.image_url }}" 
                            alt="{{ property.title }}" 
                            class="w-full h-60 object-cover">
                    {% endif %}
                    
                    {% if property.price %}
                        <div class="absolute bottom-0 left-0 bg-secondary text-white py-[var(--spacing-btn-y)] px-[var(--spacing-btn-x)] font-semibold rounded-tr-[var(--radius-btn)]">
                            <span>{{ property.price }}</span>
                        </div>
                    {% endif %}
                    
                    {% if property.status %}
                        <div class="absolute top-4 right-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-semibold shadow-sm">
                            {{ property.status }}
                        </div>
                    {% endif %}
                    
                    {% if property.featured %}
                        <div class="absolute top-4 left-4 bg-emphasis text-white py-1 px-3 rounded-full text-sm font-semibold shadow-sm">
                            Featured
                        </div>
                    {% endif %}
                </div>
                
                <div class="p-6">
                    <h3 class="text-xl font-bold text-base-darkest mb-2">
                        <a href="{{ property.link }}" class="hover:text-secondary transition-colors">
                            {{ property.title }}
                        </a>
                    </h3>
                    
                    {% if property.location %}
                        <div class="flex items-center text-base mb-3">
                            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <span>{{ property.location }}</span>
                        </div>
                    {% endif %}
                    
                    {% if property.excerpt %}
                        <p class="text-base-light text-sm mb-4">{{ property.excerpt }}</p>
                    {% endif %}
                    
                    <a href="{{ property.link }}" class="block w-full bg-secondary hover:bg-secondary-hover text-white text-center py-[var(--spacing-btn-y)] px-[var(--spacing-btn-x)] rounded-[var(--radius-btn)] font-semibold transition-colors shadow-[var(--shadow-btn)]">
                        View Property
                    </a>
                </div>
            </div>
        {% else %}
            <div class="col-span-full text-center p-8 bg-subtle-lightest rounded-[var(--radius-btn)]">
                <p class="text-base">No properties found.</p>
            </div>
        {% endfor %}
    </div>
</div>
```

## Tailwind CSS Implementation

### Setting Up Tailwind CSS

Create a configuration file for Tailwind CSS:

```js
// File: tailwind.config.js

module.exports = {
  content: [
    './blocks/**/*.{php,twig}',
    './views/**/*.{php,twig}',
    './templates/**/*.{php,twig}',
    './inc/**/*.php',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        emphasis: 'var(--color-emphasis)',
        subtle: 'var(--color-subtle)',
        base: 'var(--color-base)',
        'primary-hover': 'var(--color-primary-hover)',
        'secondary-hover': 'var(--color-secondary-hover)',
        'emphasis-hover': 'var(--color-emphasis-hover)',
      },
      borderRadius: {
        btn: 'var(--radius-btn)',
      },
      boxShadow: {
        btn: 'var(--shadow-btn)',
      },
    },
  },
  plugins: [],
};
```

### CSS Variables

Create a file for your CSS variables:

```css
/* File: /assets/css/variables.css */

@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme) theme(static);
@import "tailwindcss/utilities.css" layer(utilities);

/* Root Variables - Exposing All Blocksy Globals */
:root {
  /* Blocksy Color Palette */
  --theme-palette-color-1: #439696; /* Primary */
  --theme-palette-color-2: #39629b; /* Secondary */
  --theme-palette-color-3: #439696; /* Emphasis */
  --theme-palette-color-4: #bcbab3; /* Subtle */
  --theme-palette-color-5: #7d7d7d; /* Base */
  --theme-palette-color-6: #000000; /* Black */
  --theme-palette-color-7: #ffffff; /* White */

  /* Button Styling Variables */
  --spacing-btn-y: 0.5rem;  /* Equivalent to py-2 */
  --spacing-btn-x: 1rem;    /* Equivalent to px-4 */
  --radius-btn: 0.375rem;   /* Equivalent to rounded-md */
  --shadow-btn: 0 1px 2px 0 rgb(0 0 0 / 0.05); /* Equivalent to shadow-sm */
  
  /* Focus Ring Variables */
  --shadow-btn-focus-ring: 0 0 0 3px; /* For the ring offset part */
  --focus-ring-offset-width: 2px;
}

/* Tailwind Theme */
@theme {
  /* Primary Color Scale */
  --color-primary: var(--theme-palette-color-1);
  --color-primary-lightest: oklch(from var(--color-primary) calc(l + 0.1) c h);
  --color-primary-light: oklch(from var(--color-primary) calc(l + 0.05) c h);
  --color-primary-med: var(--color-primary);
  --color-primary-dark: oklch(from var(--color-primary) calc(l - 0.05) c h);
  --color-primary-darkest: oklch(from var(--color-primary) calc(l - 0.1) c h);
  
  /* Secondary Color Scale */
  --color-secondary: var(--theme-palette-color-2);
  --color-secondary-lightest: oklch(from var(--color-secondary) calc(l + 0.1) c h);
  --color-secondary-light: oklch(from var(--color-secondary) calc(l + 0.05) c h);
  --color-secondary-med: var(--color-secondary);
  --color-secondary-dark: oklch(from var(--color-secondary) calc(l - 0.05) c h);
  --color-secondary-darkest: oklch(from var(--color-secondary) calc(l - 0.1) c h);
  
  /* State Colors for Interactive Elements */
  --color-primary-hover: var(--color-primary-dark);
  --color-primary-active: var(--color-primary-darkest);
  --color-secondary-hover: var(--color-secondary-dark);
  --color-secondary-active: var(--color-secondary-darkest);
  --color-emphasis-hover: var(--color-emphasis-dark);
  --color-emphasis-active: var(--color-emphasis-darkest);
}
```

### Using Tailwind Classes in Templates

Instead of creating separate CSS files for styling, use Tailwind CSS classes directly in your Twig templates:

```twig
<div class="bg-white rounded-[var(--radius-btn)] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="p-6">
        <h3 class="text-xl font-bold text-base-darkest mb-2">
            <a href="{{ property.link }}" class="hover:text-secondary transition-colors">
                {{ property.title }}
            </a>
        </h3>
        <p class="text-base-light text-sm mb-4">{{ property.excerpt }}</p>
        <a href="{{ property.link }}" class="block w-full bg-secondary hover:bg-secondary-hover text-white text-center py-[var(--spacing-btn-y)] px-[var(--spacing-btn-x)] rounded-[var(--radius-btn)] font-semibold transition-colors shadow-[var(--shadow-btn)]">
            View Property
        </a>
    </div>
</div>
```

## Block System with Twig Templates

### Block Structure

Create a directory structure for your blocks:

```
/blocks
  /mi-card
    block.json
    index.php
    mi-card.twig
    property.twig
    editor.js
```

### Block Registration

Create a block.json file for your block:

```json
{
  "$schema": "https://schemas.wp.org/trunk/block.json",
  "apiVersion": 2,
  "name": "mi/card",
  "title": "MI Card",
  "category": "design",
  "icon": "grid-view",
  "description": "Display property cards with various layouts and styles",
  "keywords": ["card", "property", "grid"],
  "version": "1.0.0",
  "textdomain": "mi-blocks",
  "attributes": {
    "variant": {
      "type": "string",
      "default": "property"
    },
    "postId": {
      "type": "number",
      "default": 0
    },
    "count": {
      "type": "number",
      "default": 3
    },
    "columns": {
      "type": "number",
      "default": 3
    }
  },
  "supports": {
    "html": false,
    "align": ["wide", "full"]
  },
  "editorScript": "file:./editor.js",
  "style": "file:./style.css"
}
```

### Block Rendering with Timber

Create an index.php file for your block that uses Timber to render the Twig template:

```php
<?php
/**
 * MI Card Block
 * 
 * A simple property card component using Timber/Twig and Tailwind CSS
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register the block
 */
function mi_register_card_block() {
    register_block_type(__DIR__);
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
function render_block_mi_card($attributes, $content, $block) {
    // Check if Timber is active
    if (!class_exists('Timber')) {
        return '<div class="error">Timber plugin is required for this block.</div>';
    }

    // Default attributes
    $attributes = wp_parse_args($attributes, array(
        'variant' => 'property',
        'postId' => 0,
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
    $context['block'] = $block;
    $context['mb'] = $block;
    
    // Add data for the template
    $context['mock'] = [
        'properties' => $properties
    ];

    // Render the Twig template
    $templates = ['mi-card.twig'];
    
    if ($attributes['variant'] !== 'default' && file_exists(__DIR__ . '/' . $attributes['variant'] . '.twig')) {
        array_unshift($templates, $attributes['variant'] . '.twig');
    }
    
    return Timber::compile($templates, $context);
}

/**
 * Prepare property data.
 *
 * @param WP_Post $post The post object.
 * @return array The prepared data.
 */
function mi_prepare_property_data($post) {
    $title = get_the_title($post);
    $excerpt = has_excerpt($post) ? get_the_excerpt($post) : wp_trim_words(get_the_content('', false, $post), 20);
    $permalink = get_permalink($post);
    $image_id = get_post_thumbnail_id($post);
    $image_url = $image_id ? wp_get_attachment_image_url($image_id, 'large') : '';
    
    $data = array(
        'title' => $title,
        'excerpt' => $excerpt,
        'link' => $permalink,
        'image_url' => $image_url
    );
    
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
```

## Implementation Workflow

Here's our recommended workflow for implementing this integrated system using Carbon Fields, Timber/Twig, and Tailwind CSS:

### Phase 1: Foundation Setup

1. **Install Dependencies**
   - Install Carbon Fields and Timber via Composer
   - Set up Tailwind CSS with proper configuration
   - Configure CSS variables for theme integration

2. **Initialize Core Components**
   - Set up Carbon Fields initialization
   - Configure Timber with proper template locations
   - Add custom Twig functions for block integration

3. **Register Custom Post Types and Taxonomies**
   - Create the CPT registration file
   - Create the taxonomy registration file
   - Add them to functions.php

4. **Create Custom Fields**
   - Create field files for each post type
   - Set up term meta for taxonomies
   - Test in the WordPress admin

### Phase 2: Template Structure

1. **Set Up Twig Template Structure**
   - Create the views directory structure
   - Set up component, layout, and partial templates
   - Create reusable components with Tailwind classes

2. **Create Base Templates**
   - Implement base.twig with proper HTML structure
   - Create header and footer partials
   - Set up archive and single templates

3. **Style with Tailwind CSS**
   - Use Tailwind utility classes directly in templates
   - Leverage CSS variables for theme consistency
   - Create custom component classes as needed

### Phase 3: Data Population

1. **Import Taxonomy Terms**
   - Create the taxonomy importer
   - Import all taxonomy terms
   - Verify terms appear correctly

2. **Import Content**
   - Create importers for each post type
   - Import sample content
   - Verify content appears correctly with Timber templates

### Phase 4: Block Creation

1. **Set Up Block Structure**
   - Create the block directory structure with Twig templates
   - Set up block.json for registration
   - Create editor.js for block controls

2. **Implement Block Rendering**
   - Create index.php to handle block registration and data preparation
   - Set up Timber context for block rendering
   - Create Twig templates for different block variants

3. **Style Blocks with Tailwind**
   - Use Tailwind utility classes directly in Twig templates
   - Ensure responsive design with proper grid classes
   - Implement hover and focus states

4. **Test and Refine**
   - Test blocks in the WordPress editor
   - Verify data display and styling
   - Optimize performance and accessibility

## Troubleshooting

### Common Issues and Solutions

1. **Carbon Fields Issues**
   - **"Call to undefined method"**: Make sure Carbon Fields is properly installed or activated
   - **"Class not found"**: Check that the autoloader is working and Carbon Fields is installed
   - **Custom fields not saving**: Verify field names and initialization order

2. **Timber/Twig Issues**
   - **"Timber not activated"**: Ensure Timber is properly installed via Composer or as a plugin
   - **"Template not found"**: Check Timber::$locations paths and file existence
   - **Twig syntax errors**: Validate your Twig syntax with proper opening/closing tags
   - **Function not found**: Ensure custom Twig functions are properly registered

3. **Tailwind CSS Issues**
   - **Classes not applying**: Check that Tailwind is properly processing your template files
   - **Custom variables not working**: Verify CSS variables are defined in your theme
   - **Responsive classes not working**: Ensure media queries are properly configured

4. **Block Integration Issues**
   - **Block not appearing in editor**: Check block.json format and registration
   - **Timber context not passing to Twig**: Verify context array structure
   - **Block attributes not available in template**: Check attribute naming in block.json and Twig

5. **Data Integration Issues**
   - **Carbon Fields data not appearing in Twig**: Check field names and data preparation
   - **Taxonomy terms not displaying**: Verify term retrieval and context passing
   - **Images not loading**: Check image URL generation and Twig template usage

### Performance Optimization

1. **Timber/Twig Optimization**
   - Enable Twig template caching in production
   - Use Timber::render() instead of Timber::compile() when possible
   - Minimize context data passed to templates

2. **Tailwind Optimization**
   - Use PurgeCSS in production to remove unused styles
   - Consider using JIT mode for faster development
   - Split large templates into smaller components

3. **Carbon Fields Optimization**
   - Use `carbon_get_the_post_meta()` for the current post
   - Batch process imports and updates
   - Cache expensive field operations

4. **Block Rendering Optimization**
   - Conditionally load block assets
   - Use block.json asset registration for better dependency management
   - Implement view caching for frequently used blocks

### Debugging Tools

1. **Timber Debugging**
   - Use `{{ dump(variable) }}` in Twig templates to inspect variables
   - Enable Timber debug mode with `Timber::$cache = false;`
   - Check Timber logs in the WordPress debug.log

2. **Tailwind Debugging**
   - Use browser inspector to check applied classes
   - Enable Tailwind inspector plugin for development
   - Check compiled CSS for expected utility classes

3. **WordPress Block Debugging**
   - Use browser console to check for block registration errors
   - Inspect block attributes with `console.log(props)` in editor.js
   - Use the WordPress block validator in the editor

## Conclusion

This guide provides a comprehensive approach to implementing a property management system using an integrated stack of Carbon Fields for custom fields, Timber/Twig for templating, and Tailwind CSS for styling. This modern workflow offers several advantages:

1. **Separation of Concerns**
   - Carbon Fields handles data structure and management
   - Timber/Twig provides clean, maintainable templates
   - Tailwind CSS offers utility-first styling without custom CSS files

2. **Developer Experience**
   - Twig templates are more readable and maintainable than PHP templates
   - Tailwind classes provide immediate visual feedback without context switching
   - Carbon Fields offers a user-friendly interface for content editors

3. **Performance Benefits**
   - Timber's template caching improves rendering speed
   - Tailwind's utility classes can be purged for production
   - Block-based architecture allows for component reuse

4. **Maintainability**
   - Clear separation between data, presentation, and styling
   - Consistent design system through CSS variables and Tailwind config
   - Reusable components across the site

By following the structured workflow in this guide and leveraging the code examples, you can create a robust, maintainable property management system that meets your specific needs while providing an excellent experience for both developers and content editors.

### Additional Resources

- [Carbon Fields Documentation](https://docs.carbonfields.net/)
- [Timber Documentation](https://timber.github.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)

---

*Last updated: May 19, 2025*
