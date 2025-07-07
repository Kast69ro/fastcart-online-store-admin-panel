import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest, defaultAxios } from "../../../config/axios/axios";
import { getCategory } from "../category/category";
import { toast } from "sonner";

export const getSubCategory = createAsyncThunk(
  "subCategory/getSubCategory",
  async () => {
    try {
      let { data } = await defaultAxios.get("/SubCategory/get-sub-category");

      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteSubCategory = createAsyncThunk(
  "subCategory/deleteSubCategory",
  async (id, { dispatch }) => {
    try {
      await axiosRequest.delete(`/SubCategory/delete-sub-category?id=${id}`);
      dispatch(getCategory());
      toast.success("subcategory successfully deleted");
    } catch (error) {
      toast.error("something went wrong, contact support");
    }
  }
);

export const addSubCategory = createAsyncThunk(
  "subCategory/addSubCategory",
  async ({ categoryId, subCategoryName }, { dispatch }) => {
    try {
      await axiosRequest.post(
        `SubCategory/add-sub-category?CategoryId=${categoryId}&SubCategoryName=${subCategoryName}`
      );
      toast.success('subcategory successfully added')
      dispatch(getCategory());
    } catch (error) {
      toast.error('something went wrong, contact support')
    }
  }
);

export const editSubCategory = createAsyncThunk(
  "subCategory/editSubCategory",
  async ({ subCategoryName, categoryId, id }, { dispatch }) => {
   try {
     await axiosRequest.put(
      `/SubCategory/update-sub-category?Id=${id}&CategoryId=${categoryId}&SubCategoryName=${subCategoryName}`
    );
    dispatch(getCategory());
    toast.success('subcategory successfully edited')
    
   } catch (error) {
    toast.error('something went wrong, contact support')
    
   }
  }
);
