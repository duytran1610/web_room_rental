import React, { useEffect, useState } from 'react';
import { Item } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import { useSearchParams } from 'react-router-dom';

const List = ({ categoryCode }) => {
  // dispatch
  const dispatch = useDispatch();

  // get posts, count from postReudcer in redux store
  const { posts } = useSelector(state => state.post);

  // query parameters
  const [params] = useSearchParams();

  // state
  const [sort, setSort] = useState(false);

  useEffect(() => {
    let paramsSearch = [];

    // get all parameters query in URL
    for (let ps of params.entries()) paramsSearch.push(ps);

    // convert arr to obj
    let paramsSearchObj = paramsSearch.reduce((obj, i) => {
      if (Object.keys(obj)?.some(item => item === i[0])) return { ...obj, [i[0]]: [...obj[i[0]], i[1]] }
      return { ...obj, [i[0]]: [i[1]] }
    }, {});

    // get posts by categoryCode
    if (categoryCode) paramsSearchObj.categoryCode = categoryCode;
    if (sort) paramsSearchObj.order = ['createdAt', 'DESC'];

    dispatch(actions.getPostsLimit(paramsSearchObj));
  }, [dispatch, params, categoryCode, sort]);


  return (
    <div className='w-full p-2 bg-white shadow-md rounded-md px-6'>
      <div className='flex justify-between my-3'>
        <h4 className='text-xl font-semibold'>List News</h4>
        <span>Update: 12:05 25/08/2023</span>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <span>Sort: </span>
        <span onClick={() => setSort(0)} className={`bg-gray-200 p-2 rounded-md cursor-pointer hover:underline ${!sort && 'text-red-500'}`}>Default</span>
        <span onClick={() => setSort(1)} className={`bg-gray-200 p-2 rounded-md cursor-pointer hover:underline ${sort && 'text-red-500'}`}>Latest</span>
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