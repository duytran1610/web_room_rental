import instance from "../config/axiosConfig";

export const apiGetAllCatgorries = () => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'get',
            url: '/api/v1/category/all'
        })

        resolve(response);
    } catch (err) {
        reject(err);
    }
})