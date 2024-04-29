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