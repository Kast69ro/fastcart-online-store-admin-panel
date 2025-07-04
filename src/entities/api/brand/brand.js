import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../config/axios/axios";

export const getBrand = createAsyncThunk("brands/getBrand", async () => {
  try {
    let responce = await axiosRequest.get("/Brand/get-brands");
    return responce.data.data;
  } catch (error) {
    console.log(error);
  }
});
