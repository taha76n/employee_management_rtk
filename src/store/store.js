import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./feature/popup/popup.slice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});
