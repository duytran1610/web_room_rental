import React, {useState, useEffect, memo} from 'react';
import icons from '../utils/icons';
import { getNumbers } from '../utils/Common/getNumbers';
import { getCode } from '../utils/Common/getCodes';

const {GrLinkPrevious} = icons;

const Modal = ({setIsShowModal, content, name, handleConfirm, queries, rangePercent, defaultValue}) => {
    // state
    // get value two range slider
    const [percent1, setPercent1] = useState(rangePercent[`${name}Range`] ? rangePercent[`${name}Range`][0] : 0);
    const [percent2, setPercent2] = useState(rangePercent[`${name}Range`] ? rangePercent[`${name}Range`][1] : 100);
    // element is clicked
    const [activeEl, setActiveEl] = useState('');

    // Update value two range slider
    useEffect(() => {
        const activedTrack = document.getElementById('track-active');

        if (percent1 > percent2) {
            const temp = percent1;
            setPercent1(percent2);
            setPercent2(temp);
        }

        if (activedTrack) {
            activedTrack.style.left = `${percent1}%`;
            activedTrack.style.right = `${100-percent2}%`;
        }
    }, [percent1, percent2]);

    // handle click slider track
    const handleClickTrack = (e, value) => {
        e.stopPropagation();
        const trackEl = document.getElementById('track');

        // element size and position relative to viewport 
        const trackRect = trackEl.getBoundingClientRect();
        
        let percent = value? value : Math.round((e.clientX - trackRect.x) * 100 / trackRect.width);

        if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
            setPercent1(percent);
        }
        else {
            setPercent2(percent);
        }

        // turn off active element
        activeEl && setActiveEl('');
    }

    // convert 100% to target (price, area) 
    const converPercentToTarget = percent => {
        if (name === 'price')
            return Math.ceil(Math.round(percent * 1.5) / 5) / 2;
        if (name === 'area')
            return Math.ceil(Math.round(percent * 0.9) / 5) * 5;
        return 0;
    }

    // convert target (price, area) to 100%
    const convertTargetToPercent = target => {
        if (name === 'price')
            return Math.floor(target / 15  * 100);
        if (name === 'area')
            return Math.floor(target / 90  * 100);
        return 0;
    };

    // handle value target (price, area)
    const handleTarget = (item) => {
        setActiveEl(item.code);

        // get numbers in target (price, area)
        const arrNum = getNumbers(item.value);

        if (arrNum.length === 1 && arrNum[0] === 1) {
            setPercent1(0);
            setPercent2(convertTargetToPercent(1)); 
        }
        else if (arrNum.length === 1 && arrNum[0] === 15) {
            setPercent1(convertTargetToPercent(15));
            setPercent2(convertTargetToPercent(15)); 
        }
        else if (arrNum.length === 1 && arrNum[0] === 20) {
            setPercent1(0);
            setPercent2(convertTargetToPercent(20));
        }
        else if (arrNum.length === 1 && arrNum[0] === 90) {
            setPercent1(convertTargetToPercent(90));
            setPercent2(convertTargetToPercent(90)); 
        }
        else {
            setPercent1(convertTargetToPercent(arrNum[0]));
            setPercent2(convertTargetToPercent(arrNum[1]));
        }
    }

    // handle output before confirm (price, area)
    const handleBeforeConfirm = () => {
        let value = (percent1 === 100)? `Tren ${converPercentToTarget(percent1)} ` :
                                        `Tu ${converPercentToTarget(percent1)} - ${converPercentToTarget(percent2)} `
        value += `${name === 'price'? 'triệu': name === 'area'? 'm2': ''}`;

        handleConfirm({
            [name]: value,
            [`${name}Val`]: [converPercentToTarget(percent1), converPercentToTarget(percent2)]
        }, {[`${name}Range`]: [percent1, percent2]});
    }

    return (
        <div 
            className='fixed top-0 left-0 right-0 bottom-0 z-10 bg-overlay70 flex justify-center items-center'
            onClick={() => setIsShowModal(false)}
        >
            <div
             className='w-2/5 h-[500px] bg-white rounded-md relative'
             onClick={(e) => e.stopPropagation()}
            >
                <div className='h-[45px] px-4 flex items-center border-b border-gray-200'>
                    <span
                        className='cursor-pointer'
                        onClick={(e) => {
                            // e.stopPropagation();
                            setIsShowModal(false);
                        }}
                    >
                        <GrLinkPrevious size={24}/>
                    </span>
                </div>
                {(name === 'category' || name === 'province')? 
                    <div className='p-4 flex flex-col'>
                        <span className='py-2 flex items-center gap-2 border-b border-gray-200'>
                            <input 
                                type="radio" 
                                name={name}  
                                id='defaultValue' 
                                value={defaultValue}
                                checked={!queries[`${name}Code`] ? true : false}
                                onChange={() => handleConfirm({[name]: defaultValue, [`${name}Code`]: null})}
                            /> 
                            <label htmlFor='defaultValue'>{defaultValue}</label>
                        </span>
                        {
                            content?.map(item => 
                                <span key={item.code} className='py-2 flex items-center gap-2 border-b border-gray-200'>
                                    <input 
                                        type="radio" 
                                        name={name}  
                                        id={item.code} 
                                        value={item.code}
                                        checked={item.code === queries[`${name}Code`] ? true : false}
                                        onChange={() => handleConfirm({[name]: item.value, [`${name}Code`]: item.code})}
                                    /> 
                                    <label htmlFor={item.code}>{item.value}</label>
                                </span>
                            )
                        }
                    </div>                 
                    :
                    <div className='px-12 py-20'>
                        {/* Two range slider */}
                        <div className='flex flex-col items-center justify-center relative'>
                            <div className='absolute z-30 top-[-48px] font-bold text-xl text-orange-600'>
                                {(percent1 === 100)? `Tren ${converPercentToTarget(percent1)} ` :
                                `Tu ${converPercentToTarget(percent1)} - ${converPercentToTarget(percent2)} `
                                }
                                {name === 'price'? 'triệu': name === 'area'? 'm2': ''}
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
                            value={percent1}
                            onChange={(e) => {
                                setPercent1(+e.target.value);
                                activeEl && setActiveEl('');
                            } }
                            className='w-full appearance-none pointer-events-none absolute top-0 bottom-0'
                            />
                            <input 
                            max='100'
                            min='0'
                            step='1'
                            type='range'
                            value={percent2}
                            onChange={(e) => {
                                setPercent2(+e.target.value);
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
                                    {name === 'price'? '15 triệu + ': name === 'area'? 'Trên 90m2': ''}
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
                {(name === 'price' || name === 'area') &&
                    <button
                        className='w-full absolute bottom-0 bg-[#FFA500] py-2 font-medium rounded-bl-md rounded-br-md'
                        onClick={() => handleBeforeConfirm()}
                    >
                        Confirm
                    </button>
                }
            </div>
        </div>
    )
}

export default memo(Modal);