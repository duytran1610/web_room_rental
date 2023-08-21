import { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { useLocation } from "react-router-dom";


const Login = () => {
    // location
    const location = useLocation();
    // state
    const [isRegister, setIsRegister] = useState(location.state?.status);

    // called whenever render
    useEffect(() => {
        setIsRegister(location.state?.status);
    }, [location.state?.status])

    // Signup <-> Login
    const setStatus = () => {
        setIsRegister(!isRegister);
    }

    return (
        <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
            <h3 className="font-semibold text-2xl">{isRegister ? 'Sign up' : 'Login'}</h3>
            <div className="w-full flex flex-col gap-3">
                {isRegister && <InputForm label="Name"/>}
                <InputForm label="PhoneNumber"/>
                <InputForm label="Password"/>
                <Button
                text={isRegister ? 'SIGN UP' : 'LOGIN'}
                bgColor="bg-secondary1"
                textColor="text-white"
                fullWidth
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