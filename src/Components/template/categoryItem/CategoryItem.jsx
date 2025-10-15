import React from 'react'

function CategoryItem(props) {
    const {Icon,text , path}= props
    // const 
    return (
        <span
            className='flex-1 min-w-24 max-w-28 h-24 bg-emerald-100 rounded-md flex flex-col justify-center items-center m-2 text-xs cursor-pointer
                md:bg-white md:h-fit md:flex-row md:justify-start'>
            <Icon />
            {text}
        </span>
    )
}

export default CategoryItem