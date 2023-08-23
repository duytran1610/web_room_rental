import { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions';



const Login = () => {
    // location
    const location = useLocation();

    // dispatch
    const dispatch = useDispatch();

    // get status isLoggedIn from authReducer in redux store
    const {isLoggedIn} = useSelector(state => state.auth);

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

    // Register <-> Login
    const setStatus = () => {
        setIsRegister(!isRegister);
        setPayload({
            name: '',
            phone: '',
            password: ''
        });
        setInvalidFields([]);
    }

    // click button submit
    const handleSubmit = async () => {
        let finalPayload = isRegister ? payload : {
            phone: payload.phone,
            password: payload.password
        }

        let invalids = validate(finalPayload);

        if (!invalids) isRegister? dispatch(actions.register(finalPayload)) : dispatch(actions.login(finalPayload));
    }

    // check valid data input
    const validate = (payload) => {
        let invalids = 0;

        // Returns an array of key/values of the enumerable properties of an object 
        let fields = Object.entries(payload);

        fields.forEach(item => {
            if (!item[1]) {
                setInvalidFields(prev => [...prev, {
                    name: item[0],
                    msg: 'You forget input data into this field!'
                }]);
                invalids++;
            }
        });

        fields.forEach(item => {
            switch(item[0]) {
                case 'password':
                    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+-=])[A-Za-z\d!@#$%^&*()_+-=]{8,}$/;
                    let checkPassword = passwordRegex.test(item[1]);
                    if (!checkPassword) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            msg: 'Password invalid!'
                        }]);
                        invalids++;
                    }
                    break;
                case 'phone': 
                    const phoneRegex = /^\d{6,11}$/; // Regex check number phone
                    let checkPhone = phoneRegex.test(item[1]);
                    if (!checkPhone) {
                        setInvalidFields(prev => [...prev, {
                            name: item[0],
                            msg: 'Phone invalid!'
                        }]);
                        invalids++;
                    }
                    break;
                default:
                    break;
            }
        })
        return invalids;
    }

    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-semibold text-2xl">{isRegister ? 'Register' : 'Login'}</h3>
            <div className="w-full flex flex-col gap-3">
                {isRegister && <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label="Name" value={payload.name} setValue={setPayload} type='name'/>}
                <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label="PhoneNumber" value={payload.phone} setValue={setPayload} type='phone'/>
                <InputForm setInvalidFields={setInvalidFields} invalidFields={invalidFields} label="Password" value={payload.password} setValue={setPayload} type='password'/>
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
    );
}


export default Login;