<?php
/**
 * Helpers
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
 * Helpers
 *
 * @class WP_Grid_Builder_Meta_Box\Includes\Helpers
 * @since 1.0.0
 */
trait Helpers {

	/**
	 * Holds field names and associated field types
	 *
	 * @since 1.0.0
	 * @access private
	 *
	 * @var array
	 */
	private $field_types = [
		'radio'             => 'select_field',
		'select'            => 'select_field',
		'select_advanced'   => 'select_field',
		'checkbox_list'     => 'select_field',
		'checkbox'          => 'toggle_field',
		'switch'            => 'toggle_field',
		'key_value'         => 'keyval_field',
		'date'              => 'date_field',
		'datetime'          => 'date_field',
		'file'              => 'file_field',
		'file_advanced'     => 'file_field',
		'file_upload'       => 'file_field',
		'image'             => 'file_field',
		'image_upload'      => 'file_field',
		'image_advanced'    => 'file_field',
		'single_image'      => 'file_field',
		'video'             => 'file_field',
		'map'               => 'map_field',
		'osm'               => 'map_field',
		'post'              => 'post_field',
		'user'              => 'user_field',
		'taxonomy'          => 'term_field',
		'taxonomy_advanced' => 'term_field',
	];

	/**
	 * Check if it is a Meta Box field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string $field_id Field identifier.
	 * @return boolean
	 */
	final public function is_meta_box_field( $field_id ) {

		return count( explode( 'meta-box/', $field_id ) ) > 1;

	}

	/**
	 * Get internal field ID for Meta Box
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string $field_id Field identifier.
	 * @return string
	 */
	final public function get_field_id( $field_id ) {

		if ( ! $this->is_meta_box_field( $field_id ) ) {
			return '';
		}

		return explode( 'meta-box/', $field_id )[1];

	}

	/**
	 * Get field value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string  $field_id    Field identifier.
	 * @param integer $object_id   Object id to index.
	 * @param string  $object_type Object type which the field belongs to.
	 * @return mixed
	 */
	final public function get_field( $field_id, $object_id, $object_type ) {

		$field = $this->get_field_settings( $field_id, $object_id, $object_type );

		if ( empty( $field['type'] ) ) {
			return '';
		}

		$value  = [];
		$values = $this->get_field_values( $field_id, $object_id, $object_type );

		foreach ( $values as $sub_values ) {
			$value = array_merge( $value, $this->get_sub_values( $sub_values, $field ) );
		}

		return $value;

	}

	/**
	 * Get sub values
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param mixed $sub_values Holds sub values.
	 * @param array $field      Field settings.
	 * @return array
	 */
	final public function get_sub_values( $sub_values, $field ) {

		$values = [];

		if ( empty( $field['clone'] ) ) {
			$sub_values = [ $sub_values ];
		}

		if ( ! is_array( $sub_values ) ) {
			return $values;
		}

		foreach ( $sub_values as $clone_values ) {
			$values = array_merge( $values, $this->get_clone_values( $clone_values, $field ) );
		}

		return $values;

	}

	/**
	 * Get clone values
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $clone_values Holds cloned values.
	 * @param array $field        Field settings.
	 * @return array
	 */
	final public function get_clone_values( $clone_values, $field ) {

		$values = [];

		if ( empty( $field['multiple'] ) ) {
			$clone_values = [ $clone_values ];
		}

		// Exceptions for key_value and fieldset_text fields.
		if ( 'key_value' === $field['type'] ) {
			$clone_values = [ $clone_values ];
		} elseif ( 'fieldset_text' === $field['type'] ) {
			$clone_values = (array) current( $clone_values );
		}

		foreach ( $clone_values as $value ) {
			$values[] = $this->get_field_value( $value, $field );
		}

		return $values;

	}

	/**
	 * Get field value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param mixed $value Field value.
	 * @param array $field Holds field settings.
	 * @return array
	 */
	final public function get_field_value( $value, $field ) {

		$field_method = 'default_field';

		if ( isset( $this->field_types[ $field['type'] ] ) ) {
			$field_method = $this->field_types[ $field['type'] ];
		}

		if ( method_exists( $this, $field_method ) ) {
			return call_user_func( [ $this, $field_method ], $value, $field );
		}

		return [];

	}

	/**
	 * Get field settings
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string  $field_id    Field identifier.
	 * @param integer $object_id   Object id to index.
	 * @param string  $object_type Object type which the field belongs to.
	 * @return array
	 */
	final public function get_field_settings( $field_id, $object_id, $object_type = 'post' ) {

		$group_ids = explode( '/', $field_id );
		$field_id  = array_shift( $group_ids );
		$settings  = rwmb_get_field_settings( $field_id, [ 'object_type' => $object_type ], $object_id );

		if ( ! empty( $group_ids ) && isset( $settings['fields'] ) ) {

			foreach ( $group_ids as $group_id ) {
				$settings = $this->search_field_settings( $settings['fields'], $group_id );
			}
		}

		return $settings;

	}

