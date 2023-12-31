import React from 'react';
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import {Navigation, Search} from "../Public";
import {Intro, Contact} from '../../components';
import { useSelector } from 'react-redux';
import { path } from '../../utils/constant';

const Home = () => {
    // get status isLoggedIn from authReducer in redux store
    const {isLoggedIn} = useSelector(state => state.auth);

    // location
    const location = useLocation();

    return (
        <div className="w-full h-full gap-6 flex flex-col items-center">
            <Header />
            <div className='w-full sticky top-0 z-10'>
                <Navigation />
            </div>
            {isLoggedIn && location.pathname !== `/${path.CONTACT}` && <Search />}
            <div className="w-4/5 lg:w-1100 flex flex-col items-start justify-center mt-3">
                <Outlet />
            </div>
            <Intro />
            <Contact />
        </div>
    );
}

export default Home;