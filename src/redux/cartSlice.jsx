import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.products.find(item => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            } else {
                state.products.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    image: newItem.image
                })
            }
            state.totalPrice += newItem.price
            state.totalQuantity++
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer