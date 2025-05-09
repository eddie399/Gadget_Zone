import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({product}) {

  return (
    <Link to={`/product/${product.id}`}>
        <div className='shadow-lg cursor-pointer'>
            <img src={product.image} alt="" className='rounded-md'/>

            <div className='bg-gray-100 p-4'>
                <h2 className='text-lg font-semibold my-4'>{product.title.substring(0, 25) + "..."}</h2>
                <p className='text-sm text-zinc-500 border-b-2 pb-4 '>{product.description.substring(0, 70) + "..."}</p>
                <div className='flex justify-between mt-4 items-center'>
                    <p className='text-xl font-semibold'>MK{product.Price}</p>
                    <p>View More</p>
                </div>
                
            </div>
        </div>
    </Link>
  )
}

export default ProductCard