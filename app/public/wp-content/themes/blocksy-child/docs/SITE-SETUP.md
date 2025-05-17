Comprehensive Blocksy + Timber + Carbon Fields Integration Guide
Table of Contents
Project Overview
Initial Setup
Installing Required Plugins
Blocksy Child Theme Configuration
Timber Integration
Carbon Fields Integration
Theme.json Setup
WindPress Configuration
File Structure Setup
Custom Post Types
Custom Block Development
Integrating with WooCommerce
Deployment and Performance
Project Overview
This guide outlines a comprehensive approach to building a WordPress site using:

Blocksy Theme as the foundation
Timber/Twig for template separation
Carbon Fields for custom fields
WindPress (Tailwind CSS) for styling
Custom Blocks with a modular structure
This approach aligns with Daniel's architecture while providing a clear path for your site development.

Initial Setup
Step 1: Install WordPress
Ensure you have a working WordPress installation.

Step 2: Install Blocksy Theme
Go to Appearance > Themes > Add New
Search for "Blocksy"
Install and activate the Blocksy theme
Installing Required Plugins
Step 3: Install Core Plugins
Install and activate the following plugins:

Blocksy Companion
Essential for extended Blocksy functionality
Go to Plugins > Add New > Search "Blocksy Companion"
Timber
For Twig templating
Go to Plugins > Add New > Search "Timber"
Carbon Fields
For custom fields
Go to Plugins > Add New > Upload Plugin
Download from Carbon Fields GitHub
Upload the ZIP file
WindPress (or Tailwind CSS setup)
This may be a custom setup rather than a plugin
Step 4: Install Additional Plugins (Optional)
Advanced Custom Fields (alternative to Carbon Fields if preferred)
WooCommerce (if e-commerce is needed)
Yoast SEO or similar for SEO
Blocksy Child Theme Configuration
Step 5: Create Child Theme Structure
Create a directory: wp-content/themes/blocksy-child/
Create the following files:
style.css (with theme information)
functions.php (main functions file)
Step 6: Configure style.css
css
CopyInsert
/*
Theme Name: Blocksy Child
Theme URI: https://creativethemes.com/blocksy/
Template: blocksy
Author: Your Name
Author URI: https://yourwebsite.com
Description: Child theme for Blocksy
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: blocksy-child
*/

/* Add your custom styles below this line */
Step 7: Basic functions.php
php
CopyInsert
<?php
/**
 * Blocksy Child Theme Functions
 */

// Enqueue parent theme stylesheet
function blocksy_child_enqueue_styles() {
    wp_enqueue_style(
        'blocksy-parent-style',
        get_template_directory_uri() . '/style.css',
        array(),
        wp_get_theme('blocksy')->get('Version')
    );
    
    wp_enqueue_style(
        'blocksy-child-style',
        get_stylesheet_uri(),
        array('blocksy-parent-style'),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'blocksy_child_enqueue_styles');

// Include other files
require_once get_stylesheet_directory() . '/inc/setup.php';
Step 8: Create Directory Structure
Create these directories in your child theme:

CopyInsert
blocksy-child/
├── blocks/           # Custom blocks
├── css/              # Additional CSS files
├── inc/              # PHP includes
│   ├── setup.php
│   ├── timber-setup.php
│   └── carbon-fields-setup.php
├── views/            # Twig templates
│   ├── blocks/       # Block templates
│   ├── components/   # Reusable components
│   └── templates/    # Page templates
├── functions.php
└── style.css
Timber Integration
Step 9: Create Timber Setup File
Create inc/timber-setup.php:

php
CopyInsert
<?php
/**
 * Timber setup and configuration
 */

if (!class_exists('Timber\\Timber')) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin.</p></div>';
    });
    return;
}

// Initialize Timber
Timber\Timber::init();

// Set Timber directories
Timber::$dirname = ['views', 'views/blocks', 'views/components', 'views/templates'];

/**
 * Add to Timber context
 */
add_filter('timber/context', function($context) {
    // Add site-wide data
    $context['site'] = new Timber\Site();
    
    // Add Blocksy options to Timber context
    $context['blocksy_options'] = function_exists('blocksy_get_options') ? blocksy_get_options() : [];
    
    // Add menu locations
    $context['menu'] = [
        'primary' => new Timber\Menu('primary'),
        'footer' => new Timber\Menu('footer')
    ];
    
    // Add design tokens
    $context['design_tokens'] = function($token_name, $default = '') {
        return mi_get_design_token($token_name, $default);
    };
    
    return $context;
});

/**
 * Get design token from theme.json
 */
