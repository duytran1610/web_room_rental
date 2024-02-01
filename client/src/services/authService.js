import instance from "../config/axiosConfig";

export const apiRegister = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'post',
            url: '/api/v1/auth/register',
            data: payload
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

export const apiLogin = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'post',
            url: '/api/v1/auth/login',
            data: payload
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
})