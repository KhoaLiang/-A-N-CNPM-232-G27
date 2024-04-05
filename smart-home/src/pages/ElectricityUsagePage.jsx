import React from "react";
import kwh from "../img/kwh.png";
import cost from "../img/es_cost.png";
import "../css/ElectricityUsage.css";

const ElectricityUsagePage = () => {
  // Your code here

  return (
    <div className="container">
      <div className="room row">
        <div className="guest_room justify-content-left align-items-center col-6">
          <h1>20</h1>
          <div className="mx-1">
            <img src={kwh} alt="" className="logo-nav" />
          </div>
          <h3>GUEST ROOM</h3>
        </div>

        <div className="dining_room justify-content-right align-items-center col-6">
          <h1>50</h1>
          <div className="mx-1">
            <img src={kwh} alt="" className="logo-nav" />
          </div>
          <h3>DINING ROOM</h3>
        </div>

        <div className="bed_room justify-content-left align-items-center col-6">
          <h1>60</h1>
          <div className="mx-1">
            <img src={kwh} alt="" className="logo-nav" />
          </div>
          <h3>BED ROOM</h3>
        </div>

        <div className="bad_room justify-content-right align-items-center col-6">
          <h1>25</h1>
          <div className="mx-1">
            <img src={kwh} alt="" className="logo-nav" />
          </div>
          <h3>BAD ROOM</h3>
        </div>
      </div>
      <div className="ma"></div>
      <div className="CostAndKwh row mt-5">
        <div className="cost col justify-content-center align-items-center">
          <div className="1">
            <img src={cost} alt="" className="logo-nav" />
          </div>
          <h3>ESTIMIMATED COST</h3>
        </div>

        <div className="kwh col justify-content-center align-items-center">
          <div className="2">
            <img src={kwh} alt="" className="logo-nav" />
          </div>
          <h3>TOTAL KWH</h3>
        </div>
      </div>
    </div>
  );
};

export default ElectricityUsagePage;
