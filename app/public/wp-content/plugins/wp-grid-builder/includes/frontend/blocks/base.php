<?php
/**
 * Base
 *
 * @package   WP Grid Builder
 * @author    Loïc Blascos
 * @copyright 2019-2024 Loïc Blascos
 */

use WP_Grid_Builder\Includes\Helpers;
use WP_Grid_Builder\Includes\Container;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render blocks
 *
 * @since 2.0.0
 *
 * @param array $block Holds block argument.
 */
function wpgb_render_blocks( $block ) {

	if ( empty( $block['blocks'] ) ) {
		return;
	}

	array_map( 'wpgb_render_block', $block['blocks'] );

}

/**
 * Render block
 *
 * @since 2.0.0
 *
 * @param array $block Holds block argument.
 */
function wpgb_render_block( $block ) {

	// If block has no content.
	if ( empty( $block['content'] ) ) {
		return;
	}

	$callback = wpgb_get_block_callback( $block );

	if ( empty( $callback ) ) {
		return;
	}

	if (
		isset( $block['conditions'] ) &&
		! apply_filters( 'wp_grid_builder/do_conditions', true, $block['conditions'], 'card' )
	) {
		return;
	}

	$callback( $block['content'], $block['action'] );

}

/**
 * Get block callback
 *
 * @since 2.0.0
 *
 * @param array $block Holds block argument.
 * @return string;
 */
function wpgb_get_block_callback( &$block ) {

	if ( empty( $block['content'] ) ) {
		return '';
	}

	$callback = '';
	$content  = $block['content'];
	$source   = isset( $content['source'] ) ? $content['source'] : 'post_field';
	$source   = isset( $content[ $source ] ) ? $content[ $source ] : $source;
	$blocks   = apply_filters( 'wp_grid_builder/blocks', [] );
	$callback = WPGB_SLUG . '_' . $source;

	if ( ! empty( $blocks[ $source ]['render_callback'] ) ) {
		$callback = $blocks[ $source ]['render_callback'];
	}

	if ( ! is_string( $callback ) || ! function_exists( $callback ) ) {
		$callback = 'wpgb_custom_block';
	}

	// Set default HTML tag.
	if ( empty( $block['content']['tag'] ) && ! empty( $blocks[ $source ]['tagName'] ) ) {
		$block['content']['tag'] = $blocks[ $source ]['tagName'];
	}

	// Merge inner blocks.
	if ( ! empty( $block['blocks'] ) ) {
		$block['content']['blocks'] = $block['blocks'];
	}

	return $callback;

}

/**
 * Display custom block
 *
 * @since 1.0.0
 *
 * @param array $block  Holds block args.
 * @param array $action Holds action args.
 */
function wpgb_custom_block( $block = [], $action = [] ) {

	if ( empty( $block['source'] ) ) {
		return;
	}

	$blocks_source = $block['source'];

	if ( 'custom_block' === $blocks_source ) {
		$blocks_source = 'block_name';
	}

	if ( empty( $block[ $blocks_source ] ) ) {
		return;
	}

	$block_name    = $block[ $blocks_source ];
	$custom_blocks = apply_filters( 'wp_grid_builder/blocks', [] );

	if ( empty( $custom_blocks[ $block_name ] ) ) {
		return;
	}

	$custom_block = $custom_blocks[ $block_name ];

	if ( empty( $custom_block['render_callback'] ) || ! is_callable( $custom_block['render_callback'] ) ) {
		return;
	}

	if ( 'custom_block' === $block['source'] ) {

		ob_start();
		call_user_func( $custom_block['render_callback'], $block, $action );
		$content = ob_get_clean();

		// Render if content in custom block.
		if ( ! empty( $content ) ) {

			wpgb_block_start( $block, $action );
				echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wpgb_block_end( $block, $action );

		}
	} else {
		call_user_func( $custom_block['render_callback'], $block, $action );
	}
}

/**
 * Display block tag start
 *
 * @since 1.1.8 Added block HTML attributes support.
 * @since 1.0.0
 *
 * @param array $block  Holds block args.
 * @param array $action Holds action args.
 */
function wpgb_block_start( $block = [], $action = [] ) {

	if ( empty( $block['tag'] ) ) {
		$block['tag'] = 'div';
	}

	$link  = wpgb_get_block_link( $action );
	$class = wpgb_get_block_class( $block, $action );

	if ( $link && ( 'div' === $block['tag'] || 'span' === $block['tag'] ) ) {

		$action['class'] = $class;
		wpgb_block_action( $action, $link );
		return;

	}

	echo '<' . tag_escape( $block['tag'] );

	if ( ! empty( $class ) ) {
		echo ' class="' . esc_attr( $class ) . '"';
	}

	if ( ! empty( $block['attr'] ) ) {

		foreach ( $block['attr'] as $name => $value ) {
			echo ! empty( $value ) ? ' ' . esc_attr( $name ) . '="' . esc_attr( $value ) . '"' : '';
		}
	}

	echo '>';

	wpgb_block_action( $action, $link );

}

