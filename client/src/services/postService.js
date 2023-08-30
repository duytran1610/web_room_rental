import instance from "../config/axiosConfig";

// get all post
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
});

// get to pagination
export const apiGetPostsLimit = (page) => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'get',
            url: `/api/v1/post/limit?page=${page}`
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});