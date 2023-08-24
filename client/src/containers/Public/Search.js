import { SearchItem } from "../../components";
import icons from "../../utils/icons";

const {BsChevronRight, CiLocationOn, TbReportMoney, RiCrop2Line, GiFamilyHouse, BsSearch} = icons;

const Search = () => {
  return (
    <div className='p-[10px] bg-[#febb02] rounded-lg flex lg:flex-row flex-col items-center justify-around gap-2'>
        <SearchItem IcStart={<GiFamilyHouse />} IcEnd={<BsChevronRight />} fontWeight text='Phòng trọ, nhà trọ' />
        <SearchItem IcStart={<CiLocationOn />} IcEnd={<BsChevronRight />} text='Toàn quốc' />
        <SearchItem IcStart={<TbReportMoney />} IcEnd={<BsChevronRight />} text='Chọn giá' />
        <SearchItem IcStart={<RiCrop2Line />} IcEnd={<BsChevronRight />} text='Chọn diện tích' />
        <button 
          className="outline-none p-2 w-full bg-secondary1 text-[12px] flex items-center justify-center text-white gap-2 font-medium"
        >
          <BsSearch />
          <span>Search</span>
        </button>

    </div>
  )
}

export default Search;