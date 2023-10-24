import React, {useEffect, useState} from 'react';
import { Overview, Address, Button } from '../../components';
import icons from '../../utils/icons';
import {getCode} from '../../utils/Common/getCodes';
import { useSelector } from 'react-redux';
import { apiCreateNewPost } from '../../services';
import Swal from 'sweetalert2';        // A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. 
import validateFields from '../../utils/Common/validateFields';


const {BsFillCameraFill, RiDeleteBin5Fill} = icons

const CreatePost = () => {
    // state
    // infor input of post
    const [payload, setPayload] = useState({
        categoryCode: '',
        title: '',
        priceVal: 0,
        areaVal: 0,
        address: '',
        description: '',
        target: '',                      // renter: male or female
        province: ''
    });
    // images uploaded
    const [images, setImages] = useState([]);
    // URL of images
    const [imageUrls, setImageUrls] = useState([]);
    // control valid data when user input
    const [invalidFields, setInvalidFields] = useState([]);

    // get prices, areas, categories from appReducer in redux store
    const {prices, areas, categories} = useSelector(state => state.app);
    // get curData from userReducer in redux store
    const {curData} = useSelector(state => state.user);

    // auto update url images and save when images is changed
    useEffect(() => {
        if (images.length >= 1) {           
            const newImageUrls = [];

            // create URL for every image
            images.forEach(item => newImageUrls.push(URL.createObjectURL(item)));
            
            setImageUrls(prev => [...newImageUrls]);
        }
        else {
            setImageUrls([]);
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
    const handleSubmit = async () => {
        const priceVal = +payload.priceVal / Math.pow(10, 6);
        const areaVal = +payload.areaVal;
        const priceCode = getCode(priceVal, prices, 1, 15)?.code;
        const areaCode = getCode(+payload.areaVal, areas, 20, 90)?.code;
        const label = `${categories?.find(item => item.code === payload?.categoryCode)?.value} ${payload?.address?.split(',')[0]}`;

        const finalPayload = {
            ...payload, 
            priceCode,
            priceVal,
            areaVal,
            areaCode,
            images: imageUrls,
            userID: curData.id,
            label
        };

        const invalid = validateFields(finalPayload, setInvalidFields);

        if (!invalid) {
            const response = await apiCreateNewPost(finalPayload);
    
            if (response.data.err === 0) {
                Swal.fire('Success!', 'Created a post', 'success').then(() => {
                    setPayload({
                        categoryCode: '',
                        title: '',
                        priceVal: 0,
                        areaVal: 0,
                        address: '',
                        description: '',
                        target: '',                      
                        province: ''
                    });
                    setImages([]);
                });
            } else {
                Swal.fire('Ooops...', 'Cannot create a new post', 'error');
            }
        }       
    }

    return (
        <div className='px-6'>
           <h1 className='text-3xl font-medium py-4 border-b border-gray-200'>Đăng tin mới</h1>
           <div className='flex'>
                <div className='py-4 flex flex-col gap-8 flex-auto'>
                    <Address
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                        payload={payload}
                        setPayload={setPayload} 
                    />
                    <Overview
                        invalidFields={invalidFields}
                        setInvalidFields={setInvalidFields}
                        payload={payload}
                        setPayload={setPayload} 
                    />
                    <div>
                        <h2 className='font-semibold text-xl py-4'>Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className='w-full'>
                            <label 
                                className='flex flex-col gap-4 border h-[300px] border-dashed rounded-md items-center justify-center my-4 cursor-pointer' 
                                htmlFor='fileImg'
                                onClick={() => setInvalidFields([])}
                            >
                                <BsFillCameraFill color='blue' size={50} />
                                Thêm ảnh
                            </label>
                            <input hidden id='fileImg' type='file' multiple onChange={handleFiles}/>
                            <small className='text-red-500'>
                                {invalidFields?.find(item => item.name === 'images')?.msg}
                            </small>
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