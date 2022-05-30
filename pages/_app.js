import '../styles/globals.css'
import '../public/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
