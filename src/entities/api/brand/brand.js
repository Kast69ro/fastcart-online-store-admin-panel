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

export const addBrand = createAsyncThunk(
  "brands/addBrand",
  async (name, { dispatch }) => {
    try {
      await axiosRequest.post(`/Brand/add-brand?BrandName=${name}`);
      dispatch(getBrand());
      toast.success("brand successfully added");
    } catch (error) {
      toast.error("something went wrong, contact support");
    }
  }
);

export const editBrand = createAsyncThunk(
  "brands/editBrand",
  async ({ id, name }, { dispatch }) => {
    try {
      await axiosRequest.put(`Brand/update-brand?Id=${id}&BrandName=${name}`);
    dispatch(getBrand());
    toast.success('brand successfully edited')
    } catch (error) {
      toast.error('something went wrong, contact support')
      
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "brands/deleteBrand",
  async (id, { dispatch }) => {
   try {
     await axiosRequest.delete(`/Brand/delete-brand?id=${id}`);
    dispatch(getBrand());
    toast.success('brand successfully deleted')
    
   } catch (error) {
    toast.error('something went wrong, contact support')
    
   }
  }
);
