import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import moment from 'moment';           // format time 
import 'moment/locale/vi';             // format time with lang vi
import { Button, UpdatePost } from '../../components';
import { apiDeletePost } from '../../services';
import Swal from 'sweetalert2';

// component to manage posts user
const ManagePost = () => {
    // dispatch
    const dispatch = useDispatch();

    // get postsUser, postEdit in postReducer in redux store
    const {postsUser, postEdit} = useSelector(state => state.post);

    // state
    // controll edit info post
    const [isEdit, setIsEdit] = useState(false);
    // controll update status page when postsUser is changed
    const [update, setUpdate] = useState(false);
    // posts
    const [posts, setPosts] = useState([]);

    // auto get posts user from redux store
    useEffect(() => {
        dispatch(actions.getPostsLimitUser());
    }, [dispatch, update]);

    // get posts user
    useEffect(() => {
        setPosts(postsUser);
    }, [postsUser])

    useEffect(() => {
        !postEdit && setIsEdit(false);
    }, [postEdit]);

    // check status
    const checkStatus = (datetime) => moment(datetime, "HH:mm YYYY-MM-DD").isSameOrAfter(new Date());

    // handle delete post
    const handleDeletePost = async (item) => {
        const {id, imageID, overviewID, labelCode, attributeID} = item;
        const data = {postID: id, imageID, overviewID, labelCode, attributeID};
        const response = await apiDeletePost(data);
        if (response.data.err === 0) {
            setUpdate(prev => !prev);
        }
        else {
            Swal.fire('Ooops...', 'Cannot delete post', 'error');
        }
    }

    // handle filter posts
    const handleFilterPosts = (status) => {
        if (status === 1) {
            const postsFilter = postsUser?.filter(item => checkStatus(item?.overviews?.expire.split(', ')[1]));
            setPosts(postsFilter);
        }
        else if (status === 2) {
            const postsFilter = postsUser?.filter(item => !checkStatus(item?.overviews?.expire.split(', ')[1]));
            setPosts(postsFilter);
        }
        else {
            setPosts(postsUser);
        }
    }

    return (
        <div className='flex flex-col gap-6'>
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-3xl font-medium '>Quản lý tin đăng</h1>
                <select onChange={(e) => handleFilterPosts(+e.target.value)} className='outline-none border p-2 border-gray-200 rounded-md' name="">
                    <option value='0'>Lọc bài đăng theo trạng thái</option>
                    <option value='1'>Đang hoạt động</option>
                    <option value='2'>Đã hết hạn</option>
                </select>
            </div>
            <table className="w-full">
                <thead>
                    <tr className='flex'>
                        <th className='border flex-1 p-2'>Mã tin</th>
                        <th className='border flex-1 p-2'>Ảnh đại diện</th>
                        <th className='border flex-1 p-2'>Tiêu đề</th>
                        <th className='border flex-1 p-2'>Giá</th>
                        <th className='border flex-1 p-2'>Ngày bắt đầu</th>
                        <th className='border flex-1 p-2'>Ngày hết hạn</th>
                        <th className='border flex-1 p-2'>Trạng thái</th>
                        <th className='border flex-1 p-2'>Tuỳ chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {!posts ? 
                        <tr>
                            <td>adfsafdasfasf</td>
                        </tr>
                        :
                        posts?.map(item => 
                            <tr key={item.id} className='flex'>
                                <td className='border flex-1 text-center p-2'>{item?.overviews?.code}</td>
                                <td className='border flex-1 flex items-center justify-center p-2'>
                                    <img src={JSON.parse(item?.imgs?.image)[0] || ''} alt='avatar-post' className='w-10 h-10 object-cover rounded-md' />
                                </td>
                                <td className='border flex-1 text-center p-2'>{`${item?.title.slice(0,30)}${item?.title.length>30? '...': ''}`}</td>
                                <td className='border flex-1 text-center p-2'>{item?.attrs?.price}</td>
                                <td className='border flex-1 text-center p-2'>{item?.overviews?.created}</td>
                                <td className='border flex-1 text-center p-2'>{item?.overviews?.expire}</td>
                                <td className='border flex-1 text-center p-2'>{checkStatus(item?.overviews?.expire.split(', ')[1])? 'Đang hoạt động' : 'Đã hết hạn'}</td>
                                <td className='border flex-1 p-2 flex items-center justify-center flex-wrap gap-2'>
                                    <Button 
                                        text='Edit'
                                        bgColor='bg-blue-600'
                                        textColor='text-white'
                                        onClick = {() => {
                                            dispatch(actions.getPostEdit(item));
                                            setIsEdit(true);
                                        }}
                                    />
                                    <Button 
                                        text='Delete'
                                        bgColor='bg-red-600'
                                        textColor='text-white'
                                        onClick={() => handleDeletePost(item)}
                                    />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {isEdit && <UpdatePost setIsEdit={setIsEdit} setUpdate={setUpdate} />}
        </div>
    )
}

export default ManagePost;