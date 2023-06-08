'use client'
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react'
import MenuItems from "./MenuItems";

const AppBar = () => {
      const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }

  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-2">
            <Link className="text-sky-600 hover:text-sky-700" href={"/"}>
                Home
            </Link>
            <Link className="text-sky-600 hover:text-sky-700" href={"/admin/panel"}>
                Panel
          </Link>
        {session && <Link href="#" onClick={handleSignout} className="text-sky-600 hover:text-sky-700" >Sign out</Link>  }
      {!session && <Link href="#" onClick={handleSignin} className="text-sky-600 hover:text-sky-700" >Sign in</Link>}
            <div className="text-sky-600 hover:text-sky-700">
              <MenuItems  />
            </div>
    </div>
  )
}

export default AppBar