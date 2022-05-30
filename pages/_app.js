import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
// import '../public/css/style.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
