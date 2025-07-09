



import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { defaultAxios } from "../../../config/axios/axios";
import { checkGridRowIdIsValid } from "@mui/x-data-grid";

export const logIn = createAsyncThunk(
  "login/logIn",
  async ({ userName, password }) => {
    try {
      let {data} = await defaultAxios.post(`/Account/login`, {
        userName,
        password,
      });
console.log(data.data)

      localStorage.setItem("token", data.data);
       toast.success("Succsessfuly");
      return data.statusCode;

    } catch (error) {
      console.log(error);
      toast.error('error logging in, check your username and password, or contact support')
    }
  }
);