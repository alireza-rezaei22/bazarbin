import Navbar from '@/Components/modules/navbar/Navbar'
import BottomNav from '@/Components/template/bottomNav/BottomNav'
// import React, { useState } from 'react'
import { BookmarkPlus } from 'lucide-react'
import productModel from '@/model/product'
import ProductDate from '@/Components/modules/productDate/productDate'
import ShowMap from '@/Components/template/map/showMap'
// import ProductDetailInfo from '@/Components/template/productDetailInfo/productDetailInfo'
export default async function page({ params }) {
    const { productDetail } = params
    const product = await productModel.findOne({ _id: productDetail })
    const { image, title, description, date, condition, price } = product
    const imageBase64 = image.toString('base64')
    const conditionsList = {new: 'نو', as_new: 'درحدنو', worked: 'کارکرده'}
    const productCondition = conditionsList[condition]
    return (
        <>
            <Navbar />
            <div
                className='p-5 mb-12 space-y-2
                    md:grid grid-cols-5 gap-5 md:mx-[5%]
                '>
                <img
                    src={imageBase64 ? `data:image/jpeg;base64,${imageBase64}` : "/images/default.png"}
                    alt=""
                    className='w-full max-w-80 col-start-4 col-end-6'
                />
                <div className='h-fit row-start-1 row-end-4 col-start-1 col-end-4'>
                    <h2 className='text-lg md:text-2xl md:font-semibold md:mb-5'>{title}</h2>
                    <p className='text-sm md:text-lg'>{description}</p>
                    <h4>قیمت: {price} تومان</h4>
                    <h4>وضعیت: {productCondition}</h4>
                    <span className='flex justify-between my-5 '>
                        <ProductDate date={date} />
                        <BookmarkPlus />
                    </span>
                </div>

                <span className='col-start-4 col-end-6 bg-amber-900 w-full h-64 block'>
                    {/* <Map setLocation={product.location}/> */}
                    {product.location && <ShowMap location={product.location} />}
                    {/* <MapContainer center={product.location} zoom={15} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                    </MapContainer> */}
                </span>
                <button className='col-start-2 col-end-3 w-full bg-green-600 text-white my-2 p-2 rounded-md'>گفتوگو</button>
            </div>
            {/* <div className='h-16'></div> */}
            <BottomNav />
        </>
    )
}
