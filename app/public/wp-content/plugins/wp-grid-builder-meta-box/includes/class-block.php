<?php
/**
 * Block
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
 * Block
 *
 * @class WP_Grid_Builder_Meta_Box\Includes\Block
 * @since 1.0.0
 */
final class Block {

	use Helpers;

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		add_filter( 'wp_grid_builder/block/custom_field', [ $this, 'custom_field_block' ], 10, 2 );
		add_filter( 'wp_grid_builder/metadata', [ $this, 'metadata_value' ], 10, 4 );

	}

	/**
	 * Output Meta Box field value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string $output   Custom field output.
	 * @param string $field_id Field identifier.
	 * @return string
	 */
	public function custom_field_block( $output, $field_id ) {

		$field_id = $this->get_field_id( $field_id );

		if ( empty( $field_id ) || ! function_exists( 'wpgb_get_object_type' ) ) {
			return $output;
		}

		$object_id   = wpgb_get_the_id();
		$object_type = wpgb_get_object_type();
		$field_value = $this->get_field( $field_id, $object_id, $object_type );

		if ( empty( $field_value ) ) {
			return '';
		}

		return count( $field_value ) > 1 ? $field_value : reset( $field_value );

	}


	/**
	 * Return Meta Box field value
	 *
	 * @since 1.0.1
	 * @access public
	 *
	 * @param string  $output   Custom field output.
	 * @param string  $meta_type Type of object metadata is for.
	 * @param integer $object_id ID of the object metadata is for.
	 * @param string  $meta_key  Metadata key.
	 * @return mixed
	 */
	public function metadata_value( $output, $meta_type, $object_id, $meta_key ) {

		$meta_key = $this->get_field_id( $meta_key );

		if ( empty( $meta_key ) || ! function_exists( 'wpgb_get_object_type' ) ) {
			return $output;
		}

		$field_value = $this->get_field( $meta_key, $object_id, $meta_type );

		if ( empty( $field_value ) ) {
			return '';
		}

		return count( $field_value ) > 1 ? $field_value : reset( $field_value );

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
			return '';
		}

		return $name;

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
			return '';
		}

		if ( $field['label_description'] ) {
			$name = $field['label_description'] . ': ' . $name;
		}

		return $name;

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
			return '';
		}

		return $pair['key'] . ': ' . $pair['val'];

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
			return '';
		}

		return $date;

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
			return '';
		}

		return $file['url'];

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
			return '';
		}

		return [
			$map['latitude'],
			$map['longitude'],
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
			return '';
		}

		return $post->post_title;

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
			return '';
		}

		return $user->display_name;

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
			return '';
		}

		return $term->name;

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

		return $value;

	}
}
