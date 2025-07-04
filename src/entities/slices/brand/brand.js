import { createSlice } from "@reduxjs/toolkit";
import { getBrand } from "../../api/brand/brand";






const brandSlice = createSlice({
    name:'brands',
    initialState:{
        brandData:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getBrand.fulfilled,(state,action)=>{
            state.brandData = action.payload
        })
    }

})

export default brandSlice.reducer