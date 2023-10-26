import instance from "../config/axiosConfig";

// get current user
export const apiGetUser = () => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            method: 'get',
            url: '/api/v1/user/get-current'
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// update user
export const apiUpdateUser = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            method: 'put',
            url: '/api/v1/user/update',
            data: payload
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});