'use client'
import Search from "@/Components/modules/search/Search";
import Cities from "@/Components/modules/cities/Cities";
import Link from "next/link";
import { useState } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function Navbar() {
  const [city, setCity] = useState('')
  const userData = useAuthStore(state => state.user)
  console.log(userData);
  return (
    <nav className="bg-white z-50 w-full p-2 flex justify-between items-center">
      <ul className="hidden md:flex gap-5 mx-2">
        <Link href={'/'} className="cursor-pointer">خانه</Link>
        <li className="cursor-pointer">درباره</li>
        {userData ?
          <Link href={'/panel'} className="cursor-pointer">پنل</Link>
          :
          <Link href={'/login-register'} className="cursor-pointer">ثبت نام/ورود</Link>
        }
      </ul>
      <div className="w-full flex justify-between gap-1 md:w-1/3 md:justify-end">
        <Search />
        <div>
          <Cities setCity={setCity} />
        </div>
      </div>
    </nav>
  );
}