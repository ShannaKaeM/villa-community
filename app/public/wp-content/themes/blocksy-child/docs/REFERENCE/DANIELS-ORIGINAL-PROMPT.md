:root {
  /* Foundational Palette (Single Source of Truth) */
  --theme-palette-color-1: #274C4F;
  --theme-palette-color-2: #456A6D;
  --theme-palette-color-3: #42504b;
  --theme-palette-color-4: #152420;
  --theme-palette-color-5: #E2EDEF;
  --theme-palette-color-6: #EEF4F5;
  --theme-palette-color-7: #FBFCFC;
  --theme-palette-color-8: #ffffff;
  /* Semantic Color Slots (Used by Tailwind and Components) */
  --color-primary: var(--theme-palette-color-1);
  --color-secondary: var(--theme-palette-color-2);
  --color-emphasis: var(--theme-palette-color-3);
  --color-base: var(--theme-palette-color-4);
  --color-subtle: var(--theme-palette-color-5);
  --color-canvas: var(--theme-palette-color-6);
  --color-surface: var(--theme-palette-color-7);
  --color-extreme: var(--theme-palette-color-8);
  /* Derived State Colors (for hover, active states) */
  --color-primary-hover: oklch(from var(--color-primary) calc(l + 0.05) c h);
  --color-primary-active: oklch(from var(--color-primary) calc(l - 0.05) c h);
  --color-secondary-hover: oklch(from var(--color-secondary) calc(l + 0.05) c h);
  --color-secondary-active: oklch(from var(--color-secondary) calc(l - 0.05) c h);
  --color-emphasis-hover: oklch(from var(--color-emphasis) calc(l + 0.05) c h);
  --color-emphasis-active: oklch(from var(--color-emphasis) calc(l - 0.05) c h);
  /* Themeable Spacing, Radius, Shadow (Examples, Tailwind provides defaults) */
  --spacing-btn-y: 0.5rem;  /* Equivalent to py-2 */
  --spacing-btn-x: 1rem;   /* Equivalent to px-4 */
  --radius-btn: 0.375rem; /* Equivalent to rounded-md */
  --shadow-btn: 0 1px 2px 0 rgb(0 0 0 / 0.05); /* Equivalent to shadow-sm */
  --shadow-btn-focus-ring: 0 0 0 3px; /* For the ring offset part */
  --focus-ring-offset-width: 2px;
}
@import "tailwindcss";
@theme inline {
  /* Expose semantic colors to Tailwind for utility generation */
  --color-primary: var(--color-primary);
  --color-secondary: var(--color-secondary);
  --color-emphasis: var(--color-emphasis);
  --color-base: var(--color-base);
  --color-subtle: var(--color-subtle);
  --color-canvas: var(--color-canvas);
  --color-surface: var(--color-surface);
  --color-extreme: var(--color-extreme);
  /* Expose state colors if you want utilities like bg-primary-hover */
  --color-primary-hover: var(--color-primary-hover);
  --color-primary-active: var(--color-primary-active);
  --color-secondary-hover: var(--color-secondary-hover);
  --color-secondary-active: var(--color-secondary-active);
  --color-emphasis-hover: var(--color-emphasis-hover);
  --color-emphasis-active: var(--color-emphasis-active);
  /* Expose custom spacing/radius/shadows to Tailwind if defined */
  --spacing-btn-y: var(--spacing-btn-y);
  --spacing-btn-x: var(--spacing-btn-x);
  --radius-btn: var(--radius-btn);
  --shadow-btn: var(--shadow-btn);
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