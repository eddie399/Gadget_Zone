import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
}

const CartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        //add to cart
        addToCart : (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if(existingItem) {
                existingItem.quantity +=1;
            } else {
                state.items.push({...action.payload, quantity: 1 });
            }
        },

        //remove from cart
        removeFromCart: (state, action) => {
            state.items =state.items.filter((item) => item.id !== action.payload)
        },

        //update cart quantity

        updateQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);

            if(item) {
                item.quantity = action.payload.quantity;
            }
        },
    },
});


export const { addToCart, removeFromCart, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;