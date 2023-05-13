/* eslint-disable no-debugger */
import axios from "axios";

const axi = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
});

const getTrack = async({ id }) => {
  const { data } = await axi.get(`http://localhost:8000/api/track/${id}`);
  // await new Promise(resolve => setTimeout(resolve, 20));
  return data;
};

export {
  getTrack,
}