<?php
/**
 * StyleSheet Interface
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

interface StyleSheet_Interface {

	/**
	 * Generate css
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function generate();

	/**
	 * Get css
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function get();
}
