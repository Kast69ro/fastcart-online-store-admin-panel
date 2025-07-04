import { createSlice } from "@reduxjs/toolkit";
import { getSubCategory } from "../../api/sub-category/sub-categore";



const subCategorySlice = createSlice({
    name:'subCategory',
    initialState:{
        subCategoryData:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getSubCategory.fulfilled,(state,action)=>{
            state.subCategoryData = action.payload
        })
    }
})

export default subCategorySlice.reducer