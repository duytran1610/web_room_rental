import { memo } from "react";

const ProvinceBtn = ({name, img}) => {
  return (
    <div className="shadow-md rounded-bl-md rounded-br-md text-blue-600 cursor-pointer hover:text-orange-700">
        <img 
            src={img}
            alt={name}
            className='w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md'
        />
        <p className="font-medium  p-2 text-center">
            {name}
        </p>
    </div>
  )
}

export default memo(ProvinceBtn);