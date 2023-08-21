import instance from "../config/axiosConfig";

export const apiRegister = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = instance({
            method: 'post',
            url: '/api/v1/auth/register',
            data: payload
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
})