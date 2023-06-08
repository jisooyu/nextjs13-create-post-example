'use client'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div >
      <Head>
        <title>Nextjs | Next-Auth</title>
      </Head>
      <main >
        <h1 className='m-4'>Authentication in Next.js app using Next-Auth</h1>
        <div className='m-4 p-2'>
           {loading && <div >Loading...</div>}
           {
            session &&
              <>
               <p style={{ marginBottom: '10px' }}> Welcome, {session.user.name ?? session.user.email}</p> <br />
               <Image src={session.user.image} alt="user"  width={200} height={200} />
              </>
            }
           {
            !session &&
              <div className='m-4 p-2'>
               <p >Please Sign in</p>
              <Image src="/waiting-signin.jpeg" alt="waiting" width={500} height={500} />
              <p>GIF by  <Link href="https://dribbble.com/shots/17658258-Couple-waiting-for-flight-illustration">Waiting for Sigin</Link> </p>
            </div>
           }
         </div>
      </main>
    </div>
  )
}