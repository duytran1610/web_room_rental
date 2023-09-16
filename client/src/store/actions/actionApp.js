import actionTypes from "./actionTypes";
import { apiGetAllCatgorries } from "../../services/categoryService";

// get all categories
export const getAllCategories = () => async (dispatch) => {
    try {
        const response = await apiGetAllCatgorries();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                categories: response.data.data
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                msg: response.data.msg,
                categories: null
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_CATEGORIES,
            categories: null
        });
    }
}