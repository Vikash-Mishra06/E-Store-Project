import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    addToCart(state, action) {
        const newItem = action.payload
        const itemIndex = state.products.find((item) => item.id === newItem.id)
        if(itemIndex) {
            itemIndex.quantity++;
            itemIndex.totalPrice += newItem.price
        }
    }
    }
})

export default productSlice.reducer