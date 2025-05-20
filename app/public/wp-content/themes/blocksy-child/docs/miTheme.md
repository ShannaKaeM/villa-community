@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme) theme(static);
/* @import "tailwindcss/preflight.css" layer(base); */
@import "tailwindcss/utilities.css" layer(utilities);

/* Root Variables - Exposing All Blocksy Globals */
:root {
  /* Blocksy Color Palette */
  --theme-palette-color-1: #439696; /* Primary */
  --theme-palette-color-2: #39629b; /* Secondary */
  --theme-palette-color-3: #439696; /* Emphasis */
  --theme-palette-color-4: #bcbab3; /* Subtle */
  --theme-palette-color-5: #7d7d7d; /* Base */
  --theme-palette-color-6: #000000; /* Black */
  --theme-palette-color-7: #ffffff; /* White */

  /* Button Styling Variables */
  --spacing-btn-y: 0.5rem;  /* Equivalent to py-2 */
  --spacing-btn-x: 1rem;    /* Equivalent to px-4 */
  --radius-btn: 0.375rem;   /* Equivalent to rounded-md */
  --shadow-btn: 0 1px 2px 0 rgb(0 0 0 / 0.05); /* Equivalent to shadow-sm */
  
  /* Focus Ring Variables */
  --shadow-btn-focus-ring: 0 0 0 3px; /* For the ring offset part */
  --focus-ring-offset-width: 2px;
}

/* Tailwind Theme */
@theme {
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
  
  /* State Colors for Interactive Elements */
  --color-primary-hover: var(--color-primary-dark);
  --color-primary-active: var(--color-primary-darkest);
  --color-secondary-hover: var(--color-secondary-dark);
  --color-secondary-active: var(--color-secondary-darkest);
  --color-emphasis-hover: var(--color-emphasis-dark);
  --color-emphasis-active: var(--color-emphasis-darkest);
  
  /* Button Styling */
  --spacing-y: var(--spacing-btn-y);
  --spacing-x: var(--spacing-btn-x);
  --radius-btn: var(--radius-btn);
  --shadow-btn: var(--shadow-btn);
  
  /* Focus Ring Variables using TW4 namespaces */
  --shadow-focus: var(--shadow-btn-focus-ring);
  --ring-offset-width: var(--focus-ring-offset-width);
  --shadow-focus-primary: 0 0 0 3px var(--color-primary-lightest);
  --shadow-focus-secondary: 0 0 0 3px var(--color-secondary-lightest);
  --shadow-focus-emphasis: 0 0 0 3px var(--color-emphasis-lightest);
}

Successful Example: 
{% set mock = {
    hero: {
        title_line1: "Exquisite design",
        title_line2: "combined with",
        title_line3: "functionalities",
        subtitle: "Pellentesque ullamcorper dignissim condimentum volutpat consequat mauris nunc lacinia quis.",
        contact: {
            avatars: [
                { src: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-avatar-1.webp", alt: "User 1" },
                { src: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-avatar-2.webp", alt: "User 2" },
                { src: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-avatar-3.webp", alt: "User 3" }
            ],
            text: "Contact with our expert"
        },
        shop_now: {
            text: "Shop Now",
            href: "#shop"
        }
    },
    products: {
        main_card: {
            name: "Wooden Chair",
            price: "$199",
            image_url: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-hero-image-1.webp",
            image_alt: "Wooden Chair in a minimalist room",
            link: "#wooden-chair"
        },
        stacked_cards: {
            top_card: {
                name: "Pretium Elite",
                price: "$130",
                image_url: "https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/home-hero-image-2.webp",
                image_alt: "Blue Pretium Elite Chair",
                link: "#pretium-elite"
            },
            bottom_card: {
                title: "25% OFF",
                description: "Donec ac odio tempor dapibus.",
                action_text: "Explore Now",
                action_link: "#explore-sale"
            }
        }
    }
} %}
{# {% set mock = attributes ? attributes : mock %} #}
<div {{ mb.get_block_wrapper_attributes() }}>
    <div class="bg-canvas rounded-3xl shadow-lg mx-auto px-4 sm:px-12 lg:px-36 py-12 sm:py-16 lg:py-24">
        <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-12 gap-y-10 lg:gap-y-0">
            
            <div class="lg:col-span-6 flex flex-col gap-6 md:gap-8 justify-center items-center lg:items-start text-center lg:text-left">
                <span class="block text-4xl sm:text-5xl lg:text-6xl font-bold text-base leading-tight">
                    {{ mock.hero.title_line1 }}<br>
                    {{ mock.hero.title_line2 }}<br>
                    {{ mock.hero.title_line3 }}
                </span>
                
                <span class="block text-lg text-emphasis max-w-md mx-auto lg:mx-0">
                    {{ mock.hero.subtitle }}
                </span>
                
                <div class="bg-subtle py-2 px-4 rounded-full flex items-center gap-x-3 self-center lg:self-start">
                    <div class="flex -space-x-2">
                        {% for avatar in mock.hero.contact.avatars %}
                            <img class="w-9 h-9 rounded-full border-2 border-extreme" src="{{ avatar.src }}" alt="{{ avatar.alt }}">
                        {% endfor %}
                    </div>
                    <span class="text-sm text-emphasis font-medium">{{ mock.hero.contact.text }}</span>
                </div>
                
                <a href="{{ mock.hero.shop_now.href }}"
                   class="!bg-primary !text-extreme hover:!bg-primary-hover 
                          py-3 px-8 rounded-full 
                          text-base font-semibold 
                          self-center lg:self-start 
                          inline-block
                          transition-colors duration-300">
                    {{ mock.hero.shop_now.text }}
                </a>
            </div>
            <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-4 gap-6 items-stretch">
                <div class="sm:col-span-2 rounded-2xl shadow-lg relative bg-cover bg-center bg-secondary" 
                     style="background-image: url('{{ mock.products.main_card.image_url }}');">
                    <div class="absolute top-5 left-5 bg-surface/90 p-4 rounded-xl shadow-md">
                        <span class="block text-lg font-bold text-base">{{ mock.products.main_card.name }}</span>
                        <span class="block text-base text-emphasis">{{ mock.products.main_card.price }}</span>
                    </div>
                    <a href="{{ mock.products.main_card.link }}" aria-label="View {{ mock.products.main_card.name }}"
                       class="absolute bottom-5 right-5 bg-surface rounded-full p-4 shadow-md hover:bg-canvas transition-colors">
                        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
                <div class="sm:col-span-2 flex flex-col gap-6">
                    <div class="rounded-2xl shadow-lg relative bg-cover bg-center bg-subtle flex-1 min-h-60" 
                         style="background-image: url('{{ mock.products.stacked_cards.top_card.image_url }}');">
                        <div class="absolute top-4 left-4 bg-surface/90 p-3 rounded-xl shadow-md">
                            <span class="block text-base font-bold text-base">{{ mock.products.stacked_cards.top_card.name }}</span>
                            <span class="block text-sm text-emphasis">{{ mock.products.stacked_cards.top_card.price }}</span>
                        </div>
                        <a href="{{ mock.products.stacked_cards.top_card.link }}" aria-label="View {{ mock.products.stacked_cards.top_card.name }}"
                           class="absolute bottom-4 right-4 bg-surface rounded-full p-3 shadow-md hover:bg-canvas transition-colors">
                            <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                    </div>
                    <div class="bg-primary text-extreme rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-center gap-4 flex-1 min-h-60">
                        <span class="block text-xl font-bold">{{ mock.products.stacked_cards.bottom_card.title }}</span>
                        <span class="block text-sm text-subtle max-w-xs">
                            {{ mock.products.stacked_cards.bottom_card.description }}
                        </span>
                        <a href="{{ mock.products.stacked_cards.bottom_card.action_link }}"
                           class="!bg-secondary !text-extreme hover:!bg-secondary-hover
                                  py-2 px-6 rounded-full 
                                  text-sm font-semibold 
                                  mt-1 
                                  inline-block
                                  transition-colors duration-300">
                            {{ mock.products.stacked_cards.bottom_card.action_text }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
Rule: You must always use grid over flex
Rule: Outputs must followed the OUTPUT_TEMPLATE_FORMAT
Rule: You must always use the design system
Rule: Always wrap with div including `{{ mb.get_block_wrapper_attributes()  }}` exactly like this, no IF statement.
OUTPUT_FORM_TEMPLATE: 
{% mock = { ...data } %} 
...Twig Template