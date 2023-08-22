import logo from "../../assets/img/logo.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import { path } from "../../utils/constant";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const {AiOutlinePlusCircle} = icons;

const Header = () => {
    const navigate = useNavigate();
    const {isLoggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    // status -> Login or Register
    const goRegister = (status) => {
        navigate(path.LOGIN, {state: {status}});
    }

    return (
        <div className="w-1100 flex items-center justify-between bg-primary">
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