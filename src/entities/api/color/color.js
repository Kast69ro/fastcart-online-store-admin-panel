import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultAxios } from "../../../config/axios/axios";

export const getColor = createAsyncThunk("color/getColor", async () => {
  try {
    let { data } = await defaultAxios.get("/Color/get-colors");
    
    return data.data;
  } catch (error) {
    console.log(error);
  }
});
