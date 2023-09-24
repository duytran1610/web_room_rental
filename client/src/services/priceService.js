import instance from "../config/axiosConfig";

export const apiGetAllPrices = () => new Promise(async(resolve, reject) => {
    try {
        const response = await instance({
            method: 'get',
            url: '/api/v1/price/all'
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});