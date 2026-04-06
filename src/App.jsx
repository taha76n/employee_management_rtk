import React, { useEffect } from "react";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Employees from "./component/employees/Employees";
import EmployeePopup from "./component/employeePopup/employeePopup";
import DeletePopup from "./component/deletePopup/DeletePopup";
import { useDispatch } from "react-redux";
import { getEmployees } from "./store/feature/employee/employee.thunk";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [])
  
  return (
    <div className="w-full min-h-screen flex flex-col">
      <EmployeePopup />
      <DeletePopup />
      <Navbar />

      <div className="flex-1 py-10">
        <Employees />
      </div>

      <Footer />
    </div>
  );
};

export default App;
