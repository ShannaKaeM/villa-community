<?php
/**
 * Fields
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
 * Fields
 *
 * @class WP_Grid_Builder_Meta_Box\Includes\Fields
 * @since 1.0.0
 */
final class Fields {

	/**
	 * Holds field types to exclude
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @var array
	 */
	public $excluded = [ 'heading', 'divider', 'custom_html', 'button' ];

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		add_filter( 'wp_grid_builder/custom_fields', [ $this, 'register_fields' ], 10, 2 );
	}

	/**
	 * Retrieve all Meta Box fields
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $fields Holds registered custom fields.
	 * @return array
	 */
	public function register_fields( $fields ) {

		$registry = rwmb_get_registry( 'field' );

		$fields['Meta Box'] = array_merge(
			$this->get_object_fields( $registry->get_by_object_type( 'post' ) ),
			$this->get_object_fields( $registry->get_by_object_type( 'term' ) ),
			$this->get_object_fields( $registry->get_by_object_type( 'user' ) )
		);

		return $fields;

	}

	/**
	 * Retrieve Meta Box fields by object type
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $registry Meta Box object registry.
	 * @return array
	 */
	public function get_object_fields( $registry ) {

		$object_fields = [];

		foreach ( $registry as $fields ) {

			$object_fields = array_merge(
				$object_fields,
				$this->get_fields( $fields, 'Meta Box' )
			);

		}

		return $object_fields;

	}

	/**
	 * Retrieve Meta Box fields
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array  $fields Meta Box fields.
	 * @param string $label  Field label.
	 * @param string $group  Group identifier.
	 * @return array
	 */
	public function get_fields( $fields, $label = '', $group = '' ) {

		$nested_fields = [];

		foreach ( $fields as $field ) {

			if ( in_array( $field['type'], $this->excluded, true ) ) {
				continue;
			}

			$field_name = $field['name'] ? $field['name'] : $field['id'];
			$field_name = $label . ' &rsaquo; ' . $field_name;

			if ( ! empty( $field['fields'] ) ) {

				$nested_fields = array_merge(
					$nested_fields,
					$this->get_fields( $field['fields'], $field_name, $group . $field['id'] . '/' )
				);

			} else {
				$nested_fields[ 'meta-box/' . $group . $field['id'] ] = $field_name;
			}
		}

		return $nested_fields;

	}
}
