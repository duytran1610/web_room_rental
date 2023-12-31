// import { Component, memo } from "react";

// class Button extends Component {
    
//     render() {
//         const {text, textColor, bgColor, IcAfter, onClick} = this.props;

//         return (
//         <button 
//         className={`p-2 ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
//         onClick={onClick}
//         >
//             <span>{text}</span>
//             <span>{IcAfter && <IcAfter />}</span>
//         </button>
//         );
//     }
// }

import {memo} from "react";

const Button = ({text, textColor, bgColor, IcAfter, onClick, fullWidth, px}) => {
    return (
        <button 
        className={`p-2 ${px ? px : 'px-2'} ${textColor} ${bgColor} ${fullWidth && "w-full"} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
        onClick={onClick}
        >
            <span>{text}</span>
            {IcAfter && <span><IcAfter /></span>}
        </button>
    );
}

export default memo(Button);