/**
 * Display block tag end
 *
 * @since 1.0.0
 *
 * @param array $block  Holds block args.
 * @param array $action Holds action args.
 */
function wpgb_block_end( $block = [], $action = [] ) {

	if ( empty( $block['tag'] ) ) {
		$block['tag'] = 'div';
	}

	$link = wpgb_get_block_link( $action );

	if ( $link ) {

		echo '</a>';

		if ( 'div' === $block['tag'] || 'span' === $block['tag'] ) {
			return;
		}
	}

	echo '</' . tag_escape( $block['tag'] ) . '>';

}

/**
 * Retrieve block action link
 *
 * @since 1.0.1 Check ACF link field url key for metadata.
 * @since 1.0.0
 *
 * @param array $action Holds action args.
 * @return string
 */
function wpgb_get_block_link( $action = [] ) {

	if ( empty( $action['action_type'] ) ) {
		return '';
	}

	if ( 'link' !== $action['action_type'] ) {
		return '';
	}

	if ( empty( $action['link_url'] ) ) {
		$action['link_url'] = 'single_post';
	}

	switch ( $action['link_url'] ) {
		case 'metadata':
			$link = isset( $action['meta_key'] ) ? wpgb_get_metadata( $action['meta_key'] ) : '';
			$link = ! empty( $link['url'] ) ? $link['url'] : $link; // If ACF link field (url key).
			return is_string( $link ) ? $link : '';
		case 'custom_url':
			return isset( $action['custom_url'] ) ? apply_filters( 'wp_grid_builder/dynamic_data', $action['custom_url'], 'card' ) : '';
		case 'author_page':
			return wpgb_get_author_posts_url();
		default:
			return wpgb_get_the_permalink();
	}
}

/**
 * Display block action link
 *
 * @since 1.0.0
 *
 * @param array  $action Holds action args.
 * @param string $link Action link.
 */
function wpgb_block_action( $action = [], $link = '' ) {

	if ( empty( $link ) ) {
		return;
	}

	$class  = isset( $action['class'] ) ? $action['class'] : '';
	$rel    = isset( $action['link_rel'] ) ? $action['link_rel'] : '';
	$target = isset( $action['link_target'] ) ? $action['link_target'] : '';
	$label  = isset( $action['link_aria_label'] ) ? $action['link_aria_label'] : '';

	if ( '_blank' === $target ) {

		$rel = wp_parse_args(
			(array) $rel,
			[
				'external',
				'noopener',
				'noreferrer',
			]
		);

		$rel = array_unique( $rel );

	}

	if ( ! empty( $rel ) ) {
		$rel = trim( implode( ' ', (array) $rel ) );
	}

	printf(
		'<a%s%s%s%s href="%s">',
		( ! empty( $class ) ? ' class="' . esc_attr( $class ) . '"' : '' ),
		( ! empty( $target ) ? ' target="' . esc_attr( $target ) . '"' : '' ),
		( ! empty( $label ) ? ' aria-label="' . esc_attr( apply_filters( 'wp_grid_builder/dynamic_data', $label, 'card' ) ) . '"' : '' ),
		( ! empty( $rel ) ? ' rel="' . esc_attr( $rel ) . '"' : '' ),
		esc_url( $link )
	);
}

/**
 * Retrieve block class name
 *
 * @since 1.0.0
 *
 * @param array $block  Holds block args.
 * @param array $action Holds action args.
 * @return string
 */
function wpgb_get_block_class( $block = [], $action = [] ) {

	$class  = isset( $block['name'] ) ? $block['name'] : '';
	$class .= isset( $action['action_type'] ) && 'open_media' === $action['action_type'] ? ' wpgb-card-media-button' : '';
	$class .= isset( $block['class'] ) ? ' ' . $block['class'] : '';
	$class .= wpgb_block_color_scheme( $block );
	$class  = Helpers::sanitize_html_classes( $class );

	return $class;

}

/**
 * Retrieve block color scheme class
 *
 * @since 1.0.0
 *
 * @param array $block Holds block args.
 * @return string
 */
