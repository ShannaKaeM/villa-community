<?php
/**
 * WP Grid Builder Meta Box Add-on
 *
 * @package   WP Grid Builder - Meta Box
 * @author    Loïc Blascos
 * @link      https://www.wpgridbuilder.com
 * @copyright 2019-2024 Loïc Blascos
 *
 * @wordpress-plugin
 * Plugin Name:  WP Grid Builder - Meta Box
 * Plugin URI:   https://www.wpgridbuilder.com
 * Description:  Integrate WP Grid Builder with Meta Box plugin.
 * Version:      1.1.0
 * Author:       Loïc Blascos
 * Author URI:   https://www.wpgridbuilder.com
 * License:      GPL-3.0-or-later
 * License URI:  https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:  wpgb-meta-box
 * Domain Path:  /languages
 */

use WP_Grid_Builder_Meta_Box\Includes\Plugin;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'WPGB_META_BOX_VERSION', '1.1.0' );
define( 'WPGB_META_BOX_FILE', __FILE__ );
define( 'WPGB_META_BOX_BASE', plugin_basename( WPGB_META_BOX_FILE ) );
define( 'WPGB_META_BOX_PATH', plugin_dir_path( WPGB_META_BOX_FILE ) );
define( 'WPGB_META_BOX_URL', plugin_dir_url( WPGB_META_BOX_FILE ) );

require_once WPGB_META_BOX_PATH . 'includes/class-autoload.php';

new Plugin();
