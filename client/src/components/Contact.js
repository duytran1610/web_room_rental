import React from 'react';
import { text } from '../utils/dataContact';
import {Button} from '../components';

// Information Contact
const Contact = () => {
    return (
        <div className='w-4/5 lg:w-1100 bg-white rounded-md shadow-md p-4 flex flex-col items-center gap-6'>
            <img 
                src={text.img}
                alt="img" 
                className='w-full h-48 object-contain'
            />
            <p>{text.content}</p>
            <div className='flex justify-around w-full'>
                {text.contact.map((item, index) => 
                    <div className='flex flex-col items-center' key={index}>
                        <span className='text-orange-500 font-semibold'>{item.text}</span>
                        <span className='text-blue-900 text-[20px] font-semibold'>{item.phone}</span>
                        <span className='text-blue-900 text-[20px] font-semibold'>{item.zalo}</span>
                    </div>
                )}
            </div>
            <Button
                text='Gửi liên hệ'
                bgColor='bg-blue-600'
                textColor='text-white'
                px='px-6'
            />
        </div>
    )
}

export default Contact;