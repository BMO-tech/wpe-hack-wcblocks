import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

/**
 * Define Custom Elements (Web Components)
 */
import { defineCustomElements } from '@wcblocks/components/dist/custom-elements/index.js'
defineCustomElements();

import edit from './edit.js';
import save from './save.js';

import './editor.scss';

registerBlockType('wcblocks/hero', {
    title: __('WCBlocks Hero', 'wcblocks'),
    attributes: {
		headingText: {
			type: 'string',
            source: 'children',
            default: 'this is the default text'
		},
    },    
    description: __('WC Hero Block', 'wcblocks'),
    category: 'wcblocks',
    icon: 'button',
    supports: {
        html: false
    },
    edit: edit,
    save: save
})
