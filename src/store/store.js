import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./feature/popup/popup.slice";
import employeeReducer from "./feature/employee/employee.slice";
import favouritesReducer from "./feature/favourites/favourites.slice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    employee: employeeReducer,
    favourites: favouritesReducer
  },
});
