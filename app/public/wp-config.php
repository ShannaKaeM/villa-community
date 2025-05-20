<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '@M#~}*6{KQB}U,zSohQ5=+1+mSi&.mXaTr/di:3(,m[N%H}|2(P(sE|cqM:<QOII' );
define( 'SECURE_AUTH_KEY',   'Yb{RXV]U{NzYoPEK6_gndv4JZM,E_M&!/nxw6{brul`NLoq i64=^G[SB-![pnJK' );
define( 'LOGGED_IN_KEY',     'w^i~6 b76sf4qUtDe:.u9_y_#q=8KpCX0$Ck<}dMLcdKbto5.!B4c=pO]6LiWeOi' );
define( 'NONCE_KEY',         '!NU%;<4HVDE5b|tu )X;-udl3&Z|K+Y4iycqL$;%&> r|fS?`BDZtnh6h:jed8DQ' );
define( 'AUTH_SALT',         'tt`=Cf>cBOXJ<k`28ElQ|2p0,F]F=Ed!_b1#CKR^}$u1L!|G6(@!<KpXbbE&%j-F' );
define( 'SECURE_AUTH_SALT',  'Ycp1&4<@vOI`zwp1[4NVCj4er*}XGb3`EJHJ`Wvt3oJ0i| p<*kxUqT?+c!v#/sY' );
define( 'LOGGED_IN_SALT',    ';35`$^k(|X<0ZyiKCZD|(+>KT4w,2~qOMw`T,yM%1g=-+qA+JgMhmmTBtkM@df/k' );
define( 'NONCE_SALT',        'Aco[)y|mzMu6K{i(vxfX 5dpi|[~eMSb>&[fof$tOh0KA}/pU3p$`&zAXr!I$s&R' );
define( 'WP_CACHE_KEY_SALT', 'ue_F=$#)~BdC,D`H_Z5#X>SUYnFjJ[z:ecg4Cm{e}DrhiC%aShB)H(vD870&Ov,>' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', true );
}

// Enable debug logging to the /wp-content/debug.log file
define( 'WP_DEBUG_LOG', true );

// Display errors and warnings on the site
define( 'WP_DEBUG_DISPLAY', true );
@ini_set( 'display_errors', 1 );

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
