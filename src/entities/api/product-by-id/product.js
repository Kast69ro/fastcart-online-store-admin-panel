import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../../../config/axios/axios";

export const getProductById = createAsyncThunk(
  "productById/getProductById",
  async (id) => {
    const { data } = await defaultAxios.get(
      `/Product/get-product-by-id?id=${id}`
    );
    return data.data;
  }
);