function wpgb_block_color_scheme( $block ) {

	$schemes = '';

	if ( isset( $block['css_variable'] ) ) {
		return $schemes;
	}

	if ( isset( $block['idle_scheme'] ) && ! empty( $block['idle_scheme'] ) ) {
		$schemes .= ' wpgb-idle-' . $block['idle_scheme'];
	}

	if ( isset( $block['hover_scheme'] ) && ! empty( $block['hover_scheme'] ) ) {
		$schemes .= ' wpgb-hover-' . $block['hover_scheme'];
	}

	return $schemes;

}

/**
 * Retrieve current object from custom loop
 *
 * @since 1.0.0
 *
 * @return object
 */
function wpgb_get_object() {

	if ( ! Container::has( 'Container/Grid' ) ) {
		return (object) [];
	}

	$object = Container::instance( 'Container/Grid' )->get( 'Loop' )->object;

	if ( ! empty( $object ) && is_object( $object ) ) {
		return $object;
	}

	return (object) [];

}

/**
 * Retrieve current object type (post, user, term)
 *
 * @since 1.0.0
 *
 * @return string
 */
function wpgb_get_object_type() {

	$post = wpgb_get_post();

	if ( ! isset( $post->object_type ) ) {
		return '';
	}

	return $post->object_type;

}

/**
 * Retrieve the post meta-data key value
 *
 * @since 1.0.0
 *
 * @param string $key Meta-data key.
 */
function wpgb_get_metadata( $key = '' ) {

	if ( empty( $key ) ) {
		return;
	}

	$key  = trim( $key );
	$post = wpgb_get_post();

	if ( ! isset( $post->metadata ) ) {
		return '';
	}

	$output = apply_filters( 'wp_grid_builder/block/custom_field', '', $key );

	if ( ! is_null( $output ) && '' !== $output && false !== $output ) {
		return $output;
	}

	if ( ! isset( $post->metadata[ $key ] ) ) {
		return '';
	}

	return $post->metadata[ $key ];

}

/**
 * Normalize metadata block settings
 *
 * @since 1.1.9
 *
 * @param array $block Holds block args.
 * @return array
 */
function wpgb_normalize_metadata_settings( $block ) {

	return wp_parse_args(
		$block,
		[
			'meta_type'                => '',
			'meta_prefix'              => '',
			'meta_suffix'              => '',
			'meta_input_date'          => '',
			'meta_output_date'         => get_option( 'date_format' ),
			'meta_decimal_places'      => '0',
			'meta_decimal_separator'   => '.',
			'meta_thousands_separator' => '',
		]
	);
}

/**
 * Format metadata value
 *
 * @since 1.1.9
 *
 * @param array $block Holds block args.
 * @param mixed $meta  Holds meta value.
 * @return string
 */
function wpgb_format_metadata( $block = [], $meta = '' ) {

	if ( is_null( $meta ) || '' === $meta || false === $meta ) {
		return '';
	}

	// Recursively format metadata values (repeater).
	if ( ! is_scalar( $meta ) ) {

		$meta = array_map(
			function( $meta ) use ( $block ) {
				return wpgb_format_metadata( $block, $meta );
			},
			(array) $meta
		);

		$meta = array_filter( $meta );
		$meta = implode( ', ', $meta );

		return $meta;

	}

	if ( ! isset( $block['meta_type'] ) ) {
		return $meta;
	}

	if ( 'date' === $block['meta_type'] ) {
		$meta = wpgb_format_metadata_date( $block, $meta );
	} elseif ( 'number' === $block['meta_type'] ) {
		$meta = wpgb_format_metadata_number( $block, $meta );
	}

	return $meta;

}

/**
 * Format metadata value to date format
 *
 * @since 1.1.9
 *
 * @param array $block Holds block args.
 * @param mixed $meta  Holds meta value.
 * @return string
 */
function wpgb_format_metadata_date( $block = [], $meta = '' ) {

	if ( ! empty( $block['meta_input_date'] ) ) {
		$date = \DateTime::createFromFormat( $block['meta_input_date'], $meta );
	} else {

		try {
			$date = new \DateTime( $meta );
		} catch ( \Exception $e ) {
			$date = null;
		}
	}

	if ( $date ) {
		$meta = date_i18n( $block['meta_output_date'], $date->format( 'U' ) );
	}

	return $meta;

}

/**
 * Format metadata value to number format
 *
 * @since 1.1.9
 *
 * @param array $block Holds block args.
 * @param mixed $meta  Holds meta value.
 * @return float
 */
function wpgb_format_metadata_number( $block = [], $meta = '' ) {

	return number_format(
		(float) $meta,
		$block['meta_decimal_places'],
		$block['meta_decimal_separator'],
		$block['meta_thousands_separator']
	);
}

/**
 * Retrieve the media formats (standard, gallery, audio or video)
 *
 * @since 1.0.0
 *
 * @return string
 */
