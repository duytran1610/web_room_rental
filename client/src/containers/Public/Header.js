import { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/logo.png";
import { Button, User } from "../../components";
import icons from "../../utils/icons";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { path } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import menuManage from "../../utils/menuManage";


const {AiOutlinePlusCircle, RiLogoutCircleRLine, BsChevronDown} = icons;

const Header = () => {
    // navigate
    const navigate = useNavigate();

    // get status isLoggedIn from authReducer in redux store
    const {isLoggedIn} = useSelector(state => state.auth);

    // dispatch
    const dispatch = useDispatch();

    // location
    const location = useLocation();

    // query params
    const [params] = useSearchParams();

    // Manipulating the DOM with a ref 
    const headerRef = useRef();

    // state
    // controll show menu
    const [isShowMenu, setIsShowMenu] = useState(false);

    // status -> Login or Register
    const goRegister = (status) => {
        navigate(path.LOGIN, {state: {status}});
    }

    useEffect(() => {
        // scrolling list item into view
        headerRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, [params, location.pathname]);

    return (
        <div ref={headerRef} className="w-4/5 lg:w-1100 flex items-center justify-between bg-primary">
            <Link to={'/'}>
            <img 
                src={logo}
                alt="logo"
                className="w-[240px] h-[72px] object-contain"
            />
            </Link>
            <div className="flex gap-1">
                {!isLoggedIn ? 
                <div className="flex items-center gap-1">
                    <small>Phongtro123.com Hello!</small>
                    <Button 
                        text={'Register'} 
                        textColor={'text-white'} 
                        bgColor={'bg-[#3961fb]'}
                        onClick={() => goRegister(true)}
                    />
                    <Button 
                        text={'Log In'} 
                        textColor={'text-white'} 
                        bgColor={'bg-[#3961fb]'}
                        onClick={() => goRegister(false)}
                    />
                </div>
                :
                <div className="flex items-center gap-3 relative">
                    <User />
                    <Button 
                        text={'Control account'} 
                        textColor={'text-white'} 
                        bgColor={'bg-blue-700'}
                        IcAfter={BsChevronDown}
                        onClick={() => setIsShowMenu(prev => !prev)}
                    />
                    {
                        isShowMenu && 
                        <div className="absolute min-w-[200px] top-full mt-2 right-0 p-4 bg-white rounded-md shadow-md flex flex-col z-20">
                            {
                                menuManage.map(item => 
                                    <Link
                                        key={item.id}
                                        to={item.path}
                                        className="hover:text-orange-500 text-blue-600 border-b border-gray-200 py-2 flex items-center gap-1"
                                    >
                                        {item?.icon}
                                        {item.text}
                                    </Link>
                                )
                            }
                            <span 
                                className="cursor-pointer hover:text-orange-500 text-blue-600 py-2 flex items-center gap-1"
                                onClick={() => {
                                    setIsShowMenu(false);
                                    dispatch(actions.logout());
                                }}
                            >
                                <RiLogoutCircleRLine />
                                Logout
                            </span>
                        </div>
                    }
                </div>
                }
                <Button 
                    text={'Post New News'} 
                    textColor={'text-white'} 
                    bgColor={'bg-secondary2'} 
                    IcAfter={AiOutlinePlusCircle}
                />
            </div>
        </div>
    );
}

export default Header;