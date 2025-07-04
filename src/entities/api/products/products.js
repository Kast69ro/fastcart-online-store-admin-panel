import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../config/axios/axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      let response = await axiosRequest.get("/Product/get-products");

      return response.data?.data?.products;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { dispatch }) => {
    await axiosRequest.delete(`/Product/delete-product?id=${id}`);
    dispatch(getProducts());
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (obj, { dispatch }) => {
    try {
      await axiosRequest.post("/Product/add-product", obj);
      // dispatch(getProducts());
    } catch (error) {
      console.log(error);
    }
  }
);
