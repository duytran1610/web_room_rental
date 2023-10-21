import React, {memo} from 'react';
import {SelectedAddress} from '../components';

// use in path system
const Address = () => {
    return (
        <div>
            <h2 className='font-semibold text-xl py-4'>Dia chi cho thue</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                    <SelectedAddress label='Tinh/ TP'/>
                    <SelectedAddress label='Quan/ huyen'/>
                </div>
                <input 
                    type='text' 
                    readOnly 
                    className='border border-gray-200 rounded-md p-2 w-full outline-none bg-gray-100'
                />
            </div>
        </div>
    )
}

export default memo(Address);