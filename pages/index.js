import Head from 'next/head'
import AllFiles from '../components/AllFiles'
import Files from '../components/Files'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Importing Header */}
      <Header />
      {/* Importing Status and new file component */}
      <Files/>

      <AllFiles/>
    </div>
  )
}
