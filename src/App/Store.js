import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/products/ProductSlice'
import cartReducer from '../features/Cart/CartSlice'

export const store = configureStore ({
    reducer:{
        cart: cartReducer,
        product: productReducer,
    }
})


