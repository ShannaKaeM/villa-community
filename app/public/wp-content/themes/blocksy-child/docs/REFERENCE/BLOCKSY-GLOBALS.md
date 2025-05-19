# Blocksy Global Variables Reference

This document provides a comprehensive reference of CSS custom properties (variables) used in the Blocksy theme. These variables define the styling for various theme components and can be customized in your child theme.

## Header Configuration (Type-1)

### Logo
```css
[data-header*="type-1"] .ct-header [data-id="logo"] .site-title {
  --theme-font-weight: 700;
  --theme-font-size: 25px;
  --theme-line-height: 1.5;
  --theme-link-initial-color: var(--theme-palette-color-4);
}
```

### Main Menu
```css
[data-header*="type-1"] .ct-header [data-id="menu"] > ul > li > a {
  --theme-font-weight: 700;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
  --theme-line-height: 1.3;
  --theme-link-initial-color: var(--theme-text-color);
}
```

### Submenu
```css
[data-header*="type-1"] .ct-header [data-id="menu"] .sub-menu .ct-menu-link {
  --theme-link-initial-color: var(--theme-palette-color-8);
  --theme-font-weight: 500;
  --theme-font-size: 12px;
}

[data-header*="type-1"] .ct-header [data-id="menu"] .sub-menu {
  --dropdown-divider: 1px dashed rgba(255, 255, 255, 0.1);
  --theme-box-shadow: 0px 10px 20px rgba(41, 51, 61, 0.1);
  --theme-border-radius: 0px 0px 2px 2px;
}
```

### Middle Row
```css
[data-header*="type-1"] .ct-header [data-row*="middle"] {
  --height: 120px;
  background-color: var(--theme-palette-color-8);
  background-image: none;
  --theme-border-top: none;
  --theme-border-bottom: none;
  --theme-box-shadow: none;
}

[data-header*="type-1"] .ct-header [data-row*="middle"] > div {
  --theme-border-top: none;
  --theme-border-bottom: none;
}
```

### Mobile Menu
```css
[data-header*="type-1"] [data-id="mobile-menu"] {
  --theme-font-weight: 700;
  --theme-font-size: 20px;
  --theme-link-initial-color: #ffffff;
  --mobile-menu-divider: none;
}
```

### Off-Canvas Panel
```css
[data-header*="type-1"] #offcanvas {
  --theme-box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.35);
  --side-panel-width: 500px;
  --panel-content-height: 100%;
}

[data-header*="type-1"] #offcanvas .ct-panel-inner {
  background-color: rgba(18, 21, 25, 0.98);
}
```

### Search
```css
[data-header*="type-1"] [data-id="search"] .ct-label {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
}

[data-header*="type-1"] #search-modal .ct-search-results {
  --theme-font-weight: 500;
  --theme-font-size: 14px;
  --theme-line-height: 1.4;
}

[data-header*="type-1"] #search-modal .ct-search-form {
  --theme-link-initial-color: #ffffff;
  --theme-form-text-initial-color: #ffffff;
  --theme-form-text-focus-color: #ffffff;
  --theme-form-field-border-initial-color: rgba(255, 255, 255, 0.2);
  --theme-button-text-initial-color: rgba(255, 255, 255, 0.7);
  --theme-button-text-hover-color: #ffffff;
  --theme-button-background-initial-color: var(--theme-palette-color-1);
  --theme-button-background-hover-color: var(--theme-palette-color-1);
}

[data-header*="type-1"] #search-modal {
  background-color: rgba(18, 21, 25, 0.98);
}
```

### Trigger
```css
[data-header*="type-1"] [data-id="trigger"] {
  --theme-icon-size: 18px;
  --toggle-button-radius: 3px;
}

[data-header*="type-1"] [data-id="trigger"]:not([data-design="simple"]) {
  --toggle-button-padding: 10px;
}

[data-header*="type-1"] [data-id="trigger"] .ct-label {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
}
```

