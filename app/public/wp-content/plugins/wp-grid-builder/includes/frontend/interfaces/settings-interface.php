<?php
/**
 * Settings Interface
 *
 * @package   WP Grid Builder
 * @author    Loïc Blascos
 * @copyright 2019-2024 Loïc Blascos
 */

namespace WP_Grid_Builder\Includes\FrontEnd\Interfaces;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

interface Settings_Interface {

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $grid Holds grid parameters.
	 */
	public function __construct( $grid );

	/**
	 * Query grid settings
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function query();
}
