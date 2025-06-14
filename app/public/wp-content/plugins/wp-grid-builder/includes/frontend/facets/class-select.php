<?php
/**
 * Select facet
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
 * Select
 *
 * @class WP_Grid_Builder\Includes\FrontEnd\Facets\Select
 * @since 1.0.0
 */
class Select {

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 * @access public
	 */
	public function __construct() {}

	/**
	 * Query facet choices
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet Holds facet settings.
	 * @return array Holds facet items.
	 */
	public function query_facet( $facet ) {

		if ( $facet['searchable'] && $facet['async'] ) {
			return ( new Async() )->query_selected( $facet );
		}

		if ( $facet['multiple'] ) {
			return ( new CheckBox() )->query_facet( $facet );
		}

		return ( new Radio() )->query_facet( $facet );

	}

	/**
	 * Render facet
	 *
	 * @since 1.0.1 Prevent hierarchical list for asynchronous select.
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet  Holds facet settings.
	 * @param array $items  Holds facet items.
	 * @return string Facet markup.
	 */
	public function render_facet( $facet, $items ) {

		// Set hierarchical value to false if asynchronous facet.
		if ( $facet['searchable'] && $facet['async'] ) {
			$facet['hierarchical'] = false;
		}

		$options  = $this->render_options( $facet, $items );
		$multiple = $facet['multiple'] ? ' multiple' : '';
		$combobox = $facet['combobox'] ? ' wpgb-combobox' : '';
		$holder   = $facet['select_placeholder'] ?: __( 'None', 'wp-grid-builder' );
		$label    = $facet['title'] ?: __( 'Select content', 'wp-grid-builder' );
		$async    = $facet['searchable'] && $facet['async'];

		if ( ! $async && empty( $options ) ) {
			return '';
		}

		$output  = '<div class="wpgb-select-facet">';
			$output .= '<label>';
				$output .= '<span class="wpgb-sr-only">' . esc_html( $label ) . '</span>';
				$output .= '<select class="wpgb-select' . esc_attr( $combobox ) . '" name="' . esc_attr( $facet['slug'] ) . '"' . esc_attr( $multiple ) . '>';
					$output .= '<option value="">' . esc_html( $holder ) . '</option>';
					$output .= $options;
				$output .= '</select>';
				$output .= $this->select_icon( $facet );
			$output .= '</label>';
		$output .= '</div>';

		return $output;

	}

	/**
	 * Select icon
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet Holds facet settings.
	 * @return string Select icon.
	 */
	public function select_icon( $facet ) {

		if ( $facet['multiple'] && ! $facet['combobox'] ) {
			return '';
		}

		$output  = '<span class="wpgb-select-controls">';
		$output .= '<span class="wpgb-select-separator"></span>';
		$output .= '<svg class="wpgb-select-toggle" viewBox="0 0 24 24" height="24" width="24" aria-hidden="true" focusable="false">';
		$output .= '<path d="m12 14.536-.045.043.045-.043-5.3-5.114 5.3 5.114 5.3-5.114-5.3 5.114.045.043Z"/>';
		$output .= '</svg>';
		$output .= '</span>';

		return $output;

	}

	/**
	 * Render select options
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array   $facet Holds facet settings.
	 * @param array   $items Holds facet items.
	 * @param integer $parent Parent id to process children.
	 * @param integer $depth  Children depth level.
	 * @return string Select options markup.
	 */
	public function render_options( $facet, $items, $parent = 0, $depth = 0 ) {

		$output = '';

		foreach ( $items as $index => $item ) {

			// If hierarchical list and is not a child item.
			if ( $facet['hierarchical'] && (int) $item->facet_parent !== (int) $parent ) {
				continue;
			}

			// Hide Children if not hierarchical list.
			if ( ! $facet['hierarchical'] && ! $facet['children'] && (int) $item->facet_parent > 0 ) {
				continue;
			}

			// Hide empty item if allowed.
			if ( ! $facet['show_empty'] && ! $item->count ) {
				continue;
			}

			$output .= $this->render_option( $facet, $item, $depth );

			// Recursively get children.
			if ( $facet['hierarchical'] ) {

				// We set the minimum value of the facet_id to 0 to avoid an infinite loop.
				$output .= $this->render_options( $facet, $items, max( 1, $item->facet_id ), ++$depth );
				--$depth;

			}

			unset( $items[ $index ] );

		}

		return $output;

	}

	/**
	 * Render select option
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array   $facet Holds facet settings.
	 * @param array   $item  Holds current list item.
	 * @param integer $depth  Children depth level.
	 * @return string Select option markup.
	 */
	public function render_option( $facet, $item, $depth ) {

		$selected = in_array( $item->facet_value, $facet['selected'], true );
		$disabled = ! empty( $facet['disabled'] ) || ( ! $selected && empty( $item->count ) );

		$output = sprintf(
			'<option value="%1$s"%2$s%3$s>%4$s%5$s%6$s</option>',
			esc_attr( $item->facet_value ),
			selected( $selected, true, false ),
			disabled( $disabled, true, false ),
			str_repeat( '&emsp;', $depth ),
			esc_html( $item->facet_name ),
			$facet['show_count'] ? '&nbsp;(' . (int) $item->count . ')' : ''
		);

		return apply_filters( 'wp_grid_builder/facet/select', $output, $facet, $item );

	}

	/**
	 * Query object ids (post, user, term) for selected facet values
	 *
	 * @since 1.0.0
	 * @access public
	 *
	 * @param array $facet Holds facet settings.
	 * @return array Holds queried facet object ids.
	 */
	public function query_objects( $facet ) {

		if ( $facet['multiple'] ) {
			$instance = new CheckBox();
		} else {
			$instance = new Radio();
		}

		return $instance->query_objects( $facet );

	}
}
