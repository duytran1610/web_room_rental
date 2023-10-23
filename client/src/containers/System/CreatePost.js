import React, {useEffect, useState} from 'react';
import { Overview, Address, Button } from '../../components';
import icons from '../../utils/icons';
import {getCode} from '../../utils/Common/getCodes';
import { useSelector } from 'react-redux';

const {BsFillCameraFill, RiDeleteBin5Fill} = icons

const CreatePost = () => {
    // state
    // infor of post
    const [payload, setPayload] = useState({
        categoryCode: '',
        title: '',
        priceVal: 0,
        areaVal: 0,
        images: '',
        address: '',
        priceCode: '',
        areaCode: '',
        description: '',
        target: '',                      // renter: male or female
        province: ''
    });
    // images uploaded
    const [images, setImages] = useState([]);
    // URL of images
    const [imageUrls, setImageUrls] = useState([]);

    // get prices, areas from appReducer in redux store
    const {prices, areas} = useSelector(state => state.app);

    // auto update url images and save when images is changed
    useEffect(() => {
        if (images.length >= 1) {           
            const newImageUrls = [];

            // create URL for every image
            images.forEach(item => newImageUrls.push(URL.createObjectURL(item)));
            
            setImageUrls(prev => [...newImageUrls]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [images]);

    // handle upload multiple files
    const handleFiles = (e) => {
        setImages(prev => [...prev, ...e.target.files]);
    }

    // handle delete image
    const handleDeleteImage = (i) => {
        setImages(prev => prev.filter((item, index) => index !== i));
    }

    // handle submit
    const handleSubmit = () => {
        let priceCode = getCode(+payload.priceVal, prices, 1, 15)?.code;
        let areaCode = getCode(+payload.areaVal, areas, 20, 90)?.code;
        let imgs = JSON.stringify(imageUrls);

        setPayload(prev => ({
            ...prev, 
            priceCode,
            areaCode,
            images: imgs
        }));
    }

    return (
        <div className='px-6'>
           <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
           <div className='flex'>
                <div className='py-4 flex flex-col gap-8 flex-auto'>
                    <Address payload={payload} setPayload={setPayload} />
                    <Overview payload={payload} setPayload={setPayload} />
                    <div>
                        <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className='w-full'>
                            <label className='flex flex-col gap-4 border h-[300px] border-dashed rounded-md items-center justify-center my-4' htmlFor='fileImg'>
                                <BsFillCameraFill color='blue' size={50} />
                                Thêm ảnh
                            </label>
                            <input hidden id='fileImg' type='file' multiple onChange={handleFiles} />
                            {images.length > 0 &&
                            <div className='w-full'>
                                <h3 className='font-medim'>Ảnh đã chọn  </h3>
                                <div className='flex flex-wrap gap-4 items-center'>
                                    {imageUrls?.map((item, i) => 
                                        <div  key={i} className='relative w-1/4 h-1/4'>
                                            <img src={item} alt="img" className='w-full h-full object-cover rounded-md' />
                                            <span 
                                                title='delete' 
                                                className='absolute top-0 right-0 p-1 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer'
                                                onClick={() => handleDeleteImage(i)}
                                            >
                                                <RiDeleteBin5Fill />
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>}
                        </div>
                    </div>
                    <Button 
                        text='Creat new'
                        bgColor='bg-green-600'
                        textColor='text-white'
                        onClick={handleSubmit}
                    />
                </div>
                <div className='w-[30%] flex-none'>
                    maps
                </div>
           </div>
        </div>
    )
}

export default CreatePost;