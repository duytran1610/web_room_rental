import actionTypes from "./actionTypes";
import { apiGetAllPosts, apiGetPostsLimit } from "../../services/postService";

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
export const getPostsLimit = (page) => async (dispatch) => {
    try {
        const response = await apiGetPostsLimit(page);

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
                msg: response.data.msg
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT,
            posts: null
        });
    }
}