# Villa Community Site Architecture - Phase 3

This document outlines the architectural decisions and implementation standards for the Villa Community project, focusing on the integration of design systems, component architecture, and layout rules.

## Core Architecture

### Island Architecture for Blocks

We continue to use the "island" approach for blocks where each block is self-contained in its own directory:

```
/blocks/[block-name]/
  ├── index.php       - Block registration and server-side rendering
  ├── Block.js        - Editor interface
  ├── Block.twig      - Template for rendering
  └── Block.styles.css - Block-specific styling
```

This architecture keeps everything related to a block in one place and makes the codebase more maintainable.

### Naming Conventions

- **Block Names**: All custom blocks use the `mi/` namespace (e.g., `mi/card-loop`)
- **PHP Functions**: All custom functions use the `mi_` prefix (e.g., `mi_register_card_loop_block`)
- **CSS Classes**: Component-specific classes use the `d-` prefix for DaisyUI components (e.g., `d-card`, `d-btn`)

## Technology Stack

### WordPress Core

- **Custom Post Types**: Properties, Businesses, Articles, User Profiles
- **Taxonomies**: property_type, location, amenity, business_type, article_type, user_type
- **Timber/Twig**: Used for templating and rendering

### Carbon Fields

Carbon Fields is used for implementing custom fields for all post types. The implementation follows a modular approach with separate files for CPT registration and Carbon Fields setup.

### CSS Framework

- **Tailwind CSS**: Used for utility-first styling
- **DaisyUI**: Used as a component library on top of Tailwind CSS
  - All DaisyUI classes use the `d-` prefix to avoid conflicts
  - Example: `d-card`, `d-btn`, `d-badge`

## Layout Rules and Best Practices

### Grid-First Approach

Always use CSS Grid over Flexbox for layout structures. This provides better control over both rows and columns, especially for responsive designs.

```twig
{# Preferred #}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{{ attributes.columns }} gap-6">
  {# Content #}
</div>

{# Avoid #}
<div class="flex flex-wrap">
  {# Content #}
</div>
```

### Responsive Width Management

Use responsive width classes instead of fixed widths to ensure proper scaling across different screen sizes and column configurations.

```twig
{# Preferred #}
{% set card_classes = 'd-card bg-base-100 w-full shadow-xl' %}

{# Avoid #}
{% set card_classes = 'd-card bg-base-100 w-96 shadow-xl' %}
```

### Block Wrapper Attributes

Always wrap blocks with the proper block wrapper attributes to ensure WordPress can properly manage the block in the editor.

```twig
<div {{ fn('get_block_wrapper_attributes', {'class': 'your-classes'}) }}>
  {# Block content #}
</div>
```

### Structured Data Approach

Use a structured approach for data, with a mock data structure for development and editor preview, while connecting to dynamic data from Carbon Fields for the front end.

```twig
{% set mock = {
    title: 'Sample Title',
    description: 'Sample description text',
    items: [
        { name: 'Item 1', value: 'Value 1' },
        { name: 'Item 2', value: 'Value 2' }
    ]
} %}

{# Use attributes or mock data #}
{% set data = attributes ? attributes : mock %}

{# Then use data.title, data.description, etc. in your template #}
```

## Design System

### Color System

We use a semantic color system that maps to the Blocksy theme colors:

