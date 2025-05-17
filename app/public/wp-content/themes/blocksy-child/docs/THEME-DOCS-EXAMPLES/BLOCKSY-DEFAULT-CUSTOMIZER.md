# Blocksy Theme Customizer Structure

## 1. General Settings

### Colors
- **Global Colors**: 
  - Color 1 (Primary Color): #3eaf7c
  - Color 2 (Base Color): #4f8aca
  - Color 3 (Accent Color): #fb7258
  - Color 4 (Light Background): #f8f9fb
  - Color 5 (Text Color): #4b5d6f

- **Background Color**: #ffffff
- **Text Color**: #4b5d6f
- **Link Color**: #3eaf7c
- **Headings Color**: #1e293b

### Typography
- **Base Font**:
  - Font Family: System Default (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif)
  - Font Size: 16px (1rem)
  - Line Height: 1.65
  - Font Weight: 400
  - Text Transform: None
  - Letter Spacing: 0em

- **Headings Font**:
  - Font Family: Same as Base Font
  - Line Height: 1.3
  - Font Weight: 700
  - Text Transform: None
  - Letter Spacing: 0em
  
  - H1: 40px (2.5rem)
  - H2: 35px (2.1875rem)
  - H3: 30px (1.875rem)
  - H4: 25px (1.5625rem)
  - H5: 20px (1.25rem)
  - H6: 16px (1rem)

### Buttons
- **Button Text Color**: #ffffff
- **Button Background Color**: #3eaf7c (Primary Color)
- **Button Border Radius**: 3px
- **Button Padding**: 
  - Top/Bottom: 5px
  - Left/Right: 20px
- **Button Typography**:
  - Font Weight: 500
  - Text Transform: None
  - Letter Spacing: 0em

### Layout
- **Container Width**: 1290px
- **Content/Sidebar Width**: 70% / 30%
- **Narrow Container Width**: 750px
- **Wide Container Width**: 1600px
- **Content Spacing**:
  - Top/Bottom: 60px
  - Left/Right: 30px

### Forms
- **Input Height**: 40px
- **Input Border Radius**: 3px
- **Input Border**: 1px solid #e0e5eb
- **Input Background**: #ffffff
- **Input Text Color**: #4b5d6f

## 2. Header Settings

### Header Builder
- **Row Structure**: 
  - Top Row (optional)
  - Main Row
  - Bottom Row (optional)
- **Elements**: Logo, Menu, Search, Cart, Button, Social Icons, etc.
- **Sticky Header**: Options for desktop and mobile

### Header Styling
- **Background**: Transparent or Color
- **Border Bottom**: None or 1px solid #e0e5eb
- **Shadow**: None or Custom
- **Padding**: 
  - Top/Bottom: 15px
  - Left/Right: 30px

## 3. Footer Settings

### Footer Builder
- **Row Structure**:
  - Top Row (optional)
  - Main Row
  - Bottom Row (optional)
- **Elements**: Widgets, Menu, Copyright, Social Icons, etc.

### Footer Styling
- **Background**: #f8f9fb (Light Background)
- **Text Color**: #4b5d6f
- **Link Color**: #3eaf7c
- **Border Top**: None or 1px solid #e0e5eb
- **Padding**:
  - Top/Bottom: 70px
  - Left/Right: 30px

## 4. Blog Settings

### Blog Archive
- **Layout**: Grid, List, Masonry
- **Columns**: 1-4
- **Featured Image**: Ratio, Size
- **Post Elements**: Title, Excerpt, Meta, Read More, etc.

### Single Post
- **Layout**: Type 1, Type 2, Type 3
- **Featured Image**: Full Width, Contained
- **Post Elements**: Title, Meta, Content, Author Box, Related Posts, etc.

## 5. WooCommerce Settings (if active)

### Shop Archive
- **Layout**: Grid, List
- **Columns**: 2-5
- **Product Card**: Image, Title, Price, Rating, etc.

### Single Product
- **Layout**: Type 1, Type 2
- **Gallery Type**: Horizontal, Vertical, Grid
- **Product Elements**: Title, Price, Rating, Description, etc.

## 6. Performance Settings

- **CSS Delivery Method**: Inline or External File
- **Dynamic vs. Static CSS**: Options for caching
- **Font Loading**: System, Google Fonts, Custom

## 7. Advanced Settings

### Custom CSS
- **Global CSS**: Add custom CSS to the entire site
- **Tablet CSS**: CSS specific to tablet devices
- **Mobile CSS**: CSS specific to mobile devices

### Custom JavaScript
- **Header JavaScript**: Scripts to be added to the head section
- **Footer JavaScript**: Scripts to be added before the closing body tag

## 8. Blocksy Pro Features

### Content Blocks
- **Custom Blocks**: Create reusable blocks for headers, footers, etc.
- **Hooks**: Insert content at specific locations throughout the site

### Custom Post Types
- **Archive Layouts**: Customize layouts for custom post types
- **Single Templates**: Create templates for single custom post type entries

### White Label
- **Theme Name**: Change the theme name
- **Theme Description**: Customize the theme description
- **Theme Screenshot**: Replace the theme screenshot
- **Theme Author**: Change the theme author

### Additional Features
- **Custom Fonts**: Upload and use custom fonts
- **Mega Menu**: Create advanced mega menus
- **Conditional Headers**: Display different headers based on conditions
- **Sticky Elements**: Make any element sticky
- **Advanced WooCommerce**: Additional WooCommerce customization options