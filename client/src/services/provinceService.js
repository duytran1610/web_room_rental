import instance from "../config/axiosConfig";
import axios from "axios";

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

// get provices from Host: https://vapi.vnappmob.com
export const apiGetPublicProvinces = () => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://vapi.vnappmob.com/api/province/'
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// get districts in provice (id) from Host: https://vapi.vnappmob.com
export const apiGetPublicDistricts = (provinceId) => new Promise(async(resolve, reject) => {
    try {
        const response = await axios({
            method: 'get',
            url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});