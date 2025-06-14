<?php
/**
 * Date facet
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
 * Date
 *
 * @class WP_Grid_Builder\Includes\FrontEnd\Facets\Date
 * @since 1.0.0
 */
class Date {

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
	 * Filter facet response to set date settings
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
		if ( 'date' !== $facet['type'] || isset( $facet['settings']['mode'] ) ) {
			return $response;
		}

		$range = $this->query_range( $facet );
		$min   = substr( $range->min_date ?: '', 0, 10 );
		$max   = substr( $range->max_date ?: '', 0, 10 );

		$response['settings'] = wp_parse_args(
			[
				'mode'          => $facet['date_type'],
				'locale'        => get_locale(),
				'minDate'       => strtotime( $min ) ? $min : '',
				'maxDate'       => strtotime( $max ) ? $max : '',
				'altInput'      => true,
				'altFormat'     => $facet['date_format'] ?: 'Y-m-d',
				'defaultDate'   => $facet['selected'],
				'disableMobile' => true,
			],
			$response['settings']
		);

		return $response;

	}

	/**
	 * Query date range
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet Holds facet settings.
	 * @return object
	 */
	public function query_range( $facet ) {

		global $wpdb;

		$where_clause = wpgb_get_filtered_where_clause( $facet, 'OR' );

		return $wpdb->get_row(
			$wpdb->prepare(
				"SELECT MIN(facet_value) AS min_date, MAX(facet_name) AS max_date
				FROM {$wpdb->prefix}wpgb_index
				WHERE slug = %s
				AND facet_value != ''
				AND $where_clause", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
				$facet['slug']
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
	 * @return string Facet markup.
	 */
	public function render_facet( $facet ) {

		$label  = $facet['title'] ?: __( 'Date', 'wp-grid-builder' );
		$holder = $facet['date_placeholder'] ?: __( 'Select a Date', 'wp-grid-builder' );
		$output = sprintf(
			'<div class="wpgb-date-facet">
				<label>
					<span class="wpgb-sr-only">%1$s</span>
					<input class="wpgb-input" type="text" name="%2$s" placeholder="%3$s">
					%4$s
				</label>
				%5$s
			</div>',
			esc_html( $label ),
			esc_attr( $facet['slug'] ),
			esc_attr( $holder ),
			$this->calendar_icon(),
			$this->clear_button()
		);

		return apply_filters( 'wp_grid_builder/facet/date', $output, $facet );

	}

	/**
	 * Calendar icon
	 *
	 * @since 1.2.1 Change SVG icon markup
	 * @since 1.0.0
	 * @access public
	 */
	public function calendar_icon() {

		$icon  = '<svg class="wpgb-input-icon" viewBox="0 0 24 24" height="16" width="16" aria-hidden="true" focusable="false">';
		$icon .= '<path d="M4.25 3.205h15.5a3 3 0 013 3V19.75a3 3 0 01-3 3H4.25a3 3 0 01-3-3V6.205a3 3 0 013-3zM22.262 9.557H1.739 M7.114 5.65v-4.4M16.886 5.65v-4.4" stroke-linecap="round"/>';
		$icon .= '</svg>';

		return $icon;

	}

	/**
	 * Clear button
	 *
	 * @since 1.3.0
	 * @access public
	 *
	 * @return string Clear button.
	 */
	public function clear_button() {

		$output  = '<button type="button" class="wpgb-clear-button" hidden>';
		$output .= '<span class="wpgb-sr-only">' . esc_html__( 'Clear', 'wp-grid-builder' ) . '</span>';
		$output .= '<svg viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" focusable="false">';
		$output .= '<path d="m12 12-4.25 4.75L12.001 12 7.75 7.25 12.001 12l4.249-4.75L12 12l4.25 4.75Z"/>';
		$output .= '</svg>';
		$output .= '</button>';

		return $output;

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

		$min = min( $facet['selected'] ) ?: '';
		$max = max( $facet['selected'] ) ?: '';

		if ( ! strtotime( $min ) || ! strtotime( $max ) ) {
			return [];
		}

		// Single date clause.
		$where = " AND LEFT(facet_value, 10) = '$min'";

		if ( 'range' === $facet['date_type'] ) {

			switch ( $facet['compare_type'] ) {
				case 'surround':
					$where  = " AND LEFT(facet_value, 10) <= '$min'";
					$where .= " AND LEFT(facet_name, 10) >= '$max'";
					break;
				case 'intersect':
					$where  = " AND LEFT(facet_value, 10) <= '$max'";
					$where .= " AND LEFT(facet_name, 10) >= '$min'";
					break;
				default:
					$where  = " AND LEFT(facet_value, 10) >= '$min'";
					$where .= " AND LEFT(facet_name, 10) <= '$max'";
			}
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
