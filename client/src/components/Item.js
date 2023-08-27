import {memo, useState} from 'react';
import icons from '../utils/icons';

const imgs = [
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/03/z4572565625323-557aba45017383c16b6bffc470a45e39-1691068971_1691069728.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/03/z4572565657948-8ac64f5c85b14b261a8c581bff1baf09-1691068974_1691069727.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/03/z4572565653741-2cbd1550e0035d3db6a4778d4490b6b3-1691068973_1691069727.jpg",
    "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/08/03/z4572565635697-217abc8d25ca22fe1a947983baae0793-1691068972_1691069728.jpg",
];

const {BsStarFill, AiFillHeart, AiOutlineHeart, BsBookmarkStarFill} = icons;

const Item = () => {
    const [isHover, setIsHover] = useState(false);
    console.log(isHover)

    return (
        <div className='w-full flex border-t border-orange-600 p-4'>
            <div className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'>
                <img src={imgs[0]} alt="preview" className="w-[100px] h-[120px] object-cover" />
                <img src={imgs[1]} alt="preview" className="w-[100px] h-[120px] object-cover" />
                <img src={imgs[2]} alt="preview" className="w-[100px] h-[120px] object-cover" />
                <img src={imgs[3]} alt="preview" className="w-[100px] h-[120px] object-cover" />
                <span className='bg-overlay70 text-white px-2 rounded-md absolute left-1 bottom-1'>4 img</span>
                <span 
                    className=' text-white absolute right-9 bottom-1'
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    {isHover ? <AiFillHeart size={24} color='red' /> : <AiOutlineHeart size={24} />}
                </span>
            </div>
            <div className='w-3/5'>
                <div className='flex justify-between gap-3 w-full'>
                    <div className=' text-red-600 font-medium uppercase'>
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        <BsStarFill className='star-item' size={18} color='yellow' />
                        Cho thuê phòng trọ có ban công, máy lạnh
                        {/* <h3 className='text-red-600 font-medium'>Cho thuê phòng trọ có ban công, máy lạnh</h3> */}
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsBookmarkStarFill size={24} color='orange' />
                    </div>               
                </div>
                <div className='my-2 flex justify-between'>
                    <span className='font-bold text-green-600'>2.7 triệu/tháng</span>
                    <span>16m²</span>
                    <span>Quận Tân Bình, Hồ Chí Minh</span>
                </div>
                <p className='text-gray-500'>
                    - Phòng trọ đẹp. Nằm trên trục đường chính số 346 PHẠM VĂN BẠCH, 
                    Phía sau Sân Bay Tân Sơn Nhất, gần eTown Công hòa , thuận tiện đi tất cả các Quận ...…
                </p>
                <div className='flex items-center my-3 justify-between'>
                    <div className='flex items-center'>
                        <img 
                            src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" 
                            alt="avatar" 
                            className='w-[30px] h-[30px] object-cover rounded-full' 
                        />
                        <p>Tue Thu</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button
                            className="bg-blue-700 text-white p-1 rounded-md"
                        >
                            Call 12341251
                        </button>
                        <button
                            className="text-blue-700 px-1 rounded-md border border-blue-700"
                        >
                            Ib zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item);