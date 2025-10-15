import React from 'react'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { Funnel  } from 'lucide-react'
import { CirclePlus  } from 'lucide-react'
import { Bookmark  } from 'lucide-react'
import { UserRound  } from 'lucide-react'
import RouteBtn from '../routeBtn/RouteBtn'
function BottomNav() {
  const routes =[
    {Icon: Home, path: '/'},
    {Icon: Funnel, path: '/'},
    {Icon: CirclePlus, path: '/panel/newProduct'},
    {Icon: Bookmark, path: '/panel'},
    {Icon: UserRound, path: '/panel'},
  ]
  return (
    <nav className='fixed bottom-0 w-full flex justify-between divide-x divide-x-reverse md:hidden'>
        {routes.map((route, index)=>{
          return <RouteBtn key={index} {...route}/>
        })}
    </nav>
  )
}

export default BottomNav