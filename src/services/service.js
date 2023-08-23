import axios from "axios";

const axi = axios.create({
  baseURL: "https://localhost:8000/api/",
  timeout: 4000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

const getTrack = async ({ id }) => {
  const { data } = await axi.get(`https://localhost:8000/api/track/${id}`);
  console.log(data);
  // await new Promise(resolve => setTimeout(resolve, 1000));
  return data;
};

export { getTrack };
