<?php

declare (strict_types=1);
namespace WindPressDeps\EDD_SL;

use Exception;
use WP_Error;
/**
 * Plugin updater class. Handles the plugin update process. 
 * Integrated with Easy Digital Download's Software Licensing plugin.
 */
class PluginUpdater
{
    /**
     * The options that will passed to the EDD_SL_Plugin_Updater instance.
     * 
     * @var array
     */
    private $payload = [];
    /**
     * The plugin ID.
     * 
     * @var string
     */
    private $plugin_id;
    /**
     * The instance of EDD_SL_Plugin_Updater class.
     * 
     * @var EDD_SL_Plugin_Updater
     */
    public $edd_sl;
    /**
     * The constructor of the class.
     * 
     * @param string $plugin_id The plugin ID.
     * @param array  $payload   The options that will passed to the EDD_SL_Plugin_Updater instance.
     */
    public function __construct($plugin_id, $payload)
    {
        $this->payload = $payload;
        $this->plugin_id = $plugin_id;
        \add_action('init', [$this, 'plugin_update']);
    }
    /**
     * Run the plugin update process on the background.
     */
    public function plugin_update() : void
    {
        if (\defined('DOING_CRON') && \DOING_CRON) {
            return;
        }
        if (!$this->is_activated()) {
            return;
        }
        if (!\current_user_can('manage_options')) {
            return;
        }
        if (!$this->edd_sl) {
            $this->edd_sl = new EDD_SL_Plugin_Updater($this->payload['store_url'], $this->payload['plugin_file'], $this->payload);
        }
    }
    /**
     * Simulate the license error Event when exception is thrown.
     * 3rd-party plugin can listen to this event by registering an action hook to `a!edd_sl/plugin_updater:plugin_update_error`.
     * 
     * @param Exception $th The exception.
     */
    private function throw_error(Exception $th) : void
    {
        /**
         * Hook for handling the exception.
         * 
         * @param string the plugin ID that instantiated the PluginUpdater class.
         * @param Exception $th The exception.
         */
        \do_action('a!edd_sl/plugin_updater:plugin_update_error', $this->plugin_id, $th);
    }
    /**
     * Check if the plugin have licensed and activated.
     * 
     * @return bool True if the plugin have licensed, activated and valid. False otherwise. 
     */
    public function is_activated() : bool
    {
        $license_data = \get_transient("{$this->plugin_id}_license_seed");
        if (!$license_data) {
            if (empty($this->payload['license'])) {
                if (\array_key_exists('is_require_license', $this->payload) && $this->payload['is_require_license']) {
                    $this->throw_error(new Exception('Enter your license key to get update'));
                }
                return \false;
            }
            $response = $this->api_request('check_license');
            if (\is_wp_error($response) || 200 !== \wp_remote_retrieve_response_code($response)) {
                $this->throw_error(new Exception(\is_wp_error($response) ? $response->get_error_message() : 'An Updater error occurred, please try again.'));
                return \false;
            }
            $license_data = \json_decode(\wp_remote_retrieve_body($response));
            if ($license_data->success === \false) {
                if (\property_exists($license_data, 'error')) {
                    $this->throw_error(new Exception($this->error_message($license_data->error)));
                }
                return \false;
            }
            \set_transient("{$this->plugin_id}_license_seed", $license_data, \DAY_IN_SECONDS);
        }
        if ($license_data->license !== 'valid') {
            $this->throw_error(new Exception($this->error_message($license_data->license)));
            return \false;
        }
        return \true;
    }
    /**
     * Deregister the current site from the license server.
     * 
     * @return array|WP_Error 
     */
    public function deactivate()
    {
        $this->drop_license_cache();
        return $this->api_request('deactivate_license');
    }
    /**
     * Register the current site to the license server.
     * 
     * @param null|string $license 
     * @return array|WP_Error 
     */
    public function activate(?string $license)
    {
        if ($license) {
            $this->payload['license'] = $license;
        }
        $this->drop_license_cache();
        return $this->api_request('activate_license');
    }
    /**
     * Clear the license and plugin update cache.
     */
    public function clear_cache() : void
    {
        $this->drop_license_cache();
        $this->drop_update_cache();
    }
    /**
     * Clear the license cache.
     */
    public function drop_license_cache() : void
    {
        \delete_transient("{$this->plugin_id}_license_seed");
    }
    /**
     * Clear the plugin update cache.
     */
    public function drop_update_cache() : void
    {
        $edd_sl_cache_key = 'edd_sl_' . \md5(\serialize(\basename($this->payload['plugin_file'], '.php') . $this->payload['license'] . $this->payload['beta']));
        \delete_option($edd_sl_cache_key);
        \delete_site_transient('update_plugins');
    }
    /**
     * Send API request to the license server.
     * 
     * @param string $action The action name.
     * @return array|WP_Error
     */
    private function api_request($action)
    {
        return \wp_remote_post($this->payload['store_url'], ['timeout' => 15, 'sslverify' => \false, 'body' => [
            'edd_action' => $action,
            'license' => $this->payload['license'] ?? '',
            'item_id' => $this->payload['item_id'] ?? \false,
            'version' => $this->payload['version'] ?? \false,
            'slug' => \basename($this->payload['plugin_file'], '.php'),
            'author' => $this->payload['author'],
            'url' => \home_url(),
            // EDD_SL uses home_url() instead of site_url() for the URL.
            'beta' => $this->payload['beta'] ?? \false,
            'environment' => \function_exists('wp_get_environment_type') ? \wp_get_environment_type() : 'production',
        ]]);
    }
    /**
     * Get the error message from the error code.
     * 
     * @param string $msgcode The error code.
     * @return string The error message.
     */
    public function error_message($msgcode)
    {
        switch ($msgcode) {
            case 'expired':
                return 'Your license key expired';
            case 'disabled':
            case 'revoked':
                return 'Your license key has been disabled.';
            case 'inactive':
            case 'site_inactive':
                return 'Your license is not active for this URL.';
            case 'missing_url':
                return 'License doesn\'t exist or URL not provided.';
            case 'key_mismatch':
            case 'missing':
            case 'invalid':
            case 'invalid_item_id':
            case 'item_name_mismatch':
                return 'Invalid license key';
            case 'no_activations_left':
                return 'Your license key has reached its activation limit.';
            default:
                return 'An error occurred on update, please try again.';
        }
    }
}
