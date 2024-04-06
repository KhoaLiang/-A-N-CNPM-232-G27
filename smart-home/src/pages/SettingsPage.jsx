import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Settings.css";
import panda from "../img/panda.png";
const SettingsPage = () => {
  return (
    <div className="container">
        <div class="container text-center">
          <div class="row newrow justify-content-center border border-dark">
            <div class="col column">PERSONAL INFO</div>
            <div class="col column">PASSWORD</div>
            <div class="col column">HOME</div>
          </div>
        </div>
      <div className="content w-100">
        <div className="imgchange w-25">
            <img src={panda} alt="panda" />
            <button type="submit" className="btn btn-primary mx-1">
              Update
            </button>
        </div>
        <div className="row justify-content-center align-items-start d-flex w-75 mt-5">
          <form className="col-lg-5 p-3">
            <div className="form-group m-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group m-3">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Your Phone"
              />
            </div>
            <div className="form-group m-3">
              <input
                type="text"
                className="form-control"
                id="vnid"
                placeholder="Enter Your VNID"
              />
            </div>
            <div className="form-group m-3">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>

            <button type="submit" className="btn btn-danger mx-1">
              Cancel
            </button>
            <button type="submit" className="btn btn-success mx-1">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
