import React from 'react'
import Link from "next/link";
import Product from "@/Components/modules/product/Product";

function Products({ products }) {
    return (
        <div className='flex-1 felx flex-row'>
            {products.map(product => {
                return <Link key={product._id} href={`/product/${product._id}`}>
                    <Product product={product} />
                </Link>
            })}
        </div>

    )
}

export default Products