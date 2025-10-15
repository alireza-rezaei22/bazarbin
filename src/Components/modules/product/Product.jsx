import { BookmarkPlus } from 'lucide-react';
import ProductDate from '../productDate/productDate';

function Product({ product }) {
    const { title, description, image, city, date, price, condition } = product
    const imageBase64 = image.toString('base64');
    const conditionsList = {new: 'نو', as_new: 'درحدنو', worked: 'کارکرده'}
    const productCondition = conditionsList[condition]
    return (
        <>
            <div className='bg-zinc-100 m-2 p-2 rounded-md flex justify-between cursor-pointer'>
                <div className=''>
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <p className=' text-zinc-600'>{description.length > 40 ? description?.slice(0,40)+'...': description}</p>
                    <ProductDate date={date}/>
                    <h4 className='text-xs font-medium'>{city}</h4>
                    <h4 className='text-xs font-medium'>{price ? `${price} تومان` : 'تعریف نشده'}</h4>
                    <h4 className='text-xs font-medium'>{productCondition}</h4>
                </div>
                <div className='w-30 h-30 relative'>
                    {/* {imageBase64 ? */}
                        < img
                        src={imageBase64 ? `data:image/jpeg;base64,${imageBase64}` : "/images/default.png"}
                        />
                        {/* :
                        <img src="/images/default.png" />
                    } */}
                    <BookmarkPlus className='absolute left-1 top-1' />
                </div>
            </div>
        </>
    )
}

export default Product