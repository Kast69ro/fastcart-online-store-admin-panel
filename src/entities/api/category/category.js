import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../../../config/axios/axios";



export const getCategory = createAsyncThunk(
  "category/getCategory",
  async () => {
    try {
      let responce = await defaultAxios.get("/Category/get-categories");
      return responce.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
