/* eslint-disable no-debugger */
import axios from "axios";

const axi = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 4000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

const getTrack = async ({ id }) => {
  const { data } = await axi.get(`http://localhost:8000/api/track/${id}`);
  console.log(data);
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return data;
};

export { getTrack };
