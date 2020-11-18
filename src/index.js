import { applyPolyfills, defineCustomElements } from 'components/loader'

applyPolyfills().then(() => {
    defineCustomElements()
})

/**
 * Import Blocks
 */
import './blocks/hero'