import { memo } from "react";
import { useNavigate, createSearchParams} from "react-router-dom";
import { path } from "../utils/constant";

const ProvinceBtn = ({ name, img, provinceCode }) => {
  // navigate
  const navigate = useNavigate();

  const handleOnClick = () => {
    const titleSearch = `Cho thuê ${name}, phòng trọ giá rẻ`;

    navigate({
      pathname: `/${path.SEARCHDETAIL}`,
      search: createSearchParams({provinceCode}).toString()
    }, {state: {titleSearch}});
  }
  return (
    <div
      className="shadow-md rounded-bl-md rounded-br-md text-blue-600 cursor-pointer hover:text-orange-700"
      onClick={() => handleOnClick()}
    >
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