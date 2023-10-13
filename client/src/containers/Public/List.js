import React, { useEffect } from 'react';
import { Button, Item } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import { useSearchParams } from 'react-router-dom';

const List = ({categoryCode}) => {
  // dispatch
  const dispatch = useDispatch();

  // get posts, count from postReudcer in redux store
  const { posts } = useSelector(state => state.post);

  // query parameters
  const [params] = useSearchParams();

  useEffect(() => {
    let paramsSearch = [];

    // get all parameters query in URL
    for (let ps of params.entries()) paramsSearch.push(ps);

    // convert arr to obj
    let paramsSearchObj = paramsSearch.reduce((obj, i) => ({...obj, [i[0]]: i[1]}), {});

    // get posts by categoryCode
    if (categoryCode) paramsSearchObj.categoryCode = categoryCode;

    dispatch(actions.getPostsLimit(paramsSearchObj));
  }, [dispatch, params, categoryCode]);


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
            id={item.id}
          />
        )}
      </div>
    </div>
  )
}

export default List;