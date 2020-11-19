import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

/**
 * Define Custom Elements (Web Components)
 */
import { defineCustomElements } from '@wcblocks/components/dist/custom-elements/index.js'
defineCustomElements()

import './editor.scss';

const heroTemplate = () => {
    return (
        <wcb-hero heading="Inside a block" cta-text="look at me" background-url="https://assets.newatlas.com/dims4/default/3368e6d/2147483647/strip/true/crop/925x617+0+232/resize/2400x1600!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fchandra-nasa-space-telescope-anniversary-4.jpg" />
    )
}

registerBlockType('wcblocks/hero', {
    title: __('WCBlocks Hero', 'wcblocks'),
    description: __('WC Hero Block', 'wcblocks'),
    category: 'wcblocks',
    icon: 'button',
    supports: {
        html: false
    },
    edit: heroTemplate,
    save: heroTemplate
})