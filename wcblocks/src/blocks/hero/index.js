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
            source: 'attribute',
            selector: 'wcb-hero',
            attribute: 'heading',
        },
		secondaryText: {
			type: 'string',
            source: 'attribute',
            selector: 'wcb-hero',
            attribute: 'cta-text',
		},
		middleText: {
			type: 'string',
            source: 'attribute',
            selector: 'wcb-hero',
            attribute: 'middle-text',
		},
		backgroundUrl1: {
			type: 'string',
            source: 'attribute',
            selector: 'wcb-hero',
            attribute: 'background-url-1',
            default: 'https://assets.newatlas.com/dims4/default/3368e6d/2147483647/strip/true/crop/925x617+0+232/resize/2400x1600!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fchandra-nasa-space-telescope-anniversary-4.jpg',
		},
		backgroundUrl2: {
			type: 'string',
            source: 'attribute',
            selector: 'wcb-hero',
            attribute: 'background-url-2',
            default: 'https://assets.newatlas.com/dims4/default/3368e6d/2147483647/strip/true/crop/925x617+0+232/resize/2400x1600!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fchandra-nasa-space-telescope-anniversary-4.jpg',
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
