import React, {useState, useEffect} from 'react';
import icons from '../utils/icons';

const {GrLinkPrevious} = icons;

const Modal = ({setIsShowModal, content, name}) => {
    // state
    const [persentStart, setPersentStart] = useState(0);
    const [persentEnd, setPersentEnd] = useState(100);

    useEffect(() => {
        const activedTrack = document.getElementById('track-active');

        activedTrack.style.left = `${persentStart}%`;
        activedTrack.style.right = `${100-persentEnd}%`;
    }, [persentStart, persentEnd])

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
                    {(name === 'categories' || name === 'provinces')?
                        content?.map(item => 
                            <span key={item.code} className='py-2 flex items-center gap-2 border-b border-gray-200'>
                                <input type="radio" name={name}  id={item.code} value={item.code}/> 
                                <label htmlFor={item.code}>{item.value}</label>
                            </span>
                        )
                        :
                        <div className='p-4'>
                            <div className='flex flex-col items-center justify-center relative'>
                                {/* Create thanh độ dài của phạm vi kéo (slider track) */}
                                <div className='slider-track h-[5px] absolute top-0 bottom-0 bg-gray-300 w-full rounded-md'></div>
                                <div id="track-active" className='slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 file:rounded-md'></div>
                                {/* appearance-none: xóa đi những mặc định của element */}
                                <input 
                                max='100'
                                min='0'
                                step='5'
                                type='range'
                                value={persentStart}
                                onChange={(e) => setPersentStart(e.target.value) }
                                className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                                />
                                <input 
                                max='100'
                                min='0'
                                step='5'
                                type='range'
                                value={persentEnd}
                                onChange={(e) => setPersentEnd(e.target.value) }
                                className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal;