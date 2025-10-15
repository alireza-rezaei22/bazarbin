"use client"
import { UserRound } from 'lucide-react'
import React, { useState } from 'react'
import SubmitBtn from '@/Components/modules/submitBtn/SubmitBtn'

function page() {
    const [isEditMode, setIsEditMode] = useState(false)
    return (
        <div className='flex flex-col justify-center items-center gap-10'>
            <h2 className='text-2xl font-bold self-start'>اطلاعات من</h2>
            <div className='bg-zinc-300 size-40 rounded-full flex justify-center items-center'>
                <UserRound className='size-24 text-zinc-800' />
            </div>
            <form
                className='w-full max-w-126 flex flex-col items-center gap-5'
                action={''}
            >
                <input type="text"
                    // value={phone}
                    // onChange={e => setPhone(e.target.value)}
                    disabled={!isEditMode}
                    name='phone'
                    className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-2 outline-0'
                    // placeholder='شماره تلفن...'
                    defaultValue={'استیون جرارد'}
                />
                <input type="text"
                    // value={phone}
                    // onChange={e => setPhone(e.target.value)}
                    disabled={!isEditMode}
                    name='phone'
                    className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-2 outline-0'
                    // placeholder='شماره تلفن...'
                    defaultValue={'09124827495'}
                />
                {isEditMode ?
                    <div className='w-[80%] flex gap-2'>
                        <button
                            className='bg-red-600 text-white w-1/2 rounded-md py-2 cursor-pointer'
                            onClick={() => setIsEditMode(false)}                        >
                            لغو
                        </button>
                        <SubmitBtn>ثبت</SubmitBtn>
                    </div> :
                    <button
                        className='bg-orange-400 text-white w-[80%] rounded-md py-2 cursor-pointer'
                        onClick={() => setIsEditMode(true)}
                    >
                        ویرایش
                    </button>
                }
            </form>

        </div>
    )
}

export default page