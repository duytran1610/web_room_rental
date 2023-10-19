import axios from 'axios';

// Creating an instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

// Add a request interceptor
instance.interceptors.request.use(function (req) {
    // Do something before request is sent
    let token;

    // get information encoded in local storage of web
    let encode = window.localStorage.getItem('persist:auth');

    // get value token
    // use slice(1, -1), bởi vì đó là dạng JSON của token, nên cần loại bỏ dấu "" ở 2 đầu vì token k phải string, nên đừng nhầm lẫn
    if (encode) token = JSON.parse(encode).token?.slice(1, -1);

    // put token into header
    req.headers = {
      authorization: `Bear ${token}`
    }

    return req;
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