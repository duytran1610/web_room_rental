import React from 'react';
import avatar from '../../assets/img/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import menuSidebar from '../../utils/menuSidebar';
import { NavLink } from 'react-router-dom';
import icons from '../../utils/icons';
import * as actions from '../../store/actions';
import { getPartID } from '../../utils/Common/getNumbers';
import { blobToBase64 } from '../../utils/Common/toBase64';

const {RiLogoutCircleRLine} = icons;

// style for element NavLink in menuSidebar
const activeStyle = 'hover:bg-gray-300 py-2 flex items-center gap-2 font-bold bg-gray-200 rounded-md';
const notActiveStyle = 'hover:bg-gray-300 py-2 flex items-center gap-2 rounded-md cursor-pointer';

const Sidebar = () => {
    // get infor current user from userReducer in redux store
    const {curData} = useSelector(state => state.user);

    // dispatch
    const dispatch = useDispatch();

    return (
        <div className='w-[256px] p-4 flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <img src={blobToBase64(curData?.avatar) || avatar} alt="avatar" className='w-12 h-12 object-cover rounded-full border-2 border-white' />
                    <div className='flex flex-col justify-center'>
                        <span className='font-semibold'>{curData?.name}</span>
                        <small>{curData?.phone}</small>
                    </div>
                </div>
                <span>
                    Mã thành viên: <small className='font-medium'>{getPartID(curData?.id)}</small>
                </span>
            </div>
            <div className="">
                {
                    menuSidebar.map(item => 
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({isActive}) => isActive ? activeStyle : notActiveStyle}
                        >
                            {item?.icon}
                            {item.text}
                        </NavLink>
                    )
                }
                <span 
                    className={notActiveStyle}
                    onClick={() => dispatch(actions.logout())}
                >
                    <RiLogoutCircleRLine />
                    Logout
                </span>
            </div>
        </div>
    )
}

export default Sidebar;