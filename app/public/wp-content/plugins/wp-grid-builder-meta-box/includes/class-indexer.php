<?php
/**
 * Indexer
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
 * Indexer
 *
 * @class WP_Grid_Builder_Meta_Box\Includes\Indexer
 * @since 1.0.0
 */
final class Indexer {

	use Helpers;

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		add_filter( 'wp_grid_builder/indexer/index_object', [ $this, 'maybe_handle' ], 10, 3 );

	}

	/**
	 * Maybe index Meta Box field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $rows      Holds rows to index.
	 * @param array $object_id Object id to index.
	 * @param array $facet     Holds facet settings.
	 * @return array
	 */
	public function maybe_handle( $rows, $object_id, $facet ) {

		$source = current( explode( '/', $facet['source'] ) );

		if ( ! in_array( $source, [ 'post_meta', 'user_meta', 'term_meta' ], true ) ) {
			return $rows;
		}

		$field_id = $this->get_field_id( $facet['source'] );

		if ( empty( $field_id ) ) {
			return $rows;
		}

		$object_type = str_replace( '_meta', '', $source );

		return $this->get_field( $field_id, $object_id, $object_type );

	}

	/**
	 * Handle select field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string $value Field value.
	 * @param array  $field Holds field settings.
	 * @return array
	 */
	public function select_field( $value, $field ) {

		$name = $this->get_select_value( $value, $field );

		if ( empty( $name ) ) {
			return [];
		}

		return [
			'facet_value' => $value,
			'facet_name'  => $name,
		];
	}

	/**
	 * Handle toggle field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param integer $value Field value.
	 * @param array   $field Holds field settings.
	 * @return array
	 */
	public function toggle_field( $value, $field ) {

		$name = $this->get_toggle_value( $value, $field );

		if ( empty( $name ) ) {
			return [];
		}

		return [
			'facet_value' => $value,
			'facet_name'  => $name,
		];
	}

	/**
	 * Handle key value field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $value Field value.
	 * @return array
	 */
	public function keyval_field( $value ) {

		$pair = $this->get_keyval_value( $value );

		if ( empty( $pair ) ) {
			return [];
		}

		return [
			'facet_value' => $pair['key'],
			'facet_name'  => $pair['val'],
		];
	}

	/**
	 * Handle date field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string $value Field value.
	 * @param array  $field Holds field settings.
	 * @return array
	 */
	public function date_field( $value, $field ) {

		$date = $this->get_date_value( $value, $field );

		if ( empty( $date ) ) {
			return [];
		}

		return [
			'facet_value' => $date,
			'facet_name'  => $date,
		];
	}

	/**
	 * Handle file field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param mixed $value Field value.
	 * @param array $field Holds field settings.
	 * @return array
	 */
	public function file_field( $value, $field ) {

		$file = $this->get_file_value( $value, $field );

		if ( empty( $file ) ) {
			return [];
		}

		return [
			'facet_value' => $file['ID'],
			'facet_name'  => $file['title'],
		];
	}

	/**
	 * Handle map field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param mixed $value Field value.
	 * @return array
	 */
	public function map_field( $value ) {

		$map = $this->get_map_value( $value );

		if ( empty( $map ) ) {
			return [];
		}

		return [
			'facet_value' => $map['latitude'],
			'facet_name'  => $map['longitude'],
		];
	}

	/**
	 * Handle post field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param integer $value Field value.
	 * @return array
	 */
	public function post_field( $value ) {

		$post = $this->get_post_value( $value );

		if ( empty( $post ) ) {
			return [];
		}

		return [
			'facet_value' => $post->ID,
			'facet_name'  => $post->post_title,
		];
	}

	/**
	 * Handle user field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param integer $value Field value.
	 * @return array
	 */
	public function user_field( $value ) {

		$user = $this->get_user_value( $value );

		if ( empty( $user ) ) {
			return [];
		}

		return [
			'facet_value' => $user->ID,
			'facet_name'  => $user->display_name,
		];
	}

	/**
	 * Handle taxonomy terms field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param object|integer $value Field value.
	 * @return array
	 */
	public function term_field( $value ) {

		$term = $this->get_term_value( $value );

		if ( empty( $term ) ) {
			return [];
		}

		return [
			'facet_value'  => $term->slug,
			'facet_name'   => $term->name,
			'facet_id'     => $term->term_id,
			'facet_parent' => $term->parent,
			'facet_order'  => $term->term_order,
		];
	}

	/**
	 * Handle default field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string $value Field value.
	 * @return array
	 */
	public function default_field( $value ) {

		return [
			'facet_value' => $value,
			'facet_name'  => $value,
		];
	}
}
