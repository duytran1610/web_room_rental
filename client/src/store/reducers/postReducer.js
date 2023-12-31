import actionTypes from "../actions/actionTypes";

const initState = {
    posts: [],
    msg: '',
    count: 0,
    newPosts: [],
    hotPosts: [],
    postsUser: [],
    postEdit: null
}


const postReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_POSTS:
        case actionTypes.GET_POSTS_LIMIT:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || '',
                count: action.count || 0
            }

        case actionTypes.GET_NEW_POSTS:
            return {
                ...state,
                msg: action.msg || '',
                newPosts: action.newPosts || []
            }

        case actionTypes.GET_HOT_POSTS:
            return {
                ...state,
                msg: action.msg || '',
                hotPosts: action.hotPosts || []
            }

        case actionTypes.GET_POSTS_USER:
            return {
                ...state,
                postsUser: action.posts || [],
                msg: action.msg || '',
                count: action.count || 0
            }

        case actionTypes.GET_POST_EDIT:
            return {
                ...state,
                postEdit: action.post || null
            }

        case actionTypes.RESET_POST_EDIT:
            return {
                ...state,
                postEdit: null
            }
        default:
            return state;
    }
}

export default postReducer;