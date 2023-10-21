import React from 'react';
import { Overview, Address } from '../../components';
import icons from '../../utils/icons';

const {BsFillCameraFill} = icons

const CreatePost = () => {
    return (
        <div className='px-6'>
           <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
           <div className='flex'>
                <div className='py-4 flex flex-col gap-8 flex-auto'>
                    <Address />
                    <Overview />
                    <div>
                        <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className='w-full'>
                            <label className='flex flex-col gap-4 border h-[300px] border-dashed rounded-md items-center justify-center my-4' htmlFor='fileImg'>
                                <BsFillCameraFill color='blue' size={50} />
                                Thêm ảnh
                            </label>
                            <input hidden id='fileImg' type='file' />
                        </div>
                    </div>
                </div>
                <div className='w-[30%] flex-none'>
                    maps
                </div>
           </div>
        </div>
    )
}

export default CreatePost;