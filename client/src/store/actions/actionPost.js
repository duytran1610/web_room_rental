import actionTypes from "./actionTypes";
import * as apis from "../../services";

// get all posts
export const getAllPosts = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllPosts();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response.data.data
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response.data.msg
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null,
            msg: err
        });
    }
}

// get posts to pagination
export const getPostsLimit = (query) => async (dispatch) => {
    try {
        const response = await apis.apiGetPostsLimit(query);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                posts: response.data.data?.rows,
                count: response.data.data?.count 
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                msg: response.data.msg,
                posts: null
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT,
            posts: null,
            msg: err
        });
    }
}

// get new posts
export const getNewPosts = () => async (dispatch) => {
    try {
        const response = await apis.apiGetNewPosts();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_NEW_POSTS,
                newPosts: response.data.data,
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_NEW_POSTS,
                msg: response.data.msg,
                newPosts: null
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_NEW_POSTS,
            newPosts: null,
            msg: err
        });
    }
}

// get posts in manage posts of user
export const getPostsLimitUser = (query) => async (dispatch) => {
    try {
        const response = await apis.apiGetPostsLimitUser(query);

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_USER,
                posts: response.data.data?.rows,
                count: response.data.data?.count 
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_POSTS_USER,
                msg: response.data.msg,
                posts: null
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_POSTS_USER,
            posts: null,
            msg: err
        });
    }
}

// get post edit
export const getPostEdit = (dataEdit) => ({
    type: actionTypes.GET_POST_EDIT,
    post: dataEdit
});

// reset post edit
export const resetPostEdit = () => ({
    type: actionTypes.RESET_POST_EDIT
});