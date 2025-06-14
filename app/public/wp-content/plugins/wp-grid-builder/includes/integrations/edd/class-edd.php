<?php
/**
 * Add EDD support
 *
 * @package   WP Grid Builder
 * @author    Loïc Blascos
 * @copyright 2019-2024 Loïc Blascos
 */

namespace WP_Grid_Builder\Includes\Integrations\EDD;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Handle EDD facet values
 *
 * @class WP_Grid_Builder\Includes\Third_Party\EDD
 * @since 1.0.0
 */
class EDD {


	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		if ( ! class_exists( 'Easy_Digital_Downloads' ) ) {
			return;
		}

		add_filter( 'wp_grid_builder/custom_fields', [ $this, 'custom_fields' ] );
		add_filter( 'wp_grid_builder/indexer/index_object', [ $this, 'index' ], 10, 3 );
		add_filter( 'wp_grid_builder/metadata', [ $this, 'metadata_value' ], 10, 4 );

	}

	/**
	 * Retrieve EDD custom fields
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $fields Holds registered custom fields.
	 * @return array
	 */
	public function custom_fields( $fields ) {

		$fields['Easy Digital Downloads'] = [
			'edd_price' => 'EDD > ' . __( 'Price', 'wp-grid-builder' ),
		];

		if ( function_exists( 'edd_reviews' ) ) {

			$fields['Easy Digital Downloads'][] = [
				'edd_reviews_average_rating' => 'EDD > ' . __( 'Average Rating', 'wp-grid-builder' ),
			];
		}

		return $fields;

	}

	/**
	 * Index EDD field
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $rows      Holds rows to index.
	 * @param array $object_id Object id to index.
	 * @param array $facet     Holds facet settings.
	 * @return array
	 */
	public function index( $rows, $object_id, $facet ) {

		$post_type = get_post_type( $object_id );

		if ( 'download' !== $post_type ) {
			return $rows;
		}

		$source = explode( '/', $facet['source'] );
		$source = reset( $source );

		if ( 'post_meta' === $source ) {
			$rows = $this->index_metadata( $rows, $object_id, $facet );
		}

		return $rows;

	}

	/**
	 * Index WooCommerce metadata
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $rows      Holds rows to index.
	 * @param array $object_id Object id to index.
	 * @param array $facet     Holds facet settings.
	 * @return array
	 */
	public function index_metadata( $rows, $object_id, $facet ) {

		$field = explode( '/', $facet['source'] );
		$field = end( $field );

		if ( 'edd_price' !== $field ) {
			return $rows;
		}

		$price = edd_get_download_price( $object_id );
		$value = edd_sanitize_amount( $price );
		$name  = $value;

		if ( edd_has_variable_prices( $object_id ) ) {

			$value = edd_get_lowest_price_option( $object_id );
			$name = edd_get_highest_price_option( $object_id );

		}

		$rows[] = [
			'facet_value' => $value,
			'facet_name'  => $name,
		];

		return $rows;

	}

	/**
	 * Return ACF field value
	 *
	 * @since 2.1.1
	 * @access public
	 *
	 * @param string  $output   Custom field output.
	 * @param string  $meta_type Type of object metadata is for.
	 * @param integer $object_id ID of the object metadata is for.
	 * @param string  $meta_key  Metadata key.
	 * @return mixed
	 */
	public function metadata_value( $output, $meta_type, $object_id, $meta_key ) {

		if ( 'edd_price' !== $meta_key ) {
			return $output;
		}

		if ( edd_is_free_download( $object_id ) ) {
			return __( 'Free', 'wp-grid-builder' );
		}

		if ( edd_has_variable_prices( $object_id ) ) {
			return edd_price_range( $object_id );
		}

		return edd_price( $object_id, false );

	}
}
