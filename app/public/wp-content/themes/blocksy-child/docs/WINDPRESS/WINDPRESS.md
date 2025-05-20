# WINDPRESS SETUP FOR TAILWIND CSS v4

## What is WindPress?

WindPress is a WordPress plugin that lets you use Tailwind CSS in your WordPress themes. It's like a bridge between WordPress and Tailwind CSS.

## The Main CSS File

The main CSS file is the heart of WindPress. It tells Tailwind CSS how to work with your WordPress theme.

### Basic Setup

Here's what a simple WindPress CSS file looks like:

```css
/* Import Tailwind CSS */
@import "tailwindcss";

/* Use theme.json for colors and other settings */
@theme "../theme.json";
```

That's it! This simple setup:
1. Imports Tailwind CSS
2. Uses your theme.json file for colors and other design tokens

### What Does @theme Do?

The `@theme` directive is special. It:
- Reads your theme.json file
- Turns all your theme settings into CSS variables
- Makes those variables available as Tailwind utility classes

For example, if your theme.json has:
```json
{
  "colorPrimary": "#9D3C72"
}
```

You can use it in HTML like:
```html
<div class="bg-colorPrimary">This has your primary color background</div>
```

### Removing Default Tailwind Colors

If you want to use only your theme.json colors and remove Tailwind's default colors:

```css
@import "tailwindcss";
@theme "../theme.json";

/* Remove default Tailwind colors */
@theme {
  --color-*: initial;
}
```

### Adding Plugins

You can add Tailwind plugins like this:

```css
/* Add typography plugin with class strategy */
@plugin '@tailwindcss/typography' {
  strategy: 'class';
}
```

This means typography styles only apply to elements with the `prose` class.

## Using Theme.json with WindPress

1. Define all your design tokens in theme.json
2. Use `@theme "../theme.json";` in your CSS file
3. Use your tokens as Tailwind utility classes in your HTML

## Mobile-First Approach

WindPress follows Tailwind's mobile-first approach:
- Unprefixed utilities (like `text-colorPrimary`) apply to all screen sizes
- Prefixed utilities (like `md:text-colorPrimary`) apply at that breakpoint and above

## Tips for Best Results

1. Keep your theme.json organized with clear naming
2. Use semantic color names (like `colorPrimary` instead of `color1`)
3. Test your design on different screen sizes
4. Remember that WindPress generates only the CSS you actually use
