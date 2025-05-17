# Design System Roadmap & Guide

## 1. Project Overview & Technology Stack

This document outlines the design system and frontend workflow for your WordPress project. The technology stack is designed for efficiency, maintainability, and seamless integration with AI-driven development:

*   **WordPress Custom Theme**: The foundation of the website, providing the core structure.
*   **WindPress**: A plugin or build process used to compile Tailwind CSS specifically for WordPress, ensuring optimal performance and integration.
*   **Tailwind CSS (v4)**: A utility-first CSS framework. This approach allows building complex designs directly in HTML using small, single-purpose classes. Tailwind v4's engine inherently generates CSS on-demand (building on the principles of the JIT compiler from previous versions but even more integrated and performant), ensuring highly optimized stylesheets. The system leverages this on-demand capability along with the `@theme` directive.
*   **Carbon Fields**: A WordPress plugin used to create custom fields in the WordPress admin area, allowing for easy content management that can be tied to the design system.
*   **JSON Theme File**: A central `*.json` file (e.g., `furniture-theme.json`) acts as the single source of truth for all design tokens.
*   **Windsurf with Cascade**: The AI agentic coding assistant (that's me!) used for prompting, generating code, and iterating on the theme and blocks based on the structured design tokens.

## 2. Core Design System Philosophy: The JSON Theme File

The cornerstone of this design system is a **central JSON file** that defines all design tokens. This approach ensures:

*   **Single Source of Truth**: All colors, spacing, typography, and other style parameters are defined in one place.
*   **Consistency**: Guarantees uniform application of design across the entire website.
*   **Maintainability**: Design changes are made in the JSON file and automatically propagate.
*   **AI-Readiness**: Structured JSON is easily parsed and understood by AI agents like Cascade, facilitating accurate code generation and theme modifications through prompts.

Our current reference implementation is `furniture-theme.json`.

## 3. Anatomy of the Theme JSON (using `furniture-theme.json` as an example)

The theme JSON file is meticulously structured to build up the design system layer by layer. Let's look at `furniture-theme.json`:

### A. Foundational Color Palette

This is the absolute base of your color system. These are raw color values that typically represent your primary brand colors or a versatile palette to build upon.

*Example from `furniture-theme.json`:*
```json
  "__foundation_palette_colors": "Foundation palette colors from Blocksy Furniture (approximated)",
  "theme-palette-color-1": "#1A2E2A", // Dark Teal/Green
  "theme-palette-color-2": "#5D8A8C", // Muted Cyan/Blue
  "theme-palette-color-3": "#D4A05F", // Warm Gold/Orange
  "theme-palette-color-4": "#F8F5F0", // Off-White/Cream (Subtle Background)
  "theme-palette-color-5": "#6B7280"  // Mid Gray (Base for text or accents)
```
These `theme-palette-color-N` values are intended to be relatively stable. The theme's overall look and feel can be dramatically changed by adjusting just these few hex codes.

### B. Semantic Color Mapping

Semantic colors give meaning and roles to your foundational palette. This abstraction layer is crucial because it allows you to change which foundational color plays a certain role (e.g., what "primary" means) without rewriting all your component styles.

*Example from `furniture-theme.json`:*
```json
  "__semantic_color_mapping": "Semantic color mapping",
  "color-primary": "var(--theme-palette-color-1)",
  "color-secondary": "var(--theme-palette-color-2)",
  "color-emphasis": "var(--theme-palette-color-3)",
  "color-subtle": "var(--theme-palette-color-4)", // Often neutral
  "color-base": "var(--theme-palette-color-5)",   // Often for site background, text and graysacle elements. 
  "color-white": "#FFFFFF",                       // Absolute white
  "color-black": "#000000"                        // Absolute black
```
Here, `color-primary` isn't a hex code itself, but a reference to one of the palette colors. If `theme-palette-color-1` changes, `color-primary` automatically updates.

### C. Component & Utility Tokens

These tokens define the appearance of specific UI elements (buttons, text, backgrounds, forms) or provide general utilities. They are built using the semantic colors.

*Example for Text from `furniture-theme.json`:*
```json
  "__text_tokens": "Text tokens",
  "text-heading": "var(--color-primary)",
  "text-body": "var(--color-base)",
  // ...
  "text-on-primary": "var(--color-white)", // Text color for use on primary backgrounds
  "text-on-secondary": "var(--color-white)"
```

*Example for Buttons from `furniture-theme.json`:*
```json
  "__button_tokens": "Button tokens",
  "button-primary-bg": "var(--color-primary)",
  "button-primary-text": "var(--text-on-primary)",
  // ... other button types and states
```

### D. Deriving Colors with Modifiers

A key feature is the ability to derive color variations directly in the JSON using Tailwind-compatible modifiers. This keeps the JSON concise and powerful. Common modifiers include:
*   `/l+[value]` (lighten)
*   `/l-[value]` (darken)
*   `/s+[value]` (saturate)
*   `/s-[value]` (desaturate)
*   `/[opacity]` (e.g., `/50` for 50% opacity)

*Example for Button States from `furniture-theme.json`:*
```json
  "button-primary-hover-bg": "var(--color-primary)/l+0.1",    // Primary color, 10% lighter
  "button-primary-active-bg": "var(--color-primary)/l-0.1",   // Primary color, 10% darker
  "button-primary-disabled-bg": "var(--color-primary)/50"     // Primary color, 50% opacity
```
When Tailwind processes this, it calculates the final hex code for `button-primary-hover-bg` (e.g., if `color-primary` is `#1A2E2A`, this becomes approximately `#203A36`) and makes it available.

## 4. Tailwind CSS Integration via WindPress

### A. Importing the Theme

Your JSON theme file is imported into your main Tailwind CSS file (e.g., `winidpress.css` managed by WindPress) using the `@theme` directive.

Given `winidpress.css` and `furniture-theme.json` are in the same directory (`/Users/shannamiddleton/Local Drive Mac/mi agency/miProjects/wordpress/iHostDocs/`):

**In `winidpress.css`:**
```css
@import "tailwindcss"; /* Or your specific Tailwind entry points */
@plugin "@tailwindcss/typography" { strategy: "class"; } /* If you use the typography plugin */

/* Import your design tokens */
@theme "./furniture-theme.json"; 
/* or simply: @theme "furniture-theme.json"; */
```

### B. How Tokens are Exposed

The `@theme` directive does two powerful things:
1.  **CSS Custom Properties (Variables)**: Every token in your JSON becomes a CSS custom property.
    *   `"color-primary": "var(--theme-palette-color-1)"` becomes CSS `var(--color-primary)`.
    *   `"button-primary-bg": "var(--color-primary)"` becomes CSS `var(--button-primary-bg)`.
    *   Crucially, `"button-primary-hover-bg": "var(--color-primary)/l+0.1"` becomes CSS `var(--button-primary-hover-bg)` where its value is the *calculated, final color*.
2.  **Tailwind Utility Classes**: Tailwind generates utility classes for these tokens.
    *   You can use `class="bg-color-primary"`, `class="text-text-heading"`.
    *   For derived states: `class="hover:bg-button-primary-hover-bg"`.

### C. Understanding Modifier Resolution

When a token like `"button-primary-hover-bg": "var(--color-primary)/l+0.1"` is defined:
1.  Tailwind resolves `var(--color-primary)` to its actual color value (e.g., `#1A2E2A`).
2.  It applies the modifier (lightens by 10%).
3.  The resulting color (e.g., `#203A36`) becomes the value of the CSS custom property `--button-primary-hover-bg`.
This means you don't define full color scales manually; you define relationships, and Tailwind computes the final values.

## 5. Key Benefits of This Approach

*   **Single Source of Truth**: Simplifies updates and ensures consistency.
*   **Dry (Don't Repeat Yourself)**: Define base colors and relationships; derived values are calculated.
*   **Semantic & Readable**: HTML classes like `hover:bg-button-primary-hover-bg` are more declarative than chains of utility modifiers for common states.
*   **Maintainable**: Changing `theme-palette-color-1` or `color-primary` cascades changes intelligently.
*   **Flexible**:
    *   Use predefined semantic tokens for common UI patterns.
    *   Use on-the-fly Tailwind JIT modifiers (`class="bg-color-primary/l+0.07"`) for unique, one-off styling needs without polluting the theme JSON.
*   **AI-Friendly**: Structured JSON is ideal for AI (Cascade) to understand the design system, suggest modifications, and generate compliant HTML/CSS.
*   **Dual Access**: Tokens are available as both CSS variables (for custom CSS) and Tailwind utilities (for rapid templating).

## 6. Example: Deriving Light/Dark Variations (e.g., Backgrounds)

Let's say `color-base` is defined from a mid-gray foundational color:
```json
  "theme-palette-color-5": "#878787", // Mid Gray
  "color-base": "var(--theme-palette-color-5)"
```
You can then create background variations in your JSON:
```json
  "background-site-light": "var(--color-base)/l+0.3",  // #878787 lightened by 30% => approx #BDBDBD
  "background-site-dark": "var(--color-base)/l-0.2",   // #878787 darkened by 20%  => approx #6A6A6A
  "background-site-subtle-tint": "var(--color-base)/20" // #878787 at 20% opacity (for overlaying)
```
These become:
*   CSS: `var(--background-site-light)` (value: `#BDBDBD`)
*   Tailwind: `class="bg-background-site-light"`

This allows you to easily define a range of harmonious background shades from a single semantic base color without manually picking multiple hex codes.

## 7. Workflow with AI (Windsurf & Cascade)

This structured design system is pivotal for an efficient AI-driven workflow:
1.  **Understanding**: Cascade can read and understand `furniture-theme.json` to learn your design language.
2.  **Prompting**: You can ask Cascade to:
    *   "Create a new product card block using `color-primary` for the title and `button-secondary-bg` for the 'Add to Cart' button."
    *   "Generate a hero section with a `background-site-dark` background and `text-on-dark` (assuming you define such a token) text."
    *   "Refactor all primary buttons to use `button-primary-new-style-bg` after we add it to the theme."
3.  **Code Generation**: Cascade can generate HTML with correct Tailwind classes based on the JSON tokens and CSS that leverages the defined variables.
4.  **Theme Evolution**: You can ask Cascade to help add new tokens or modify existing ones in `furniture-theme.json`, maintaining the system's integrity.

## 8. Conclusion: A Living Design System

This JSON-driven approach, integrated with Tailwind CSS via WindPress, creates a living design system. It's robust, flexible, and perfectly suited for iterative development, especially when paired with AI tools like Windsurf and Cascade. It provides a clear roadmap for building and evolving your WordPress theme.

---

# Design System Implementation: Blocksy + Windpress + Timber Integration

## Overview

This section extends the existing Design System Roadmap by detailing the implementation of our design tokens through Blocksy, Windpress (Tailwind CSS 4), and Timber/Twig templating. This integration creates a seamless connection between our JSON-based design tokens and both the frontend (via Tailwind) and the WordPress admin interface (via Blocksy Customizer).

**Key Philosophy Change**: We've adopted a Blocksy-first approach where Blocksy's customizer settings serve as the primary source of truth, with our theme.json providing a structured store of design tokens derived from Blocksy.

## Architecture: Blocksy Child Theme with Timber/Twig

### File Structure

```
wp-content/themes/blocksy-miihost/
├── blocks/                     # Custom blocks with separated logic and templates
│   ├── mi-hero/
│   │   ├── Block.php           # Block registration and server-side logic
│   │   ├── Block.js            # Block editor JavaScript
│   │   ├── Block.styles.css    # Frontend styles
│   │   └── Block.editor.css    # Editor-specific styles
│   └── mi-feature-grid/
│       └── ...
├── css/
│   └── theme-overrides.css     # Theme-specific style overrides
├── inc/
│   ├── setup.php               # Theme setup and block registration
│   ├── timber-setup.php        # Timber integration
│   ├── customizer-integration.php # Blocksy customizer integration
│   └── carbon-fields-setup.php # Carbon Fields integration
├── views/                      # Twig templates
│   └── blocks/
│       ├── mi-hero/
│       │   └── Block.twig      # Template for hero block
│       └── mi-feature-grid/
│           └── Block.twig      # Template for feature grid block
├── functions.php               # Main theme functions
├── style.css                   # Theme declaration
└── theme.json                  # Design tokens
```

## Key Components

### 1. Blocksy Theme & Blocksy Pro

Blocksy serves as the foundation for our implementation, providing:
- A robust, performance-optimized theme framework
- Extensive customizer options
- Header and footer builders
- WooCommerce integration
- Hooks system for custom code injection

The child theme approach allows us to leverage Blocksy's features while maintaining our custom design system and block implementations.

### 2. Theme.json Design Tokens

Our design tokens are defined in a Blocksy-aligned `theme.json` file that serves as a structured store of design tokens derived from Blocksy's customizer settings:

```json
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
```

### 3. Windpress Integration

Windpress (Tailwind CSS 4) is configured to use our theme.json tokens:

```css
/* winidpress.css */
@layer theme, base, components, utilities;

/* Import theme configuration with theme.json tokens */
@import "tailwindcss/theme.css" layer(theme) theme(static);
@theme "../wp-content/themes/blocksy-miihost/theme.json";

/* Preflight is commented out to avoid conflicts with WordPress styles */
/* @import "tailwindcss/preflight.css" layer(base); */

/* Typography plugin with class strategy to avoid global styling */
@plugin '@tailwindcss/typography' { strategy: 'class'; }

/* Import utilities with proper layer designation */
@import "tailwindcss/utilities.css" layer(utilities);
```

This configuration allows us to use design tokens directly in HTML as Tailwind utility classes:

```html
<div class="bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg">
  Button Text
</div>
```

### 4. Timber/Twig Templating

Timber provides a clean separation between logic (PHP) and presentation (Twig templates):

```twig
{# views/blocks/mi-hero/Block.twig #}
<div class="mi-hero {{ height_class }} {{ alignment_class }} {{ color_class }}">
    {% if background_image %}
        <div class="mi-hero__background" style="background-image: url('{{ background_image }}');">
            <div class="mi-hero__overlay" style="opacity: {{ overlay_opacity }};"></div>
        </div>
    {% endif %}
    
    <div class="mi-hero__container">
        <div class="mi-hero__content">
            {% if attributes.title %}
                <h2 class="mi-hero__title">{{ attributes.title }}</h2>
            {% endif %}
            
            {# Additional content #}
        </div>
    </div>
</div>
```

### 5. Custom Block Structure

Our blocks follow a modular structure with clear separation of concerns:

- **Block.php**: PHP logic for block registration and server-side rendering
- **Block.js**: JavaScript for the block editor interface
- **Block.styles.css**: Frontend styles for the block
- **Block.editor.css**: Editor-specific styles
- **Block.twig**: Twig template for rendering the block

### 6. Blocksy Customizer Integration

We've implemented a Blocksy-first approach with a one-way sync from Blocksy's customizer to our theme.json:

```php
// When customizer values change, update theme.json
function blocksy_miihost_sync_customizer_with_theme_json() {
    // Get Blocksy settings
    $blocksy_palette = get_theme_mod('colorPalette', []);
    $typography_settings = get_theme_mod('typography', []);
    $container_width = get_theme_mod('container_width', '1200px');
    
    // Load theme.json
    $theme_json = json_decode(file_get_contents($theme_json_path), true);
    
    // Update global colors in theme.json based on Blocksy palette
    if (!empty($blocksy_palette)) {
        $theme_json['color1'] = $blocksy_palette['color1'];
        $theme_json['color2'] = $blocksy_palette['color2'];
        $theme_json['color3'] = $blocksy_palette['color3'];
        $theme_json['color4'] = $blocksy_palette['color4'];
        $theme_json['color5'] = $blocksy_palette['color5'];
    }
    
    // Update typography settings
    if (!empty($typography_settings)) {
        $theme_json['fontFamily'] = $typography_settings['baseFont']['family'];
        $theme_json['fontFamilyHeadings'] = $typography_settings['headingsFont']['family'];
        // Additional typography mappings...
    }
    
    // Update spacing settings
    $theme_json['containerWidth'] = $container_width;
    
    // Write updated theme.json
    file_put_contents($theme_json_path, json_encode($theme_json, JSON_PRETTY_PRINT));
}
```

## Development Workflow

1. **Design System Updates**:
   - Make design changes through the Blocksy customizer (primary source of truth)
   - Changes are automatically synced to theme.json for developer usage
   - For tokens not exposed in Blocksy, edit theme.json directly

2. **Block Development**:
   - Create blocks following our modular structure
   - Use Twig templates for clean separation of logic and presentation
   - Leverage theme.json tokens via Windpress/Tailwind classes
   - Reference Blocksy's CSS variables for consistent styling

3. **CSS Generation**:
   - During development: Use dynamic CSS compilation for immediate feedback
   - For production: Generate cached CSS for optimal performance
   - Ensure CSS variables bridge between Blocksy and custom components

## Future Integration with GutenVibes

This implementation serves as an interim solution until GutenVibes is ready. The modular block structure with separated logic and templates will make migration to GutenVibes straightforward when it becomes available.
