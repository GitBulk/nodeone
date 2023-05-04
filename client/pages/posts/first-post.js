import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/Layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post Title</title>
      </Head>
      <Script src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        } />
      <h1>first post header</h1>
    </Layout>
  )
}
