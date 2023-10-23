import React, { memo } from 'react';

// item input for choose option in path /system/create-new-post
const SelectOption = ({ label, options, type, setValue, name }) => {
    return (
        <div className='flex flex-col gap-2 flex-1'>
            <label className='font-medium' htmlFor='select-address'>{label}</label>
            <select
                id='select-address'
                className='outline-none border border-gary-300 p-2 w-full rounded-md'
                onChange={(e) => !name? setValue(e.target.value) : setValue(prev => ({...prev, [name]: e.target?.value}))}
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

        </div>
    )
}

export default memo(SelectOption);