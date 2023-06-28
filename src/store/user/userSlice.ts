import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserActionPayloadStructure, UserStateStructure } from "../../types";

const initialState: UserStateStructure = {
  id: "",
  userName: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      _currentUserState: UserStateStructure,
      action: PayloadAction<UserActionPayloadStructure>
    ) => ({
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
