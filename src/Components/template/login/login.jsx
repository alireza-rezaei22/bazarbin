"use client"
import { LogIn } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useActionState } from 'react'
// import {login as loginAction} from '@/app/actions/login'
import loginAction from '@/app/actions/login'
import SubmitBtn from '@/Components/modules/submitBtn/SubmitBtn'
import { loginSchema } from '@/validation/validation'

function Login({ formStatus }) {
    const [isFormValid, setIsFormValid] = useState(false)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [loginState, loginFormAction] = useActionState(loginAction, {
        message: "",
        error: undefined,
        inputs: {
            phone: '',
            password: '',
        }
    })
    useEffect(() => {
        setIsFormValid(loginSchema.safeParse({ phone, password }).success)
    },[phone, password])
    return (
        <form
            className='relative w-[80%] max-w-96 flex flex-col justify-center items-center gap-3 border rounded-md py-8'
            action={loginFormAction}
        >
            <LogIn className='w-28 h-28' />
            <input type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                name='phone'
                className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
                placeholder='شماره تلفن...'
            />
            <input type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                name='password'
                className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
                placeholder='گذرواژه...'
            />
            <SubmitBtn isFormValid={isFormValid}>ورود</SubmitBtn>
            {loginState.error && <p className='text-red-500'>{loginState.error}</p>}
            {!loginState.error && <p className='text-green-500'>{loginState.message}</p>}
            <h4
                className='absolute -bottom-10 self-start text-green-400 cursor-pointer'
                onClick={() => formStatus('signin')}
            >
                ثبت نام
            </h4>
        </form>
    )
}

export default Login