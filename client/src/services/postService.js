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
export const apiGetPostsLimit = (query) => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'get',
            url: `/api/v1/post/limit`,
            params: query
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// get new posts
export const apiGetNewPosts = () => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'get',
            url: `/api/v1/post/new-post`,
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// create a new post
export const apiCreateNewPost = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'post',
            url: `/api/v1/post/create-new`,
            data: payload
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});