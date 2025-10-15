import Link from 'next/link'
import React from 'react'
import { UserRound } from 'lucide-react'
import { ShoppingBasket } from 'lucide-react'
import { Bookmark } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { PlusCircle } from 'lucide-react'

function SideBar() {
    return (
        <aside className='w-full hidden md:w-1/6 md:flex h-[92vh] border-l text-sm font-medium'>
            <ul className='w-full flex flex-col gap-2 p-2'>
                <Link href='/panel/userInfo' className='flex flex-nowrap gap-2 items-center border-b border-zinc-500 px-2 py-4 rounded-md hover:bg-zinc-50'>
                    <UserRound />
                    اطلاعات کاربری
                </Link>
                <Link href='/' className='flex flex-nowrap gap-2 items-center border-b border-zinc-500 px-2 py-4 rounded-md hover:bg-zinc-50'>
                    <ShoppingBasket />
                    لیست معاملات
                </Link>
                <Link href='/panel/newProduct' className='flex flex-nowrap gap-2 items-center border-b border-zinc-500 px-2 py-4 rounded-md hover:bg-zinc-50'>
                    <PlusCircle />
                    انتشار اگهی
                </Link>
                <Link href='/' className='flex flex-nowrap gap-2 items-center border-b border-zinc-500 px-2 py-4 rounded-md hover:bg-zinc-50'>
                    <Bookmark />
                    نشان شده ها
                </Link>
                <Link href='/' className='flex flex-nowrap gap-2 items-center border-b border-zinc-500 px-2 py-4 rounded-md hover:bg-zinc-50'>
                    <MessagesSquare />
                    گفتوگو ها
                </Link>
                <Link href='/' className='flex flex-nowrap gap-2 items-center border-b border-zinc-500 px-2 py-4 rounded-md hover:bg-zinc-50'>
                    <LogOut />
                    خروج
                </Link>
            </ul>
        </aside>
    )
}

export default SideBar