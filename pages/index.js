import Head from 'next/head'
import AllFiles from '../components/AllFiles'
import Files from '../components/Files'
import Header from '../components/Header'
import {useSession, getSession} from "next-auth/client"
import Login from '../components/Login'

export default function Home() {

  const [session] = useSession();

  if(!session) return <Login />

  return (
    <div>
      <Head>
        <title>Google Docs</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>
      <Files/>
      <AllFiles/>
    </div>
  )
}
