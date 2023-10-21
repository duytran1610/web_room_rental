import React, { memo } from 'react';
import { SelectOption, InputReadOnly, Input } from '../components';
import { useSelector } from 'react-redux';

const sex = [
    {code: 'male', value: 'Nam'},
    {code: 'female', value: 'Nữ'}
]

// use in path /system
const Overview = () => {
    // get categories from appReducer in redux store
    const { categories } = useSelector(state => state.app);

    // get infor current user from userReducer in redux store
    const { curData } = useSelector(state => state.user);

    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Thông tin mô tả</h2>
            <div className='w-full flex flex-col gap-4'>
                <div className='w-1/2'>
                    <SelectOption label='loại chuyên mục' options={categories} />
                </div>
                <Input label='Tiêu đề' />
                <div className='flex flex-col gap-2'>
                    <label className='font-medium' htmlFor='desc'>Nội dung mô tả</label>
                    <textarea cols='30' rows='10' id='desc' className='w-full rounded-md outline-none border border-gray-300 p-2' />
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <InputReadOnly label='Thông tin liên hệ' value={curData?.name} />
                    <InputReadOnly label='Điện thoại' value={curData?.phone} />
                    <Input label='Giá cho thuê' unit='Đồng/tháng' />
                    <Input label='Diện tích' unit='m2' />
                    <SelectOption options={sex} label='Đối tượng cho thuê' />
                </div>
                
            </div>
        </div>
    )
}

export default memo(Overview);