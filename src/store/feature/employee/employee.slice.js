import { createSlice } from "@reduxjs/toolkit";
import { getEmployees } from "./employee.thunk";

const initialState = {
  employee: [],
  loading: false,
  error: null
}

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      getEmployees.pending, (state) => {
        state.error = null,
        state.loading = true
      }
    );
    builder.addCase(
      getEmployees.fulfilled, (state, action) => {
        state.loading = false,
        state.employee = action.payload
      }
    );
    builder.addCase(
      getEmployees.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
      }
    );
  }
})

// const {} = employeeSlice.actions

export default employeeSlice.reducer;