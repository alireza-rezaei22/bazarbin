import Navbar from '@/Components/modules/navbar/Navbar'
import SideBar from '@/Components/modules/sidebar/SideBar'
import BottomNav from '@/Components/template/bottomNav/BottomNav'
import { LogIn } from 'lucide-react'
import React from 'react'
import { auth } from "@/auth";
import { redirect } from "next/navigation";
// import { getServerSession } from 'next-auth'
import { authOptions } from '../api/[...nextauth]/route'
import { cookies } from 'next/headers'


async function Layout({ children }) {
    // const session = await getServerSession(authOptions)
    // console.log(session);
    const token = await cookies().get('token')?.value
    console.log(token);
    return (
        <>
            <Navbar />
            <div className='flex flex-row'>
                <SideBar />
                <main className='flex flex-col w-full m-5 md:m-8'>
                    {token ?
                    <>
                        { children }
                    </>:
                        <div className='m-12 p-12 border flex flex-col justify-center items-center rounded-md'>
                            <>
                                <LogIn className='size-14' />
                                لاگین کنید
                            </>
                        </div>
                    }
                </main>
            </div>
            <BottomNav />
        </>
    )
}

export default Layout

// import { auth } from "@/auth";
// import { redirect } from "next/navigation";

// export default async function Dashboard() {
//   const session = await auth();
//   if (!session) redirect("/login");

//   return <h1>Welcome, {session.user?.email}!</h1>;
// }
