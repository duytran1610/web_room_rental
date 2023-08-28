import instance from "../config/axiosConfig";

export const apiGetAllPosts = () => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'get',
            url: '/api/v1/post/all'
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
})