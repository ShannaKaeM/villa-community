<?php
/**
 * WindPress Integration for Tailwind CSS
 * 
 * This file handles the integration of WindPress with the theme.json file
 * to expose design tokens as CSS variables and Tailwind utility classes.
 */

// Enqueue WindPress CSS
function mi_enqueue_windpress() {
    // Check if theme.json exists
    $theme_json_path = get_stylesheet_directory() . '/theme.json';
    if (!file_exists($theme_json_path)) {
        add_action('admin_notices', function() {
            echo '<div class="error"><p>theme.json not found. WindPress integration requires a valid theme.json file.</p></div>';
        });
        return;
    }
    
    // Enqueue the main WindPress CSS file
    wp_enqueue_style(
        'mi-windpress',
        get_stylesheet_directory_uri() . '/css/windpress-theme.css',
        array('blocksy-child-style'),
        wp_get_theme()->get('Version')
    );
    
    // Add inline CSS with CSS variables from theme.json
    $theme_json = json_decode(file_get_contents($theme_json_path), true);
    if (!empty($theme_json)) {
        $css_variables = mi_generate_css_variables_from_theme_json($theme_json);
        wp_add_inline_style('mi-windpress', $css_variables);
    }
}
add_action('wp_enqueue_scripts', 'mi_enqueue_windpress');
add_action('admin_enqueue_scripts', 'mi_enqueue_windpress');

/**
 * Generate CSS variables from theme.json
 */
function mi_generate_css_variables_from_theme_json($theme_json) {
    $css = ":root {\n";
    
    foreach ($theme_json as $key => $value) {
        // Skip keys that start with "__" as they are comments
        if (substr($key, 0, 2) === "__") {
            continue;
        }
        
        // Add the CSS variable
        $css .= "  --" . $key . ": " . $value . ";\n";
    }
    
    $css .= "}\n";
    return $css;
}

/**
 * Create directory for WindPress CSS if it doesn't exist
 */
function mi_create_windpress_directory() {
    $css_dir = get_stylesheet_directory() . '/css';
    if (!file_exists($css_dir)) {
        wp_mkdir_p($css_dir);
    }
}
add_action('after_setup_theme', 'mi_create_windpress_directory');

/**
 * Create the WindPress CSS file if it doesn't exist
 */
function mi_create_windpress_css_file() {
    $css_file = get_stylesheet_directory() . '/css/windpress-theme.css';
    if (!file_exists($css_file)) {
        $css_content = file_get_contents(get_stylesheet_directory() . '/docs/WINDPRESS-SETTINGS.css');
        file_put_contents($css_file, $css_content);
    }
}
add_action('after_setup_theme', 'mi_create_windpress_css_file');

/**
 * Add a fallback CSS file with utility classes that match theme.json tokens
 * This ensures the classes work even if WindPress plugin isn't active
 */
function mi_add_fallback_utility_classes() {
    $theme_json_path = get_stylesheet_directory() . '/theme.json';
    if (!file_exists($theme_json_path)) {
        return;
    }
    
    $theme_json = json_decode(file_get_contents($theme_json_path), true);
    if (empty($theme_json)) {
        return;
    }
    
    $css = "";
    
    // Generate utility classes for common properties
    foreach ($theme_json as $key => $value) {
        // Skip keys that start with "__" as they are comments
        if (substr($key, 0, 2) === "__") {
            continue;
        }
        
        // Background color utilities
        $css .= ".bg-{$key} { background-color: var(--{$key}); }\n";
        
        // Text color utilities
        $css .= ".text-{$key} { color: var(--{$key}); }\n";
        
        // Border color utilities
        $css .= ".border-{$key} { border-color: var(--{$key}); }\n";
        
        // Font utilities for typography tokens
        if (strpos($key, 'font') === 0) {
            $css .= ".font-{$key} { font: var(--{$key}); }\n";
        }
        
        // Spacing utilities
        if (strpos($key, 'spacing') === 0) {
            $css .= ".p-{$key} { padding: var(--{$key}); }\n";
            $css .= ".m-{$key} { margin: var(--{$key}); }\n";
        }
    }
    
    // Add the fallback CSS as inline style
    wp_add_inline_style('mi-windpress', $css);
}
add_action('wp_enqueue_scripts', 'mi_add_fallback_utility_classes', 20);
add_action('admin_enqueue_scripts', 'mi_add_fallback_utility_classes', 20);
