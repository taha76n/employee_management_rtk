import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/feature/popup/popup.slice";

const EmployeePopup = () => {
  console.log("Component rendered");
  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlight: false,
  });

  const dispatch = useDispatch();

  const popup = useSelector((state) => state.popup.employeePopup);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  console.log(formDetails);
  console.log("popup state:", popup);

  if (!popup) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex
    bg-black/80 z-20 items-center justify-center"
      onClick={() => dispatch(closeEmployeePopup())}
    >
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-3"
      >
        <p className="fieldset-legend">Add Employee Details</p>

        <label className="label">Profile Url</label>
        <input
          onChange={handleInputChange}
          value={formDetails.profileUrl}
          name="profileUrl"
          type="text"
          className="input"
          placeholder="Profile Url"
        />

        <label className="label">Name</label>
        <input
          onChange={handleInputChange}
          value={formDetails.name}
          name="name"
          type="text"
          className="input"
          placeholder="Name"
        />

        <label className="label">Email</label>
        <input
          name="email"
          onChange={handleInputChange}
          value={formDetails.email}
          type="email"
          className="input"
          placeholder="Email"
        />

        <label className="label">Bio</label>
        <textarea
          onChange={handleInputChange}
          value={formDetails.bio}
          name="bio"
          className="textarea h-24"
          placeholder="Bio"
        ></textarea>

        <button className="btn btn-neutral mt-4">Submit</button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
