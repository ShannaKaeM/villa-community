<?php
/**
 * Component Manager
 * 
 * Handles registration and rendering of reusable components
 */

// Don't allow direct access
if (!defined('ABSPATH')) {
    exit;
}

class MI_Component_Manager {
    /**
     * Instance of this class
     *
     * @var MI_Component_Manager
     */
    private static $instance = null;

    /**
     * Registered components
     *
     * @var array
     */
    private $components = [];

    /**
     * Components directory
     *
     * @var string
     */
    private $components_dir;

    /**
     * Get instance of this class
     *
     * @return MI_Component_Manager
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
        $this->components_dir = get_stylesheet_directory() . '/views/components';
        
        // Register components on init
        add_action('init', [$this, 'register_components'], 10);
        
        // Add Timber functions
        add_filter('timber/twig', [$this, 'add_twig_functions']);
    }

    /**
     * Register all components
     */
    public function register_components() {
        // Scan components directory
        $this->scan_components_directory();
    }

    /**
     * Scan components directory
     */
    private function scan_components_directory() {
        if (!is_dir($this->components_dir)) {
            return;
        }

        // Get all component files
        $component_files = glob($this->components_dir . '/*.twig');
        
        foreach ($component_files as $file) {
            $component_name = basename($file, '.twig');
            $this->components[$component_name] = [
                'name' => $component_name,
                'file' => $file,
                'template' => 'components/' . basename($file),
            ];
        }
    }

    /**
     * Add Twig functions for component rendering
     *
     * @param \Twig\Environment $twig Twig environment
     * @return \Twig\Environment
     */
    public function add_twig_functions($twig) {
        // Add component function
        $twig->addFunction(new \Timber\Twig_Function('component', [$this, 'render_component']));
        
        return $twig;
    }

    /**
     * Render a component
     *
     * @param string $name Component name
     * @param array $context Component context
     * @return string
     */
    public function render_component($name, $context = []) {
        // Check if component exists
        if (!isset($this->components[$name])) {
            return '';
        }
        
        // Get component template
        $template = $this->components[$name]['template'];
        
        // Merge with current context
        $timber_context = \Timber\Timber::context();
        $component_context = array_merge($timber_context, $context);
        
        // Render component
        return \Timber\Timber::compile($template, $component_context);
    }

    /**
     * Get all registered components
     *
     * @return array
     */
    public function get_components() {
        return $this->components;
    }

    /**
     * Get a component by name
     *
     * @param string $name Component name
     * @return array|null
     */
    public function get_component($name) {
        return isset($this->components[$name]) ? $this->components[$name] : null;
    }
}

// Initialize Component Manager
MI_Component_Manager::get_instance();
