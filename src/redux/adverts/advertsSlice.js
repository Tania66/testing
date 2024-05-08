import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./advertsOperation";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state, _) => {
        state.loading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
