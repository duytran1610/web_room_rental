import React, {memo} from 'react';

// use when user edit info or create info
const Input = ({label, unit, value, setValue, name, small, invalidFields, setInvalidFields, direction}) => {
    return (
        <div>
            <div className={direction ? 'flex' : 'flex flex-col'}>
                <label className={`font-medium flex-none ${direction ? 'w-48' : ''}`}>{label}</label>
                <div className='flex items-center flex-auto'>
                    <input 
                        type='text'
                        className={`${unit ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'} w-full flex-auto outline-none border border-gray-300 p-2`} 
                        value={value}
                        onChange={(e) => setValue(prev => ({...prev, [name]: e.target.value}))}
                        onFocus={() => setInvalidFields([])}
                    />
                    {unit && <span className='w-22 flex-none p-2 border border-gray-200 bg-gray-300 rounded-tr-md rounded-br-md'>{unit}</span>}
                </div>
            </div>
            {small && <small className='opacity-70 block'>{small}</small>}
            <small className='text-red-500'>
                {invalidFields?.find(item => item.name === name)?.msg}
            </small>
        </div>
    )
}

export default memo(Input);