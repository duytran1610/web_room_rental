import { useEffect, useRef } from "react";
import logo from "../../assets/img/logo.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import { path } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const {AiOutlinePlusCircle} = icons;

const Header = () => {
    const navigate = useNavigate();

    // get status isLoggedIn from authReducer in redux store
    const {isLoggedIn} = useSelector(state => state.auth);

    // dispatch
    const dispatch = useDispatch();

    // query params
    const [params] = useSearchParams();

    // Manipulating the DOM with a ref 
    const headerRef = useRef();

    // status -> Login or Register
    const goRegister = (status) => {
        navigate(path.LOGIN, {state: {status}});
    }

    useEffect(() => {
        // scrolling list item into view
        headerRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, [params.get('page')]);

    return (
        <div ref={headerRef} className="w-4/5 lg:w-1100 flex items-center justify-between bg-primary">
            <Link to={'/'}>
            <img 
                src={logo}
                alt="logo"
                className="w-[240px] h-[72px] object-contain"
            />
            </Link>
            <div className="flex items-center gap-1">
                {!isLoggedIn ? 
                <>
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
                </>
                :
                <>
                    <small>Name!</small>
                    <Button 
                        text={'Log Out'} 
                        textColor={'text-white'} 
                        bgColor={'bg-red-700'}
                        onClick={() => dispatch(actions.logout())}
                    />
                </>
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