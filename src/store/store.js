import { configureStore } from "@reduxjs/toolkit";
import  logInSlice  from "../entities/slices/log-in/log-in";
import  productSlice  from "../entities/slices/products/products";


export const store = configureStore({
    reducer:{
        login:logInSlice,
        products:productSlice
    }
})