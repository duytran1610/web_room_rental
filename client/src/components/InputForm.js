import { memo } from "react";

const InputForm = ({label, value, setValue, type, invalidFields, setInvalidFields}) => {
    return (
        <div>
            <label htmlFor="phone text-xs">{label}</label>
            <input 
            type="text"
            id="phone"
            className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
            value={value}
            onChange={(e) => setValue(payload => ({...payload, [type]: e.target.value}))}
            onFocus={(e) => setInvalidFields([])}
            />
            {invalidFields.length > 0 && invalidFields.some(i => i.name === type) && <small className="text-red-500 italic">{invalidFields.find(i => i.name === type)?.msg}</small> }
        </div>
    );
}

export default memo(InputForm);