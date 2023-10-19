import actionTypes from "../actions/actionTypes";

const initState = {
    // data current user
    curData: {}
}

const userReducer = (state=initState, action) => {
    switch(action.type) {
        case actionTypes.GET_CURRENT_USER: 
            return {
                ...initState,
                curData: action.curData || {}
            }
        case actionTypes.LOGOUT: 
            return {
                ...initState,
                curData: {}
            }
        default:
            return state;
    }
}

export default userReducer;