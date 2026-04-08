import { createSlice } from "@reduxjs/toolkit";
import { getAllFavourites } from "./favourites.thunk";

const initialState = {
  favourites: [],
  loading: false,
  error: null
}

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(
      getAllFavourites.pending, (state) => {
        state.loading = true;
        state.error = null
      }
    );
    builder.addCase(
      getAllFavourites.fulfilled, (state, action) => {
        state.loading = false;
        state.favourites = action.payload;

      }
    );
    builder.addCase(
      getAllFavourites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      }
    );
  }

})

// const {} = favouritesSlice.actions;

export default favouritesSlice.reducer;