# Composer-Based WordPress Development Setup Guide

## Overview

This guide provides detailed instructions for setting up a professional WordPress development environment using Composer for dependency management. This approach aligns with Daniel's architecture and ensures a maintainable, modular codebase.

## Prerequisites

Before starting, ensure you have:

1. **Composer** installed (version 2.0+)
   - Current version: Composer 2.8.8 (as detected on your system)
   - Check with: `composer --version`
   - Install from: [getcomposer.org](https://getcomposer.org/download/)

2. **PHP** 7.4+ (8.0+ recommended)
   - Current version: PHP 8.4.6 (as detected on your system)
   - Required for Timber 2.x and Carbon Fields

3. **WordPress** with Blocksy theme installed
   - Blocksy Pro plugin should be activated

## Step 1: Initialize Composer in Your Theme

Navigate to your Blocksy child theme directory and create a `composer.json` file:

```bash
cd /Users/shannamiddleton/Local\ Drive\ Mac/mi\ agency/miProjects/ihost10/app/public/wp-content/themes/blocksy-child/
```

Create a `composer.json` file with the following content:

```json
{
    "name": "mi-agency/blocksy-child",
    "description": "Blocksy Child Theme with Timber and Carbon Fields integration",
    "type": "wordpress-theme",
    "require": {
        "timber/timber": "^2.0",
        "htmlburger/carbon-fields": "^3.6"
    },
    "autoload": {
        "psr-4": {
            "MiAgency\\": "inc/"
        }
    },
    "config": {
        "allow-plugins": {
            "composer/installers": true
        }
    }
}
```

## Step 2: Install Dependencies

Run the following command in your theme directory:

```bash
composer install
```

This will:
- Install Timber 2.x (latest stable version)
- Install Carbon Fields 3.6+ (latest stable version)
- Create a `vendor` directory with all dependencies
- Generate an autoloader
- Create a `composer.lock` file (important for version consistency)

## Step 3: Set Up Theme Structure

Create the following directory structure:

```
blocksy-child/
├── blocks/           # Custom blocks
├── css/              # Additional CSS files
├── inc/              # PHP includes
│   ├── setup.php     # Theme setup
│   ├── timber-setup.php  # Timber configuration
│   └── carbon-fields-setup.php  # Carbon Fields configuration
├── views/            # Twig templates
│   ├── blocks/       # Block templates
│   ├── components/   # Reusable components
│   └── templates/    # Page templates
├── composer.json     # Dependency management
├── functions.php     # Main functions file
└── style.css         # Theme stylesheet
```

## Step 4: Configure Timber

Create `inc/timber-setup.php` with:

```php
<?php
/**
 * Timber setup and configuration
 * Using Composer-based Timber (not the plugin)
 */

// Load Composer autoloader if it exists
if (file_exists(get_stylesheet_directory() . '/vendor/autoload.php')) {
    require_once get_stylesheet_directory() . '/vendor/autoload.php';
}

// Check if Timber exists
if (!class_exists('Timber\\Timber')) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>Timber not found. Make sure you have run "composer install" in your theme directory.</p></div>';
    });
    return;
}

// Initialize Timber
Timber\\Timber::init();

// Set Timber directories
Timber::$dirname = ['views', 'views/blocks', 'views/components', 'views/templates'];

/**
 * Add to Timber context
 */
add_filter('timber/context', function($context) {
    // Add site-wide data
    $context['site'] = new Timber\\Site();
    
    // Add Blocksy options to Timber context
    $context['blocksy_options'] = function_exists('blocksy_get_options') ? blocksy_get_options() : [];
    
    // Add menu locations
    $context['menu'] = [
        'primary' => new Timber\\Menu('primary'),
        'footer' => new Timber\\Menu('footer')
    ];
    
    return $context;
});
```

## Step 5: Configure Carbon Fields

Create `inc/carbon-fields-setup.php` with:

```php
<?php
/**
 * Carbon Fields setup and configuration
 */

use Carbon_Fields\\Container;
use Carbon_Fields\\Field;

// Boot Carbon Fields
add_action('after_setup_theme', 'crb_load');
function crb_load() {
    // Carbon Fields is already loaded via Composer autoloader
    \Carbon_Fields\\Carbon_Fields::boot();
}

// Register fields
add_action('carbon_fields_register_fields', 'mi_register_carbon_fields');
function mi_register_carbon_fields() {
    // Theme Options
    Container::make('theme_options', __('Theme Options', 'blocksy-child'))
        ->add_tab(__('General', 'blocksy-child'), array(
            Field::make('text', 'mi_copyright_text', __('Copyright Text', 'blocksy-child'))
                ->set_default_value('© ' . date('Y') . ' Your Company. All rights reserved.')
        ));
    
    // We'll add more fields later
}

/**
 * Helper function to get Carbon Fields value
 */
function mi_get_theme_option($option_name, $default = '') {
    $value = carbon_get_theme_option($option_name);
    return !empty($value) ? $value : $default;
}
```

## Step 6: Update functions.php

Update your `functions.php` to include:

```php
<?php
/**
 * Blocksy Child Theme Functions
 */

// Load Composer autoloader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

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

// Include setup files
require_once get_stylesheet_directory() . '/inc/timber-setup.php';
require_once get_stylesheet_directory() . '/inc/carbon-fields-setup.php';
require_once get_stylesheet_directory() . '/inc/setup.php';

// WindPress integration - Uncomment when ready to activate
// require_once get_stylesheet_directory() . '/inc/windpress-setup.php';
```

## Step 7: Create Basic Twig Templates

Create `views/base.twig`:

```twig
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
```

Create `views/templates/index.twig`:

```twig
{% extends "base.twig" %}

{% block content %}
    <div class="container">
        {% for post in posts %}
            <article class="post">
                <h2><a href="{{ post.link }}">{{ post.title }}</a></h2>
                <div class="post-content">
                    {{ post.preview }}
                </div>
            </article>
        {% endfor %}
        
        {{ function('blocksy_pagination') }}
    </div>
{% endblock %}
```

## Step 8: Create index.php

Create `index.php` in your child theme:

```php
<?php
/**
 * Main template file
 */

// Load Timber
$context = Timber\\Timber::context();
$context['posts'] = Timber::get_posts();

Timber::render('templates/index.twig', $context);
```

## Troubleshooting

### Common Issues

1. **Composer Not Found**
   - Make sure Composer is installed globally
   - Try running with full path: `/usr/local/bin/composer` or `php /path/to/composer.phar`

2. **Timber Not Loading**
   - Check that autoloader is being included correctly
   - Verify Timber was installed: `ls -la vendor/timber`
   - Check for PHP errors in the error log

3. **Carbon Fields Not Working**
   - Ensure Carbon Fields was installed: `ls -la vendor/htmlburger`
   - Make sure the autoloader is being included before any Carbon Fields code runs

### Version Conflicts

If you encounter version conflicts, you can specify exact versions in your `composer.json`:

```json
"require": {
    "timber/timber": "2.3.2",
    "htmlburger/carbon-fields": "3.6.0"
}
```

Then run `composer update` to update the dependencies.

## Next Steps

After setting up the Composer-based environment:

1. Create custom blocks following Daniel's structure
2. Set up theme.json for design tokens
3. Configure WindPress for Tailwind CSS integration
4. Create custom post types with Carbon Fields

## References

- [Timber Documentation](https://timber.github.io/docs/)
- [Carbon Fields Documentation](https://docs.carbonfields.net/)
- [Composer Documentation](https://getcomposer.org/doc/)
- [Blocksy Documentation](https://creativethemes.com/blocksy/docs/)
