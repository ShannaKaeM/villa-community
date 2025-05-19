<?php
/**
 * Plugin Name: Meta Box AIO
 * Plugin URI:  https://metabox.io/pricing/
 * Description: All Meta Box extensions in one package.
 * Version:     2.2.0
 * Author:      MetaBox.io
 * Author URI:  https://metabox.io
 * License:     GPL2+
 * Text Domain: meta-box-aio
 * Domain Path: /languages/
 *
 * Copyright (C) 2010-2025 Tran Ngoc Tuan Anh. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

define( 'META_BOX_AIO_DIR', __DIR__ );

require __DIR__ . '/src/Loader.php';
require __DIR__ . '/src/Settings.php';
require __DIR__ . '/vendor/meta-box/dependency/Plugins.php';

new MBAIO\Loader;
new MBAIO\Settings;

// Load translations
add_action( 'init', function (): void {
	load_plugin_textdomain( 'meta-box', false, basename( __DIR__ ) . '/languages/meta-box' );
	load_plugin_textdomain( 'mb-custom-post-type', false, basename( __DIR__ ) . '/languages/mb-custom-post-type' );
} );
