<?php
/**
 * Sort
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
 * Sort
 *
 * @class WP_Grid_Builder_Meta_Box\Includes\Sort
 * @since 1.0.0
 */
final class Sort {

	use Helpers;

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		add_filter( 'wp_grid_builder/facet/sort_query_vars', [ $this, 'sort_query_vars' ] );

	}

	/**
	 * Change sort query variables
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $query_vars Holds query sort variables.
	 * @return array
	 */
	public function sort_query_vars( $query_vars ) {

		if ( empty( $query_vars['meta_key'] ) ) {
			return $query_vars;
		}

		$field_id = $this->get_field_id( $query_vars['meta_key'] );

		if ( empty( $field_id ) ) {
			return $query_vars;
		}

		$field_id = explode( '/', $field_id );
		$query_vars['meta_key'] = reset( $field_id );

		return $query_vars;

	}
}
