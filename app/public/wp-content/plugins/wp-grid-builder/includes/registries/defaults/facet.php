<?php
/**
 * Facet defaults
 *
 * @package   WP Grid Builder
 * @author    Loïc Blascos
 * @copyright 2019-2024 Loïc Blascos
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

return [
	// Naming.
	'id'                    => '',
	'name'                  => '',
	'title'                 => '',
	'slug'                  => '',
	'shortcode'             => '',
	// Behaviour.
	'action'                => 'filter',
	'filter_type'           => 'checkbox',
	// Source content.
	'source'                => 'taxonomy',
	'post'                  => '',
	'taxonomy'              => 'category',
	'include'               => [],
	'exclude'               => [],
	'include_choices'       => [],
	'exclude_choices'       => [],
	'depth'                 => '',
	'child_of'              => '',
	'parent'                => '',
	'field_type'            => 'post',
	'post_field'            => 'post_type',
	'user_field'            => 'display_name',
	'term_field'            => 'term_name',
	'meta_key'              => '',
	'meta_key_upper'        => '',
	'compare_type'          => 'inside',
	'hierarchical'          => 0,
	'treeview'              => 0,
	'children'              => 1,
	// Logic and number.
	'show_empty'            => 1,
	'show_count'            => 1,
	'current_terms'         => 0,
	'logic'                 => 'AND',
	'limit'                 => 99,
	'display_limit'         => 99,
	'show_more_label'       => __( '+ Show [number] more', 'wp-grid-builder' ),
	'show_less_label'       => __( '- Show less', 'wp-grid-builder' ),
	'orderby'               => 'count',
	'order'                 => 'DESC',
	// Number facet.
	'number_inputs'         => 'range',
	'min_placeholder'       => '[min]',
	'max_placeholder'       => '[max]',
	'exact_placeholder'     => '[min] - [max]',
	'min_label'             => __( 'Min', 'wp-grid-builder' ),
	'max_label'             => __( 'Max', 'wp-grid-builder' ),
	'exact_label'           => __( 'Value', 'wp-grid-builder' ),
	'submit_label'          => __( 'Submit', 'wp-grid-builder' ),
	'number_labels'         => true,
	// Range facet.
	'prefix'                => '',
	'suffix'                => '',
	'step'                  => 1,
	'thousands_separator'   => '',
	'decimal_separator'     => '.',
	'decimal_places'        => 0,
	'reset_range'           => __( 'Reset', 'wp-grid-builder' ),
	// Date facet.
	'date_type'             => '',
	'date_format'           => 'Y-m-d',
	'date_placeholder'      => __( 'Select a Date', 'wp-grid-builder' ),
	// Select facet.
	'combobox'              => 0,
	'clearable'             => 0,
	'searchable'            => 0,
	'async'                 => 0,
	'no_results'            => __( 'No Results Found.', 'wp-grid-builder' ),
	'loading'               => __( 'Loading...', 'wp-grid-builder' ),
	'search'                => __( 'Please enter 1 or more characters.', 'wp-grid-builder' ),
	// Sort facet.
	'sort_options'          => [],
	// button facet.
	'multiple'              => 0,
	'all_label'             => _x( 'All', 'Default Facet Label', 'wp-grid-builder' ),
	// select facet.
	'select_placeholder'    => _x( 'None', 'Select Placeholder', 'wp-grid-builder' ),
	// Search facet.
	'search_placeholder'    => '',
	'search_engine'         => 'wordpress',
	'search_number'         => 200,
	'search_post_columns'   => [],
	'search_user_columns'   => [],
	'search_debounce'       => 350,
	'search_min_length'     => 1,
	'search_relevancy'      => 1,
	'instant_search'        => 0,
	// Autocomplete facet.
	'acplt_placeholder'     => '',
	'acplt_debounce'        => 350,
	'acplt_min_length'      => 1,
	'acplt_relevance'       => true,
	'acplt_auto_focus'      => true,
	'acplt_highlight'       => true,
	'acplt_match_all'       => false,
	// Color facet.
	'color_order'           => false,
	'color_options'         => [],
	// az_index facet.
	'alphabetical_index'    => '#,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z',
	'numeric_index'         => '0,1,2,3,4,5,6,7,8,9',
	// Loader facet.
	'load_type'             => 'pagination',
	// Pagination facet.
	'pagination'            => 'numbered',
	'show_all'              => 0,
	'mid_size'              => 2,
	'end_size'              => 2,
	'prev_next'             => 0,
	'prev_text'             => __( '« Previous', 'wp-grid-builder' ),
	'next_text'             => __( 'Next »', 'wp-grid-builder' ),
	'dots_page'             => '…',
	'scroll_to_top'         => 0,
	'scroll_to_top_offset'  => 0,
	// Per page facet.
	'per_page_options'      => '10, 25, 50, 100',
	// Load more facet.
	'load_posts_number'     => 10,
	'load_more_event'       => 'onclick',
	'load_more_remain'      => 1,
	'load_more_text'        => __( 'Load more', 'wp-grid-builder' ),
	'loading_text'          => __( 'Loading...', 'wp-grid-builder' ),
	// Result counts facet.
	'result_count_singular' => __( '1 post found', 'wp-grid-builder' ),
	'result_count_plural'   => __( '[from] - [to] of [total] posts', 'wp-grid-builder' ),
	// Reset facet.
	'reset_label'           => __( 'Reset', 'wp-grid-builder' ),
	'reset_facet'           => 0,
	// Apply facet.
	'apply_redirect'        => false,
	'apply_url'             => '',
	'apply_history'         => false,
	'apply_label'           => __( 'Apply filters', 'wp-grid-builder' ),
	'apply_excluded'        => [],
	// Conditions.
	'actions'               => [],
	// Dynamic vars.
	'html'                  => '',
	// Unecessary common values for facet ajax response.
	'common'                => [
		'id'                  => '',
		'name'                => '',
		'slug'                => '',
		'title'               => '',
		'action'              => '',
		'actions'             => '',
		'source'              => '',
		'post'                => '',
		'taxonomy'            => '',
		'taxonomy_terms'      => '',
		'field_type'          => '',
		'filter_type'         => '',
		'load_type'           => '',
		'post_field'          => '',
		'user_field'          => '',
		'term_field'          => '',
		'meta_key'            => '',
		'meta_key_upper'      => '',
		'parent'              => '',
		'child_of'            => '',
		'depth'               => '',
		'current_terms'       => '',
		'exclude'             => '',
		'include'             => '',
		'include_choices'     => '',
		'exclude_choices'     => '',
		'children'            => '',
		'show_empty'          => '',
		'show_count'          => '',
		'logic'               => '',
		'limit'               => '',
		'display_limit'       => '',
		'orderby'             => '',
		'order'               => '',
		'color_order'         => '',
		'color_options'       => '',
		'min_label'           => '',
		'max_label'           => '',
		'min_placeholder'     => '',
		'max_placeholder'     => '',
		'number_inputs'       => '',
		'number_labels'       => '',
		'submit_label'        => '',
		'search_post_columns' => '',
		'search_user_columns' => '',
	],
];
