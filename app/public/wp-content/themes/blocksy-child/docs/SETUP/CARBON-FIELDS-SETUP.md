# Carbon Fields Setup Guide

This document explains how to properly set up Carbon Fields for your WordPress theme.

## Option 1: Install Carbon Fields as a Plugin (Recommended for Development)

1. Download the Carbon Fields plugin from the WordPress repository:
   - Go to your WordPress admin → Plugins → Add New
   - Search for "Carbon Fields"
   - Install and activate the plugin by Carbon Fields

2. Alternative: Download from GitHub
   - Visit https://github.com/htmlburger/carbon-fields-plugin/releases
   - Download the latest release
   - Upload and install via the WordPress admin

## Option 2: Install Carbon Fields via Composer (Recommended for Production)

1. Make sure Composer is installed on your system
2. Navigate to your theme directory in the terminal
3. Create a composer.json file if you don't have one:

```json
{
  "require": {
    "htmlburger/carbon-fields": "^3.3"
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

## Troubleshooting

If you encounter errors related to Carbon Fields:

1. **"Call to undefined method"**: This usually means Carbon Fields is not properly installed or activated.
2. **"Class not found"**: The autoloader is not working or Carbon Fields is not installed.

### Common Solutions:

- Make sure Carbon Fields is properly installed either as a plugin or via Composer
- Check that the Carbon Fields boot function is called correctly
- Verify that you're using the correct namespace for Carbon Fields classes
- Ensure that Carbon Fields is loaded before any code that depends on it

## Using Carbon Fields

Once Carbon Fields is properly installed, you can use it to:

1. Create custom fields for posts, pages, and custom post types
2. Add theme options
3. Create term meta fields for taxonomies
4. Build custom blocks for the Gutenberg editor

See the [Carbon Fields documentation](https://docs.carbonfields.net/) for more information.
