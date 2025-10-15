import React from 'react'
import { ChevronDown } from 'lucide-react';

function Cities({setCity}) {
  const selectCity= (selectedCity) =>{
    setCity(selectedCity)
  }
  return (
    <div className="bg-zinc-100 w-full flex rounded-full p-2 cursor-pointer relative">
      <select
        className='appearance-none outline-0 pl-10'
        onChange={e=> selectCity(e.target.value)}
        name='city'
      >
        <option value="-1">انتخاب</option>
        <option value="همدان">همدان</option>
        <option value="تهران">تهران</option>
        <option value="یزد">یزد</option>
        <option value="اصفهان">اصفهان</option>
        <option value="مشهد">مشهد</option>
      </select>
      <div className='absolute left-4 flex items-center pointer-events-none' >
        <ChevronDown/>
      </div>
    </div>
  )
}

export default Cities