import { useEffect } from 'react';
import Header from "./Header";
import { Outlet } from "react-router-dom";
import {Navigation, Search} from "../Public";
import {Intro, Contact} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

const Home = () => {
    // dispatch
    const dispatch = useDispatch();

    // get status isLoggedIn from authReducer in redux store
    const {isLoggedIn} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(actions.getAllPrices());
        dispatch(actions.getAllAreas());
        dispatch(actions.getAllProvinces());
    },[dispatch]);


    // get infor user when logged succeedfully
    useEffect(() => {
        // use setTimeout, because time delay to save token in local storage
        setTimeout(() => {
            isLoggedIn && dispatch(actions.getUser());
        }, 1000);
    }, [isLoggedIn, dispatch]);

    return (
        <div className="w-full h-full gap-6 flex flex-col items-center">
            <Header />
            <Navigation />
            {isLoggedIn && <Search />}
            <div className="w-4/5 lg:w-1100 flex flex-col items-start justify-center mt-3">
                <Outlet />
            </div>
            <Intro />
            <Contact />
        </div>
    );
}

export default Home;