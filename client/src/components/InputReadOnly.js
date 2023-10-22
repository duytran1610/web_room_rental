import React, {memo} from 'react'

const InputReadOnly = ({label, value}) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='font-medium' htmlFor='exactly-address'>{label}</label>
            <input
                id='exactly-address'
                type='text'
                readOnly
                className='border border-gray-200 rounded-md p-2 w-full outline-none bg-gray-100'
                value={value || ''}
            />
        </div>
    )
}

export default memo(InputReadOnly);