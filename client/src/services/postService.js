import instance from "../config/axiosConfig";

// get all post
export const apiGetAllPosts = () => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'get',
            url: '/api/v1/post/all'
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// get posts to pagination or a post
export const apiGetPostsLimit = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'get',
            url: `/api/v1/post/limit`,
            params: query
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// get new posts or hot posts
export const apiGetOrderPosts = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'get',
            url: `/api/v1/post/order-post`,
            params: query
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// get post by id
export const apiGetPostById = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'get',
            url: `/api/v1/post/id`,
            params: id
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});

// create a new post
export const apiCreateNewPost = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
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
export const apiGetPostsLimitUser = (query) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
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
export const apiUpdatePost = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
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
export const apiDeletePost = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await instance({
            method: 'delete',
            url: `/api/v1/post/delete`,
            data: payload
        });

        resolve(response);
    } catch (err) {
        reject(err);
    }
});
