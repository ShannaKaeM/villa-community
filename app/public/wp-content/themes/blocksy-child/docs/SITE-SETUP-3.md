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
- **CSS Classes**: Component-specific classes use the `m-` prefix for our custom TW4 components (e.g., `m-card`, `m-btn`)

## Technology Stack

### WordPress Core

- **Custom Post Types**: Properties, Businesses, Articles, User Profiles
- **Taxonomies**: property_type, location, amenity, business_type, article_type, user_type
- **Timber/Twig**: Used for templating and rendering

### Carbon Fields

Carbon Fields is used for implementing custom fields for all post types. The implementation follows a modular approach with separate files for CPT registration and Carbon Fields setup.

### CSS Framework

- **Tailwind CSS**: Used for utility-first styling
- **Custom TW4 Components**: Used as a component library on top of Tailwind CSS
  - All component classes use the `m-` prefix to avoid conflicts
  - Example: `m-card`, `m-btn`, `m-badge`

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
{% set card_classes = 'm-card bg-base-100 w-full shadow-xl' %}

{# Avoid #}
{% set card_classes = 'm-card bg-base-100 w-96 shadow-xl' %}
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
Review the MOC-THEME-TW.md file for current and updated color system details app/public/wp-content/themes/blocksy-child/docs/MOC-THEME-TW.md

### Component Variants review the MOC-THEME-TW.md file for current and updated component variants details app/public/wp-content/themes/blocksy-child/docs/MOC-THEME-TW.md

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
