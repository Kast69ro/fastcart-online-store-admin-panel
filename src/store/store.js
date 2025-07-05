import { configureStore } from "@reduxjs/toolkit";
import logInSlice from "../entities/slices/log-in/log-in";
import productSlice from "../entities/slices/products/products";
import brandSlice from "../entities/slices/brand/brand";
import categorySlice from "../entities/slices/category/category";
import subCategorySlice from "../entities/slices/sub-category/sub-category";
import colorSlice from "../entities/slices/color/color";
import productByIdSlice from "../entities/slices/product-by-id/product-by-id";

export const store = configureStore({
  reducer: {
    login: logInSlice,
    products: productSlice,
    brands: brandSlice,
    category: categorySlice,
    subCategory: subCategorySlice,
    color: colorSlice,
    productById: productByIdSlice,
  },
});