function mi_get_design_token($token_name, $default = '') {
    static $tokens = null;
    
    if ($tokens === null) {
        $theme_json_path = get_stylesheet_directory() . '/theme.json';
        if (file_exists($theme_json_path)) {
            $tokens = json_decode(file_get_contents($theme_json_path), true);
        } else {
            $tokens = [];
        }
    }
    
    return isset($tokens[$token_name]) ? $tokens[$token_name] : $default;
}
Step 10: Create Base Twig Templates
Create views/base.twig:

twig
CopyInsert
<!DOCTYPE html>
<html {{ function('language_attributes') }}>
<head>
    {{ function('wp_head') }}
</head>
<body {{ function('body_class') }}>
    {{ function('do_action', 'blocksy:header:before') }}
    {{ function('blocksy_output_header') }}
    {{ function('do_action', 'blocksy:header:after') }}

    <main id="main" class="site-main">
        {% block content %}
            <!-- Content will be replaced by child templates -->
        {% endblock %}
    </main>

    {{ function('do_action', 'blocksy:footer:before') }}
    {{ function('blocksy_output_footer') }}
    {{ function('do_action', 'blocksy:footer:after') }}
    
    {{ function('wp_footer') }}
</body>
</html>
Create views/templates/index.twig:

twig
CopyInsert
{% extends "base.twig" %}

{% block content %}
    <div class="container">
        {% for post in posts %}
            {% include 'components/card.twig' with { post: post } %}
        {% endfor %}
        
        {{ function('blocksy_pagination') }}
    </div>
{% endblock %}
Step 11: Create Template PHP Files
Create index.php in your child theme:

php
CopyInsert
<?php
/**
 * Main template file
 */
$context = Timber\Timber::context();
$context['posts'] = Timber::get_posts();

Timber::render('templates/index.twig', $context);
Carbon Fields Integration
Step 12: Create Carbon Fields Setup File
Create inc/carbon-fields-setup.php:

php
CopyInsert
<?php
/**
 * Carbon Fields setup and configuration
 */

use Carbon_Fields\Container;
use Carbon_Fields\Field;

// Boot Carbon Fields
add_action('after_setup_theme', 'crb_load');
function crb_load() {
    \Carbon_Fields\Carbon_Fields::boot();
}

// Register fields
add_action('carbon_fields_register_fields', 'mi_register_carbon_fields');
function mi_register_carbon_fields() {
    // Theme Options
    Container::make('theme_options', __('Theme Options', 'blocksy-child'))
        ->add_tab(__('General', 'blocksy-child'), array(
            Field::make('text', 'mi_copyright_text', __('Copyright Text', 'blocksy-child'))
                ->set_default_value('© ' . date('Y') . ' Your Company. All rights reserved.'),
            Field::make('image', 'mi_default_og_image', __('Default Social Share Image', 'blocksy-child'))
                ->set_help_text('Used when sharing pages on social media')
        ))
        ->add_tab(__('Social Media', 'blocksy-child'), array(
            Field::make('text', 'mi_facebook_url', __('Facebook URL', 'blocksy-child')),
            Field::make('text', 'mi_twitter_url', __('Twitter URL', 'blocksy-child')),
            Field::make('text', 'mi_instagram_url', __('Instagram URL', 'blocksy-child'))
        ));
    
    // We'll add more fields for post types and blocks later
}

/**
 * Helper function to get Carbon Fields value
 */
function mi_get_theme_option($option_name, $default = '') {
    $value = carbon_get_theme_option($option_name);
    return !empty($value) ? $value : $default;
}
Step 13: Add Carbon Fields to Timber Context
Add to inc/timber-setup.php:

php
CopyInsert
// Inside the timber/context filter
$context['carbon'] = [
    'theme_option' => function($option_name, $default = '') {
        return mi_get_theme_option($option_name, $default);
    }
];
Theme.json Setup
Step 14: Create theme.json
Create theme.json in your child theme root:

json
CopyInsert
{
  "__global_colors": "Global colors from Blocksy palette",
  "color1": "#1A2E2A",
  "color2": "#5D8A8C",
  "color3": "#C4A587",
  "color4": "#EFF3F5",
  "color5": "#6B7280",
  
  "__semantic_colors": "Semantic color mapping",
  "colorPrimary": "var(--color1)",
  "colorBase": "var(--color2)",
  "colorAccent": "var(--color3)",
  "colorLight": "var(--color4)",
  "colorText": "var(--color5)",
  "colorWhite": "#FFFFFF",
  "colorBlack": "#000000",
  
  "backgroundColor": "var(--colorWhite)",
  "textColor": "var(--colorText)",
  "headingsColor": "var(--colorPrimary)",
  "linkColor": "var(--colorBase)",
  
  "__typography_tokens": "Typography tokens",
  "fontFamily": "'Inter', sans-serif",
  "fontFamilyHeadings": "'Montserrat', sans-serif",
  "fontSize": "1rem",
  "fontSizeH1": "2.5rem",
  "fontSizeH2": "2rem",
  "fontSizeH3": "1.75rem",
  "fontSizeH4": "1.5rem",
  "fontSizeH5": "1.25rem",
  "fontSizeH6": "1rem",
  
  "__spacing_tokens": "Spacing tokens",
  "contentSpacingBase": "1rem",
  "contentSpacingVertical": "2rem",
  "contentSpacingHorizontal": "2rem",
  "containerWidth": "1200px",
  "containerNarrowWidth": "750px",
  "containerWideWidth": "1600px"
}
Step 15: Create Blocksy Customizer Integration
Create inc/customizer-integration.php:

