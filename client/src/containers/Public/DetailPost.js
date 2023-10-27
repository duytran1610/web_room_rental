import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

const DetailPost = () => {
    // params (:name_params)
    const {postId} = useParams();

    // get posts from postReducer in redux store
    const {posts} = useSelector(state => state.post);

    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        postId && dispatch(actions.getPostsLimit({id: postId}));
    }, [postId]);
    return (
        <div>
            DetailPost
        </div>
    );
}

export default DetailPost;