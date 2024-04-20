import axios from "axios";

export const signIn = async (formValue) => {
  const res = await axios({
    method: "post",
    url: `http://localhost:4000/auth/login`,
    data: formValue,
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};