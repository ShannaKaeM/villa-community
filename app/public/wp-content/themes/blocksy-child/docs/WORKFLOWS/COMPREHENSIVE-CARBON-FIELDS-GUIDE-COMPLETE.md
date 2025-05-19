# Comprehensive Carbon Fields Implementation Guide

## Overview

This guide provides a complete walkthrough of our Carbon Fields implementation for the property management system. It covers installation, setup, custom post types, taxonomies, custom fields, importers, and block creation.

## Table of Contents

1. [Carbon Fields Setup](#carbon-fields-setup)
2. [Custom Post Types and Taxonomies](#custom-post-types-and-taxonomies)
3. [Custom Fields Implementation](#custom-fields-implementation)
4. [Data Importers](#data-importers)
5. [Block System](#block-system)
6. [Implementation Workflow](#implementation-workflow)
7. [Troubleshooting](#troubleshooting)

## Carbon Fields Setup

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

## Implementation Workflow

Here's our recommended workflow for implementing this system on a new site:

### Phase 1: Foundation Setup

1. **Install Carbon Fields**
   - Choose between plugin or Composer installation
   - Set up the initialization file

2. **Register Custom Post Types and Taxonomies**
   - Create the CPT registration file
   - Create the taxonomy registration file
   - Add them to functions.php

3. **Create Custom Fields**
   - Create field files for each post type
   - Set up term meta for taxonomies
   - Test in the WordPress admin

### Phase 2: Data Population

1. **Import Taxonomy Terms**
   - Create the taxonomy importer
   - Import all taxonomy terms
   - Verify terms appear correctly

2. **Import Content**
   - Create importers for each post type
   - Import sample content
   - Verify content appears correctly

### Phase 3: Block Creation

1. **Set Up Block Structure**
   - Create the block directory structure
   - Set up block registration

2. **Create Block Templates**
   - Create the main template
   - Create variant templates
   - Style the block

3. **Test and Refine**
   - Test the block in the editor
   - Verify data display
   - Refine styling and functionality

## Troubleshooting

### Common Issues and Solutions

1. **"Call to undefined method"**
   - Make sure Carbon Fields is properly installed or activated
   - Check that the Carbon Fields boot function is called correctly

2. **"Class not found"**
   - The autoloader is not working or Carbon Fields is not installed
   - Verify the Composer setup

3. **Block not appearing in editor**
   - Check for JavaScript errors in the console
   - Verify block registration is working
   - Make sure block.json is properly formatted

4. **Custom fields not saving**
   - Check that you're using the correct field names
   - Verify that Carbon Fields is initialized before field registration

5. **Taxonomy terms not importing**
   - Check CSV format and field mapping
   - Verify taxonomy registration

### Performance Optimization

1. **Minimize database queries**
   - Use `carbon_get_the_post_meta()` for the current post
   - Batch process imports

2. **Cache expensive operations**
   - Use transients for query results
   - Consider object caching

3. **Optimize block rendering**
   - Minimize the data passed to templates
   - Use conditional loading for assets

## Conclusion

This guide provides a comprehensive approach to implementing a property management system using Carbon Fields. By following the structured workflow and leveraging the code examples, you can create a robust, maintainable system that meets your specific needs.

Remember to test thoroughly at each stage and refer to the [Carbon Fields documentation](https://docs.carbonfields.net/) for more detailed information on specific features.

---

*Last updated: May 19, 2025*
