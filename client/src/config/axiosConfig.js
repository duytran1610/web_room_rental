import axios from 'axios';

// Creating an instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('persist:auth');
    console.log(token);

    return config;
  }, function (err) {
    // Do something with request error
    console.log('Errol in request interceptor instance: ', err);

    return Promise.reject(err);
  });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });

export default instance;