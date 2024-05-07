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