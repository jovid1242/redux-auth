import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  list: [],
  status: false,
};

export const getPosts = createAsyncThunk("posts/getposts", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=6")
    .then((res) => res.data);
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = true;
    },
  },
});

export default postSlice.reducer;
