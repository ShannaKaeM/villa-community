# TAILWIND THEME SYSTEM WITH WINDPRESS

Tailwind CSS has a special way to handle themes, and WindPress makes it super easy to use with WordPress. Let's learn how it works!

## What is a Theme in Tailwind?

A theme in Tailwind CSS is like a collection of design choices that control how everything looks. It includes:

- Colors
- Spacing sizes
- Font sizes
- Shadows
- Border radius
- And more!

## How WindPress Handles Themes

WindPress does something really cool - it can use your WordPress theme.json file as a Tailwind theme!

Here's how it works:
1. You define your design tokens in theme.json
2. WindPress reads this file
3. WindPress turns these tokens into Tailwind CSS variables
4. You use these variables as Tailwind classes

## Light and Dark Mode

One of the best things about Tailwind's theme system is how easy it makes light and dark mode.

With WindPress, you can:

1. Define light and dark colors in your theme.json
2. Use the `dark:` prefix to apply styles only in dark mode

For example:
```html
<div class="bg-colorLight text-colorPrimary dark:bg-colorDark dark:text-colorLight">
  This changes in dark mode!
</div>
```

## Using CSS Variables

WindPress turns your theme.json values into CSS variables that Tailwind can use.

For example, if your theme.json has:
```json
{
  "colorPrimary": "#9D3C72"
}
```

WindPress creates a CSS variable:
```css
:root {
  --colorPrimary: #9D3C72;
}
```

And you can use it in Tailwind:
```html
<div class="bg-colorPrimary">Pink background!</div>
```

## Customizing the Theme

If you want to customize how WindPress uses your theme.json, you can add this to your CSS:

```css
@theme {
  /* Remove default Tailwind colors */
  --color-*: initial;
  
  /* Map theme.json colors to Tailwind names */
  --color-primary: var(--colorPrimary);
  --color-secondary: var(--colorBase);
}
```

This tells WindPress to:
1. Remove Tailwind's default colors
2. Map your theme.json colors to Tailwind's expected names

## Our Theme Setup

In our theme, we use:

1. A comprehensive theme.json file with all our design tokens
2. WindPress to connect these tokens to Tailwind
3. Simple CSS classes that use these tokens

This gives us the best of both worlds:
- WordPress's native theme.json system
- Tailwind's powerful utility classes

## Benefits of This Approach

1. **Consistency**: All design elements follow the same theme
2. **Flexibility**: Easy to change the entire look by updating theme.json
3. **Performance**: WindPress optimizes the CSS for the best performance
4. **Simplicity**: Use simple class names that match your design tokens
5. **WordPress Integration**: Works perfectly with WordPress's systems
