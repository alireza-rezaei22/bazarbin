'use client'
import React, { useEffect, useState } from 'react'

function ProductDate({date}) {
    const [productDateState, setProductDateState] = useState(null)
    const time = date.toLocaleTimeString().slice(0,5)
    function getPersianDateString(date) {
        return new Date(date).toLocaleDateString('fa-IR', {
            timeZone: 'Asia/Tehran',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })
    }
    useEffect(() => {
        const localDate = getPersianDateString(date)
        const nowDate = getPersianDateString(new Date())
        const yesterdayDate = new Date()
        yesterdayDate.setDate(yesterdayDate.getDate() - 1)
        const yesterdayDateStr = getPersianDateString(yesterdayDate)
        if (localDate === nowDate) {
            setProductDateState('امروز')
        } else if (localDate === yesterdayDateStr) {
            setProductDateState('دیروز')
        } else {
            setProductDateState(localDate)

        }
    })

    return (
        <div className='flex gap-1'>
            <h5 className='text-gray-700 text-xs md:text-sm font-medium'>{productDateState}</h5>
            <h5 className='text-gray-700 text-xs md:text-sm font-medium'>{time}</h5>
        </div>
    )
}

export default ProductDate