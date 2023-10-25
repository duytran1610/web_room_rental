import React, { memo } from 'react';

// item input for choose option in path /system/create-new-post
const SelectOption = ({ label, options, type, value, setValue, name, invalidFields, setInvalidFields}) => {
    // handleTextErr
    const handleTextErr = () => {
        if (name) return invalidFields?.find(item => item.name === name)?.msg;
        return invalidFields?.find(item => item.name === 'address')?.msg
    }

    return (
        <div className='flex flex-col gap-2 flex-1'>
            <label className='font-medium'>{label}</label>
            <select
                className='outline-none border border-gary-300 p-2 w-full rounded-md'
                name={type || name}
                onChange={(e) => !name? setValue(e.target.value) : setValue(prev => ({...prev, [name]: e.target?.value}))}
                onFocus={() => setInvalidFields([])}
                value={value}
            >
                <option value="">{`--Chon ${label}--`}</option>
                {options?.map(item =>
                    <option
                        key={(type === 'district' || type === 'province') ? item[`${type}_id`] : item.code}
                        value={(type === 'district' || type === 'province') ? item[`${type}_id`] : item.code}
                    >
                        {(type === 'district' || type === 'province') ? item[`${type}_name`] : item.value}
                    </option>
                )}
            </select>
            <small className='text-red-500'>
                {handleTextErr()}
            </small>
        </div>
    )
}

export default memo(SelectOption);