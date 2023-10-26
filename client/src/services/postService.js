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

// get posts to pagination
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

// get posts in manage posts of user
export const apiGetPostsLimitUser = (query) => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'get',
            url: `/api/v1/post/limit-user`,
            params: query
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// upate post
export const apiUpdatePost = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'put',
            url: `/api/v1/post/update`,
            data: payload
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// delete post
export const apiDeletePost = (payload) => new Promise(async(resolve, reject) => {
    try {
        const response = instance({
            method: 'delete',
            url: `/api/v1/post/delete`,
            data: payload
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});