reference the MOC-THEME.md file for current and updated color system details app/public/wp-content/themes/blocksy-child/docs/MOC-THEME.md
```
Example: Theme 
/* Root Variables - Exposing All Blocksy Globals */
:root {
  /* Blocksy Color Palette */
--theme-palette-color-1: #5A7F80 !important; /* Primary */
--theme-palette-color-2: #A0495D !important; /* Secondary */
--theme-palette-color-3: rgb(13, 162, 162) !important; /* Accent */
--theme-palette-color-4: #8C7966 !important; /* Neutral */
--theme-palette-color-5: #888888 !important; /* Base */
--theme-palette-color-6: #000000 !important; /* Black */
--theme-palette-color-7: #ffffff !important; /* White */

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
  
  /* Accent Color Scale */
  --color-accent: var(--theme-palette-color-3);
  --color-accent-lightest: oklch(from var(--color-accent) calc(l + 0.1) c h);
  --color-accent-light: oklch(from var(--color-accent) calc(l + 0.05) c h);
  --color-accent-med: var(--color-accent);
  --color-accent-dark: oklch(from var(--color-accent) calc(l - 0.05) c h);
  --color-accent-darkest: oklch(from var(--color-accent) calc(l - 0.1) c h);
  
  /* Neutral Color Scale */
  --color-neutral: var(--theme-palette-color-4);
  --color-neutral-lightest: oklch(from var(--color-neutral) calc(l + 0.1) c h);
  --color-neutral-light: oklch(from var(--color-neutral) calc(l + 0.05) c h);
  --color-neutral-med: var(--color-neutral);
  --color-neutral-dark: oklch(from var(--color-neutral) calc(l - 0.05) c h);
  --color-subtle-darkest: oklch(from var(--color-neutral) calc(l - 0.1) c h);
  
  /* Base Color Scale */
  --color-base: var(--theme-palette-color-5);
  --color-base-lightest: oklch(from var(--color-base) calc(l + 0.1) c h);
  --color-base-light: oklch(from var(--color-base) calc(l + 0.05) c h);
  --color-base-med: var(--color-base);
  --color-base-dark: oklch(from var(--color-base) calc(l - 0.05) c h);
  --color-base-darkest: oklch(from var(--color-base) calc(l - 0.1) c h);
  
  /* Black and White */
  --color-black: var(--theme-palette-color-6);
  --color-white: var(--theme-palette-color-7);
}

/* DaisyUI Theme */

@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
  root: ":root";
  include: ;
  exclude: ;
  prefix: d-;
  logs: false;
  /* Theme colors derived from our root variables */
  --color-*: initial; 
  --color-base-100: var(--color-base-lightest);
  --color-base-200: var(--color-base-light);
  --color-base-300: var(--color-base-med);
  --color-base-content: var(--color-base-dark);
  --color-primary: var(--color-primary-med);
  --color-primary-content: var(--color-white);
  --color-secondary: var(--color-secondary-med);
  --color-secondary-content: var(--color-white);
  --color-accent: var(--color-accent-med);
  --color-accent-content: var(--color-white);
  --color-neutral: var(--color-neutral-med);
  --color-neutral-content: var(--color-white);
  --color-info: oklch(95% 0.045 203.388);
  --color-info-content: oklch(70% 0.04 256.788);
  --color-success: oklch(96% 0.067 122.328);
  --color-success-content: oklch(70% 0.04 256.788);
  --color-warning: oklch(95% 0.038 75.164);
  --color-warning-content: oklch(70% 0.04 256.788);
  --color-error: oklch(93% 0.032 17.717);
  --color-error-content: oklch(70% 0.04 256.788);
  --radius-selector: 0.5rem;
  --radius-field: 0.5rem;
  --radius-box: 0.5rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 1;
}

### Component Variants

For DaisyUI components, we use the following variants:

- **Card Sizes**: compact, normal, side (large)
- **Button Sizes**: sm, md, lg
- **Button Colors**: primary, secondary, accent, neutral

## Block Implementation Guidelines

### Block Variants

Blocks can have multiple variants to serve different purposes:

- **Generic**: Allows manual content entry in the editor
- **Dynamic**: Pulls data from custom post types via Carbon Fields

### Editor Experience

- Show appropriate controls based on the selected variant
- Use clear labels and grouping for controls
- Provide sensible defaults for all attributes

### Performance Considerations

- Minimize the number of DOM elements
- Use appropriate image sizes
- Lazy load off-screen content when possible

## CSS Workflow

1. We make changes to the MOC-THEME.md file in the docs directory
2. The user manually updates the WindPress plugin CSS based on these changes
3. We never directly edit the actual CSS in the WindPress plugin through Cascade

The MOC-THEME.md file serves as the source of truth for theme styling, while the actual implementation is managed by the user in the WindPress plugin.
