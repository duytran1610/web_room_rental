import React, {memo} from 'react'

const InputReadOnly = ({label, value, direction, isPhone}) => {
    return (
        <div className={`flex ${direction? '' : 'flex-col gap-2'}`}>
            <label className={`font-medium flex-none ${direction ? 'w-48' : ''}`}>{label}</label>
            <div className='flex-auto'>
                <input
                    type='text'
                    readOnly
                    className='border border-gray-200 rounded-md p-2 w-full outline-none bg-gray-100'
                    value={value || ''}
                />
                {isPhone && <small className='flex-auto text-blue-500 cursor-pointer'>Change phone number</small>}
            </div>
        </div>
    )
}

export default memo(InputReadOnly);