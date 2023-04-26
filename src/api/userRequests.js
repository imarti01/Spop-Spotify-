import axios from "axios";

const API_URL = "http://localhost:4000";

export const registerRequest = async (userData) => {
  return await axios
    .post(`${API_URL}/users/register`, userData)
    .catch((res) => res.response.data.msg);
};

export const loginRequest = async (userData) => {
  return await axios
    .post(`${API_URL}/users/login`, userData)
    .catch((res) => res.response.data.msg);
};