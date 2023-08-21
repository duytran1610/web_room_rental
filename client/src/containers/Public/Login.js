import { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { useLocation } from "react-router-dom";
import { useDispatch} from 'react-redux';
import * as actions from '../../store/actions';



const Login = () => {
    // location
    const location = useLocation();

    // dispatch
    const dispatch = useDispatch();

    // state
    // control form 
    const [isRegister, setIsRegister] = useState(location.state?.status);
    // control data user input
    const [payload, setPayload] = useState({
        name: '',
        phone: '',
        password: ''
    });

    // update data from outside component, useEffect runs on every render
    // No dependency passed: Runs on every render
    // else Runs only on the first render
    useEffect(() => {
        setIsRegister(location.state?.status);
    }, [location.state?.status])

    // Register <-> Login
    const setStatus = () => {
        setIsRegister(!isRegister);
    }

    // click button submit
    const handleSubmit = async () => {
        console.log(payload);
        dispatch(actions.register(payload));
    }

    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-semibold text-2xl">{isRegister ? 'Register' : 'Login'}</h3>
            <div className="w-full flex flex-col gap-3">
                {isRegister && <InputForm label="Name" value={payload.name} setValue={setPayload} type='name'/>}
                <InputForm label="PhoneNumber" value={payload.phone} setValue={setPayload} type='phone'/>
                <InputForm label="Password" value={payload.password} setValue={setPayload} type='password'/>
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