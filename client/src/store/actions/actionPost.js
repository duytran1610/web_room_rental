import actionTypes from "./actionTypes";
import { apiGetAllPosts, apiGetPostsLimit, apiGetNewPosts } from "../../services/postService";

// get all posts
export const getAllPosts = () => async (dispatch) => {
    try {
        const response = await apiGetAllPosts();

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
            posts: null
        });
    }
}

// get to pagination
export const getPostsLimit = (query) => async (dispatch) => {
    try {
        const response = await apiGetPostsLimit(query);

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
            posts: null
        });
    }
}

// get new posts
export const getNewPosts = () => async (dispatch) => {
    try {
        const response = await apiGetNewPosts();

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
            newPosts: null
        });
    }
}