import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../../api/log-in/log-in";




export const logInSlice = createSlice({
  name: "login",
  initialState: {
    statusCode: null,
    error: false,
  },
  reducers: {
    resetStatus(state) {
      state.statusCode = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.statusCode = action.payload;
    });
  },
});

export const { resetStatus } = logInSlice.actions;
export default logInSlice.reducer;
