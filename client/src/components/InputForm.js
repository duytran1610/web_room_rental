import { memo } from "react";

// use in when login or register or contact public
const InputForm = ({label, value, setValue, keyPayload, invalidFields, setInvalidFields, type}) => {
    return (
        <div>
            <label htmlFor={keyPayload} className="text-xs">{label}</label>
            <input 
                id={keyPayload}
                type={type || 'text'}
                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                value={value}
                onChange={(e) => setValue(payload => ({...payload, [keyPayload]: e.target.value}))}
                onFocus={(e) => setInvalidFields && setInvalidFields([])}
            />
            {invalidFields?.length > 0 && invalidFields?.some(i => i.name === keyPayload) && <small className="text-red-500 italic">{invalidFields.find(i => i.name === keyPayload)?.msg}</small> }
        </div>
    );
}

export default memo(InputForm);