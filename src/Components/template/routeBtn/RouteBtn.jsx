import React from 'react'
import Link from 'next/link'

function RouteBtn(props) {
    const {Icon, path } = props
    return (
        <Link href={path} className='bg-zinc-300 flex-1 h-16 flex justify-center items-center'>
            <Icon/>
        </Link>
    )
}

export default RouteBtn