# MI Card Loop Block Documentation

This document provides a comprehensive overview of the MI Card Loop block, including its current architecture, implementation details, and proposed enhancements.

## Table of Contents

1. [Overview](#overview)
2. [Block Architecture](#block-architecture)
3. [Current Implementation](#current-implementation)
   - [Block Registration](#block-registration)
   - [Attributes](#attributes)
   - [Editor Interface](#editor-interface)
   - [Rendering](#rendering)
   - [Styling](#styling)
4. [Data Integration](#data-integration)
   - [Mock Data Structure](#mock-data-structure)
   - [Carbon Fields Integration](#carbon-fields-integration)
5. [Variants](#variants)
   - [Property Cards](#property-cards)
   - [Business Cards](#business-cards)
   - [Generic Cards](#generic-cards)
6. [Proposed Enhancements](#proposed-enhancements)
   - [Filter Sidebar](#filter-sidebar)
   - [Implementation Plan](#implementation-plan)
   - [Future Considerations](#future-considerations)

## Overview

The MI Card Loop block is a flexible component for displaying cards in a grid layout. It supports multiple variants (property, business, generic) and can be configured with different column counts, card sizes, and styling options. The block follows the island architecture approach and integrates with Carbon Fields for dynamic data.

## Block Architecture

Following the island architecture pattern, the MI Card Loop block is self-contained in its own directory:

```
/blocks/mi-card-loop/
  ├── index.php       - Block registration and server-side rendering
  ├── Block.js        - Editor interface
  ├── Block.twig      - Template for rendering
  └── Block.styles.css - Block-specific styling
```

This structure keeps all block-related files together, making the codebase more maintainable.

## Current Implementation

### Block Registration

The block is registered in `index.php` with the namespace `mi/card-loop`. It uses Timber for rendering and includes the following components:

- Editor script: `mi-card-loop-block`
- Editor style: `mi-card-loop-block-style`
- Front-end style: `mi-card-loop-block-style`
- Render callback: `mi_render_card_loop_block`

### Attributes

The block supports the following attributes:

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| variant | string | 'property' | Card variant (property, business, generic) |
| columns | number | 3 | Number of columns in the grid |
| count | number | 3 | Number of cards to display |
| cardSize | string | 'normal' | Card size (compact, normal, large) |
| title | string | 'Card Title' | Title for generic cards |
| description | string | 'This is a sample card description.' | Description for generic cards |
| imageUrl | string | '' | Image URL for generic cards |
| imageAlt | string | '' | Image alt text for generic cards |
| linkUrl | string | '#' | Link URL for cards |
| linkText | string | 'Learn More' | Button text for cards |
| buttonSize | string | 'md' | Button size (sm, md, lg) |
| buttonColor | string | 'primary' | Button color (primary, secondary, emphasis, subtle) |
| price | string | '' | Price for property/business cards |
| status | string | '' | Status for property/business cards |
| featured | boolean | false | Featured flag for cards |
| location | string | '' | Location for property/business cards |
| bedrooms | string | '' | Bedrooms for property cards |
| bathrooms | string | '' | Bathrooms for property cards |
| area | string | '' | Area for property cards |
| className | string | '' | Additional CSS class |

### Editor Interface

The editor interface is defined in `Block.js` and provides controls for configuring the block:

- **Card Loop Settings**: Variant, columns, count, card size
- **Card Content**: Title, description, image, link (for generic variant only)
- **Button Options**: Button size, button color
- **Property Details**: Price, status, featured, location, bedrooms, bathrooms, area (for property variant only)

The editor shows different controls based on the selected variant, following the principle of showing only relevant options.

### Rendering

The block is rendered using the `Block.twig` template, which follows these key principles:

- **Grid-First Approach**: Uses CSS Grid for layout with responsive breakpoints
- **Responsive Width Management**: Uses `w-full` instead of fixed widths
- **Proper Block Wrapper Attributes**: Uses `fn('get_block_wrapper_attributes')` for WordPress integration
- **Variant-Specific Rendering**: Displays different content based on the selected variant

The template uses conditional logic to display different badges and metadata based on the card variant.

### Styling

The block uses our custom TW4 components with the `m-` prefix:

- `m-card`: Base card component
- `m-card-compact`: Compact card variant
- `m-card-side`: Side-by-side card variant (large)
- `m-badge`: For displaying metadata
- `m-btn`: For action buttons

Additional styling is provided in `Block.styles.css` for variant-specific customizations.

## Data Integration

### Mock Data Structure

The block uses a structured mock data approach for editor previews:

```php
$mock_data = [
    'property' => [
        'title' => 'Sample Property',
        'excerpt' => 'This is a sample property description...',
        'thumbnail' => '...',
        'location' => 'Sample Location',
        'price' => '$500,000',
        'bedrooms' => '3',
        'bathrooms' => '2',
        'area' => '1,500 sq ft',
        'featured' => true
    ],
    'business' => [
        'title' => 'Sample Business',
        'excerpt' => 'This is a sample business description...',
        'thumbnail' => '...',
        'location' => 'Business District',
        'business_type' => 'Retail',
        'phone' => '(555) 123-4567',
        'email' => 'info@samplebusiness.com',
        'website' => 'https://www.example.com',
        'address' => '123 Business Ave',
        'featured' => true
    ],
    'generic' => [
        'title' => 'Sample Card',
        'excerpt' => 'This is a sample card description.',
        'thumbnail' => '...',
        'featured' => false
    ]
];
```

This structured approach provides realistic previews in the editor while maintaining flexibility.

### Carbon Fields Integration

For front-end rendering, the block integrates with Carbon Fields to fetch dynamic data:

- **Property Data**: Uses `mi_get_property_cards()` to fetch property posts
- **Business Data**: Uses `mi_get_business_cards()` to fetch business posts
- **Generic Data**: Uses attributes provided in the editor

The data is prepared using helper functions:

- `mi_prepare_property_data()`: Extracts property metadata from Carbon Fields
- `mi_prepare_business_data()`: Extracts business metadata from Carbon Fields

## Variants

### Property Cards

Property cards display real estate listings with the following features:

- Property image
- Price badge
- Status badge (For Sale, For Rent, etc.)
- Featured badge (if applicable)
- Property title
- Property description
- Location badge
- Bedrooms badge
- Bathrooms badge
- Area badge
- "View Details" button

### Business Cards

Business cards display business listings with the following features:

- Business image
- Price badge (if applicable)
- Status badge (if applicable)
- Featured badge (if applicable)
- Business title
- Business description
- Location badge
- Business type badge
- Phone badge
- Email badge
- Website link
- Address badge
- "View Details" button

### Generic Cards

Generic cards are configurable in the editor and include:

- Custom image
- Custom title
- Custom description
- Custom link button

## Proposed Enhancements

### Filter Sidebar

A filter sidebar will be added to allow users to filter the displayed cards based on various criteria:

#### Component Selection
- **Drawer**: For the sidebar container that can be toggled on mobile
- **Menu**: For organizing filter categories
- **Checkbox/Radio**: For selection filters
- **Range**: For price/area range filters
- **Filter**: For tag-based filtering

#### New Attributes
```javascript
showFilters: {
    type: 'boolean',
    default: false
},
filterPosition: {
    type: 'string',
    default: 'left'  // 'left' or 'top'
},
filterCategories: {
    type: 'array',
    default: []  // Will store filter categories and options
}
```

#### Filter Categories
- Property type filter (checkboxes)
- Location filter (checkboxes/dropdown)
- Price range (range slider)
- Bedrooms/Bathrooms (number inputs)
- Area range (range slider)
- Features/Amenities (checkboxes)

### Implementation Plan

#### Phase 1: Basic Structure
- Add filter sidebar structure with static filters
- Implement responsive drawer component
- Add filter controls to editor interface

#### Phase 2: Data Integration
- Connect filters to Carbon Fields data (taxonomies)
- Implement filter data retrieval in PHP
- Add filter state management

#### Phase 3: Client-Side Filtering
- Implement JavaScript for interactive filtering
- Add AJAX filtering without page reload
- Implement filter URL parameters

#### Phase 4: Advanced Features
- Add saved filter presets
- Implement filter analytics
- Add filter result count and sorting options

### Future Considerations

- **Top Filter Bar**: Alternative to sidebar for horizontal filtering
- **Map Integration**: Show property/business locations on a map
- **Saved Searches**: Allow users to save filter combinations
- **Filter Analytics**: Track popular filter combinations
- **Advanced Sorting**: Add more sorting options (newest, price, etc.)

## Technical Notes

- The block follows the grid-first approach from SITE-SETUP-3.md
- All custom components use the `m-` prefix as defined in MOC-THEME-TW.md
- The block integrates with the color system defined in MOC-THEME-TW.md
- The implementation follows the island architecture pattern
- The block is designed to be responsive across all screen sizes
