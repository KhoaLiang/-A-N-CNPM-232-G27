import axios from "axios";

export const signIn = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:4000/auth/login`,
    data: formValue,
    headers: { 
      "Accept": "*/*" ,
      "Content-Type": "application/json"
  },withCredentials: true,
  });
  return res.data;
};

export const logOut = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:4000/auth/logout`,
    headers: { 
      "Accept": "*/*"
  },withCredentials: true,
  });
  return res.data;
};

export const getRoom = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:4000/`,
    headers: { 
      "Accept": "*/*"
  },withCredentials: true,
  });
  return res.data;
};

export const addRoom = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:4000/room/add`,
    data: formValue,
    headers: { 
      "Accept": "*/*" ,
      "Content-Type": "application/json"
  },withCredentials: true,
  });
  return res.data;
};

export const deleteRoom = async (roomID) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:4000/room/delete`,
    data: roomID,
    headers: { 
      "Accept": "*/*" ,
      "Content-Type": "application/json"
  },withCredentials: true,
  });
  return res.data;
};

export const getAllDevices = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:4000/device/all`,
    headers: { 
      "Accept": "*/*"
  },withCredentials: true,
  });
  return res.data;
};

export const toggleDevice = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:4000/device/toggle`,
    data: formValue,
    headers: { 
      "Accept": "*/*" ,
      "Content-Type": "application/json"
  },withCredentials: true,
  });
  return res.data;
};
export const addDevice = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:4000/device/add`,
    data: formValue,
    headers: { 
      "Accept": "*/*" ,
      "Content-Type": "application/json"
  },withCredentials: true,
  });
  return res.data;
};
export const deleteDevice = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:4000/device/delete`,
    data: formValue,
    headers: { 
      "Accept": "*/*" ,
      "Content-Type": "application/json"
  },withCredentials: true,
  });
  return res.data;
};
export const getTemperature = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:4000/temperature`,
    headers: { 
      "Accept": "*/*"
  },withCredentials: true,
  });
  return res.data;
};
export const getHumidity = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:4000/humidity`,
    headers: { 
      "Accept": "*/*"
  },withCredentials: true,
  });
  return res.data;
};
export const getLight = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:4000/brightness`,
    headers: { 
      "Accept": "*/*"
  },withCredentials: true,
  });
  return res.data;
};
export const getRoomElec = async () => {
  const res = await axios({
    method: "get",
    url: `http://localhost:4000/statistic`,
    headers: { 
      "Accept": "*/*"
  },withCredentials: true,
  });
  return res.data;
};