function wpgb_get_media_format() {

	$allowed = wpgb_get_grid_settings( 'post_formats' );
	$media   = wpgb_get_attached_media();
	$format  = wpgb_get_post_format();

	if ( 'standard' === $format ) {
		return $format;
	}

	if ( empty( $media ) ) {
		return 'standard';
	}

	$format_exists = in_array( $format, $allowed, true );
	$media_format  = isset( $media['format'] ) ? $media['format'] : 'standard';
	$has_sources   = isset( $media['sources'] ) && ! empty( $media['sources'] );

	if ( $format_exists && $format === $media_format && $has_sources ) {
		return $format;
	} else {
		return 'standard';
	}
}

/**
 * Retrieve the thumbnail aspect ratio
 *
 * @since 1.0.0
 *
 * @param array $image Holds image attributes.
 */
function wpgb_get_thumbnail_ratio( $image = [] ) {

	$x = 4;
	$y = 3;

	$format   = wpgb_get_media_format();
	$settings = wpgb_get_grid_settings();

	if ( 'metro' === $settings->type ) {
		return;
	}

	if ( ! empty( $image['height'] ) && ! empty( $image['width'] ) ) {

		$x = $image['width'];
		$y = $image['height'];

	}

	if ( 'video' === $format ) {

		$meta = wpgb_get_metadata( WPGB_SLUG );

		if ( ! empty( $meta['video_ratio'] ) ) {

			$ratio = $meta['video_ratio'];
			$ratio = explode( ':', $ratio );

			$x = isset( $ratio[0] ) ? $ratio[0] : 16;
			$y = isset( $ratio[1] ) ? $ratio[1] : 9;

		}
	}

	if ( 'masonry' === $settings->type && $settings->thumbnail_aspect ) {

		$x = $settings->thumbnail_ratio['x'] ?: 4;
		$y = $settings->thumbnail_ratio['y'] ?: 3;

	}

	$padding = number_format( $y / $x * 100, 2 );

	printf(
		'<svg data-ratio style="padding-top:%s%%" viewBox="0 0 %d %d"></svg>',
		esc_attr( (float) $padding ),
		esc_attr( $x ),
		esc_attr( $y )
	);
}

/**
 * Retrieve the video poster
 *
 * @since 1.0.0
 *
 * @return array
 */
function wpgb_get_video_poster() {

	if ( 'video' !== wpgb_get_media_format() ) {
		return;
	}

	if ( ! wpgb_get_grid_settings( 'embedded_video_poster' ) ) {
		return;
	}

	$poster = wpgb_get_embedded_poster();

	if ( ! isset( $poster->thumbnail_url ) ) {
		return;
	}

	$thumb = [
		'url'    => $poster->thumbnail_url,
		'height' => isset( $poster->height ) ? $poster->height : 450,
		'width'  => isset( $poster->width ) ? $poster->width : 800,
	];

	return [
		'alt'   => $poster->title,
		'sizes' => [
			'thumbnail' => $thumb,
			'full'      => $thumb,
		],
	];
}

/**
 * Retrieve embedded video poster (Youtube, Vimeo, Wistia)
 *
 * @since 1.0.0
 *
 * @return array
 */
function wpgb_get_embedded_poster() {

	static $oembeds = [];

	$type = wpgb_get_object_type();

	// Only for support metadata type.
	if ( 'post' !== $type && 'user' !== $type && 'term' !== $type ) {
		return;
	}

	$media = wpgb_get_attached_media();

	if ( ! isset( $media['type'] ) || 'embedded' !== $media['type'] ) {
		return;
	}

	$video_url = $media['sources']['url'];
	$oembed    = wpgb_get_metadata( '_' . WPGB_SLUG . '_oembed' );
	$not_match = ! isset( $oembed->video_url ) || $oembed->video_url !== $video_url;

	// If oembed does not match current video url, try in tmp cache.
	if ( ( empty( $oembed ) || $not_match ) && isset( $oembeds[ $video_url ] ) ) {
		$oembed = $oembeds[ $video_url ];
	}

	// If oembed exists.
	if ( isset( $oembed->video_url ) && $oembed->video_url === $video_url ) {
		return $oembed;
	}

	$oembed = Helpers::get_oembed_data(
		$media['sources']['provider'],
		$media['sources']['id']
	);

	if ( empty( $oembed ) ) {
		return;
	}

	$oembed->video_url = $video_url;

	update_metadata( $type, wpgb_get_the_id(), '_' . WPGB_SLUG . '_oembed', $oembed );

	// TMP Store oembeds.
	$oembeds[ $video_url ] = $oembed;

	return $oembed;

}

