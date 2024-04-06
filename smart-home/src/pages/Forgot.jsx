import React from "react";
import '../css/Forgot.css';

const Forgot = () => {
  return (
      <div className="row justify-content-center align-items-center d-flex vh-100 ">
        <form className="col-lg-5 border border-dark p-3 rounder-border login-form">
          <div className="form-group m-3">
            <label className="form-label">PLEASE ENTER OLD PASSWORD</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="form-group m-3">
            <label className="form-label justify-content-left">
              PLEASE ENTER NEW PASSWORD
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="form-group m-3">
            <label className="form-label">COMFIRM NEW PASSWORD</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="logoutalldevice flex justify-content-left">
            <input type="checkbox" name="form-checkbox" id="logoutall" />
            <label className="form-label ml-1">Log out of all device</label>            
          </div>
          <button type="submit" className="btn btn-cancel mx-1">
            Cancel
          </button>
          <button type="submit" className="btn btn-success mx-1">
            Update
          </button>          
        </form>
      </div>  
  );
};

export default Forgot;
