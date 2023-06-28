import { createSlice } from "@reduxjs/toolkit";
import { UserLoginStructure } from "../../types";

const initialState: UserLoginStructure = {
  id: "",
  userName: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (_currentUserState: UserLoginStructure, action) => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: () => ({ ...initialState }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
