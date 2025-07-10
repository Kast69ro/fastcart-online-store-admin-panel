import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../../config/axios/axios";
import { toast } from "sonner";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      let response = await axiosRequest.get("/Product/get-products");

      return response.data?.data?.products;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { dispatch }) => {
    await axiosRequest.delete(`/Product/delete-product?id=${id}`);
    dispatch(getProducts());
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (obj, { dispatch }) => {
    try {
      await axiosRequest.post("/Product/add-product", obj);
      dispatch(getProducts());
      toast.success('Product added')
    } catch (error) {
      console.log(error);
      toast.error('something went wrong, contact support')
    }
  }
);


export const editProduct = createAsyncThunk(
  'product/editProduct',
  async (product, { dispatch }) => {
    try {
      const query = new URLSearchParams({
        Id: product.id,
        BrandId: product.BrandId,
        ColorId: product.ColorId,
        ProductName: product.ProductName,
        Description: product.Description,
        Quantity: product.Quantity,
        Code: product.Code,
        Price: product.Price,
        HasDiscount: product.HasDiscount, 
        DiscountPrice: product.DiscountPrice ,
        SubCategoryId: product.SubCategoryId,
        Weight: 'XL',
        Size: '10',
      }).toString()

      await axiosRequest.put(`/Product/update-product?${query}`)
      dispatch(getProducts())
      toast.success('edit is succssesful')
    } catch (error) {
      toast.error('something went wrong, contact support')
      console.log(error)
    }
  }
)


export const deleteImage = createAsyncThunk(
   'product/deleteImage',
   async(id,{dispatch})=>{
    await axiosRequest.delete(`/Product/delete-image-from-product?imageId=${id}`)
    dispatch(getProducts())
   }
)



