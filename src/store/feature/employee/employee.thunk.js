import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../configs/apiInstance";

export const getEmployees = createAsyncThunk(
  "employee/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employee");
      // console.log(response.data);
      return response.data;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return rejectWithValue("Something Went Wrong");
    }
  }
);

export const postEmployees = createAsyncThunk(
  "employee/postEmployees",
  async (details, { rejectWithValue }) => {
    console.log("Thunk running", details);

    try {
      const response = await api.post("employee", details);
      console.log(response.data);
      return response.data;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return rejectWithValue("Something Went Wrong");
    }
  }
);

export const deleteEmployees = createAsyncThunk(
  "employee/deleteEmployee",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`employee/${id}`);
      console.log(response.data);
      dispatch(getEmployees());
      return response.data;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return rejectWithValue("Something Went Wrong");
    }
  }
);

export const updateEmployees = createAsyncThunk(
  "employee/updateEmployee",
  async ({ id, details }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.put(`employee/${id}`, details);
      dispatch(getEmployees());
      console.log(response.data);
      return response.data;
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return rejectWithValue("Something Went Wrong");
    }
  }
);
