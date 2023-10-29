import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { path } from '../../utils/constant';
import {Header, Sidebar} from '../System';

const System = () => {
    // get status isLoggedIn from authReducer in redux store
    const {isLoggedIn} = useSelector(state => state.auth);

    if(!isLoggedIn) return <Navigate to={`/${path.LOGIN}`} replace={true}/>          // replace attribute cause the navigation to replace the current entry in the history stack instead of adding a new one.

    return (
        <div className="w-full flex flex-col items-center h-screen overflow-hidden">
            <Header />
            <div className='w-full flex flex-auto h-screen'>
                <div className='flex-none'>
                    <Sidebar />
                </div>
                <div className='flex-auto bg-white p-4 overflow-y-scroll'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default System;