/**
 * Retrieve embedded video url (Youtube, Vimeo, Wistia)
 *
 * @since 1.0.0
 *
 * @param  array $embed Holds embedded video data.
 * @return array
 */
function wpgb_get_embedded_url( $embed ) {

	if ( ! isset( $embed['provider'], $embed['id'] ) ) {
		return;
	}

	$url = '';

	switch ( $embed['provider'] ) {
		case 'youtube':
			$url = 'https://www.youtube.com/embed/' . $embed['id'];
			break;
		case 'vimeo':
			$url = 'https://player.vimeo.com/video/' . $embed['id'];
			break;
		case 'wistia':
			$url = 'https://fast.wistia.net/embed/iframe/' . $embed['id'];
			break;
	}

	return $url;

}

/**
 * Retrieve the post attachment
 *
 * @since 1.0.0
 *
 * @return array
 */
function wpgb_get_attachment() {

	$post   = wpgb_get_post();
	$poster = wpgb_get_video_poster();

	if ( ! empty( $poster ) ) {
		return $poster;
	}

	if ( empty( $post->post_thumbnail ) ) {
		return wpgb_get_grid_settings( 'default_thumbnail' );
	}

	return $post->post_thumbnail;

}

/**
 * Retrieve post media data (gallery, audio, video)
 *
 * @since 1.0.0
 *
 * @return array
 */
function wpgb_get_attached_media() {

	$post = wpgb_get_post();

	if ( ! isset( $post->post_media ) ) {
		return;
	}

	return $post->post_media;

}

/**
 * Retrieve the post attachment metadata
 *
 * @since 1.0.0
 *
 * @return array
 */
function wpgb_get_attachment_metadata() {

	$image  = wpgb_get_attachment();
	$format = wpgb_get_media_format();

	// If no attachment for standard format.
	if ( empty( $image ) ) {
		return;
	}

	// Normalize metadata.
	$image = wp_parse_args(
		$image,
		[
			'alt'         => '',
			'title'       => '',
			'caption'     => '',
			'description' => '',
			'mime_type'   => '',
			'sizes'       => [],
		]
	);

	// Normalize sizes.
	$image['sizes'] = array_map(
		function( $size ) {

			return wp_parse_args(
				$size,
				[
					'height' => 480,
					'width'  => 640,
					'url'    => '',
				]
			);

		},
		$image['sizes']
	);

	return $image;

}

/**
 * Return the attachment source image data.
 *
 * @since 1.0.0
 *
 * @param string  $size     Optional. Registered image size to retrieve the source for.
 * @param array   $metadata Optional. Image metadata.
 * @param boolean $empty    Optional. Get another image size if missing.
 * @return string
 */
function wpgb_get_attachment_image_src( $size = 'full', $metadata = '', $empty = false ) {

	if ( empty( $metadata ) || ! is_array( $metadata ) ) {
		$metadata = wpgb_get_attachment_metadata();
	}

	if ( empty( $metadata['sizes'] ) ) {
		return;
	}

	if ( ! isset( $metadata['sizes'][ $size ] ) ) {
		$image = ! $empty ? reset( $metadata['sizes'] ) : '';
	} else {
		$image = $metadata['sizes'][ $size ];
	}

	return $image;

}

/**
 * Return the post thumbnail URL.
 *
 * @since 1.0.0
 *
 * @param string  $size     Optional. Registered image size to retrieve the source for.
 * @param array   $metadata Optional. Image metadata.
 * @param boolean $empty    Optional. Get another image size if missing.
 * @return string
 */
function wpgb_get_the_post_thumbnail_url( $size = 'full', $metadata = '', $empty = false ) {

	$image = wpgb_get_attachment_image_src( $size, $metadata, $empty );

	if ( isset( $image['url'] ) && ! empty( $image['url'] ) ) {
		return $image['url'];
	}

	return '';

}

/**
 * Check if post has media (image, gallery, audio or video)
 *
 * @since 1.0.0
 */
function wpgb_has_post_media() {

	$format = wpgb_get_media_format();

	if ( 'gallery' === $format || 'audio' === $format || 'video' === $format ) {
		return true;
	}

	return wpgb_has_post_thumbnail();

}

/**
 * CHeck if post has a thumbnail
 *
 * @since 1.0.0
 */
function wpgb_has_post_thumbnail() {

	$thumb = wpgb_get_the_post_thumbnail_url();

	if ( empty( $thumb ) ) {
		return false;
	}

	return true;

}

/**
 * Display the thumbnail
 *
 * @since 1.0.0
 *
 * @param array $block  Holds block args.
 * @param array $action Holds layer action properties.
 */
