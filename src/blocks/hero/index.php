<?php

/**
 * Register Block Hero
 */
function wcb_register_block_hero() {
	$dir        = dirname( __FILE__ );
	$build_path = "$dir/build";

	$build_asset = require "$build_path/hero.block.asset.php";
	wp_register_script(
		'wcb-block-editor',
		plugins_url( 'build/hero.block.js', __FILE__ ),
		$build_asset['dependencies'],
		$build_asset['version']
	);
	wp_enqueue_script( 'wcb-block-editor' );

	wp_localize_script(
		'wcb-block-editor',
		'wcbBlockHero',
		[
			'url'  => esc_url( plugin_dir_url( __FILE__ ) ) . 'build',
			'test' => plugins_url( 'components/dist/index.js', __DIR__ ),
		]
	);

	wp_register_style(
		'wcb-block-editor',
		plugins_url( 'build/hero.css', __FILE__ ),
		[],
		filemtime( "$build_path/hero.css" )
	);

	register_block_type(
		'wcb/blocks',
		[
			'editor_script' => 'wcb-block-editor',
			'editor_style'  => 'wcb-block-editor',
		]
	);
}
add_action( 'init', 'wcb_register_block_hero' );
