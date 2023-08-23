import axios from "axios";
const baseURL = process.env.VUE_APP_VUE_API_BASE;
console.log({ VUE_APP_VUE_API_BASE: baseURL });

const axi = axios.create({
  baseURL: "",
  timeout: 4000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

const getTrack = async ({ id }) => {
  const { data } = await axi.get(`${baseURL}/track/${id}`);
  console.log(data);
  return data;
};

export { getTrack };
