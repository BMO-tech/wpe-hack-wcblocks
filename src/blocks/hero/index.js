import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

/**
 * Define Custom Elements (Web Components)
 */
import { defineCustomElements } from '@/components/dist/custom-elements'
defineCustomElements()

import './editor.scss';

const heroTemplate = () => {
    return (
        <wcb-hero heading="Inside a block" cta-text="look at me" />
    )
}

registerBlockType('wcblocks/hero', {
    title: __('WCBlocks Hero', 'wcblocks'),
    description: __('WC Hero Block', 'wcblocks'),
    category: 'wcblocks',
    icon: 'butotn',
    supports: {
        html: false
    },
    edit: heroTemplate,
    save: heroTemplate
})