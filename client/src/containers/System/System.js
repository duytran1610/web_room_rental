import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { path } from '../../utils/constant';
import {Header, Sidebar} from '../System';

const System = () => {
    // get status isLoggedIn from authReducer in redux store
    const {isLoggedIn} = useSelector(state => state.auth);

    if(!isLoggedIn) return <Navigate to={`/${path.LOGIN}`} replace={true}/>          // thuộc tính replace: có xóa lịch sử của trang trước đó k, nếu true thì k thể quay lại trang trước đó

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className='w-full flex flex-auto h-screen'>
                <Sidebar />
                <div className='flex-auto bg-white p-4 overflow-y-scroll'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default System;