"use client"
import SubmitBtn from '@/Components/modules/submitBtn/SubmitBtn'
import register from '@/app/actions/register'
import { registerSchema } from '@/validation/validation'
import { LogIn } from 'lucide-react'
import React, { useActionState, useEffect, useState } from 'react'

function Signin({formStatus}) {
    const [isFormValid, setIsFormValid] = useState(false)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [registerState, registerFormAction] = useActionState(register, {
        message: "",
        error: undefined,
        inputs: {
            name: '',
            phone: '',
            password: '',
            confirmPassword: '',
        }
    })
    useEffect(() => {
        setIsFormValid(registerSchema.safeParse({ name, phone, password, confirmPassword }).success)
    },[name, phone, password, confirmPassword])
    return (
        <form
            className='relative w-[80%] max-w-96 flex flex-col justify-center items-center gap-3 border rounded-md py-8'
            action={registerFormAction}
        >
            <LogIn className='w-28 h-28' />
            <input
                type="text"
                name='name'
                value={name}
                onChange={e => { setName(e.target.value) }}
                className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
                placeholder='نام...'
            />
            <input
                type="text"
                name='phone'
                value={phone}
                onChange={e => { setPhone(e.target.value) }}
                className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
                placeholder='شماره تلفن...'
            />
            <input
                type="password"
                name='password'
                value={password}
                onChange={e => { setPassword(e.target.value) }}
                className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
                placeholder='گذرواژه...'
            />
            <input
                type="password"
                name='confirmPassword'
                value={confirmPassword}
                onChange={e => { setConfirmPassword(e.target.value) }}
                className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
                placeholder='تکرار گذرواژه...'
            />
            <SubmitBtn isFormValid={isFormValid}>ثبت نام</SubmitBtn>
            {registerState?.error && <p className='text-red-500'>{registerState?.error}</p>}
            {!registerState?.error && <p className='text-green-500'>{registerState?.message}</p>}

            <h4
                className='absolute -bottom-10 self-start text-green-400 cursor-pointer'
                onClick={() => formStatus('login')}
            >
                ورود
            </h4>
        </form>
    )
}

export default Signin