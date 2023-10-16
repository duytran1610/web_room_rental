import React, {useState, useEffect} from 'react';
import icons from '../utils/icons';

const {GrLinkPrevious} = icons;

const Modal = ({setIsShowModal, content, name}) => {
    // state
    // get value two range slider
    const [persent1, setPersent1] = useState(0);
    const [persent2, setPersent2] = useState(100);
    // element is clicked
    const [activeEl, setActiveEl] = useState('');

    // Update value two range slider
    useEffect(() => {
        const activedTrack = document.getElementById('track-active');

        if (activedTrack) {
            if (persent1 <= persent2) {
                activedTrack.style.left = `${persent1}%`;
                activedTrack.style.right = `${100-persent2}%`;
            }
            else {
                activedTrack.style.left = `${persent2}%`;
                activedTrack.style.right = `${100-persent1}%`;
            }
        }
    }, [persent1, persent2]);

    const handleClickTrack = (e, value) => {
        e.stopPropagation();
        const trackEl = document.getElementById('track');

        // element size and position relative to viewport 
        const trackRect = trackEl.getBoundingClientRect();
        
        let persent = value? value : Math.round((e.clientX - trackRect.x) * 100 / trackRect.width);

        if (Math.abs(persent - persent1) <= Math.abs(persent - persent2)) {
            setPersent1(persent);
        }
        else {
            setPersent2(persent);
        }

        // turn off active element
        activeEl && setActiveEl('');
    }

    // convert 100% to target (price, area) 
    const converPersentToTarget = persent => {
        if (name === 'prices')
            return Math.ceil(Math.round(persent * 1.5) / 5) / 2;
        if (name === 'areas')
            return Math.ceil(Math.round(persent * 0.9) / 5) * 5;
        return 0;
    }

    // convert target (price, area) to 100%
    const convertTargetToPersent = target => {
        if (name === 'prices')
            return Math.floor(target / 15  * 100);
        if (name === 'areas')
            return Math.floor(target / 90  * 100);
        return 0;
    };

    // get number in value item
    const getNumbers = string => string.match(/\d+/g).map(item => +item);

    // handle value target (price, area)
    const handleTarget = (item) => {
        setActiveEl(item.code);

        // get numbers in target (price, area)
        const arrNum = getNumbers(item.value);

        if (arrNum.length === 1 && arrNum[0] === 1) {
            setPersent1(0);
            setPersent2(convertTargetToPersent(1)); 
        }
        else if (arrNum.length === 1 && arrNum[0] === 15) {
            setPersent1(convertTargetToPersent(15));
            setPersent2(convertTargetToPersent(15)); 
        }
        else if (arrNum.length === 1 && arrNum[0] === 20) {
            setPersent1(0);
            setPersent2(convertTargetToPersent(20));
        }
        else if (arrNum.length === 1 && arrNum[0] === 90) {
            setPersent1(convertTargetToPersent(90));
            setPersent2(convertTargetToPersent(90)); 
        }
        else {
            setPersent1(convertTargetToPersent(arrNum[0]));
            setPersent2(convertTargetToPersent(arrNum[1]));
        }
    }

    // handle Submit
    const handleSubmit = (e) => {
        console.log('start ', converPersentToTarget(persent1));
        console.log('end ', converPersentToTarget(persent2));
    }

    return (
        <div 
            className='fixed top-0 left-0 right-0 bottom-0 z-10 bg-overlay70 flex justify-center items-center'
            onClick={() => setIsShowModal(false)}
        >
            <div
             className='w-2/5 bg-white rounded-md'
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
                        <div className='px-12 py-20'>
                            {/* Two range slider */}
                            <div className='flex flex-col items-center justify-center relative'>
                                <div className='absolute z-30 top-[-48px] font-bold text-xl text-orange-600'>
                                    {`Tu ${converPersentToTarget(persent1 >= persent2? persent2 : persent1)} - ${converPersentToTarget(persent2 >= persent1? persent2 : persent1)} trieu`}
                                </div>
                                {/* Create thanh độ dài của phạm vi kéo (slider track) */}
                                <div 
                                    id="track" 
                                    className='slider-track h-[5px] absolute top-0 bottom-0 bg-gray-300 w-full rounded-md'
                                    onClick={handleClickTrack} 
                                ></div>
                                <div 
                                    id="track-active" 
                                    className='slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 file:rounded-md'
                                    onClick={handleClickTrack} 
                                ></div>
                                {/* appearance-none: xóa đi những mặc định của element */}
                                <input 
                                max='100'
                                min='0'
                                step='1'
                                type='range'
                                value={persent1}
                                onChange={(e) => {
                                    setPersent1(+e.target.value);
                                    activeEl && setActiveEl('');
                                } }
                                className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                                />
                                <input 
                                max='100'
                                min='0'
                                step='1'
                                type='range'
                                value={persent2}
                                onChange={(e) => {
                                    setPersent2(+e.target.value);
                                    activeEl && setActiveEl('');
                                } }
                                className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                                />
                                <div className='absolute top-4 z-10 flex justify-between left-0 right-0'>
                                    <span 
                                        className='cursor-pointer'
                                        onClick={(e) => handleClickTrack(e, 0)}
                                    >
                                        0
                                    </span>
                                    <span 
                                        className='mr-[-12px] cursor-pointer'
                                        onClick={(e) => handleClickTrack(e, 100)}
                                    >
                                        {name === 'prices'? '15 triệu + ': name === 'areas'? 'Trên 90m2': ''}
                                    </span>
                                </div>
                            </div>

                            {/* Items price */}
                            <div className='mt-16'> 
                                <h4 className='font-medium mb-4'>Choose quickly</h4>
                                <div className='flex gap-2 items-center flex-wrap w-full'>
                                    {content?.map(item => 
                                        <button 
                                            key={item.code} 
                                            className={`px-4 py-2 rounded-md cursor-pointer ${item.code === activeEl? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                            onClick={() => handleTarget(item)}
                                        >
                                            {item.value}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {(name === 'prices' || name === 'areas') &&
                    <button
                        className='w-full bg-[#FFA500] py-2 font-medium rounded-bl-md rounded-br-md'
                        onClick={handleSubmit}
                    >
                        Confirm
                    </button>
                }
            </div>
        </div>
    )
}

export default Modal;