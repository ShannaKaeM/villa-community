<?php
/**
 * Block Registry
 * 
 * A centralized system for registering and managing blocks
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

class MI_Block_Registry {
    /**
     * Instance of this class
     *
     * @var MI_Block_Registry
     */
    private static $instance = null;

    /**
     * Registered blocks
     *
     * @var array
     */
    private $blocks = [];

    /**
     * Block configuration directory
     *
     * @var string
     */
    private $config_dir;

    /**
     * Block templates directory
     *
     * @var string
     */
    private $templates_dir;

    /**
     * Get instance of this class
     *
     * @return MI_Block_Registry
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    private function __construct() {
        $this->config_dir = get_stylesheet_directory() . '/blocks';
        $this->templates_dir = get_stylesheet_directory() . '/views/blocks';
        
        // Register blocks on init
        add_action('init', [$this, 'register_blocks'], 20);
        
        // Add block category
        add_filter('block_categories_all', [$this, 'register_block_category']);
    }

    /**
     * Register block category
     *
     * @param array $categories Block categories
     * @return array
     */
    public function register_block_category($categories) {
        return array_merge(
            $categories,
            [
                [
                    'slug' => 'miblocks',
                    'title' => __('MI Blocks', 'blocksy-child'),
                    'icon'  => 'dashicons-block-default',
                ]
            ]
        );
    }

    /**
     * Register all blocks
     */
    public function register_blocks() {
        // Scan blocks directory
        $this->scan_blocks_directory();
        
        // Register each block
        foreach ($this->blocks as $block_name => $block_config) {
            $this->register_block($block_name, $block_config);
        }
    }

    /**
     * Scan blocks directory for block configurations
     */
    private function scan_blocks_directory() {
        if (!is_dir($this->config_dir)) {
            return;
        }

        // Get all block directories
        $block_dirs = glob($this->config_dir . '/*', GLOB_ONLYDIR);
        
        foreach ($block_dirs as $block_dir) {
            $block_name = basename($block_dir);
            $config_file = $block_dir . '/block.json';
            
            if (file_exists($config_file)) {
                $config = json_decode(file_get_contents($config_file), true);
                
                if (is_array($config)) {
                    // Add block directory to config
                    $config['dir'] = $block_dir;
                    
                    // Register block
                    $this->blocks[$block_name] = $config;
                }
            }
        }
    }

    /**
     * Register a single block
     *
     * @param string $block_name Block name
     * @param array $config Block configuration
     */
    private function register_block($block_name, $config) {
        // Set default values
        $config = wp_parse_args($config, [
            'name' => $block_name,
            'title' => ucfirst(str_replace('-', ' ', $block_name)),
            'description' => '',
            'category' => 'miblocks',
            'icon' => 'block-default',
            'keywords' => [],
            'supports' => [
                'align' => true,
                'html' => false,
                'customClassName' => true,
            ],
            'attributes' => [],
            'editor_script' => '',
            'editor_style' => '',
            'style' => '',
            'render_callback' => [$this, 'render_block'],
            'uses_context' => [],
            'provides_context' => [],
            'example' => [],
            'dir' => '',
            'template' => '',
        ]);

        // Register block assets
        $this->register_block_assets($block_name, $config);

        // Register block type
        register_block_type(
            'miblocks/' . $block_name,
            [
                'title' => $config['title'],
                'description' => $config['description'],
                'category' => $config['category'],
                'icon' => $config['icon'],
                'keywords' => $config['keywords'],
                'supports' => $config['supports'],
                'attributes' => $config['attributes'],
                'editor_script' => !empty($config['editor_script']) ? 'miblocks-' . $block_name . '-editor-script' : '',
                'editor_style' => !empty($config['editor_style']) ? 'miblocks-' . $block_name . '-editor-style' : '',
                'style' => !empty($config['style']) ? 'miblocks-' . $block_name . '-style' : '',
                'render_callback' => function($attributes, $content, $block) use ($block_name, $config) {
                    return $this->render_block($attributes, $content, $block, $block_name, $config);
                },
                'uses_context' => $config['uses_context'],
                'provides_context' => $config['provides_context'],
                'example' => $config['example'],
            ]
        );
    }

    /**
     * Register block assets
     *
     * @param string $block_name Block name
     * @param array $config Block configuration
     */
    private function register_block_assets($block_name, $config) {
        $dir = $config['dir'];
        
        // Editor script
        if (!empty($config['editor_script']) && file_exists($dir . '/' . $config['editor_script'])) {
            wp_register_script(
                'miblocks-' . $block_name . '-editor-script',
                get_stylesheet_directory_uri() . '/blocks/' . $block_name . '/' . $config['editor_script'],
                ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'],
                filemtime($dir . '/' . $config['editor_script']),
                true
            );
        }
        
        // Editor style
        if (!empty($config['editor_style']) && file_exists($dir . '/' . $config['editor_style'])) {
            wp_register_style(
                'miblocks-' . $block_name . '-editor-style',
                get_stylesheet_directory_uri() . '/blocks/' . $block_name . '/' . $config['editor_style'],
                [],
                filemtime($dir . '/' . $config['editor_style'])
            );
        }
        
        // Frontend style
        if (!empty($config['style']) && file_exists($dir . '/' . $config['style'])) {
            wp_register_style(
                'miblocks-' . $block_name . '-style',
                get_stylesheet_directory_uri() . '/blocks/' . $block_name . '/' . $config['style'],
                [],
                filemtime($dir . '/' . $config['style'])
            );
        }
    }

    /**
     * Render a block
     *
     * @param array $attributes Block attributes
     * @param string $content Block content
     * @param WP_Block $block Block instance
     * @param string $block_name Block name
     * @param array $config Block configuration
     * @return string
     */
    public function render_block($attributes, $content, $block, $block_name, $config) {
        // Get template path
        $template_path = $this->get_template_path($block_name, $config);
        
        if (!$template_path) {
            return '';
        }
        
        // Prepare context
        $context = $this->prepare_context($attributes, $content, $block, $block_name, $config);
        
        // Render with Timber
        return \Timber\Timber::compile($template_path, $context);
    }

    /**
     * Get template path
     *
     * @param string $block_name Block name
     * @param array $config Block configuration
     * @return string|false
     */
    private function get_template_path($block_name, $config) {
        // Check if custom template is specified
        if (!empty($config['template'])) {
            return $config['template'];
        }
        
        // Check if template exists in block directory
        $block_template = $config['dir'] . '/template.twig';
        if (file_exists($block_template)) {
            return $block_template;
        }
        
        // Check if template exists in templates directory
        $theme_template = 'blocks/' . $block_name . '.twig';
        if (\Timber\Timber::template_exists($theme_template)) {
            return $theme_template;
        }
        
        return false;
    }

    /**
     * Prepare context for block rendering
     *
     * @param array $attributes Block attributes
     * @param string $content Block content
     * @param WP_Block $block Block instance
     * @param string $block_name Block name
     * @param array $config Block configuration
     * @return array
     */
    private function prepare_context($attributes, $content, $block, $block_name, $config) {
        // Start with default Timber context
        $context = \Timber\Timber::context();
        
        // Add block-specific data
        $context['block'] = [
            'name' => $block_name,
            'attributes' => $attributes,
            'content' => $content,
            'inner_blocks' => $block->inner_blocks,
            'context' => $block->context,
            'config' => $config,
        ];
        
        // Add Carbon Fields data if needed
        if (!empty($attributes['post_id'])) {
            $context['cf'] = $this->get_carbon_fields_data($attributes['post_id']);
        }
        
        // Allow filtering context
        return apply_filters('mi_block_context', $context, $block_name, $attributes, $content, $block);
    }

    /**
     * Get Carbon Fields data for a post
     *
     * @param int $post_id Post ID
     * @return array
     */
    private function get_carbon_fields_data($post_id) {
        if (!function_exists('carbon_get_post_meta')) {
            return [];
        }
        
        // Get all Carbon Fields for the post
        $carbon_fields = [];
        
        // This would need to be customized based on your fields
        // For now, we'll return an empty array
        
        return $carbon_fields;
    }
}

// Initialize Block Registry
MI_Block_Registry::get_instance();
