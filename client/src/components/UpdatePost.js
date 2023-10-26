import React from 'react';
import {CreatePost} from '../containers/System';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

// show biểu mẫu để update thông tin 
const UpdatePost = ({setIsEdit, setUpdate}) => {
    // dispatch
    const dispatch = useDispatch();
    return (
        <div 
            className='absolute top-0 left-0 right-0 bottom-0 z-20 bg-overlay70 flex justify-center'
            onClick={() => {
                setIsEdit(false);
                dispatch(actions.resetPostEdit());
            }}
        >
            <div 
                className='bg-white max-w-1100 w-full overflow-y-auto'
                onClick={(e) => e.stopPropagation()}
            >
                <CreatePost isEdit setUpdate={setUpdate}/>
            </div>
        </div>
    )
}

export default UpdatePost;