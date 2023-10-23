import React, { memo } from 'react';
import { SelectOption, InputReadOnly, Input } from '../components';
import { useSelector } from 'react-redux';

// renter
const target = [
    {code: 'Tất cả', value: 'Tất cả'},
    {code: 'Nam', value: 'Nam'},
    {code: 'Nữ', value: 'Nữ'}
]

// use in path /system
const Overview = ({payload, setPayload}) => {
    // get categories from appReducer in redux store
    const { categories } = useSelector(state => state.app);

    // get infor current user from userReducer in redux store
    const { curData } = useSelector(state => state.user);

    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Thông tin mô tả</h2>
            <div className='w-full flex flex-col gap-4'>
                <div className='w-1/2'>
                    <SelectOption label='loại chuyên mục' setValue={setPayload} name='categoryCode' options={categories} />
                </div>
                <Input 
                    label='Tiêu đề' 
                    value={payload.title} 
                    setValue={setPayload} 
                    name='title' 
                />
                <div className='flex flex-col gap-2'>
                    <label className='font-medium' htmlFor='desc'>Nội dung mô tả</label>
                    <textarea 
                        cols='30' 
                        rows='10' 
                        id='desc' 
                        className='w-full rounded-md outline-none border border-gray-300 p-2' 
                        value={payload.description}
                        onChange={(e) => setPayload(prev => ({...prev, description: e.target.value}))}
                    />
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                    <InputReadOnly label='Thông tin liên hệ' value={curData?.name} />
                    <InputReadOnly label='Điện thoại' value={curData?.phone} />
                    <Input 
                        small='Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000' 
                        label='Giá cho thuê' 
                        unit='Đồng/tháng' 
                        value={payload.priceVal} 
                        setValue={setPayload} 
                        name='priceVal' 
                    />
                    <Input 
                        label='Diện tích' 
                        unit='m2' 
                        value={payload.areaVal} 
                        setValue={setPayload} 
                        name='areaVal' 
                    />
                    <SelectOption options={target} value={payload.target} setValue={setPayload} name='target' label='Đối tượng cho thuê' />
                </div>
                
            </div>
        </div>
    )
}

export default memo(Overview);