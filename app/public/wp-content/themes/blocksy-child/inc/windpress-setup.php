<?php
/**
 * WindPress Integration for Tailwind CSS v4
 * 
 * This file handles the integration of WindPress with CSS variables
 * defined directly in style.css using the @theme directive.
 */

// We're using direct CSS variables in style.css with @theme directive
// No theme.json check needed
function mi_check_theme_json() {
    // Using direct CSS approach with @theme directive instead of theme.json
    return false;
}
// No actions needed - WindPress will use CSS variables defined in style.css

/**
 * Generate CSS variables from theme.json
 * 
 * This function can be used if you need to manually generate CSS variables
 * from theme.json, but WindPress should handle this automatically.
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




