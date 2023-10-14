import instance from "../config/axiosConfig";

export const apiGetAllProvinces = () => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            method: 'get',
            url: '/api/v1/province/all'
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});