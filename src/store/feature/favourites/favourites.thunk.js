import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../configs/apiInstance";

export const getAllFavourites = createAsyncThunk(
  "favourites/getAllFavourites",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employee");
      const favourites = response.data.filter((emp) => emp.highlight === true);

      return favourites;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return rejectWithValue("Something Went Wrong");
    }
  }
);
