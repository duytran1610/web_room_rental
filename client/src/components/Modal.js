import React from 'react';
import icons from '../utils/icons';

const {GrLinkPrevious} = icons;

const Modal = ({setIsShowModal, content, name}) => {
    return (
        <div 
            className='fixed top-0 left-0 right-0 bottom-0 z-10 bg-overlay70 flex justify-center items-center'
            onClick={() => setIsShowModal(false)}
        >
            <div
             className='w-1/3 bg-white rounded-md'
             onClick={(e) => e.stopPropagation()}
            >
                <div className='h-[45px] px-4 flex items-center border-b border-gray-200'>
                    <span
                        className='cursor-pointer'
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsShowModal(false);
                        }}
                    >
                        <GrLinkPrevious size={24}/>
                    </span>
                </div>
                <div className='p-4 flex flex-col'>
                    {content?.map(item => 
                        <span key={item.code} className='py-2 flex items-center gap-2 border-b border-gray-200'>
                            <input type="radio" name={name}  id={item.code} value={item.code}/> 
                            <label htmlFor={item.code}>{item.value}</label>
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal;