import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDeletePopup } from "../../store/feature/popup/popup.slice";

const DeletePopup = () => {
  const dispatch = useDispatch();

  const deletePopup = useSelector((state) => state.popup.deletePopup);

  if (!deletePopup) {
    return null;
  }

  return (
    <div
      onClick={() => dispatch(closeDeletePopup())}
      className="fixed top-0 left-0 h-full bg-black/80 w-full z-20 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="card w-96 bg-base-100 card-md shadow-sm"
      >
        <div className="card-body">
          <h2 className="card-title justify-center">Delete Employee</h2>
          <p>Are you sure you want to delete the employee</p>
          <div className="justify-center gap-18 card-actions mt-6">
            <button className="btn btn-primary">Yes</button>
            <button
              onClick={() => dispatch(closeDeletePopup())}
              className="btn btn-error"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
