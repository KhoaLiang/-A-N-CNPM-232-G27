import React, { useState, useEffect } from 'react';
import kwh from "../img/kwh.png";
import cost from "../img/es_cost.png";
import "../css/ElectricityUsage.css";
import { getRoomElec } from '../api/userApi';
const ElectricityUsagePage = () => {
  // Your code here
  const [RoomsElec, setRoomsElec] = useState([]);
  const fetchRoomElec = async () => {
    try {
      const data = await getRoomElec();
      setRoomsElec(data.roomKWh);
    } catch (error) {
      console.error("Failed to fetch electricity usage data: ", error);
    }
  };
  useEffect(() => {
    const roomElecIntervalId = setInterval(fetchRoomElec, 3000);
    return () => {
      clearInterval(roomElecIntervalId);
    };
  }, []);
  useEffect(() => {
    console.log(RoomsElec);
  }, [RoomsElec]);
  return (
    <div className="container row justify-content-center align-items-center d-flex vh-150 ">
      <div className="room_row row">
        {RoomsElec.map((room, index) => (
          <div className={`room justify-content-${index % 2 === 0 ? 'left' : 'right'} align-items-center col-6`} key={index}>
            <h1>{room.total === null ? 0 : (room.total).toFixed(2)}</h1>
            <div className="mx-1">
              <img src={kwh} alt="" className="logo-nav" />
            </div>
            <h3>{room.roomName}</h3>
          </div>
        ))}
      </div>
      <div className="ma"></div>
    </div>
  );
};

export default ElectricityUsagePage;
