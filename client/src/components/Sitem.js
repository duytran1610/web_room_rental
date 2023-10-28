import React,{memo, useState, useEffect} from 'react';
import moment from 'moment';           // format time 
import 'moment/locale/vi';             // format time with lang vi
import icons from '../utils/icons';

const {BsStarFill} = icons;

// used in sidebar
const Sitem = ({title, price, img, createdAt, star}) => {
    // control star
    const [stars, setStars] = useState([]);

    useEffect(() => {
        let temp = [];

        for (let i = 1; i <= star; i++) temp.push(<BsStarFill className='star-item' size={18} color='yellow' />);

        setStars(temp);
    }, [star]);

    return (
        <div className='w-full flex items-center gap-2 py-2 border-b border-gray-300'>
            <img 
                src={img[0] || "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IMG_Academy_Logo.svg/640px-IMG_Academy_Logo.svg.png"}
                alt="img" 
                className='w-[65px] h-[65px] flex-none object-cover rounded-md'
            />
            <div className='gap-2 w-full'>
                <h4 className='text-blue-600 text-[15px]'>
                    {stars.length > 0 && stars.map((item, index) => 
                        <span key={index}>{item}</span>
                    )}
                    {`${title?.slice(0,45)}...`}
                </h4>
                <div className='flex justify-between'>
                    <span className='text-sm font-medium text-green-500'>{price}</span>
                    <span className='text-sm text-gray-300'>{moment(createdAt).fromNow()}</span>
                </div>
            </div>
        </div>
    )
}

export default memo(Sitem);