"use client"
import Navbar from '@/Components/modules/navbar/Navbar'
import BottomNav from '@/Components/template/bottomNav/BottomNav'
import register from '../actions/register';
import login from '../actions/login';
import React, { useEffect, useState } from 'react'
import SubmitBtn from '@/Components/modules/submitBtn/SubmitBtn';
import { useActionState } from 'react';
import { LogIn } from 'lucide-react';
import { loginSchema, registerSchema } from '@/validation/validation';
import Signin from '@/Components/template/signin/signin';
import Login from '@/Components/template/login/login';
function loginRegister() {
  const [formStatus, setFormStatus] = useState('login')
  // const [isFormValid, setIsFormValid] = useState(false)
  // const [registerState, registerFormAction] = useActionState(register, {
  //   message: "",
  //   error: undefined,
  //   inputs: {
  //     name: '',
  //     phone: '',
  //     password: '',
  //     confirmPassword: '',
  //   }
  // })
  // const [loginState, loginFormAction] = useActionState(login, {
  //   message: "",
  //   error: undefined,
  //   inputs: {
  //     phone: '',
  //     password: '',
  //   }
  // })
  // const [name, setName] = useState('')
  // const [phone, setPhone] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // useEffect(() => {
  //   setName('')
  //   setPhone('')
  //   setPassword('')
  //   setConfirmPassword('')
  // }, [formStatus])
  // useEffect(() => {
  //   if (formStatus === 'login') {
  //     setIsFormValid(loginSchema.safeParse({ phone, password }).success)
  //   } else {
  //   }
  // }, [phone, password])
  return (
    <>
      <Navbar />
      <div className='w-full h-[92vh] flex justify-center items-center'>
        {formStatus === 'login' ?
          // <form
          //   className='relative w-[80%] max-w-96 flex flex-col justify-center items-center gap-3 border rounded-md py-8'
          //   action={loginFormAction}
          // >
          //   <LogIn className='w-28 h-28' />
          //   <input type="text"
          //     value={phone}
          //     onChange={e => setPhone(e.target.value)}
          //     name='phone'
          //     className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
          //     placeholder='شماره تلفن...'
          //   />
          //   <input type="password"
          //     value={password}
          //     onChange={e => setPassword(e.target.value)}
          //     name='password'
          //     className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
          //     placeholder='گذرواژه...'
          //   />
          //   <SubmitBtn isFormValid={isFormValid}>ورود</SubmitBtn>
          //   {/* {loginState.error && <p className='text-red-500'>{loginState.error}</p>}
          //   {!loginState.error && <p className='text-green-500'>{loginState.message}</p>} */}
          //   <h4
          //     className='absolute -bottom-10 self-start text-green-400 cursor-pointer'
          //     onClick={() => setFormStatus('signin')}
          //   >
          //     ثبت نام
          //   </h4>
          // </form>
          <Login formStatus={setFormStatus}/>
          :
          <Signin formStatus={setFormStatus}/>
          // <form
          //   className='relative w-[80%] max-w-96 flex flex-col justify-center items-center gap-3 border rounded-md py-8'
          //   action={registerFormAction}
          // >
          //   <LogIn className='w-28 h-28' />
          //   <input
          //     type="text"
          //     name='name'
          //     value={name}
          //     onChange={e => { setName(e.target.value) }}
          //     className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
          //     placeholder='نام...'
          //   />
          //   <input
          //     type="text"
          //     name='phone'
          //     value={phone}
          //     onChange={e => { setPhone(e.target.value) }}
          //     className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
          //     placeholder='شماره تلفن...'
          //   />
          //   <input
          //     type="password"
          //     name='password'
          //     value={password}
          //     onChange={e => { setPassword(e.target.value) }}
          //     className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
          //     placeholder='گذرواژه...'
          //   />
          //   <input
          //     type="password"
          //     name='confirmPassword'
          //     value={confirmPassword}
          //     onChange={e => { setConfirmPassword(e.target.value) }}
          //     className='bg-zinc-100 border w-[80%] border-zinc-200 rounded-md px-2 py-1 outline-0'
          //     placeholder='تکرار گذرواژه...'
          //   />
          //   <SubmitBtn isFormValid={isFormValid}>ثبت نام</SubmitBtn>
          //   {registerState?.error && <p className='text-red-500'>{registerState?.error}</p>}
          //   {!registerState?.error && <p className='text-green-500'>{registerState?.message}</p>}

          //   <h4
          //     className='absolute -bottom-10 self-start text-green-400 cursor-pointer'
          //     onClick={() => setFormStatus('login')}
          //   >
          //     ورود
          //   </h4>
          // </form>
        }
      </div >
      <BottomNav />
    </>
  )
}

export default loginRegister