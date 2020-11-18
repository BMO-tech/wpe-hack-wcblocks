import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import './editor.scss';

const heroTemplate = () => {
    return (
        <wcb-hero heading="Inside a block" cta-text="look at me" />
    )
}

registerBlockType('wcb/hero', {
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