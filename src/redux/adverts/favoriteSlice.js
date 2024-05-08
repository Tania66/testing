import { createSlice } from "@reduxjs/toolkit";
import { deleteAdvertsById, fetchAdvertsById } from "./advertsOperation";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertsById.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchAdvertsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorite.push(payload);
      })
      .addCase(fetchAdvertsById.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteAdvertsById.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(deleteAdvertsById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        const advertId = state.favorite.findIndex(
          (item) => item.id === payload.id
        );
        state.favorite.splice(advertId, 1);
      })
      .addCase(deleteAdvertsById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const favoriteReducer = favoriteSlice.reducer;
