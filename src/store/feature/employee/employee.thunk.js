import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../configs/apiInstance";

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employee");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue("Something Went Wrong");
    }
  }
);
