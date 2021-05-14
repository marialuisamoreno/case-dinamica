import axios from "axios";
import { getToken } from "./auth";
import { errorCallingAPI } from "./error";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE + process.env.REACT_APP_ENV + "/api"
});

api.interceptors.request.use(async config => {  
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(function (response) {  
    return response;
  },
  function (error) {    
    console.log(error);
    errorCallingAPI();
  }
);

export const baseBackURL =  process.env.REACT_APP_BASE;

// GET ALL PRODUCTS
export const getAllProductsFunction = async () => {
  return api.get("/products/details");
}
// ADD NEW PRODUCT
export const addProductFunction = async (data) => {
  return api.post("/products/save", data);
}
// GET ALL EMBLEMS
export const getAllEmblemsFunction = async () => {
  return api.get('/emblems/all');
}
// GET ALL PROMO STATUS
export const getAllStatusFunction = async () => {
  return api.get('/status/all');
}

export default api;