import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../api/products/products";





 const productSlice = createSlice({
    name:'products',
    initialState:{
        productData:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.productData = action.payload
        })
    }
})

export default productSlice.reducer