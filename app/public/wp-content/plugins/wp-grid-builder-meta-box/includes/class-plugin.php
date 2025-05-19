<?php
/**
 * Plugin
 *
 * @package   WP Grid Builder - Meta Box
 * @author    Loïc Blascos
 * @copyright 2019-2024 Loïc Blascos
 */

namespace WP_Grid_Builder_Meta_Box\Includes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Main Instance of the plugin
 *
 * @class WP_Grid_Builder_Meta_Box\Includes\Plugin
 * @since 1.0.0
 */
final class Plugin {

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		add_action( 'plugins_loaded', [ $this, 'textdomain' ] );
		add_action( 'wp_grid_builder/init', [ $this, 'init' ] );
		add_filter( 'wp_grid_builder/register', [ $this, 'register' ] );
		add_filter( 'wp_grid_builder/plugin_info', [ $this, 'plugin_info' ], 10, 2 );

	}

	/**
	 * Load plugin text domain.
	 *
	 * @since 1.0.0
	 */
	public function textdomain() {

		load_plugin_textdomain(
			'wpgb-meta-box',
			false,
			basename( dirname( WPGB_META_BOX_FILE ) ) . '/languages'
		);

	}

	/**
	 * Check compatibility
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @return boolean
	 */
	public function is_compatible() {

		if ( ! class_exists( 'RW_Meta_Box' ) ) {
			return false;
		}

		if ( version_compare( WPGB_VERSION, '1.5.7', '<' ) ) {

			add_action( 'admin_notices', [ $this, 'admin_notice' ] );
			return false;

		}

		return true;

	}

	/**
	 * Init instances
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function init() {

		if ( ! $this->is_compatible() ) {
			return;
		}

		new Indexer();
		new Fields();
		new Block();
		new Sort();

	}

	/**
	 * Register add-on
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $addons Holds registered add-ons.
	 * @return array
	 */
	public function register( $addons ) {

		$addons[] = [
			'name'    => 'Meta Box',
			'slug'    => WPGB_META_BOX_BASE,
			'option'  => 'wpgb_meta_box',
			'version' => WPGB_META_BOX_VERSION,
		];

		return $addons;

	}

	/**
	 * Set plugin info
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array  $info Holds plugin info.
	 * @param string $name Current plugin name.
	 * @return array
	 */
	public function plugin_info( $info, $name ) {

		if ( 'Meta Box' !== $name ) {
			return $info;
		}

		$info['icons'] = [
			'1x' => WPGB_META_BOX_URL . 'assets/imgs/icon.png',
			'2x' => WPGB_META_BOX_URL . 'assets/imgs/icon.png',
		];

		if ( ! empty( $info['info'] ) ) {

			$info['info']->banners = [
				'low'  => WPGB_META_BOX_URL . 'assets/imgs/banner.png',
				'high' => WPGB_META_BOX_URL . 'assets/imgs/banner.png',
			];

		}

		return $info;

	}

	/**
	 * Plugin compatibility notice.
	 *
	 * @since 1.0.0
	 */
	public function admin_notice() {

		$notice = __( '<strong>Gridbuilder ᵂᴾ - Meta Box</strong> add-on requires at least <code>Gridbuilder ᵂᴾ v1.5.7</code>. Please update Gridbuilder ᵂᴾ to use Meta Box add-on.', 'wpgb-meta-box' );

		echo '<div class="error">' . wp_kses_post( wpautop( $notice ) ) . '</div>';

	}
}
