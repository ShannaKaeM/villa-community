# Property System Implementation Plan with Meta Box

This document outlines the comprehensive plan for implementing a property management system using Meta Box, including custom post types, taxonomies, fields, importers, and block creation.

## Phase 1: Manual Setup in WordPress Admin

### 1. Custom Post Type (CPT) Setup
- **Action**: Manually create the Properties CPT in WordPress admin
- **Location**: Meta Box > Post Types > Add New
- **Benefit**: This makes the CPT editable in the WordPress admin interface
- **Fields to include**:
  - General: Name, Slug, etc.
  - Advanced: Support for title, editor, thumbnail
  - Labels: All necessary labels for admin UI

### 2. Taxonomy Setup
- **Action**: Manually create all taxonomies in WordPress admin
  - Property Types (hierarchical)
  - Locations (hierarchical)
  - Amenities (non-hierarchical)
- **Location**: Meta Box > Taxonomies > Add New
- **Benefit**: Makes taxonomies editable in WordPress admin
- **For each taxonomy**:
  - Set hierarchical option appropriately
  - Configure labels and slugs
  - Set post type association to "property"

### 3. Custom Fields Setup
- **Action**: Manually create field groups in WordPress admin
- **Location**: Meta Box > Custom Fields > Add New
- **Benefit**: Makes fields editable in WordPress admin
- **Use our JSON**: Import the `updated-property-metabox-fields.json` file

## Phase 2: Data Population Tools

### 1. Property Importer Tool
- **Action**: Create a PHP file for importing properties
- **Location**: `/inc/property-importer.php`
- **Integration**: Added to functions.php
- **UI**: Appears under Properties in admin menu
- **Features**:
  - CSV upload interface
  - Field mapping
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
  - Icon/image field support

## Phase 3: Block System Architecture

### 1. Block Registration System
- **Current setup**:
  - `setup.php` looks for blocks in `/blocks/{block-name}/Block.php`
  - Each block needs its own directory and PHP file
- **Proposed improvements**:
  - Create a more flexible block registration system
  - Support for Twig templates in blocks
  - Integration with Meta Box Views

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
- **Connection to MB Views**:
  - MB Views uses its own templating system
  - We'll need to create templates in both systems:
    1. Twig templates for Timber-rendered blocks
    2. MB Views templates for admin-editable blocks

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

### 4. MB Views Version
- **Action**: Create equivalent template in MB Views
- **Location**: WordPress admin > MB Views > Add New
- **Features**:
  - Same functionality as Twig template
  - Editable in WordPress admin
  - Available as a Gutenberg block

## Implementation Timeline

1. **Week 1**: Manual setup of CPT, taxonomies, and fields
2. **Week 2**: Data importers and initial population
3. **Week 3**: Block architecture and mi-listings block

## Technical Details

### Data Flow
1. Properties and taxonomies are stored in WordPress database
2. Block queries properties based on filter settings
3. Twig template renders properties with Meta Box fields
4. AJAX handles filter updates without page reload

### Code vs. Admin Interface
- **Code (Windsurf environment)**:
  - CPT registration (for reference)
  - Taxonomy registration (for reference)
  - Block registration and logic
  - Data importers
  - Twig templates

- **WordPress Admin**:
  - CPT configuration
  - Taxonomy configuration
  - Field group configuration
  - MB Views templates
  - Content creation and editing
