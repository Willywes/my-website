import 'bootstrap/dist/css/bootstrap.css'
import '../assets/scss/theme.scss';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
