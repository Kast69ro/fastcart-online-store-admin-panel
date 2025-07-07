import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest, defaultAxios } from "../../../config/axios/axios";
import { toast } from "sonner";

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
    try {
      await axiosRequest.delete(`/Category/delete-category?id=${id}`);
      dispatch(getCategory());
      toast.success("category successfully deleted");
    } catch (error) {
      toast.error("something went wrong, contact support");
    }
  }
);

export const editCategory = createAsyncThunk(
  "category/editCategory",
  async (obj, { dispatch }) => {
    try {
      await axiosRequest.put("/Category/update-category", obj);
      dispatch(getCategory());
      toast.success("category successfully edited");
    } catch (error) {
      toast.error("something went wrong, contact support");
    }
  }
);
