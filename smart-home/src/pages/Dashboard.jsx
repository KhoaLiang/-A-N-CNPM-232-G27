import React, { useState, useEffect } from 'react';
import PlusOne from '../img/PlusOne.png';
import ExampleDevice from '../img/example-device.png';
import AddDevice from '../img/AddDevice.png';
import '../css/Dashboard.css';
import {getRoom, addRoom, deleteRoom, getAllDevices, toggleDevice, addDevice, deleteDevice} from '../api/userApi';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    //room data
    const [roomData, setRoomData] = useState(null); //how to access the room
    const fetchRoomData = async () => {
      try {
        const data = await getRoom();
        setRoomData(data);
      } catch (error) {
        console.error("Failed to fetch room data: ", error);
      }
    };
    //add room
    const [name, setRoomName] = useState('');

    const handleAddRoom = async (event) => {
        event.preventDefault();
        const formValue = { name };
        console.log("Room to add: ",formValue); // check the form value
        const data = await addRoom(formValue);
        console.log("Success: ", data);
        fetchRoomData();
        setShow(false);
    };
    //delete room
    const [id, setRoomId] = useState('');
    useEffect(() => {
      if (roomData && roomData.rooms.length > 0) {
        setRoomId(roomData.rooms[0].id);
        //console.log("Room ID: ", roomData.rooms[0].id);
      }
    }, [roomData]);
    const handleDeleteRoom = async (id) => {
      if (window.confirm("Are you sure you want to delete this room?")) {
        const data = await deleteRoom({ id });
        console.log("Delete room: ", data);
        fetchRoomData();
      }
    };
    //device data
    const [deviceData, setDeviceData] = useState(null); //how to access all devices
    const [showDeviceModal, setShowDeviceModal] = useState(false);
    const [deviceName, setDeviceName] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [deviceId, setDeviceId] = useState(1);
    const [devices, setDevices] = useState([]);

    const handleDeviceNameChange = (event) => {
        setDeviceName(event.target.value);
    };

    const handleDeviceTypeChange = (event) => {
        setDeviceType(event.target.value);
    };
    
    const handleDeviceIdChange = (event) => {
        setDeviceId(event.target.value);
    };

    //initial fetch
    useEffect(() => {
      fetchRoomData();
    }, []);
    // Add a new state variable for the devices of the selected room
    const [selectedRoomDevices, setSelectedRoomDevices] = useState([]);

    useEffect(() => {
      const fetchDeviceData = async () => {
        
        try {
          const dData = await getAllDevices();
          setDeviceData(dData.data);

          // Filter and map the devices as soon as deviceData is updated
          

          //const filteredDeviceData = deviceData ? deviceData.filter(device => device.roomId === id) : [];
          const filteredDeviceData = [];
          if(deviceData === null) return;
          for(let i = 0; i < deviceData.length; i++){
            if(deviceData[i].roomId == id){
              filteredDeviceData.push(deviceData[i]);
            }
          }
          setSelectedRoomDevices(filteredDeviceData.map((device, index) => (
            <div key={index} className="card border border-black m-2" style={{width: "12rem"}} id="device-in-room">
              <div className="card-body">
                <label className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id={`flexSwitchCheckDefault${index}`} 
                    onChange={async (e) => {
                      const formValue = {
                          deviceId: device.id,
                          deviceType: device.type,
                          status: e.target.checked.toString()
                      };
                      console.log("Toggle device: ", formValue);
                      await toggleDevice(formValue);
                    }}
                  />
                  <label className="form-check-label" htmlFor={`flexSwitchCheckDefault${index}`}>On/Off</label>
                </label>
              </div>
              <div className="card-body">
                <img src={ExampleDevice} className="card-img device-icon border border-black" />
                <h5 className="card-title">{device.name}</h5>
                <p className="card-text">{device.type}</p>
                <p className="card-text">Device ID: {device.id}</p>
                <p className='btn btn-outline-danger' 
                    onClick={async (e) => {
                      if (window.confirm("Are you sure you want to delete this device?")) {
                        const formValue = {
                          id: device.id
                        };
                        const delete_result = await deleteDevice(formValue);
                        window.location.reload();
                      }
                    }}>
                      Delete
                </p>
              </div>
            </div>
          )));

        } catch (error) {
          console.error("Failed to fetch device data: ", error);
        }
      };
      fetchDeviceData();
    }, [id]); // Add id as a dependency to the useEffect hook
    return (
    <div>
        <div class="container">
          <div
            class="row justify-content-center align-items-center g-2 mt-3 p-2"
          >
            <div className="col-3">
              <select class="form-select form-select-lg mb-3" aria-label="select room" id="select-room" onChange={(e) => setRoomId(e.target.value)}>
                {roomData && roomData.rooms.map((room, index) => (
                  <option key={index} value={room.id} selected={index === 0}>{room.name}</option>
                ))}
              </select>
            </div>
            
            <img src={PlusOne} alt="Add room" className='add-room-icon mb-3' onClick={() => setShow(true)} />

            {show && (
              <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Add a new room</h5>
                      <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={handleAddRoom}>
                        <div className="mb-3">
                          <label className="form-label">Room name</label>
                          <input type="text" className="form-control" value={name} onChange={(e) => setRoomName(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Add room</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* end of row */}
            <div className="btn btn-danger mb-3" style={{width: "7rem"}} onClick={() => handleDeleteRoom(id)}>
              Delete This Room
            </div>
          </div>
        
          {/* begin new row */}
          <div className="row justify-content-center align-items-center g-2 mt-3">
              {/* device list */}

               {selectedRoomDevices}

              {/* add device */}
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
                        <form onSubmit={async (e) => {
                            const formValue = {
                                deviceName: deviceName,
                                deviceId: deviceId,
                                deviceType: deviceType,
                                roomId: id
                            };
                            console.log("Toggle device: ", formValue);
                            const add_device_result= await addDevice(formValue);
                            console.log("Add device result: ", add_device_result);
                          }}>
                          <div className="mb-3">
                            <label className="form-label">Device name</label>
                            <input type="text" className="form-control" value={deviceName} onChange={handleDeviceNameChange} />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">Device type</label>
                            <input type="text" className="form-control" value={deviceType} onChange={handleDeviceTypeChange} />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">ID</label>
                            <select className="form-select" value={deviceId} onChange={handleDeviceIdChange}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                          <button type="submit" className="btn btn-primary">Add device</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {/* end of the second row */}
          </div>
          
        </div>
    </div>
  );
};

export default Dashboard;