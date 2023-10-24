import { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions';
import Swal from 'sweetalert2';        // A beautiful, responsive, highly customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. 
import validateFields from "../../utils/Common/validateFields";

const Login = () => {
    // location
    const location = useLocation();

    // dispatch
    const dispatch = useDispatch();

    // get status isLoggedIn, msg from authReducer in redux store
    const {isLoggedIn, msg, update} = useSelector(state => state.auth);

    // navigate
    const navigate = useNavigate();

    // state
    // control form 
    const [isRegister, setIsRegister] = useState(location.state?.status);
    // control data user input
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        password: ''
    });
    // control valid data when user input
    const [invalidFields, setInvalidFields] = useState([]);

    // update data from outside component, useEffect runs on every render
    // No dependency passed: Runs on every render
    // else Runs only on the first render
    useEffect(() => {
        setIsRegister(location.state?.status);
    }, [location.state?.status]);

    useEffect(() => {
        isLoggedIn && navigate('/');                    // when log in succeed
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        // A message signaling an error:    // when loggedIn is wrong
        msg && Swal.fire('Oops...', msg, 'error');
    }, [msg, update]);

    // Register <-> Login
    const setStatus = () => {
        setIsRegister(!isRegister);
    }

    // auto set default when change type register <->login
    useEffect(() => {
        setPayload({
            name: '',
            phone: '',
            password: ''
        });
        setInvalidFields([]);
    }, [isRegister]);

    // click button submit
    const handleSubmit = async () => {
        let finalPayload = isRegister ? payload : {
            phone: payload.phone,
            password: payload.password
        }

        let invalids = validateFields(finalPayload, setInvalidFields);

        if (!invalids) isRegister? dispatch(actions.register(finalPayload)) : dispatch(actions.login(finalPayload));
    }


    return (
        <div className="w-full flex justify-center">
            <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
                <h3 className="font-semibold text-2xl">{isRegister ? 'Register' : 'Login'}</h3>
                <div className="w-full flex flex-col gap-3">
                    {isRegister && <InputForm 
                        setInvalidFields={setInvalidFields} 
                        invalidFields={invalidFields} 
                        label="Name" 
                        value={payload.name} 
                        setValue={setPayload} 
                        keyPayload={'name'}
                    />}
                    <InputForm 
                        setInvalidFields={setInvalidFields} 
                        invalidFields={invalidFields} 
                        label="Phone" 
                        value={payload.phone} 
                        setValue={setPayload} 
                        keyPayload={'phone'}
                    />
                    <InputForm 
                        setInvalidFields={setInvalidFields} 
                        invalidFields={invalidFields} 
                        label="Password" 
                        value={payload.password} 
                        setValue={setPayload} 
                        keyPayload={'password'}
                        type={'password'}
                    />
                    <Button
                        text={isRegister ? 'REGISTER' : 'LOGIN'}
                        bgColor="bg-secondary1"
                        textColor="text-white"
                        fullWidth
                        onClick={handleSubmit}
                    />
                </div>
                <div className="mt-7 flex justify-between">
                    {isRegister ? 
                        <small>
                            Did you have account? 
                            <span
                                className="text-blue-500 hover:underline cursor-pointer" 
                                onClick={() => setStatus()}>
                                Login
                            </span>
                        </small>
                    :
                        <>
                            <small className="text-[blue] hover:text-[red] cursor-pointer">You forget password?</small>
                            <small
                                onClick={() => setStatus()} 
                                className="text-[blue] hover:text-[red] cursor-pointer">
                                Create a new account?
                            </small>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}


export default Login;