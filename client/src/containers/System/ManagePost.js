import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';
import moment from 'moment';           // format time 
import 'moment/locale/vi';             // format time with lang vi
import { Button, UpdatePost } from '../../components';

const ManagePost = () => {
    // dispatch
    const dispatch = useDispatch();

    // get postsUser, postEdit in postReducer in redux store
    const {postsUser, postEdit} = useSelector(state => state.post);

    // state
    // controll edit info post
    const [isEdit, setIsEdit] = useState(false);

    // auto get posts user
    useEffect(() => {
        dispatch(actions.getPostsLimitUser());
    }, [dispatch]);

    useEffect(() => {
        !postEdit && setIsEdit(false);
    }, [postEdit]);

    // check status
    const checkStatus = (datetime) => {
        let isWorking = moment(datetime, "HH:mm YYYY-MM-DD").isSameOrAfter(new Date());

        return isWorking ? 'Đang hoạt động' : 'Đã hết hạn';
    }

    return (
        <div className='flex flex-col gap-6'>
            <div className='py-4 border-b border-gray-200 flex items-center justify-between'>
                <h1 className='text-3xl font-medium '>Quản lý tin đăng</h1>
                <select className='outline-none border p-2 border-gray-200 rounded-md' name="">
                    <option value=''>Lọc bài đăng theo trạng thái</option>
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
                    {!postsUser ? 
                        <tr>
                            <td>adfsafdasfasf</td>
                        </tr>
                        :
                        postsUser?.map(item => 
                            <tr key={item.id} className='flex'>
                                <td className='border flex-1 text-center p-2'>{item?.overviews?.code}</td>
                                <td className='border flex-1 flex items-center justify-center p-2'>
                                    <img src={JSON.parse(item?.imgs?.image)[0] || ''} alt='avatar-post' className='w-10 h-10 object-cover rounded-md' />
                                </td>
                                <td className='border flex-1 text-center p-2'>{`${item?.title.slice(0,30)}${item?.title.length>30? '...': ''}`}</td>
                                <td className='border flex-1 text-center p-2'>{item?.attrs?.price}</td>
                                <td className='border flex-1 text-center p-2'>{item?.overviews?.created}</td>
                                <td className='border flex-1 text-center p-2'>{item?.overviews?.expire}</td>
                                <td className='border flex-1 text-center p-2'>{checkStatus(item?.overviews?.expire.split(', ')[1])}</td>
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
                                    />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            {isEdit && <UpdatePost setIsEdit={setIsEdit} />}
        </div>
    )
}

export default ManagePost;