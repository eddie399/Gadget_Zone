import React from 'react'

import ProductGrid from "../assets/components/ProductGrid"
import Footer from '../assets/components/footer';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/products/ProductSlice';




const Categories = [
  "All",
  "Power Supply",
  "Laptops",
  "Monitors",
  "Phones"
];

function Home() {

  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg"></div>
      <div className='container mx-auto my-10 px-4'>
        <div className="flex gap-4">
          {Categories.map((cart) =>{
            return (
              <button className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in cursor-pointer' 
                key={cart}
                
                onClick={() => dispatch(setSelectedCategory(cart))}
              >  
                {cart}
              </button>
            )
          })}
        </div>

        <ProductGrid />
      </div>

      <Footer />
    </div>
  )
}

export default Home