### Header General
```css
[data-header*="type-1"] {
  --header-height: 120px;
}

[data-header*="type-1"] .ct-header {
  background-image: none;
}
## Footer Configuration (Type-1)

### Bottom Row
```css
[data-footer*="type-1"] .ct-footer [data-row*="bottom"] > div {
  --container-spacing: 25px;
  --theme-border: none;
  --theme-border-top: none;
  --theme-border-bottom: none;
  --grid-template-columns: initial;
}

[data-footer*="type-1"] .ct-footer [data-row*="bottom"] .widget-title {
  --theme-font-size: 16px;
}

[data-footer*="type-1"] .ct-footer [data-row*="bottom"] {
  --theme-border-top: none;
  --theme-border-bottom: none;
  background-color: transparent;
}
```

### Copyright
```css
[data-footer*="type-1"] [data-id="copyright"] {
  --theme-font-weight: 400;
  --theme-font-size: 15px;
  --theme-line-height: 1.3;
}
```

### Footer General
```css
[data-footer*="type-1"][data-footer*="reveal"] .site-main {
  --footer-box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.1);
}

[data-footer*="type-1"] .ct-footer {
  background-color: var(--theme-palette-color-6);
}

[data-footer*="type-1"] footer.ct-container {
  --footer-container-bottom-offset: 50px;
  --footer-container-padding: 0px 35px;
}
## Root Theme Variables

### Typography
```css
:root {
  --theme-font-family: var(--theme-font-stack-default);
  --theme-font-weight: 400;
  --theme-text-transform: none;
  --theme-text-decoration: none;
  --theme-font-size: 16px;
  --theme-line-height: 1.65;
  --theme-letter-spacing: 0em;
}
```

### Forms
```css
:root {
  --theme-button-font-weight: 500;
  --theme-button-font-size: 15px;
  --has-classic-forms: var(--true);
  --has-modern-forms: var(--false);
  --theme-form-field-border-initial-color: var(--theme-border-color);
  --theme-form-field-border-focus-color: var(--theme-palette-color-1);
  --theme-form-selection-field-initial-color: var(--theme-border-color);
  --theme-form-selection-field-active-color: var(--theme-palette-color-1);
}
```

### Color Palette
```css
:root {
  --theme-palette-color-1: #6efa28; /* Primary green */
  --theme-palette-color-2: #ed154a; /* Red */
  --theme-palette-color-3: #6a13e8; /* Purple */
  --theme-palette-color-4: #f59714; /* Orange */
  --theme-palette-color-5: #e3f8e8; /* Light green */
  --theme-palette-color-6: #f2f5f7; /* Light gray */
  --theme-palette-color-7: #FAFBFC; /* Off-white */
  --theme-palette-color-8: #ffffff; /* White */
}
```

### Text & Links
```css
:root {
  --theme-text-color: var(--theme-palette-color-3);
  --theme-link-initial-color: var(--theme-palette-color-1);
  --theme-link-hover-color: var(--theme-palette-color-2);
  --theme-selection-text-color: #ffffff;
  --theme-selection-background-color: var(--theme-palette-color-1);
  --theme-border-color: var(--theme-palette-color-5);
  --theme-headings-color: var(--theme-palette-color-4);
  --theme-content-spacing: 1.5em;
}
```

### Buttons
```css
:root {
  --theme-button-min-height: 40px;
  --theme-button-shadow: none;
  --theme-button-transform: none;
  --theme-button-text-initial-color: #ffffff;
  --theme-button-text-hover-color: #ffffff;
  --theme-button-background-initial-color: var(--theme-palette-color-1);
  --theme-button-background-hover-color: var(--theme-palette-color-2);
  --theme-button-border: none;
  --theme-button-padding: 5px 20px;
}
```

### Container Settings
```css
:root {
  --theme-normal-container-max-width: 1290px;
  --theme-content-vertical-spacing: 60px;
  --theme-container-edge-spacing: 90vw;
  --theme-narrow-container-max-width: 750px;
  --theme-wide-offset: 130px;
}
## Typography Elements

### Headings
```css
h1 {
  --theme-font-weight: 700;
  --theme-font-size: 40px;
  --theme-line-height: 1.5;
}

