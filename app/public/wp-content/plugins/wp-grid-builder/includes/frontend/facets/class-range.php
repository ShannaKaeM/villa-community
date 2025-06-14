<?php
/**
 * Range facet
 *
 * @package   WP Grid Builder
 * @author    Loïc Blascos
 * @copyright 2019-2024 Loïc Blascos
 */

namespace WP_Grid_Builder\Includes\FrontEnd\Facets;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Range
 *
 * @class WP_Grid_Builder\Includes\FrontEnd\Facets\Range
 * @since 1.0.0
 */
class Range {

	/**
	 * Min/max range values
	 *
	 * @since 1.0.0
	 * @var object
	 */
	public $range;

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {

		add_filter( 'wp_grid_builder/facet/response', [ $this, 'get_settings' ], 10, 2 );

	}

	/**
	 * Filter facet response to set range settings
	 *
	 * @since 1.2.1
	 * @access public
	 *
	 * @param array $response Holds facet response.
	 * @param array $facet    Holds facet settings.
	 * @return array
	 */
	public function get_settings( $response, $facet ) {

		// Skip other facets or if already set.
		if ( 'range' !== $facet['type'] || isset( $response['settings']['min'] ) ) {
			return $response;
		}

		$convert = [ 'thousands_separator', 'decimal_separator', 'decimal_places', 'reset_range' ];

		foreach ( $convert as $key ) {

			if ( ! isset( $facet[ $key ] ) ) {
				continue;
			}

			// To be compliant with JS syntax.
			$js_key = ucwords( str_replace( '_', ' ', $key ) );
			$js_key = lcfirst( str_replace( ' ', '', $js_key ) );

			$response['settings'][ $js_key ] = $facet[ $key ];
			unset( $response['settings'][ $key ] );

		}

		$response['settings']['min'] = isset( $this->range->min ) ? (float) $this->range->min : 0;
		$response['settings']['max'] = isset( $this->range->max ) ? (float) $this->range->max : 0;
		$response['settings']['rightToLeft'] = is_rtl();

		return $response;

	}

	/**
	 * Query facet choices (min & max values)
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet Holds facet settings.
	 * @return array
	 */
	public function query_facet( $facet ) {

		global $wpdb;

		$where_clause = wpgb_get_filtered_where_clause( $facet, 'OR' );
		$facet_range  = $wpdb->get_row(
			$wpdb->prepare(
				"SELECT MIN(facet_value + 0) AS min, MAX(facet_name + 0) AS max
				FROM {$wpdb->prefix}wpgb_index
				WHERE slug = %s
				AND facet_value != ''
				AND $where_clause", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$facet['slug']
			)
		);

		return array_values(
			array_map(
				function( $number ) {
					return (object) [
						'facet_value'  => $number,
						'facet_name'   => $number,
						'facet_parent' => 0,
						'facet_id'     => 0,
						'count'        => 1,
					];
				},
				(array) $facet_range
			)
		);
	}

	/**
	 * Render facet
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet Holds facet settings.
	 * @param array $items Holds queried items.
	 * @return string Facet markup.
	 */
	public function render_facet( $facet, $items ) {

		$current_range = $facet['selected'];
		$this->range   = (object) [
			'min' => $items[0]->facet_value ?? 0,
			'max' => $items[1]->facet_value ?? 0,
		];

		// If no values selected, select full range.
		if ( empty( $current_range ) ) {
			$current_range = [ $this->range->min, $this->range->max ];
		}

		$output = sprintf(
			'<div class="wpgb-range-facet">
				<input type="range" class="wpgb-range" name="%1$s[]" min="%2$s" max="%3$s" step="%4$s" value="%5$s" hidden>
				<input type="range" class="wpgb-range" name="%1$s[]" min="%2$s" max="%3$s" step="0.00001" value="%6$s" hidden>
				%7$s
			</div>',
			esc_attr( $facet['slug'] ),
			(float) $this->range->min,
			(float) $this->range->max,
			(float) $facet['step'],
			min( $current_range ),
			max( $current_range ),
			$this->range_skeleton( $facet )
		);

		return apply_filters( 'wp_grid_builder/facet/range', $output, $facet, $this->range );

	}

	/**
	 * Range skeleton loader
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet Holds facet settings.
	 * @return string Facet markup.
	 */
	public function range_skeleton( $facet ) {

		$loader  = '<div class="wpgb-range-facet-loader">';
		$loader .= '<div class="wpgb-range-slider">';
		$loader .= '<div class="wpgb-range-progress"></div>';
		$loader .= '<div class="wpgb-range-thumbs">';
		$loader .= '<div class="wpgb-range-thumb"></div>';
		$loader .= '<div class="wpgb-range-thumb"></div>';
		$loader .= '</div>';
		$loader .= '</div>';
		$loader .= '<span class="wpgb-range-values"><span></span></span>';

		if ( ! empty( $facet['reset_range'] ) ) {
			$loader .= '<button type="button" class="wpgb-range-clear" disabled>' . esc_html( $facet['reset_range'] ) . '</button>';
		}

		$loader .= '</div>';

		return $loader;

	}

	/**
	 * Query object ids (post, user, term) for selected facet values
	 *
	 * @since 1.6.0 Added compare type.
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet Holds facet settings.
	 * @return array Holds queried facet object ids.
	 */
	public function query_objects( $facet ) {

		global $wpdb;

		$min = min( $facet['selected'] );
		$max = max( $facet['selected'] );

		if ( ! is_numeric( $min ) && ! is_numeric( $max ) ) {
			return [];
		}

		switch ( $facet['compare_type'] ) {
			case 'surround':
				$where  = " AND (facet_value + 0) <= '$min'";
				$where .= " AND (facet_name + 0) >= '$max'";
				break;
			case 'intersect':
				$where  = " AND (facet_value + 0) <= '$max'";
				$where .= " AND (facet_name + 0) >= '$min'";
				break;
			default:
				$where  = " AND (facet_value + 0) >= '$min'";
				$where .= " AND (facet_name + 0) <= '$max'";
		}

		return $wpdb->get_col(
			$wpdb->prepare(
				"SELECT DISTINCT object_id
				FROM {$wpdb->prefix}wpgb_index
				WHERE slug = %s
				$where", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$facet['slug']
			)
		);
	}
}
