import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "../../api/api";
import { CommentType } from "../../types/CommentType";

interface CommentsState {
  comments: CommentType[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommentsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Cant load comments";
      })
      .addCase(fetchCommentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
      });
  },
});

export default commentsSlice.reducer;

export const fetchCommentsThunk = createAsyncThunk(
  "comments/fetchComments",
  fetchComments
);
