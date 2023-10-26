import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home, Login, Rental, Homepage, DetailPost, SearchDetail} from './Public';
import { System, CreatePost, ManagePost, EditProfile } from './System';
import {path} from '../utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';


function App() {
  // dispatch
  const dispatch = useDispatch();

  // get status isLoggedIn from authReducer in redux store
  const {isLoggedIn} = useSelector(state => state.auth);

  // get infor user when logged succeedfully
  useEffect(() => {
    // use setTimeout, because time delay to save token in local storage
    setTimeout(() => {
        isLoggedIn && dispatch(actions.getUser());
    }, 100);
  }, [isLoggedIn, dispatch]);

  // auto dispatch when run app
  useEffect(() => {
    dispatch(actions.getAllPrices());
    dispatch(actions.getAllAreas());
    dispatch(actions.getAllProvinces());
  },[dispatch]);

  return (
    <div className="App bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >  
          <Route index element={<Homepage />} />     
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CTCN} element={<Rental />} />
          <Route path={path.CTMB} element={<Rental />} />
          <Route path={path.CTPT} element={<Rental />} />
          <Route path={path.NCT} element={<Rental />} />
          <Route path={path.SEARCHDETAIL} element={<SearchDetail />} />
          <Route path={path.DETAIL_POSTS__TITLE__POSTID} element={<DetailPost />} />
        </Route>
        <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.CREATE_POST} element={<CreatePost />}/>
          <Route path={path.MANAGE_POST} element={<ManagePost />}/>
          <Route path={path.EDIT_PROFILE} element={<EditProfile />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
