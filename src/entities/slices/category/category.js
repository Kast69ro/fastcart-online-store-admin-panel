import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "../../api/category/category";





const categorySlice = createSlice({
    name:'category',
    initialState:{
        categoryData:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCategory.fulfilled,(state,action)=>{
            state.categoryData = action.payload
        })
    }
})

export default categorySlice.reducer