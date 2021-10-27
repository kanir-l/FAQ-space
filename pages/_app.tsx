import type { AppProps } from 'next/app'
import React from 'react'
import Layout from 'components/Layout/Layout'
import '../styles/style.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
