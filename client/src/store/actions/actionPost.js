import actionTypes from "./actionTypes";
import { apiGetAllPosts } from "../../services/postService";


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
        })
    }
}