import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest, defaultAxios } from "../../../config/axios/axios";
import { getCategory } from "../category/category";

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
    await axiosRequest.delete(`/SubCategory/delete-sub-category?id=${id}`);
    dispatch(getCategory());
  }
);

export const addSubCategory = createAsyncThunk(
  "subCategory/addSubCategory",
  async ({ categoryId, subCategoryName }, { dispatch }) => {
    await axiosRequest.post(
      `SubCategory/add-sub-category?CategoryId=${categoryId}&SubCategoryName=${subCategoryName}`
    );
    dispatch(getCategory());
  }
);


export const editSubCategory = createAsyncThunk(
  "subCategory/editSubCategory",
  async({subCategoryName,categoryId,id},{dispatch})=>{
    await axiosRequest.put(`/SubCategory/update-sub-category?Id=${id}&CategoryId=${categoryId}&SubCategoryName=${subCategoryName}`)
    dispatch(getCategory())
  }

)