function wpgb_the_post_media( $block = [], $action = [] ) {

	$format = wpgb_get_media_format();

	switch ( $format ) {
		case 'audio':
			wpgb_the_post_audio( $block, $action );
			break;
		case 'video':
			wpgb_the_post_video( $block, $action );
			break;
		case 'gallery':
			wpgb_the_post_gallery( $block, $action );
			break;
		default:
			if ( 'product' === wpgb_get_post_type() ) {
				wpgb_the_product_thumbnail( $block, $action );
			} else {
				wpgb_the_post_thumbnail( $block, $action );
			}
	}
}

/**
 * Set media thumbnail link
 *
 * @since 1.0.0
 *
 * @param array $action Holds layer action properties.
 */
function wpgb_the_post_media_link( $action = [] ) {

	if ( empty( $action ) ) {
		return;
	}

	$link = wpgb_get_block_link( $action );

	if ( empty( $link ) ) {
		return;
	}

	$action['class'] = 'wpgb-card-layer-link';
	wpgb_block_action( $action, $link );
	wpgb_block_end( [], $action );

}

/**
 * Display the post thumbnail
 *
 * @since 1.0.0
 *
 * @param array   $block  Holds block args.
 * @param array   $action Holds layer action properties.
 * @param boolean $spacer Optional. Add aspect ratio spacer.
 */
function wpgb_the_post_thumbnail( $block = [], $action = [], $spacer = true ) {

	$meta = wpgb_get_attachment_metadata();

	if ( empty( $meta ) ) {
		return;
	}

	if ( $spacer ) {

		$thumb = wpgb_get_attachment_image_src( 'thumbnail' );
		wpgb_get_thumbnail_ratio( $thumb );

	}

	$class = 'wpgb-card-media-thumbnail';

	if ( isset( $action['action_type'] ) && 'open_media' === $action['action_type'] ) {
		$class .= ' wpgb-card-media-button';
	}

	if ( ! empty( $block['class'] ) ) {
		$class .= ' ' . $block['class'];
	}

	echo '<div class="' . esc_attr( $class ) . '">';
		wpgb_the_thumbnail( $meta );
		wpgb_the_post_media_link( $action );
	echo '</div>';

}

/**
 * Display the post gallery
 *
 * @since 1.0.0
 *
 * @param array $block  Holds block args.
 * @param array $action Holds layer action properties.
 */
function wpgb_the_post_gallery( $block = [], $action = [] ) {

	$slideshow = wpgb_get_grid_settings( 'gallery_slideshow' );
	$media     = wpgb_get_attached_media();
	$images    = $media['sources'];
	$image     = reset( $images );

	if ( empty( $image['sizes'] ) ) {
		return;
	}

	$image  = $image['sizes']['thumbnail'];
	$class  = 'wpgb-card-media-thumbnail';
	$active = true;

	if ( isset( $action['action_type'] ) && 'open_media' === $action['action_type'] ) {
		$class .= ' wpgb-card-media-button';
	}

	if ( ! empty( $block['class'] ) ) {
		$class .= ' ' . $block['class'];
	}

	wpgb_get_thumbnail_ratio( $image );

	echo '<div class="' . esc_attr( $class ) . '">';
	echo '<ul class="wpgb-card-media-gallery"' . ( $slideshow ? ' data-slideshow' : '' ) . '>';

	foreach ( $images as $image ) {

		echo '<li class="wpgb-card-media-gallery-item" ' . ( $active ? 'data-active' : '' ) . '>';
		wpgb_the_thumbnail( $image );
		echo '</li>';

		$active = false;

	}

	echo '</ul>';
	wpgb_the_post_media_link( $action );
	echo '</div>';

}

/**
 * Display the post video
 *
 * @since 1.0.0
 *
 * @param array $block  Holds block args.
 * @param array $action Holds layer action properties.
 */
function wpgb_the_post_video( $block = [], $action = [] ) {

	$lightbox = wpgb_get_grid_settings( 'video_lightbox' );
	$thumb    = wpgb_get_attachment_image_src( 'thumbnail' );
	$media    = wpgb_get_attached_media();
	$sources  = $media['sources'];
	$type     = $media['type'];

	wpgb_get_thumbnail_ratio( $thumb );

	if ( ! $lightbox ) {

		echo '<div class="wpgb-card-media-player">';

		if ( 'hosted' === $type ) {

			echo '<video preload="none" controls>';

			foreach ( $sources as $type => $url ) {

				$file = wp_check_filetype( $url );
				echo '<source src="' . esc_url( $url ) . '" type="' . esc_attr( $file['type'] ) . '">';

			}

			echo '</video>';

		} else {

			$iframe = wpgb_get_embedded_url( $sources );

			if ( ! empty( $iframe ) ) {
				echo '<div class="wpgb-card-media-iframe" data-src="' . esc_url( $iframe . '?enablejsapi=1&autoplay=1&muted=1' ) . '"></div>';
			}
		}

		echo '</div>';

	}

	if ( ! empty( $thumb ) ) {
		wpgb_the_post_thumbnail( $block, $action, false );
	} else {

		$class = 'wpgb-card-media-thumbnail';

		if ( isset( $action['action_type'] ) && 'open_media' === $action['action_type'] ) {
			$class .= ' wpgb-card-media-button';
		}

		if ( ! empty( $block['class'] ) ) {
			$class .= ' ' . $block['class'];
		}

		echo '<div class="' . esc_attr( $class ) . '">';
			$lightbox && wpgb_the_thumbnail();
			wpgb_the_post_media_link( $action );
		echo '</div>';

	}
}

