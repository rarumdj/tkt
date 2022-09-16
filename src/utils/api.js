import axios from "axios";
const baseURL = "https://test.wertkt.com/api/";

const Axios = axios.create({
  baseURL,
});

export { Axios };
