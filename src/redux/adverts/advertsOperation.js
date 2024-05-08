import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://659d39dd633f9aee7908f1a9.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAll",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get("/adverts", {
        params: {
          page: page,
          limit: 4,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAdvertsById = createAsyncThunk(
  "advertsId/fetchId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/adverts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAdvertsById = createAsyncThunk(
  "advertsId/deleteId",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/adverts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
