import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

const productSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        
    }
})

export default productSlice.reducer