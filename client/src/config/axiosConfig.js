import axios from 'axios';

// Creating an instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent

    let token = '';

    // get information encoded in local storage of web
    let encode = window.localStorage.getItem('persist:auth');

    if (encode) token = JSON.parse(encode).token;

    // put token into header
    config.headers = {
      authorization: `Bear ${token}`
    }

    return config;
  }, function (err) {
    // Do something with request error
    console.log('Errol in request interceptor instance: ', err);

    return Promise.reject(err);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // refresh token
    return response;
  }, function (err) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('Errol in response interceptor instance: ', err);

    return Promise.reject(err);
  });

export default instance;