/**
 * Display the post audio
 *
 * @since 1.0.0
 *
 * @param array $block  Holds block args.
 * @param array $action Holds layer action properties.
 */
function wpgb_the_post_audio( $block = [], $action = [] ) {

	$thumb   = wpgb_get_attachment_image_src( 'thumbnail' );
	$media   = wpgb_get_attached_media();
	$sources = $media['sources'];
	$type    = $media['type'];

	if ( ! empty( $thumb ) ) {
		wpgb_get_thumbnail_ratio( $thumb );
	}

	echo '<div class="wpgb-card-media-player">';

	// Add audio poster.
	if ( isset( $thumb['url'] ) ) {
		echo '<div data-wpgb-poster="' . esc_url( $thumb['url'] ) . '"></div>';
	}

	echo '<audio preload="none" controls>';

	foreach ( $sources as $type => $url ) {

		$file = wp_check_filetype( $url );
		echo '<source src="' . esc_url( $url ) . '" type="' . esc_attr( $file['type'] ) . '">';

	}

	echo '</audio>';
	echo '</div>';

	if ( ! empty( $thumb ) ) {
		wpgb_the_post_thumbnail( $block, $action, false );
	}
}

/**
 * Display the post thumbnail
 *
 * @since 1.0.0
 *
 * @param array $meta Attachment metadata.
 */
function wpgb_the_thumbnail( $meta = [] ) {

	echo '<a' . wpgb_get_thumbnail_atts( $meta ) . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		wpgb_the_lazy_thumbnail( $meta );
		wpgb_the_noscript( $meta );
	echo '</a>';

}

/**
 * Retrieve the thumbnail link attributes.
 *
 * @since 1.2.0 Set tabindex to -1 on lightbox anchor.
 * @since 1.0.0
 *
 * @param array $meta Attachment metadata.
 * @return array
 */
function wpgb_get_thumbnail_atts( $meta = [] ) {

	$format = wpgb_get_media_format();
	$href   = wpgb_get_attachment_image_src( 'full', $meta );
	$href   = isset( $href['url'] ) ? $href['url'] : '';
	$type   = 'image';

	// Get lightbox video.
	if ( 'video' === $format ) {

		$media   = wpgb_get_attached_media();
		$sources = (array) $media['sources'];

		if ( 'hosted' === $media['type'] ) {

			$href = reset( $sources );
			$type = 'video';

		} elseif ( 'embedded' === $media['type'] && isset( $sources['url'] ) ) {

			$href = wpgb_get_embedded_url( $sources );
			$type = 'iframe';

		}
	}

	$atts = [
		'href'     => esc_url( $href ),
		'tabindex' => -1,
	];

	// If video lightbox or image or gallery media.
	if (
		( 'audio' !== $format && 'video' !== $format ) ||
		( 'video' === $format && wpgb_get_grid_settings( 'video_lightbox' ) )
	) {
		$atts = array_merge( $atts, wpgb_get_lightbox_atts( $meta, $type ) );
	}

	// Anchor title.
	if ( 'image' === $type && 'audio' !== $format ) {
		$atts['title'] = __( 'Enlarge photo', 'wp-grid-builder' );
	} elseif ( 'video' === $format ) {
		$atts['title'] = __( 'Open video', 'wp-grid-builder' );
	}

	$thumb_atts = '';

	foreach ( $atts as $att => $value ) {
		$thumb_atts .= $value ? ' ' . esc_attr( $att ) . '="' . esc_attr( $value ) . '"' : '';
	}

	return $thumb_atts;

}

/**
 * Retrieve the lightbox url attributes.
 *
 * @since 1.0.0
 *
 * @param array  $meta Attachment metadata.
 * @param string $type Media type.
 * @return array
 */
