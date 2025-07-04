import { createSlice } from "@reduxjs/toolkit";
import { getColor } from "../../api/color/color";




const colorSlice = createSlice({
    name :'color',
    initialState:{
        colorData:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getColor.fulfilled,(state,action)=>{
            state.colorData = action.payload
        })
    }
})

export default colorSlice.reducer