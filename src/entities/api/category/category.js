import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest, defaultAxios } from "../../../config/axios/axios";

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

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (obj, { dispatch }) => {
    await axiosRequest.post("/Category/add-category", obj);
    dispatch(getCategory());
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, { dispatch }) => {
    await axiosRequest.delete(`/Category/delete-category?id=${id}`);
    dispatch(getCategory());
  }
);

export const editCategory = createAsyncThunk(
  'category/editCategory',
  async(obj,{dispatch})=>{
    await axiosRequest.put('/Category/update-category',obj)
    dispatch(getCategory())
  }
)
