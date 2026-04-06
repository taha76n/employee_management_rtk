import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeEmployeePopup } from '../../store/feature/popup/popup.slice';

const EmployeePopup = () => {

  const dispatch = useDispatch();
  
  const popup = useSelector((state) => state.popup.employeePopup)

  if (!popup) { return null; }


  return (
    <div className='fixed top-0 left-0 w-full h-full flex
    bg-black/80 z-20 items-center justify-center' onClick={() => dispatch(closeEmployeePopup())}>
      <fieldset onClick={(e) => e.stopPropagation()} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-3">
  <p className="fieldset-legend" >Employee Details</p>

  <label className="label">Profile Url</label>
  <input type="string" className="input" placeholder="Profile Url" />

  <label className="label">Name</label>
  <input type="string" className="input" placeholder="Name" />

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" />

  <label className="label">Bio</label>
  <textarea className="textarea h-24" placeholder="Bio"></textarea>

  <button className="btn btn-neutral mt-4">Submit</button>
</fieldset>
    </div>
  )
}

export default EmployeePopup