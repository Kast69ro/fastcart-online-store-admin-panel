import { createSlice } from "@reduxjs/toolkit";
import { getProductById } from "../../api/product-by-id/product";

const productByIdSlice = createSlice({
  name: "productById",
  initialState: {
    product: null,
  },
  
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload
    
    });
  },
});


export default productByIdSlice.reducer;
