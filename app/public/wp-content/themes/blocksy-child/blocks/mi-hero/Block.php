<?php
/**
 * MI Hero Block
 *
 * A simple hero component using miDS design system
 */

// Register the block
function mi_register_hero_block() {
    if (!function_exists('register_block_type')) {
        return;
    }
    
    // Make sure all dependencies are loaded
    if (!class_exists('Timber\Timber')) {
        add_action('admin_notices', function() {
            echo '<div class="error"><p>Timber not found. The MI Hero block requires Timber to be installed and activated.</p></div>';
        });
        return;
    }
    
    // Register block script
    wp_register_script(
        'mi-hero-block',
        get_stylesheet_directory_uri() . '/blocks/mi-hero/Block.js',
        ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
        filemtime(get_stylesheet_directory() . '/blocks/mi-hero/Block.js')
    );
    
    // Register block styles
    wp_register_style(
        'mi-hero-block-style',
        get_stylesheet_directory_uri() . '/blocks/mi-hero/Block.styles.css',
        [],
        filemtime(get_stylesheet_directory() . '/blocks/mi-hero/Block.styles.css')
    );
    
    // Register the block
    register_block_type('mi/hero', [
        'editor_script' => 'mi-hero-block',
        'editor_style' => 'mi-hero-block-style',
        'style' => 'mi-hero-block-style',
        'render_callback' => 'mi_render_hero_block',
        'attributes' => [
            'title_line1' => ['type' => 'string', 'default' => 'Exquisite design'],
            'title_line2' => ['type' => 'string', 'default' => 'combined with'],
            'title_line3' => ['type' => 'string', 'default' => 'functionalities'],
            'subtitle' => ['type' => 'string', 'default' => 'Pellentesque ullamcorper dignissim condimentum volutpat consequat mauris nunc lacinia quis.'],
            'contactText' => ['type' => 'string', 'default' => 'Contact with our expert'],
            'buttonText' => ['type' => 'string', 'default' => 'Shop Now'],
            'buttonUrl' => ['type' => 'string', 'default' => '#shop'],
            'avatars' => [
                'type' => 'array',
                'default' => [
                    [
                        'url' => get_stylesheet_directory_uri() . '/assets/images/avatar-1.jpg',
                        'alt' => 'User 1'
                    ],
                    [
                        'url' => get_stylesheet_directory_uri() . '/assets/images/avatar-2.jpg',
                        'alt' => 'User 2'
                    ],
                    [
                        'url' => get_stylesheet_directory_uri() . '/assets/images/avatar-3.jpg',
                        'alt' => 'User 3'
                    ]
                ]
            ],
            'backgroundColor' => ['type' => 'string', 'default' => 'colorLight']
        ]
    ]);
}
add_action('init', 'mi_register_hero_block');

/**
 * Render hero block with Timber
 */
function mi_render_hero_block($attributes, $content) {
    // Set up Timber context safely
    try {
        $context = Timber\Timber::context();
    } catch (\Exception $e) {
        // Fallback if Timber context fails
        $context = array(
            'site' => array(
                'title' => get_bloginfo('name'),
                'description' => get_bloginfo('description')
            )
        );
    }
    
    // Create mock data structure that matches the example
    $mock = [
        'hero' => [
            'title_line1' => $attributes['title_line1'] ?? 'Exquisite design',
            'title_line2' => $attributes['title_line2'] ?? 'combined with',
            'title_line3' => $attributes['title_line3'] ?? 'functionalities',
            'subtitle' => $attributes['subtitle'] ?? 'Pellentesque ullamcorper dignissim condimentum volutpat consequat mauris nunc lacinia quis.',
            'contact' => [
                'avatars' => [],
                'text' => $attributes['contactText'] ?? 'Contact with our expert'
            ],
            'shop_now' => [
                'text' => $attributes['buttonText'] ?? 'Shop Now',
                'href' => $attributes['buttonUrl'] ?? '#shop'
            ]
        ]
    ];
    
    // Process avatars
    if (!empty($attributes['avatars'])) {
        foreach ($attributes['avatars'] as $avatar) {
            $mock['hero']['contact']['avatars'][] = [
                'src' => $avatar['url'],
                'alt' => $avatar['alt']
            ];
        }
    }
    
    $context['mock'] = $mock;
    $context['attributes'] = $attributes;
    $context['content'] = $content;
    
    // Add CSS variables directly from theme.json
    $theme_json_path = get_stylesheet_directory() . '/theme.json';
    $inline_styles = '';
    
    if (file_exists($theme_json_path)) {
        $theme_json = json_decode(file_get_contents($theme_json_path), true);
        if (!empty($theme_json)) {
            $inline_styles = '<style>:root {\n';
            
            foreach ($theme_json as $key => $value) {
                // Skip keys that start with "__" as they are comments
                if (substr($key, 0, 2) === "__") {
                    continue;
                }
                
                // Add the CSS variable
                $inline_styles .= "  --{$key}: {$value};\n";
            }
            
            $inline_styles .= '}</style>';
        }
    }
    
    // Render the template with inline styles
    return $inline_styles . Timber\Timber::compile('blocks/mi-hero/Block.twig', $context);
}
