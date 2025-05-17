# Theme.json Tokens Without Direct Blocksy Customizer Equivalents

## Extended Color System

### Semantic Color Variations
- `colorWhite`
- `colorBlack`
- `textOnPrimary`
- `textOnBase`
- `textOnAccent`
- `textLight`
- `textMuted`
- `textInverse`

### Background Variations
- `backgroundSurface`
- `backgroundCard`
- `backgroundOverlay`
- `backgroundHero`

## Extended Typography

### Font Weights
- `fontWeightLight`
- `fontWeightMedium`

### Line Heights
- `lineHeightRelaxed`

## Extended Spacing
- `spacingXxs`
- `spacingXs`
- `spacingSm`
- `spacingMd`
- `spacingLg`
- `spacingXl`
- `spacingXxl`
- `sidebarWidth`

## Button Variations
- `buttonBackgroundActive`
- `buttonBackgroundDisabled`
- `buttonSecondaryBackground`
- `buttonSecondaryText`
- `buttonSecondaryBackgroundHover`
- `buttonSecondaryBackgroundActive`
- `buttonSecondaryBackgroundDisabled`
- `buttonAccentBackground`
- `buttonAccentText`
- `buttonAccentBackgroundHover`
- `buttonAccentBackgroundActive`
- `buttonAccentBackgroundDisabled`

## Border Tokens
- `borderLight`
- `borderDark`
- `borderAccent`
- `borderCard`

## Form Field Extensions
- `inputPlaceholder`
- `inputRingFocus`

## Navigation Extensions
- `navItemBackgroundHover`

## Product Card Tokens (Completely Custom)
- `productTitle`
- `productPrice`
- `productCategory`
- `productCardBackground`
- `productCardShadow`

## Transition Tokens
- `transitionDurationFast`
- `transitionDurationNormal`
- `transitionTimingFunction`

## Z-Index Tokens
- `zIndexDropdown`
- `zIndexSticky`
- `zIndexFixed`
- `zIndexModalBackdrop`
- `zIndexModal`
- `zIndexPopover`
- `zIndexTooltip`

## Shadow Extensions
- `shadowFocusRing`

## Summary

These tokens represent extensions to the Blocksy theme's customizer settings and would need to be maintained separately in your theme.json file. When implementing the integration:

1. These tokens can be used in your custom CSS and components
2. They won't be directly editable through Blocksy's customizer
3. You may want to create custom customizer controls for some of these if they're frequently modified
4. For most cases, these can remain as fixed values in your design system
