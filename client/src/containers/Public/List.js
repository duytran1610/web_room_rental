import React, {useEffect} from 'react';
import { Button, Item } from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import { actionPost } from '../../store/actions';

const List = () => {
  // dispatch
  const dispatch = useDispatch();

  // get posts from postReudcer in redux store
  const {posts, count} = useSelector(state => state.post);

  useEffect(() => {
    dispatch(actionPost.getPostsLimit(0));
  }, [dispatch]);

  console.log(count);
  return (
    <div className='w-full p-2 bg-white shadow-md rounded-md px-6'>
        <div className='flex justify-between my-3'>
            <h4 className='text-xl font-semibold'>List News</h4>
            <span>Update: 12:05 25/08/2023</span>
        </div>
        <div className='flex items-center gap-2 my-2'>
            <span>Sort: </span>
            <Button bgColor='bg-gray-200' text='Default' />
            <Button bgColor='bg-gray-200' text='Latest' />
        </div>
        <div className='items'>
            {posts.length > 0 && posts.map(item => 
              <Item 
                key={item.id}                
                address={item.address}
                attrs={item.attrs}
                description={JSON.parse(item.description)}
                imgs={JSON.parse(item.imgs?.image).filter(i => i !== null)}
                star={+item.star}
                title={item.title}
                user={item.user}
              />              
            )}
        </div>
    </div>
  )
}

export default List;