import actionTypes from "./actionTypes";
import * as apis from "../../services";

// get current user
export const getUser = () => async (dispatch) => {
    try {
        const response = await apis.apiGetUser();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CURRENT_USER,
                curData: response.data.data
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_CURRENT_USER,
                msg: response.data.msg
            });
            // when access token expired or err then logout
            dispatch({type: actionTypes.LOGOUT});
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_CURRENT_USER,
            curData: null,
            msg: err
        });
        // when access token expired or err then logout
        dispatch({type: actionTypes.LOGOUT});
    }
}