php
CopyInsert
<?php
/**
 * Blocksy Customizer Integration
 */

/**
 * Sync Blocksy customizer settings with theme.json
 */
function mi_sync_blocksy_with_theme_json() {
    // Path to theme.json
    $theme_json_path = get_stylesheet_directory() . '/theme.json';
    
    // Get Blocksy settings
    $blocksy_palette = get_theme_mod('colorPalette', []);
    $typography_settings = get_theme_mod('typography', []);
    $container_width = get_theme_mod('container_width', '1200px');
    
    // Load theme.json
    if (file_exists($theme_json_path)) {
        $theme_json = json_decode(file_get_contents($theme_json_path), true);
    } else {
        $theme_json = [];
    }
    
    // Update global colors in theme.json based on Blocksy palette
    if (!empty($blocksy_palette)) {
        if (isset($blocksy_palette['color1'])) $theme_json['color1'] = $blocksy_palette['color1'];
        if (isset($blocksy_palette['color2'])) $theme_json['color2'] = $blocksy_palette['color2'];
        if (isset($blocksy_palette['color3'])) $theme_json['color3'] = $blocksy_palette['color3'];
        if (isset($blocksy_palette['color4'])) $theme_json['color4'] = $blocksy_palette['color4'];
        if (isset($blocksy_palette['color5'])) $theme_json['color5'] = $blocksy_palette['color5'];
    }
    
    // Update typography settings
    if (!empty($typography_settings)) {
        if (isset($typography_settings['baseFont']['family'])) {
            $theme_json['fontFamily'] = $typography_settings['baseFont']['family'];
        }
        if (isset($typography_settings['headingsFont']['family'])) {
            $theme_json['fontFamilyHeadings'] = $typography_settings['headingsFont']['family'];
        }
    }
    
    // Update spacing settings
    $theme_json['containerWidth'] = $container_width;
    
    // Write updated theme.json
    file_put_contents($theme_json_path, json_encode($theme_json, JSON_PRETTY_PRINT));
}

// Run sync when customizer settings are saved
add_action('customize_save_after', 'mi_sync_blocksy_with_theme_json');
WindPress Configuration
Step 16: Create WindPress Configuration
Create css/windpress-theme.css:

css
CopyInsert
/* Windpress Theme CSS - Combining Windpress defaults with custom theme */
@layer theme, base, components, utilities;

/* Import Tailwind layers */
@import "tailwindcss/theme.css" layer(theme) theme(static);
/* @import "tailwindcss/preflight.css" layer(base); - Commented out to avoid conflicts */
@import "tailwindcss/utilities.css" layer(utilities);

/* Import Tailwind and plugins */
@import "tailwindcss";
@plugin '@tailwindcss/typography' { strategy: 'class'; }

/* Import theme tokens from JSON file */
@theme "../theme.json";
Step 17: Enqueue WindPress CSS
Add to functions.php:

php
CopyInsert
// Enqueue WindPress CSS
function mi_enqueue_windpress() {
    wp_enqueue_style(
        'mi-windpress',
        get_stylesheet_directory_uri() . '/css/windpress-theme.css',
        array('blocksy-child-style'),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'mi_enqueue_windpress');
File Structure Setup
Step 18: Update setup.php
Create inc/setup.php:

php
CopyInsert
<?php
/**
 * Theme setup and includes
 */

// Include other setup files
require_once get_stylesheet_directory() . '/inc/timber-setup.php';
require_once get_stylesheet_directory() . '/inc/carbon-fields-setup.php';
require_once get_stylesheet_directory() . '/inc/customizer-integration.php';

// Include custom post types
require_once get_stylesheet_directory() . '/inc/post-types.php';

// Include custom blocks
$blocks_dir = get_stylesheet_directory() . '/blocks';
if (is_dir($blocks_dir)) {
    $block_folders = glob($blocks_dir . '/*', GLOB_ONLYDIR);
    foreach ($block_folders as $block_folder) {
        $block_php = $block_folder . '/Block.php';
        if (file_exists($block_php)) {
            require_once $block_php;
        }
    }
}
Custom Post Types
Step 19: Create Post Types File
Create inc/post-types.php:

php
CopyInsert
<?php
/*