import { memo } from "react";

const InputForm = ({label, value, setValue, type}) => {
    return (
        <div>
            <label htmlFor="phone text-xs">{label}</label>
            <input 
            type="text"
            id="phone"
            className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
            value={value}
            onChange={(e) => setValue(payload => ({...payload, [type]: e.target.value}))}
            />
        </div>
    );
}

export default memo(InputForm);