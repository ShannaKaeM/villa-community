@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme) theme(static);
/* @import "tailwindcss/preflight.css" layer(base); */
@import "tailwindcss/utilities.css" layer(utilities);
@plugin "daisyui" {
  prefix: "d-";
}

/* Root Variables - Exposing All Blocksy Globals */
:root {
  /* Blocksy Color Palette */
--theme-palette-color-1: #5A7F80 !important; /* Primary */
--theme-palette-color-2: #b07777 !important; /* Secondary */
--theme-palette-color-3: rgb(13, 162, 162) !important; /* Emphasis */
--theme-palette-color-4: #8C7966 !important; /* Subtle */
--theme-palette-color-5: #888888 !important; /* Base */
--theme-palette-color-6: #000000 !important; /* Black */
--theme-palette-color-7: #ffffff !important; /* White */
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
  
  /* Emphasis Color Scale */
  --color-emphasis: var(--theme-palette-color-3);
  --color-emphasis-lightest: oklch(from var(--color-emphasis) calc(l + 0.1) c h);
  --color-emphasis-light: oklch(from var(--color-emphasis) calc(l + 0.05) c h);
  --color-emphasis-med: var(--color-emphasis);
  --color-emphasis-dark: oklch(from var(--color-emphasis) calc(l - 0.05) c h);
  --color-emphasis-darkest: oklch(from var(--color-emphasis) calc(l - 0.1) c h);
  
  /* Subtle Color Scale */
  --color-subtle: var(--theme-palette-color-4);
  --color-subtle-lightest: oklch(from var(--color-subtle) calc(l + 0.1) c h);
  --color-subtle-light: oklch(from var(--color-subtle) calc(l + 0.05) c h);
  --color-subtle-med: var(--color-subtle);
  --color-subtle-dark: oklch(from var(--color-subtle) calc(l - 0.05) c h);
  --color-subtle-darkest: oklch(from var(--color-subtle) calc(l - 0.1) c h);
  
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
  
@plugin "daisyui/theme" {
  name: "mytheme";
  default: true; /* set as default */
  prefersdark: false; /* set as default dark mode (prefers-color-scheme:dark) */
  color-scheme: light; /* color of browser-provided UI */

  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-emphasis: oklch(65% 0.25 160);
  --color-emphasis-content: oklch(98% 0.01 160);
  --color-subtle: oklch(50% 0.05 240);
  --color-subtle-content: oklch(98% 0.01 240);
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  /* border radius */
  --radius-selector: 1rem;
  --radius-field: 0.25rem;
  --radius-box: 0.5rem;

  /* base sizes */
  --size-selector: 0.25rem;
  --size-field: 0.25rem;

  /* border size */
  --border: 1px;

  /* effects */
  --depth: 1;
  --noise: 0;
}