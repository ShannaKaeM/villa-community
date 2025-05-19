# Property System Implementation Plan with Carbon Fields

This document outlines the comprehensive plan for implementing a property management system using Carbon Fields, including custom post types, taxonomies, fields, importers, and block creation.

## Phase 1: Code-Based Setup with Carbon Fields

### 1. Custom Post Type (CPT) Setup
- **Action**: Create CPT registration code
- **Location**: `/inc/cpt-properties.php`
- **Integration**: Added to functions.php
- **Features**:
  - Register 'property' post type
  - Set up labels, supports, and rewrite rules
  - Register in REST API for Gutenberg support

### 2. Taxonomy Setup
- **Action**: Create taxonomy registration code
- **Location**: `/inc/taxonomies.php`
- **Integration**: Added to functions.php
- **Taxonomies to register**:
  - Property Types (hierarchical)
  - Locations (hierarchical)
  - Amenities (non-hierarchical)

### 3. Carbon Fields Setup
- **Action**: Create field container and fields
- **Location**: `/inc/carbon-fields-setup.php`
- **Integration**: Already included in functions.php
- **Features**:
  - Create property field container
  - Add fields organized in tabs
  - Associate with property post type

## Phase 2: Data Population Tools

### 1. Property Importer Tool
- **Action**: Create a PHP file for importing properties
- **Location**: `/inc/property-importer.php`
- **Integration**: Added to functions.php
- **UI**: Appears under Properties in admin menu
- **Features**:
  - CSV upload interface
  - Field mapping to Carbon Fields
  - Validation and error reporting
  - Creates properties with all meta fields
  - Associates taxonomies automatically

### 2. Taxonomy Importer Tool
- **Action**: Create a PHP file for importing taxonomies
- **Location**: `/inc/taxonomy-importer.php`
- **Integration**: Added to functions.php
- **UI**: Appears under each taxonomy in admin menu
- **Features**:
  - CSV upload interface
  - Support for hierarchical relationships
  - Term meta fields for icons/images

## Phase 3: Block System Architecture

### 1. Block Registration System
- **Current setup**:
  - `setup.php` looks for blocks in `/blocks/{block-name}/Block.php`
  - Each block needs its own directory and PHP file
- **Proposed improvements**:
  - Create a more flexible block registration system
  - Support for Twig templates in blocks
  - Integration with Carbon Fields data

### 2. Directory Structure
```
/blocks/
  /mi-listings/
    Block.php           # Block registration
    block.json          # Block metadata
    editor.js           # Block editor script
    editor.css          # Block editor styles
    style.css           # Frontend styles
    /templates/
      frontend.twig     # Frontend template
```

### 3. Twig/Timber Integration
- **Current setup**:
  - Timber is configured in `timber-setup.php`
  - Template directories are set up
- **Integration with Carbon Fields**:
  - Use `carbon_get_post_meta()` in Twig templates
  - Create helper functions for complex queries
  - Set up Timber context with Carbon Fields data

## Phase 4: mi-listings Block Implementation

### 1. Block Registration
- **Action**: Create block registration code
- **Location**: `/blocks/mi-listings/Block.php`
- **Features**:
  - Register block type
  - Enqueue scripts and styles
  - Set up attributes for filters
  - Define render callback

### 2. Block Editor Interface
- **Action**: Create JavaScript for block editor
- **Location**: `/blocks/mi-listings/editor.js`
- **Features**:
  - Inspector controls for filter options
  - Preview of grid layout
  - Settings for columns, pagination, etc.

### 3. Frontend Template
- **Action**: Create Twig template for frontend rendering
- **Location**: `/blocks/mi-listings/templates/frontend.twig`
- **Features**:
  - Filter sidebar with:
    - Property type selection
    - Location selection
    - Amenities checkboxes
    - Bedroom/bathroom/guest sliders
  - Property grid with:
    - Property cards
    - Pagination
    - Sorting options

### 4. Carbon Fields Block
- **Action**: Create a Carbon Fields block
- **Location**: `/inc/carbon-fields-blocks.php`
- **Features**:
  - Define block using Carbon Fields Block API
  - Create block fields for customization
  - Set up render callback using Timber

## Implementation Timeline

1. **Week 1**: Code-based setup of CPT, taxonomies, and fields
2. **Week 2**: Data importers and initial population
3. **Week 3**: Block architecture and mi-listings block

## Technical Details

### Data Flow
1. Properties and taxonomies are stored in WordPress database
2. Block queries properties based on filter settings
3. Twig template renders properties with Carbon Fields data
4. AJAX handles filter updates without page reload

### Code vs. Admin Interface
- **All configuration is code-based**:
  - CPT registration
  - Taxonomy registration
  - Field registration
  - Block registration
  - Importers

### Carbon Fields vs. Meta Box Differences

#### Advantages of Carbon Fields
1. **Code-First Approach**: Everything is defined in code, making version control easier
2. **Developer-Friendly API**: Clean, modern PHP API
3. **Seamless Gutenberg Integration**: Native support for Gutenberg blocks
4. **Performance**: Generally lighter weight than Meta Box
5. **No Admin UI Dependency**: Changes can be made directly in code

#### Challenges with Carbon Fields
1. **No Admin UI**: Changes require code edits (no visual editor)
2. **Learning Curve**: Requires more PHP knowledge
3. **Migration**: More complex to migrate from other field systems

### Composer Integration
- Carbon Fields is installed via Composer
- Ensure `composer.json` includes:
  ```json
  "require": {
    "htmlburger/carbon-fields": "^3.3",
    "timber/timber": "^1.19"
  }
  ```
- Run `composer update` after changes

### Functions.php Integration
```php
// Load Composer autoloader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
}

// Include setup files
require_once get_stylesheet_directory() . '/inc/timber-setup.php';
require_once get_stylesheet_directory() . '/inc/carbon-fields-setup.php';
require_once get_stylesheet_directory() . '/inc/setup.php';
require_once get_stylesheet_directory() . '/inc/cpt-properties.php';
require_once get_stylesheet_directory() . '/inc/taxonomies.php';
require_once get_stylesheet_directory() . '/inc/carbon-fields-blocks.php';
```
