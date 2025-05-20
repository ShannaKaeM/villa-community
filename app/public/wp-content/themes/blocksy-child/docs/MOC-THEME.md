@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme) theme(static);
/* @import "tailwindcss/preflight.css" layer(base); */
@import "tailwindcss/utilities.css" layer(utilities);

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