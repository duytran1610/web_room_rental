import React, {memo} from 'react';

// item input for choose address
const SelectedAddress = ({label}) => {
    return (
        <div  className='flex flex-col gap-2 flex-1'>
            <label className='font-medium' htmlFor='select-address'>{label}</label>
            <select id='select-address' className='outline-none border border-gary-300 p-2 w-full rounded-md'>
                <option value="">{`--Chon ${label}--`}</option>
            </select>
            
        </div>
    )
}

export default memo(SelectedAddress);