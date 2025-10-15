'use client'
import React, { useEffect, useState } from 'react'
import { PlusSquare } from 'lucide-react'
import Cities from '@/Components/modules/cities/Cities'
import SubmitBtn from '@/Components/modules/submitBtn/SubmitBtn'
import { useActionState } from 'react'
import NewProductAction from '../../actions/newProduct'
import { newProductSchema } from '@/validation/validation'
import SelectMap from '@/Components/template/map/selectMap'


function NewProduct() {
  const [isFormValid, setIsFormValid] = useState(false)
  const [formState, formAction] = useActionState(NewProductAction, {
    message: '',
    error: undefined,
    inputs: {
      image: '',
      title: '',
      description: '',
      city: '',
    }
  })
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [city, setCity] = useState('')
  const [location, setLocation] = useState('')

  // const validationResult = newProductSchema.safeParse({ image, title, description, city })


  useEffect(() => {
    setIsFormValid(newProductSchema.safeParse({ image, title, description, city }).success)
  }, [title, city])
  useEffect(() => {
    if (image?.name) {
      const imageURL = URL.createObjectURL(image)
      setPreview(imageURL)
    }
  }, [image])

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h2 className='text-2xl font-bold self-start'>اگهی جدید</h2>
      {/* <form
        className='w-full max-w-126 flex flex-col items-center gap-5'
        action={formAction}
      >
        <div className='flex items-center'>
          {preview ?
            <>
              <input type="file"
                name='image'
                accept="image/*"
                id='userImgInput'
                className='hidden'
                onChange={e => setImage(e.target.files[0])}
              />
              <label htmlFor='userImgInput'>
                <img src={preview} className='size-28 rounded-md border-4 border-zinc-500' />
              </label>
            </> :
            <>
              <input type="file"
                name='image'
                accept="image/*"
                id='userImgInput'
                className='hidden'
                onChange={e => setImage(e.target.files[0])}
              />
              <label htmlFor='userImgInput'>
                <PlusSquare className='self-start size-28 text-zinc-700 cursor-pointer' />
              </label>
            </>
          }
        </div>

        <h3 className='self-start text-xl font-bold'>عنوان</h3>
        <input type="text"
          name='title'
          className='bg-zinc-100 border w-full border-zinc-200 rounded-md px-2 py-2 outline-0'
          placeholder='عنوان آگهی ...'
          onChange={e => setTitle(e.target.value)}
          defaultValue={formState?.inputs?.title}
        />
        <h3 className='self-start text-xl font-bold'>توضیحات</h3>
        <textarea type="text"
          name='description'
          className='bg-zinc-100 border w-full border-zinc-200 rounded-md px-2 py-2 outline-0'
          placeholder='توضیحات آگهی ...'
          onChange={e => setDescription(e.target.value)}
          defaultValue={formState?.inputs?.description}
        />
        <h3 className='self-start text-xl font-bold'>شهر</h3>
        <Cities className='w-full' setCity={setCity} />
        <h3 className='self-start text-xl font-bold'>موقعیت مکانی</h3>
        <div className='bg-emerald-400 h-80 w-full'>
          <SelectMap setLocationProp={setLocation}/>
          <input type='hidden' name='location' value={location}/>
        </div>
        <SubmitBtn isFormValid={isFormValid}>ثبت</SubmitBtn>
        {formState?.error && <h3 className='text-red-500'>{formState.error.issues[0].message}</h3>}
        {formState?.message && <h3 className='text-green-500'>{formState.message}</h3>}
      </form> */}
    </div>
  )
}

export default NewProduct