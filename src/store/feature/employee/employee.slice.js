import { createSlice } from "@reduxjs/toolkit";
import {
  deleteEmployees,
  getEmployees,
  postEmployees,
  updateEmployees,
} from "./employee.thunk";

const initialState = {
  employee: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  extraReducers: (builder) => {
    //GET Employees
    builder.addCase(getEmployees.pending, (state) => {
      (state.error = null), (state.loading = true);
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      (state.loading = false), (state.employee = action.payload);
    });
    builder.addCase(getEmployees.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });

    //POST Employees
    builder.addCase(postEmployees.pending, (state) => {
      (state.error = null), (state.loading = true);
    });
    builder.addCase(postEmployees.fulfilled, (state, action) => {
      (state.loading = false), state.employee.push(action.payload);
    });
    builder.addCase(postEmployees.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });

    //UPDATE Employees
    builder.addCase(updateEmployees.pending, (state) => {
      (state.error = null), (state.loading = true);
    });
    builder.addCase(updateEmployees.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(updateEmployees.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });

    //DELETE Employees
    builder.addCase(deleteEmployees.pending, (state) => {
      (state.error = null), (state.loading = true);
    });
    builder.addCase(deleteEmployees.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(deleteEmployees.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });
  },
});

// const {} = employeeSlice.actions

export default employeeSlice.reducer;