h2 {
  --theme-font-weight: 700;
  --theme-font-size: 35px;
  --theme-line-height: 1.5;
}

h3 {
  --theme-font-weight: 700;
  --theme-font-size: 30px;
  --theme-line-height: 1.5;
}

h4 {
  --theme-font-weight: 700;
  --theme-font-size: 25px;
  --theme-line-height: 1.5;
}

h5 {
  --theme-font-weight: 700;
  --theme-font-size: 20px;
  --theme-line-height: 1.5;
}

h6 {
  --theme-font-weight: 700;
  --theme-font-size: 16px;
  --theme-line-height: 1.5;
}
```

### Special Elements
```css
.wp-block-pullquote {
  --theme-font-family: Georgia;
  --theme-font-weight: 600;
  --theme-font-size: 25px;
}

pre, code, samp, kbd {
  --theme-font-family: monospace;
  --theme-font-weight: 400;
  --theme-font-size: 16px;
}

figcaption {
  --theme-font-size: 14px;
}

.ct-sidebar .widget-title {
  --theme-font-size: 20px;
}

.ct-breadcrumbs {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
}
```

### Body
```css
body {
  background-color: var(--theme-palette-color-7);
  background-image: none;
}
## Entry Headers

### Blog Post
```css
[data-prefix="single_blog_post"] .entry-header .page-title {
  --theme-font-size: 30px;
}

[data-prefix="single_blog_post"] .entry-header .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
  --theme-line-height: 1.3;
}
```

### Categories
```css
[data-prefix="categories"] .entry-header .page-title {
  --theme-font-size: 30px;
}

[data-prefix="categories"] .entry-header .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
  --theme-line-height: 1.3;
}
```

### Search
```css
[data-prefix="search"] .entry-header .page-title {
  --theme-font-size: 30px;
}

[data-prefix="search"] .entry-header .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
  --theme-line-height: 1.3;
}
```

### Author
```css
[data-prefix="author"] .entry-header .page-title {
  --theme-font-size: 30px;
}

[data-prefix="author"] .entry-header .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
  --theme-line-height: 1.3;
}

[data-prefix="author"] .hero-section[data-type="type-2"] {
  background-color: var(--theme-palette-color-6);
  background-image: none;
  --container-padding: 50px 0px;
}
```

### Single Page
```css
[data-prefix="single_page"] .entry-header .page-title {
  --theme-font-size: 30px;
}

[data-prefix="single_page"] .entry-header .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
  --theme-line-height: 1.3;
}
```

## Entry Cards

### Blog
```css
[data-prefix="blog"] .entries {
  --grid-template-columns: repeat(3, minmax(0, 1fr));
}

[data-prefix="blog"] .entry-card .entry-title {
  --theme-font-size: 20px;
  --theme-line-height: 1.3;
}

[data-prefix="blog"] .entry-card .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
}

[data-prefix="blog"] .entry-card {
  background-color: var(--theme-palette-color-8);
  --theme-box-shadow: 0px 12px 18px -6px rgba(34, 56, 101, 0.04);
}
```

### Categories
```css
[data-prefix="categories"] .entries {
  --grid-template-columns: repeat(3, minmax(0, 1fr));
}

[data-prefix="categories"] .entry-card .entry-title {
  --theme-font-size: 20px;
  --theme-line-height: 1.3;
}

[data-prefix="categories"] .entry-card .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
}

[data-prefix="categories"] .entry-card {
  background-color: var(--theme-palette-color-8);
  --theme-box-shadow: 0px 12px 18px -6px rgba(34, 56, 101, 0.04);
}
```

### Author
```css
[data-prefix="author"] .entries {
  --grid-template-columns: repeat(3, minmax(0, 1fr));
}

[data-prefix="author"] .entry-card .entry-title {
  --theme-font-size: 20px;
  --theme-line-height: 1.3;
}

[data-prefix="author"] .entry-card .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
}

[data-prefix="author"] .entry-card {
  background-color: var(--theme-palette-color-8);
  --theme-box-shadow: 0px 12px 18px -6px rgba(34, 56, 101, 0.04);
}
```

