import '../styles/globals.css'
import { defineCustomElements } from '@wcblocks/components/dist/custom-elements/index.js'

function MyApp({ Component, pageProps }) {
  /**
   * Define Custom Elements (Web Components)
   */
  defineCustomElements()

  return <Component {...pageProps} />
}

export default MyApp