	/**
	 * Search nested field settings
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array  $fields   Holds nested fields.
	 * @param string $field_id Field identifier.
	 * @return array
	 */
	final public function search_field_settings( $fields, $field_id ) {

		return current(
			array_filter(
				(array) $fields,
				function( $field ) use ( $field_id ) {
					return $field_id === $field['id'];
				}
			)
		);
	}

	/**
	 * Get field values
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string  $field_id    Field identifier.
	 * @param integer $object_id   Object id to index.
	 * @param string  $object_type Object type which the field belongs to.
	 * @return array
	 */
	final public function get_field_values( $field_id, $object_id, $object_type = 'post' ) {

		$group_ids = explode( '/', $field_id );
		$field_id  = array_shift( $group_ids );
		$values    = rwmb_get_value( $field_id, [ 'object_type' => $object_type ], $object_id );

		if ( ! empty( $group_ids ) ) {
			$values = $this->search_field_values( $values, end( $group_ids ) );
		} else {
			$values = [ $values ];
		}

		return $values;

	}

	/**
	 * Search nested field values
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array  $fields   Holds nested fields.
	 * @param string $field_id Field identifier.
	 * @return array
	 */
	final public function search_field_values( $fields, $field_id ) {

		$values = [];

		foreach ( (array) $fields as $key => $value ) {

			if ( $key === $field_id ) {
				$values[] = $value;
			} elseif ( is_array( $value ) ) {
				$values = array_merge( $values, $this->search_field_values( $value, $field_id ) );
			}
		}

		return $values;

	}

	/**
	 * Get select value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param integer $value Field value.
	 * @param array   $field Holds field settings.
	 * @return string
	 */
	final public function get_select_value( $value, $field ) {

		if ( ! isset( $field['options'][ $value ] ) ) {
			return '';
		}

		return $field['options'][ $value ];

	}

	/**
	 * Get toggle value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param integer $value Field value.
	 * @param array   $field Holds field settings.
	 * @return string
	 */
	final public function get_toggle_value( $value, $field ) {

		if ( '' === $value ) {
			return '';
		}

		if ( empty( $field['on_label'] ) ) {
			$field['on_label'] = __( 'Yes', 'wpgb-meta-box' );
		}

		if ( empty( $field['off_label'] ) ) {
			$field['off_label'] = __( 'No', 'wpgb-meta-box' );
		}

		return 1 === (int) $value ? $field['on_label'] : $field['off_label'];

	}

	/**
	 * Get key/val values
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $value Field value.
	 * @return array
	 */
	final public function get_keyval_value( $value ) {

		if ( ! isset( $value[0], $value[1] ) ) {
			return [];
		}

		return [
			'key' => $value[0],
			'val' => $value[1],
		];
	}

	/**
	 * Get date value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param string $value Field value.
	 * @param array  $field Holds field settings.
	 * @return string
	 */
	final public function get_date_value( $value, $field ) {

		if ( empty( $value ) ) {
			return '';
		}

		if ( ! empty( $field['timestamp'] ) ) {
			$field['save_format'] = 'U';
		}

		if ( ! empty( $field['save_format'] ) ) {
			$date = \DateTime::createFromFormat( $field['save_format'], $value );
		} else {

			try {
				$date = new \DateTime( $value );
			} catch ( \Exception $e ) {
				$date = null;
			}
		}

		if ( $date ) {
			$value = $date->format( 'Y-m-d H:i:s' );
		}

		return $value;

	}

	/**
	 * Get file value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param mixed $value Field value.
	 * @param array $field Holds field settings.
	 * @return array
	 */
	final public function get_file_value( $value, $field ) {

		// If group field.
		if ( ! is_array( $value ) && is_scalar( $value ) ) {
			$value = current( \RWMB_Field::call( 'files_info', $field, $value, [] ) );
		}

		if ( ! isset( $value['ID'], $value['title'] ) ) {
			return [];
		}

		return $value;

	}

	/**
	 * Get map value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array|string $value Field value.
	 * @return array
	 */
	final public function get_map_value( $value ) {

		// If group field.
		if ( ! is_array( $value ) && is_scalar( $value ) ) {

			list( $latitude, $longitude, $zoom ) = explode( ',', $value . ',,' );
			$value = compact( 'latitude', 'longitude', 'zoom' );

		}

		if ( empty( $value['latitude'] ) && empty( $value['longitude'] ) ) {
			return [];
		}

		return $value;

	}

	/**
	 * Get post value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param integer $post_id Post ID.
	 * @return object|null
	 */
	final public function get_post_value( $post_id ) {

		return get_post( $post_id );

	}

	/**
	 * Get user value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param integer $user_id User ID.
	 * @return object|false
	 */
	final public function get_user_value( $user_id ) {

		return get_userdata( $user_id );

	}

	/**
	 * Get taxonomy value
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param object|integer $term Term object or ID.
	 * @return object|false
	 */
	final public function get_term_value( $term ) {

		// If group field.
		if ( ! is_array( $term ) && is_scalar( $term ) ) {
			$term = get_term( $term );
		}

		if ( ! isset( $term->term_id ) ) {
			return false;
		}

		return $term;

	}
}