### Search
```css
[data-prefix="search"] .entries {
  --grid-template-columns: repeat(3, minmax(0, 1fr));
}

[data-prefix="search"] .entry-card .entry-title {
  --theme-font-size: 20px;
  --theme-line-height: 1.3;
}

[data-prefix="search"] .entry-card .entry-meta {
  --theme-font-weight: 600;
  --theme-text-transform: uppercase;
  --theme-font-size: 12px;
}

[data-prefix="search"] .entry-card {
  background-color: var(--theme-palette-color-8);
  --theme-box-shadow: 0px 12px 18px -6px rgba(34, 56, 101, 0.04);
}
```

## Form Elements
```css
form textarea {
  --theme-form-field-height: 170px;
}
```

## Sidebar
```css
.ct-sidebar {
  --theme-link-initial-color: var(--theme-text-color);
}

aside[data-type="type-3"] {
  --theme-border: 1px solid rgba(224, 229, 235, 0.8);
}
```

## Container Settings
```css
[data-prefix="single_blog_post"] [class*="ct-container"] > article[class*="post"] {
  --has-boxed: var(--false);
  --has-wide: var(--true);
}

[data-prefix="single_page"] [class*="ct-container"] > article[class*="post"] {
  --has-boxed: var(--false);
  --has-wide: var(--true);
}
## Responsive Breakpoints

### Tablet (max-width: 999.98px)
```css
@media (max-width: 999.98px) {
  /* Header */
  [data-header*="type-1"] .ct-header [data-row*="middle"] {
    --height: 70px;
  }
  
  [data-header*="type-1"] #offcanvas {
    --side-panel-width: 65vw;
  }
  
  [data-header*="type-1"] {
    --header-height: 70px;
  }
  
  /* Footer */
  [data-footer*="type-1"] .ct-footer [data-row*="bottom"] > div {
    --grid-template-columns: initial;
  }
  
  [data-footer*="type-1"] footer.ct-container {
    --footer-container-padding: 0vw 4vw;
  }
  
  /* Blog Entries */
  [data-prefix="blog"] .entries {
    --grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  /* Categories Entries */
  [data-prefix="categories"] .entries {
    --grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  /* Author Entries */
  [data-prefix="author"] .entries {
    --grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  /* Search Entries */
  [data-prefix="search"] .entries {
    --grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

### Mobile (max-width: 689.98px)
```css
@media (max-width: 689.98px) {
  /* Header */
  [data-header*="type-1"] #offcanvas {
    --side-panel-width: 90vw;
  }
  
  /* Footer */
  [data-footer*="type-1"] .ct-footer [data-row*="bottom"] > div {
    --container-spacing: 15px;
    --grid-template-columns: initial;
  }
  
  [data-footer*="type-1"] footer.ct-container {
    --footer-container-padding: 0vw 5vw;
  }
  
  /* Blog Entries */
  [data-prefix="blog"] .entries {
    --grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  [data-prefix="blog"] .entry-card .entry-title {
    --theme-font-size: 18px;
  }
  
  /* Categories Entries */
  [data-prefix="categories"] .entries {
    --grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  [data-prefix="categories"] .entry-card .entry-title {
    --theme-font-size: 18px;
  }
  
  /* Author Entries */
  [data-prefix="author"] .entries {
    --grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  [data-prefix="author"] .entry-card .entry-title {
    --theme-font-size: 18px;
  }
  
  /* Search Entries */
  [data-prefix="search"] .entries {
    --grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  [data-prefix="search"] .entry-card .entry-title {
    --theme-font-size: 18px;
  }
  
  /* Root Variables */
  :root {
    --theme-content-vertical-spacing: 50px;
    --theme-container-edge-spacing: 88vw;
  }
}
```