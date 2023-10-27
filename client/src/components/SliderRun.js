import React, { memo } from 'react';
import Slider from "react-slick";     // library (npm i slider) for slider 

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

// used to show nhiều ảnh, tạo hiệu ứng lướt ảnh
const SliderRun = ({images}) => {
    return (
        <div className='mb-8'>
            <Slider {...settings}>
                {images?.map((item, i) => 
                    <div key={i} className='bg-black flex justify-center h-[320px]'>
                        <img 
                            src={item} 
                            alt="slider" 
                            className='h-full m-auto object-contain'
                        />
                    </div>
                )}
            </Slider>
        </div>
    )
}

export default SliderRun;