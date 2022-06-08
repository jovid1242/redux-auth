import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  isAuth: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userName: (state, action) => {
      state = { ...state, userName: action.payload };
    },
    password: (state, action) => {
      console.log("action", action);
      state = { ...state, password: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { userName, password } = userSlice.actions;

export default userSlice.reducer;
