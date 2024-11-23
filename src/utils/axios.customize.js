// import axios from "axios";

// // Set config defaults when creating the instance
// const instance = axios.create({
//   baseURL: import.meta.env.VITE_BECKEND_URL,
// });

// // Alter defaults after instance has been created
// //instance.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

// // Add a request interceptor
// instance.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("access_token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     if (response && response.data) return response.data;
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     console.log(">> Check eorr: ", error);
//     if (error?.response?.data) return error?.response?.data;
//     return Promise.reject(error);
//   }
// );

// export default instance;

import axios from "axios";

//const baseURL = import.meta.env.VITE_BECKEND_URL;

const baseURL = "http://localhost:8080/web-app-config/api/v1"
const config = {
  baseURL: baseURL,
  timeout: 3000000,
  //withCredentials: true,
};

const instance = axios.create(config);

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token")?.replaceAll('"', "");
    if (token) {
      config.headers["Content-Type"] = "application/json";
      config.headers["Authorization"] = `Bearer ${token}`;
    } else {
      console.warn("No token found in localStorage");
    }
    return config;
  },
  (error) => {
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response?.data ? response.data : response;
  },
  (error) => {
    console.error("Error in response interceptor:", error);
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default instance;
