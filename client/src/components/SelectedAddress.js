import React, {memo} from 'react';

// item input for choose address
const SelectedAddress = ({label, options, type, setValue}) => {
    return (
        <div  className='flex flex-col gap-2 flex-1'>
            <label className='font-medium' htmlFor='select-address'>{label}</label>
            <select 
                id='select-address' 
                className='outline-none border border-gary-300 p-2 w-full rounded-md'
                // value={value} 
                onChange={(e) => setValue(e.target.value)}
            >
                <option value="">{`--Chon ${label}--`}</option>
                {options?.map(item => 
                    <option 
                        key={item[`${type}_id`]} 
                        value={item[`${type}_id`]}
                    >
                        {item[`${type}_name`]}
                    </option>
                )}
            </select>
            
        </div>
    )
}

export default memo(SelectedAddress);