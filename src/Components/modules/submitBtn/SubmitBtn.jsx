import React from 'react'
import { useFormStatus } from 'react-dom'

function SubmitBtn({ isFormValid,children }) {
    const {pending} = useFormStatus()
    return (
        <button
            className={`${isFormValid && !pending ? 'bg-green-500 cursor-pointer' : 'bg-green-300'} text-white w-[80%] rounded-md py-2`}
            disabled={!isFormValid || pending}
        >
            {pending ? 'loading': children}
        </button>
    )
}

export default SubmitBtn