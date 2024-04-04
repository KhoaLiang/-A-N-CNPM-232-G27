import React, { useState } from 'react';
import PlusOne from '../img/PlusOne.png';
import ExampleDevice from '../img/example-device.png';
import AddDevice from '../img/AddDevice.png';
import '../css/Dashboard.css';
const Dashboard = () => {
    const [show, setShow] = useState(false);
    const [roomName, setRoomName] = useState('');
    const [rooms, setRooms] = useState(['Bed room']);

    const [showDeviceModal, setShowDeviceModal] = useState(false);
    const [deviceName, setDeviceName] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [devicePort, setDevicePort] = useState(1);
    const [devices, setDevices] = useState([]);

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setRooms([...rooms, roomName]);
        setRoomName('');
        setShow(false);
    };

    const handleDeviceNameChange = (event) => {
        setDeviceName(event.target.value);
    };

    const handleDeviceTypeChange = (event) => {
        setDeviceType(event.target.value);
    };

    const handleDevicePortChange = (event) => {
        setDevicePort(event.target.value);
    };

    const handleDeviceFormSubmit = (event) => {
        event.preventDefault();
        setDevices([...devices, { name: deviceName, type: deviceType, port: devicePort }]);
        setDeviceName('');
        setDeviceType('');
        setDevicePort(1);
        setShowDeviceModal(false);
    };
  

    return (
    <div>
        <div
        class="container"
    >
       <div
        class="row justify-content-center align-items-center g-2 mt-3"
       >
        {rooms.map((room, index) => (
        <button key={index} type="button" className="col-2 btn btn-outline-dark m-2">{room}</button>
      ))}
      <img src={PlusOne} alt="Add room" className='add-room-icon' onClick={() => setShow(true)} />

      {show && (
        <div className="modal" tabIndex="-1" style={{display: 'block'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add a new room</h5>
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Room name</label>
                    <input type="text" className="form-control" value={roomName} onChange={handleRoomNameChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">Add room</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* end of row */}
       </div>
       
       {/* begin new row */}
       <div className="row justify-content-center align-items-center g-2 mt-3">
      {devices.map((device, index) => (
        <div key={index} className="card border border-black m-2" style={{width: "12rem"}} id="device-in-room">
          <div className="card-body">
            <label className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id={`flexSwitchCheckDefault${index}`} />
              <label className="form-check-label" htmlFor={`flexSwitchCheckDefault${index}`}>On/Off</label>
            </label>
          </div>
          <div className="card-body">
            <img src={ExampleDevice} className="card-img device-icon border border-black" />
            <h5 className="card-title">{device.name}</h5>
            <p className="card-text">{device.type}</p>
            <p className="card-text">Port: {device.port}</p>
          </div>
        </div>
      ))}
      <div className="card border border-black m-2" style={{width: "7rem"}} onClick={() => setShowDeviceModal(true)}>
        <img src={AddDevice} className="card-img device-icon" id="add-device"/>
      </div>

      {showDeviceModal && (
        <div className="modal" tabIndex="-1" style={{display: 'block'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add a new device</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeviceModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleDeviceFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Device name</label>
                    <input type="text" className="form-control" value={deviceName} onChange={handleDeviceNameChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Device type</label>
                    <input type="text" className="form-control" value={deviceType} onChange={handleDeviceTypeChange} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Port</label>
                    <select className="form-select" value={devicePort} onChange={handleDevicePortChange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">Add device</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
       
    </div>
    
      
    </div>
  );
};

export default Dashboard;