import React, {useEffect} from 'react';
import {Sitem} from '../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

const RelatedPost = () => {
    // get newPosts from postReducer in redux store
    const {newPosts} = useSelector(state => state.post);
    
    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getNewPosts());
    }, [dispatch]);

    return (
        <div className='w-full bg-white rounded-md p-4'>
            <h3 className='font-medium text-lg'>New Post</h3>
            <div className='w-full flex flex-col gap-2'>
                {
                    newPosts?.map(item => 
                        <Sitem
                            key={item.id}
                            title={item.title}
                            price={item.attrs.price}
                            createdAt={item.createdAt}
                            img={JSON.parse(item.imgs?.image).filter(i => i !== null)}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default RelatedPost;