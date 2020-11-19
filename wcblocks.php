<?php
/**
 * Plugin Name: Web Component Blocks
 * Description: Hackathon Project Native Web Component Blocks
 * Version: 0.1.0
 * Author: BMO
 * License: MIT
 * Text Domain: wcblocks
 *
 * @package wcblocks
 */

/**
 * Adds WC Blocks to block categories
 *
 * @param array $categories
 * @return void
 */
function wcblocks_add_category( $categories ) {
	return array_merge(
		$categories,
		[
			[
				'slug'  => 'wcblocks',
				'title' => __(
					'WC Blocks',
					'wcblocks'
				),
			],
		]
	);
}
add_filter( 'block_categories', 'wcblocks_add_category' );

/**
 * Register and enqueue Web Components
 */
function wcb_register_web_components() {
	wp_register_script(
		'wcb-web-components',
		false,
		[],
		'0.0.1',
		false
	);
	wp_enqueue_script( 'wcb-web-components' );
	wp_localize_script(
		'wcb-web-components',
		'wcbWebComponents',
		[
			'url' => plugins_url( 'components/dist/custom-elements/index.js', __FILE__ ),
		]
	);
}
add_action( 'wp_enqueue_scripts', 'wcb_register_web_components' );
add_action( 'admin_enqueue_scripts', 'wcb_register_web_components' );

/**
 * Register Block Assets
 */
require_once 'src/blocks/hero/index.php';
