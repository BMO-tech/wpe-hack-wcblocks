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
 * Register Block Assets
 */
require_once 'src/blocks/hero/index.php';
