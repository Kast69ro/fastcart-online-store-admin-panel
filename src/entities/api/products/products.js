import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../config/axios/axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      let responce = await axiosRequest.get("/Product/get-products");

      return responce.data.data.products;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id,{dispatch}) => {
    await axiosRequest.delete(`/Product/delete-product?id=${id}`);
    dispatch(getProducts())
  }
);
