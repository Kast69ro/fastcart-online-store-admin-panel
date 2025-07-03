



import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { defaultAxios } from "../../../config/axios/axios";

export const logIn = createAsyncThunk(
  "login/logIn",
  async ({ userName, password }) => {
    try {
      let data = await defaultAxios.post(`/Account/login`, {
        userName,
        password,
      });

      localStorage.setItem("token", data.data.data);
       toast.success("Succsessfuly");
      return data.status;

    } catch (error) {
      console.log(error);
      toast.error('error logging in, check your username and password, or contact support')
    }
  }
);