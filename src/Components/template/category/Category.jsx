import React from 'react'
import { Home } from 'lucide-react'
import { Smartphone } from 'lucide-react';
import { Car } from 'lucide-react';
import { Watch } from 'lucide-react';
import CategoryItem from '../categoryItem/CategoryItem';


function Category() {
    const routes = [
        { Icon: Home, text: 'املاک', path: '/' },
        { Icon: Smartphone, text: 'کالای دیجیتال', path: '/' },
        { Icon: Car, text: 'وسیله نقلیه', path: '/' },
        { Icon: Watch, text: 'اکسسوری', path: '/' },
    ]
    return (
        <div
            className='w-full flex flex-wrap justify-start
                    md:h-fit md:flex-col md:items-start md:p-2 md:space-y-2 md:border md:rounded-md
                '>
            {routes.map((route, index) => {
                return <CategoryItem key={index} {...route} />
            })}
        </div>
    )
}

export default Category