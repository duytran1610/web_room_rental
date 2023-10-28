import React, { memo, useEffect, useState } from 'react';
import { Sitem } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

// used to show new posts or hot posts
const RelatedPost = ({isHotPosts}) => {
    // get newPosts from postReducer in redux store
    const { newPosts, hotPosts } = useSelector(state => state.post);

    // dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        if (isHotPosts) {
            dispatch(actions.getHotPosts({order: ['star', 'DESC']}));
        }
        else {
            dispatch(actions.getNewPosts());
        }
    }, [isHotPosts]);
    
    // state 
    const [posts] = useState(isHotPosts ? hotPosts : newPosts);


    return (
        <div className='w-full bg-white rounded-md p-4'>
            <h3 className='font-medium text-lg'>{isHotPosts? 'Hot Posts' : 'New Posts'}</h3>
            <div className='w-full flex flex-col gap-2'>
                {
                    posts?.map(item =>
                        <Sitem
                            key={item.id}
                            title={item.title}
                            price={item.attrs.price}
                            createdAt={item.createdAt}
                            img={JSON.parse(item.imgs?.image).filter(i => i !== null)}
                            star={+item.star}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default memo(RelatedPost);