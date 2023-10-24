import React, {memo} from 'react';

const Input = ({label, unit, value, setValue, name, small, invalidFields, setInvalidFields}) => {
    return (
        <div>
            <label className='font-medium' htmlFor='title'>{label}</label>
            <div className='flex items-center'>
                <input 
                    type='text' 
                    id='title' 
                    className={`${unit ? 'rounded-tl-md rounded-bl-md' : 'rounded-md'} w-full flex-auto outline-none border border-gray-300 p-2`} 
                    value={value}
                    onChange={(e) => setValue(prev => ({...prev, [name]: e.target.value}))}
                    onFocus={() => setInvalidFields([])}
                />
                {unit && <span className='w-22 flex-none p-2 border border-gray-200 bg-gray-300 rounded-tr-md rounded-br-md'>{unit}</span>}
            </div>
            {small && <small className='opacity-70 block'>{small}</small>}
            <small className='text-red-500'>
                {invalidFields?.find(item => item.name === name)?.msg}
            </small>
        </div>
    )
}

export default memo(Input);