function wpgb_get_lightbox_atts( $meta = [], $type = 'image' ) {

	// Get lightbox plugin and id.
	$plugin  = wpgb_get_grid_settings( 'lightbox_plugin' );
	$gallery = wpgb_get_grid_settings( 'id' );

	// Get lightbox caption title.
	$title = wpgb_get_grid_settings( 'lightbox_title' );
	$title = isset( $meta[ $title ] ) ? wp_kses_post( $meta[ $title ] ) : '';
	$title = wptexturize( $title );

	// Get lightbox caption description.
	$desc = wpgb_get_grid_settings( 'lightbox_description' );
	$desc = isset( $meta[ $desc ] ) ? wp_kses_post( $meta[ $desc ] ) : '';
	$desc = wptexturize( $desc );

	// Use default lightbox in preview mode.
	if ( wpgb_is_preview() ) {
		$plugin = 'wp_grid_builder';
	}

	// ModuloBox lite does not support video or embedded video iframe.
	if ( 'modulobox_lite' === $plugin && ( 'video' === $type || 'iframe' === $type ) ) {
		$plugin = 'wp_grid_builder';
	}

	switch ( $plugin ) {
		case 'modulobox':
		case 'modulobox_lite':
			$thumb  = wpgb_get_the_post_thumbnail_url( 'lightbox', $meta );
			$poster = 'video' === $type || 'iframe' === $type ? wpgb_get_the_post_thumbnail_url( 'full', $meta ) : '';
			return [
				'class'       => 'wpgb-handle-lb mobx',
				'data-type'   => 'iframe' === $type ? '' : $type,
				'data-rel'    => $gallery,
				'data-title'  => $title,
				'data-desc'   => $desc,
				'data-thumb'  => esc_url( $thumb ),
				'data-poster' => esc_url( $poster ),
			];
		case 'foobox':
			return [
				'class'              => 'wpgb-handle-lb foobox',
				'rel'                => $gallery,
				'data-caption-title' => $title,
				'data-caption-desc'  => $desc,
			];
		case 'easy_fancybox':
			return [
				'class' => 'video' === $type || 'iframe' === $type ? 'wpgb-handle-lb fancybox iframe' : 'wpgb-handle-lb fancybox',
				'rel'   => $gallery,
				'title' => $title . ( $title && $desc ? '<br><small>' . $desc . '</small>' : $desc ),
			];
		default:
			return [
				'class'      => 'wpgb-handle-lb wpgb-lightbox',
				'data-type'  => $type,
				'data-rel'   => $gallery,
				'data-title' => $title,
				'data-desc'  => $desc,
			];
	}
}

/**
 * Display the lazy post thumbnail
 *
 * @since 1.0.0
 *
 * @param array $meta Attachment metadata.
 */
function wpgb_the_lazy_thumbnail( $meta = [] ) {

	$lazy_load = wpgb_get_grid_settings( 'lazy_load' );
	$thumbnail = wpgb_get_the_post_thumbnail_url( 'thumbnail', $meta );

	if ( empty( $thumbnail ) ) {
		return;
	}

	if ( $lazy_load ) {

		$lazy_spinner   = wpgb_get_grid_settings( 'lazy_load_spinner' );
		$lazy_blurred   = wpgb_get_grid_settings( 'lazy_load_blurred_image' );
		$lazy_thumbnail = wpgb_get_the_post_thumbnail_url( 'lazy', $meta, true );
		$has_thumbnail  = $lazy_blurred && $lazy_thumbnail;

		printf(
			'<div class="wpgb-lazy-load%s" data-wpgb-thumb="%s" data-wpgb-src="%s"></div>',
			esc_attr( ! $has_thumbnail && $lazy_spinner ? ' wpgb-lazy-spinner' : '' ),
			esc_url( $has_thumbnail ? $lazy_thumbnail : '' ),
			esc_url( $thumbnail )
		);

	} else {
		echo '<div style="background-image:url(' . esc_url( $thumbnail ) . ')"></div>';
	}
}

/**
 * Display the noscript tag for the thumbnail.
 *
 * @since 1.0.0
 *
 * @param array $meta Attachment metadata.
 */
function wpgb_the_noscript( $meta = [] ) {

	$thumbnail = wpgb_get_attachment_image_src( 'thumbnail', $meta );

	if ( empty( $thumbnail ) ) {
		return;
	}

	printf(
		'<noscript><img class="wpgb-noscript-img" src="%s" alt="%s" height="%d" width="%d"></noscript>',
		esc_url( $thumbnail['url'] ),
		( isset( $meta['alt'] ) ? esc_attr( $meta['alt'] ) : '' ),
		( isset( $thumbnail['height'] ) ? (int) $thumbnail['height'] : '' ),
		( isset( $thumbnail['width'] ) ? (int) $thumbnail['width'] : '' )
	);
}
