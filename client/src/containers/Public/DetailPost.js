import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {SliderRun} from '../../components'
import { apiGetPostById } from '../../services';
import icons from '../../utils/icons';

const {MdLocationPin, TbReportMoney, RiCrop2Line, MdOutlineWatchLater, BsHash} = icons

const DetailPost = () => {
    // params (:name_params)
    const {postId} = useParams();

    // post
    const [post, setPost] = useState({});


    useEffect(() => {
        const fetchPost = async(id) => {
            const response = await apiGetPostById({id});
            setPost(response.data.data);
        }
        postId && fetchPost(postId);
    }, [postId]);
    return (
        <div className='w-full flex gap-4'>
            <div className='w-[70%] '>
                <SliderRun images={post?.imgs && JSON.parse(post.imgs.image)}/>
                <div className='bg-white rounded-md shadow-md p-4'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-semibold text-red-600'>{post?.title}</h2>
                        <div className='fllex gap-2'>
                            <span>Chuyên mục: </span>
                            <span className='text-blue-600 underline font-medium hover:text-orange-600 cursor-pointer'>{post?.overviews?.area}</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <MdLocationPin color='#2563EB' />
                            <span>Địa chỉ: </span>
                            <span>{post?.address}</span>
                        </div>
                        <div className='flex items-center justify-between'>
                            <span className='flex items-center gap-1'>
                                <TbReportMoney />
                                <span className='font-semibold text-lg text-green-600'>{post?.attrs?.price}</span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <RiCrop2Line />
                                <span>{post?.attrs?.acreage}</span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <MdOutlineWatchLater />
                                <span>{post?.attrs?.published}</span>
                            </span>
                            <span className='flex items-center gap-1'>
                                <BsHash />
                                <span>{post?.attrs?.hashtag}</span>
                            </span>
                        </div>
                        <div className='mt-8'>
                            <h3 className='font-semibold text-lg my-4'>Thông tin mô tả</h3>
                            <div className='flex flex-col gap-3'>
                                {post?.description && Array.isArray(post.description) && JSON.parse(post?.description)?.map((item, index) =>
                                    <span key={index}>{item}</span>
                                )}
                            </div>
                        </div>
                        <div>
                            <h3 className='font-semibold text-lg my-4'>Đặc điểm tin đăng</h3>
                            <table className='w-full'>
                                <tbody className='w-full'>
                                    <tr className='w-full'>
                                        <td className='p-2'>Mã tin:</td>
                                        <td className='p-2'>{post?.overviews?.code}</td>
                                    </tr>
                                    <tr className='w-full bg-gray-200'>
                                        <td className='p-2'>Khu vực</td>
                                        <td className='p-2'>{post?.overviews?.area}</td>
                                    </tr>
                                    <tr className='w-full'>
                                        <td className='p-2'>Loại tin rao:</td>
                                        <td className='p-2'>{post?.overviews?.type}</td>
                                    </tr>
                                    <tr className='w-full bg-gray-200'>
                                        <td className='p-2'>Đối tượng thuê:</td>
                                        <td className='p-2'>{post?.overviews?.target}</td>
                                    </tr>
                                    <tr className='w-full '>
                                        <td className='p-2'>Gói tin:</td>
                                        <td className='p-2'>{post?.overviews?.bonus}</td>
                                    </tr>
                                    <tr className='w-full bg-gray-200'>
                                        <td className='p-2'>Ngày đăng:</td>
                                        <td className='p-2'>{post?.overviews?.created}</td>
                                    </tr>
                                    <tr className='w-full'>
                                        <td className='p-2'>Ngày hết hạn:</td>
                                        <td className='p-2'>{post?.overviews?.expire}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h3 className='font-semibold text-lg my-4'>Thông tin liên hệ</h3>
                            <table className='w-full'>
                                <tbody className='w-full'>
                                    <tr className='w-full'>
                                        <td className='p-2'>Liên hệ:</td>
                                        <td className='p-2'>{post?.user?.name}</td>
                                    </tr>
                                    <tr className='w-full bg-gray-200'>
                                        <td className='p-2'>Điện thoại:</td>
                                        <td className='p-2'>{post?.user?.phone}</td>
                                    </tr>
                                    <tr className='w-full'>
                                        <td className='p-2'>Zalo</td>
                                        <td className='p-2'>{post?.user?.zalo}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='mt-8'>
                            <h3 className='font-semibold text-lg my-4'>Bản đồ</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[30%]'>
                slider
            </div>
        </div>
    );
}

export default DetailPost;