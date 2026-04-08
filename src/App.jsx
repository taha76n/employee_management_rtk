import React, { useEffect } from "react";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Employees from "./component/employees/Employees";
import EmployeePopup from "./component/employeePopup/EmployeePopup";
import DeletePopup from "./component/deletePopup/DeletePopup";
import { useDispatch } from "react-redux";
import { getEmployees } from "./store/feature/employee/employee.thunk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaveouritesPage from "./component/faveouritesPage/FaveouritesPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <BrowserRouter>
        <EmployeePopup />
        <DeletePopup />

        <Navbar />

        <div className="flex-1 py-10">
          <Routes>
            <Route element={<FaveouritesPage />} path="/favourites"></Route>
            <Route element={<Employees />} path="/"></Route>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
