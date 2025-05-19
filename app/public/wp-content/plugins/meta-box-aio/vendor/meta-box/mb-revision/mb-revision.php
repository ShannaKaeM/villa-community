<?php
/**
 * Plugin Name:      MB Revision
 * Plugin URI:       https://metabox.io/plugins/mb-revision/
 * Description:      Enable revision for meta box.
 * Version:          1.3.9
 * Author:           MetaBox.io
 * Author URI:       https://metabox.io
 * License:          GPL2+
 * Text Domain:      mb-revision
 * Domain Path:      /languages/
 * Requires Plugins: meta-box
 */

// Prevent loading this file directly.
if ( ! defined( 'ABSPATH' ) ) {
	return;
}

if ( ! function_exists( 'mb_revision_init' ) ) {
	function mb_revision_init() {
		require_once __DIR__ . '/revision.php';
		return new MB_Revision();
	}

	mb_revision_init();
}
