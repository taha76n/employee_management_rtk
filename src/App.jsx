import React from "react";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Employees from "./component/employees/Employees";
import EmployeePopup from "./component/employeePopup/employeePopup";
import DeletePopup from "./component/deletePopup/DeletePopup";
import EditEmployeePopup from "./component/editEmployeePopup/EditEmployeePopup";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <EmployeePopup />
      <DeletePopup />
      <EditEmployeePopup />
      <Navbar />

      <div className="flex-1 py-10">
        <Employees />
      </div>

      <Footer />
    </div>
  );
};

export default App;
