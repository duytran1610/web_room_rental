import React from 'react';
import { Button, Item } from '../../components';

const List = () => {
  return (
    <div className='w-full p-2 bg-white shadow-md rounded-md'>
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
            <Item />
            {/* <Item />
            <Item /> */}
        </div>
    </div>
  )
}

export default List;