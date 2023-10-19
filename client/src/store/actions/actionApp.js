import actionTypes from "./actionTypes";
import * as apis from "../../services";

// get all categories
export const getAllCategories = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllCatgorries();

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
            categories: null,
            msg: err
        });
    }
}

// get all prices
export const getAllPrices = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllPrices();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRICES,
                prices: response.data.data.sort((a,b) => a.order - b.order)
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_PRICES,
                msg: response.data.msg,
                prices: null
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_PRICES,
            prices: null,
            msg: err
        });
    }
}

// get all areas
export const getAllAreas = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllAreas();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AREAS,
                areas: response.data.data.sort((a,b) => a.order - b.order)
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_AREAS,
                msg: response.data.msg,
                areas: null
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_AREAS,
            areas: null,
            msg: err
        });
    }
}

// get all provinces
export const getAllProvinces = () => async (dispatch) => {
    try {
        const response = await apis.apiGetAllProvinces();

        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PROVINCES,
                provinces: response.data.data
            });
        } 
        else {
            dispatch({
                type: actionTypes.GET_PROVINCES,
                msg: response.data.msg,
                provinces: null
            });
        }
    } catch (err) {
        dispatch({
            type: actionTypes.GET_PROVINCES,
            provinces: null,
            msg: err
        });
    }
}