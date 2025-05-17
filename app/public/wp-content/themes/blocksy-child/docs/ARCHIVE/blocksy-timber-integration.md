# Blocksy + Timber Integration Guide

## Overview

This document outlines the integration of Timber with the Blocksy theme framework, creating a powerful combination that leverages Blocksy's customizer and performance optimizations with Timber's template system.

## Why Timber with Blocksy?

Combining Timber with Blocksy provides several advantages:

1. **Separation of Concerns**: Timber's Twig templates separate PHP logic from presentation
2. **Cleaner Templates**: Twig syntax is more readable and maintainable than PHP templates
3. **Blocksy Customizer**: Retain all the power of Blocksy's customizer options
4. **Performance**: Maintain Blocksy's performance optimizations
5. **Modular Development**: Create reusable components with clean interfaces

## Implementation Steps

### 1. Install Required Plugins

- Timber (available on WordPress.org)
- Blocksy Companion (for extended Blocksy functionality)

### 2. Setup Timber in Blocksy Child Theme

Add the following to your `functions.php`:

```php
/**
 * Initialize Timber in Blocksy Child Theme
 */
if (class_exists('Timber\\Timber')) {
    // Set Timber directories
    Timber\Timber::init();
    
    // Define template directories
    Timber::$dirname = ['views', 'templates', 'twig'];
    
    // Add to Twig context
    add_filter('timber/context', function($context) {
        // Add Blocksy options to Timber context
        $context['blocksy_options'] = function_exists('blocksy_get_options') ? blocksy_get_options() : [];
        
        // Add menu locations
        $context['menu'] = [
            'primary' => new Timber\Menu('primary'),
            'footer' => new Timber\Menu('footer')
        ];
        
        return $context;
    });
}
```

### 3. Create Timber Template Structure

```
blocksy-child/
├── views/
│   ├── base.twig           # Base template with header/footer
│   ├── index.twig          # Main template
│   ├── single.twig         # Single post template
│   ├── page.twig           # Page template
│   ├── archive.twig        # Archive template
│   ├── components/         # Reusable components
│   │   ├── hero.twig
│   │   ├── card.twig
│   │   └── cta.twig
│   └── blocks/             # Custom block templates
│       ├── mi-hero.twig
│       └── mi-feature-grid.twig
```

### 4. Create Template Files

**base.twig**:
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

**index.twig**:
```twig
{% extends "base.twig" %}

{% block content %}
    <div class="container">
        {% for post in posts %}
            {% include 'components/card.twig' with { post: post } %}
        {% endfor %}
        
        {{ function('blocksy_pagination') }}
    </div>
{% endblock %}
```

### 5. Override WordPress Template Files

Create template files in your child theme that use Timber:

**index.php**:
```php
<?php
/**
 * Main template file
 */
$context = Timber\Timber::context();
$context['posts'] = Timber::get_posts();

Timber::render('index.twig', $context);
```

**single.php**:
```php
<?php
/**
 * Single post template
 */
$context = Timber\Timber::context();
$post = Timber::get_post();
$context['post'] = $post;

// Get related posts using Blocksy's function if available
if (function_exists('blocksy_related_posts')) {
    $context['related_posts'] = blocksy_related_posts($post->ID);
}

Timber::render('single.twig', $context);
```

### 6. Accessing Blocksy Features in Timber

**Accessing Customizer Options**:
```twig
{# In your Twig template #}
{% set container_width = blocksy_options.container_width|default('1290px') %}

<div class="container" style="max-width: {{ container_width }}">
    {# Content here #}
</div>
```

**Using Blocksy Hooks**:
```twig
{# Output content at a Blocksy hook location #}
{{ function('do_action', 'blocksy:content:top') }}
```

### 7. Creating Custom Blocks with Timber

**Block Registration (PHP)**:
```php
/**
 * Register custom blocks
 */
function register_custom_blocks() {
    register_block_type('mi/hero', [
        'editor_script' => 'mi-blocks',
        'render_callback' => 'render_mi_hero_block',
        'attributes' => [
            'title' => ['type' => 'string'],
            'content' => ['type' => 'string'],
            'backgroundImage' => ['type' => 'object'],
            'alignment' => ['type' => 'string', 'default' => 'center']
        ]
    ]);
}
add_action('init', 'register_custom_blocks');

/**
 * Render hero block with Timber
 */
function render_mi_hero_block($attributes, $content) {
    $context = Timber\Timber::context();
    $context['attributes'] = $attributes;
    $context['content'] = $content;
    
    return Timber::compile('blocks/mi-hero.twig', $context);
}
```

**Block Template (Twig)**:
```twig
{# blocks/mi-hero.twig #}
<div class="mi-hero align-{{ attributes.alignment }}">
    {% if attributes.backgroundImage %}
        <div class="mi-hero__background" style="background-image: url('{{ attributes.backgroundImage.url }}')"></div>
    {% endif %}
    
    <div class="mi-hero__content">
        {% if attributes.title %}
            <h2 class="mi-hero__title">{{ attributes.title }}</h2>
        {% endif %}
        
        <div class="mi-hero__text">
            {{ content }}
        </div>
    </div>
</div>
```

## Integrating with Design System

To integrate with the JSON-based design system:

1. Create a helper function to access design tokens:
```php
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
```

2. Make tokens available in Twig:
```php
add_filter('timber/context', function($context) {
    $context['design_tokens'] = function($token_name, $default = '') {
        return mi_get_design_token($token_name, $default);
    };
    
    return $context;
});
```

3. Use tokens in templates:
```twig
<h1 style="color: {{ design_tokens('headingsColor', '#000000') }}">
    {{ post.title }}
</h1>
```

## Best Practices

1. **Keep PHP Logic Separate**: Use Timber controllers to prepare data before passing to templates
2. **Use Blocksy Hooks**: Leverage Blocksy's hook system for theme customization
3. **Maintain Block Structure**: Follow a consistent pattern for block development
4. **Cache Timber Templates**: Enable Timber caching in production
5. **Document Design Tokens**: Keep a reference of available design tokens for developers

## Conclusion

This integration provides the best of both worlds: Blocksy's robust theme framework with extensive customizer options and Timber's clean, maintainable templating system. The result is a highly flexible, developer-friendly WordPress theme that maintains excellent performance and user experience.
