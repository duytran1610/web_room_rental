import instance from "../config/axiosConfig";

export const apiGetAllAreas = () => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            method: 'get',
            url: '/api/v1/area/all'
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});