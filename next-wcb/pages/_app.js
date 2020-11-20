import '../styles/globals.css'
import { defineCustomElements } from '@wcblocks/components/loader/index.cjs'

function MyApp({ Component, pageProps }) {
  defineCustomElements()
  return <Component {...pageProps} />
}

export default MyApp
