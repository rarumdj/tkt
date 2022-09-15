import axios from "axios";

export const getBusiness = () => {
  return axios.get("https://test.wertkt.com/api/biz/");
};

export const getBusinessDetails = (code) => {
  return axios.get(`https://test.wertkt.com/api/biz/${code}`);
};

export const getBusinessResult = (code) => {
  return axios.get(`https://test.wertkt.com/api/result/${code}`);
};
