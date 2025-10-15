import React from 'react'

import Link from 'next/link'
import { UserRound } from 'lucide-react'
import { ShoppingBasket } from 'lucide-react'
import { Bookmark } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { PlusCircle } from 'lucide-react';

function Panel() {
  return (
    <>
      {/* <ul className='md:hidden flex flex-col gap-2 p-2'>
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
      </ul> */}
      <div className='w-full p-10 bg-red-50 hidden md:flex flex-wrap justify-center items-start gap-10'>
        <div className='bg-green-200 w-60 h-60 rounded-md p-4 flex justify-center items-center'>
          box
        </div>
        <div className='bg-green-200 w-60 h-60 rounded-md p-4 flex justify-center items-center'>
          box
        </div>
        <div className='bg-green-200 w-60 h-60 rounded-md p-4 flex justify-center items-center'>
          box
        </div>
        <div className='bg-green-200 w-60 h-60 rounded-md p-4 flex justify-center items-center'>
          box
        </div>
      </div>
    </>
  )
}

export default Panel