import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        },
        removeFromCart(state, action) {
            const id = action.payload
            const findItem = state.products.find((item) => item.id === id)
            if(findItem) {
                state.totalPrice -= findItem.totalPrice
                state.totalQuantity -= findItem.totalQuantity
                state.products -= state.products.filter(item => item.id !== id)
                toast.error("Removed from Cart")
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload
            const findItem = state.products.find((item) => item.id === id)
            if(findItem) {
                findItem.quantity++
                findItem.totalPrice += findItem.price
                state.totalQuantity++
                state.totalPrice += findItem.price
            }
        },
        decreaseQuantity(state, action) {
            const id = action.payload
            const findItem = state.products.find((item) => item.id === id)
            if(findItem.quantity > 1 ) {
            if(findItem) {
                findItem.quantity--
                findItem.totalPrice -= findItem.price
                state.totalQuantity--
                state.totalPrice -= findItem.price
            }
        }
        }
    }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer