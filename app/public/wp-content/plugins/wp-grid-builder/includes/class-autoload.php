<?php
/**
 * Autoloader
 * Modified version of https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader-examples.md
 *
 * @package   WP Grid Builder
 * @author    Loïc Blascos
 * @copyright 2019-2024 Loïc Blascos
 */

namespace WP_Grid_Builder;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Autoload class.
 *
 * @class WP_Grid_Builder\Autoload
 * @since 1.0.0
 */
class Autoload {

	/**
	 * An associative array where the key is a namespace prefix and the value
	 * is an array of base directories for classes in that namespace.
	 *
	 * @var array
	 */
	protected $prefixes = [];

	/**
	 * Register loader with SPL autoloader stack.
	 *
	 * @return void
	 */
	public function __construct() {

		spl_autoload_register( [ $this, 'load_class' ] );

	}

	/**
	 * Adds a base directory for a namespace prefix.
	 *
	 * @param string $prefix The namespace prefix.
	 * @param string $base_dir A base directory for class files in the namespace.
	 * @param bool   $prepend If true, prepend the base directory to the stack
	 * instead of appending it; this causes it to be searched first rather
	 * than last.
	 * @return void
	 */
	public function add_namespace( $prefix, $base_dir, $prepend = false ) {

		// normalize namespace prefix.
		$prefix = trim( $prefix, '\\' ) . '\\';
		// normalize the base directory with a trailing separator.
		$base_dir = rtrim( $base_dir, DIRECTORY_SEPARATOR ) . '/';

		// initialize the namespace prefix array.
		if ( isset( $this->prefixes[ $prefix ] ) === false ) {
			$this->prefixes[ $prefix ] = [];
		}

		// retain the base directory for the namespace prefix.
		if ( $prepend ) {
			array_unshift( $this->prefixes[ $prefix ], $base_dir );
		} else {
			array_push( $this->prefixes[ $prefix ], $base_dir );
		}
	}

	/**
	 * Loads the class file for a given class name.
	 *
	 * @param string $class The fully-qualified class name.
	 * @return mixed The mapped file name on success, or boolean false on
	 * failure.
	 */
	public function load_class( $class ) {

		// Add 'class-' prefix to file name.
		$class  = $this->prefix_file_name( $class );
		// the current namespace prefix.
		$prefix = $class;

		// work backwards through the namespace names of the fully-qualified.
		// class name to find a mapped file name.
		// phpcs:ignore WordPress.CodeAnalysis.AssignmentInCondition.FoundInWhileCondition
		while ( false !== $pos = strrpos( $prefix, '\\' ) ) {

			// retain the trailing namespace separator in the prefix.
			$prefix = substr( $class, 0, $pos + 1 );
			// the rest is the relative class name.
			$relative_class = substr( $class, $pos + 1 );
			// try to load a mapped file for the prefix and relative class.
			$mapped_file = $this->load_mapped_file( $prefix, $relative_class );

			if ( $mapped_file ) {
				return $mapped_file;
			}

			// remove the trailing namespace separator for the next iteration of strrpos().
			$prefix = rtrim( $prefix, '\\' );

		}

		// never found a mapped file.
		return false;

	}

	/**
	 * Make file name compliant with WordPress Coding Standards
	 *
	 * @param string $class The fully-qualified class name.
	 * @return string class The fully-qualified class name prefixed
	 */
	public function prefix_file_name( $class ) {

		if ( stripos( $class, 'interface' ) !== false ) {
			return $class;
		}

		// separate components of the incoming file.
		$class  = explode( '\\', $class );
		// Get length.
		$length = count( $class ) - 1;
		// Add class prefix to file name.
		$class[ $length ] = 'class-' . $class[ $length ];

		// recompose fully-qualified class name.
		return implode( '\\', $class );

	}

	/**
	 * Load the mapped file for a namespace prefix and relative class.
	 *
	 * @param string $prefix The namespace prefix.
	 * @param string $relative_class The relative class name.
	 * @return mixed Boolean false if no mapped file can be loaded, or the
	 * name of the mapped file that was loaded.
	 */
	protected function load_mapped_file( $prefix, $relative_class ) {

		// are there any base directories for this namespace prefix?.
		if ( isset( $this->prefixes[ $prefix ] ) === false ) {
			return false;
		}

		// look through base directories for this namespace prefix.
		foreach ( $this->prefixes[ $prefix ] as $base_dir ) {

			// replace the namespace prefix with the base directory.
			// replace namespace separators with directory separators.
			// in the relative class name, append with .php.
			$file = $base_dir . strtolower( str_replace( [ '\\', '_' ], [ '/', '-' ], $relative_class ) ) . '.php';

			// if the mapped file exists, require it.
			if ( $this->require_file( $file ) ) {
				return $file;
			}
		}

		// never found it.
		return false;

	}

	/**
	 * If a file exists, require it from the file system.
	 *
	 * @param string $file The file to require.
	 * @return bool True if the file exists, false if not.
	 */
	protected function require_file( $file ) {

		if ( ! file_exists( $file ) ) {
			return false;
		}

		require_once $file;

		return true;

	}
}

// Instantiate the loader.
$loader = new Autoload();
// Register the base directories for the namespace prefix.
$loader->add_namespace( 'WP_Grid_Builder', WPGB_PATH );
