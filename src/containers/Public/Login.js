import { Component } from "react";
import { InputForm, Button } from "../../components";

class Login extends Component {

    render() {
        return (
            <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
                <h3 className="font-semibold text-2xl">LOGIN</h3>
                <div className="w-full flex flex-col gap-3">
                    <InputForm label="PhoneNumber"/>
                    <InputForm label="Password"/>
                    <Button
                    text="LOGGIN"
                    bgColor="bg-secondary1"
                    textColor="text-white"
                    fullWidth
                    />
                </div>
                <div className="mt-7 flex justify-between">
                    <small className="text-[blue] hover:text-[red] cursor-pointer">You forget password?</small>
                    <small className="text-[blue] hover:text-[red] cursor-pointer">You forget password?</small>
                </div>
            </div>
        );
    }
}


export default Login;