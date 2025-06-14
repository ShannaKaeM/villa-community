<?php
/**
 * Plugin Name: MB Include Exclude
 * Plugin URI:  https://metabox.io/plugins/meta-box-include-exclude/
 * Description: Advanced location rules for field groups.
 * Version:     1.1.1
 * Author:      MetaBox.io
 * Author URI:  https://metabox.io
 * License:     GPL2+
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

if ( defined( 'ABSPATH' ) && ! class_exists( 'MB_Include_Exclude' ) ) {
	require __DIR__ . '/class-mb-include-exclude.php';
	add_filter( 'rwmb_show', [ 'MB_Include_Exclude', 'check' ], 10, 2 );
}
