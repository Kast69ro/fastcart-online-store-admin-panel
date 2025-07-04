import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../../../config/axios/axios";

export const getSubCategory = createAsyncThunk(
  "subCategory/getSubCategory",
  async () => {
    try {
      let {data} = await defaultAxios.get("/SubCategory/get-sub-category");
      
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
