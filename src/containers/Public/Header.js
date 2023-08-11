import { Component } from "react";
import logo from "../../assets/img/logo.png";
import { Button } from "../../components";
import icons from "../../utils/icons";
import withRouter from "../../HOC/withRouter";
import { path } from "../../utils/constant";

const {AiOutlinePlusCircle} = icons;


class Header extends Component {

    goLogIn = () => {
        this.props.navigate(path.LOGIN);
    }

    render() {
        return (
            <div className="w-1100 flex items-center justify-between bg-primary">
                <img 
                    src={logo}
                    alt="logo"
                    className="w-[240px] h-[72px] object-contain"
                />
                <div className="flex items-center gap-1">
                    <small>Phongtro123.com Hello!</small>
                    <Button 
                        text={'Sign Up'} 
                        textColor={'text-white'} 
                        bgColor={'bg-[#3961fb]'}
                        
                    />
                    <Button 
                        text={'Log In'} 
                        textColor={'text-white'} 
                        bgColor={'bg-[#3961fb]'}
                        onClick={this.goLogIn}
                    />
                    <Button 
                        text={'Post New News'} t
                        extColor={'text-white'} 
                        bgColor={'bg-secondary2'} 
                        IcAfter={AiOutlinePlusCircle}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Header);