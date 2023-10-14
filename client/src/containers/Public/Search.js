import React, {useState} from 'react';
import { SearchItem, Modal } from "../../components";
import icons from "../../utils/icons";
import { useSelector } from 'react-redux';

const {BsChevronRight, CiLocationOn, TbReportMoney, RiCrop2Line, GiFamilyHouse, BsSearch} = icons;

const Search = () => {
  // get categories, provinces, prices, areas from appReducer in redux store
  const {categories, provinces, prices, areas} = useSelector(state => state.app);

  //state
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState([]);

  // handle show modal
  const handleShowModal = (content, name) => {
    setIsShowModal(true);
    setContent(content);
    setName(name)
  }

  return (
    <>
      <div className='w-4/5 lg:w-1100 my-3 p-[10px] bg-[#febb02] rounded-lg flex lg:flex-row flex-col items-center justify-around gap-2'>
        <span 
          className='cursor-pointer flex-1'
          onClick={() => handleShowModal(categories, 'categories')}
        >
          <SearchItem IcStart={<GiFamilyHouse />} IcEnd={<BsChevronRight />} fontWeight text='Phòng trọ, nhà trọ' />
        </span>
        <span 
          className='cursor-pointer flex-1'
          onClick={() => handleShowModal(provinces, 'provinces')}
        >
          <SearchItem IcStart={<CiLocationOn />} IcEnd={<BsChevronRight />} text='Toàn quốc' />
        </span>
        <span 
          className='cursor-pointer flex-1'
          onClick={() => handleShowModal(prices, 'prices')}
        >
          <SearchItem IcStart={<TbReportMoney />} IcEnd={<BsChevronRight />} text='Chọn giá' />
        </span>
        <span 
          className='cursor-pointer flex-1'
          onClick={() => handleShowModal(areas, 'areas')}
        >
          <SearchItem IcStart={<RiCrop2Line />} IcEnd={<BsChevronRight />} text='Chọn diện tích' />
        </span>
        <button 
          className="outline-none p-2 flex-1 bg-secondary1 text-[12px] flex items-center justify-center text-white gap-2 font-medium"
        >
          <BsSearch />
          <span>Search</span>
        </button>
      </div>

      {isShowModal && <Modal content={content} name={name} setIsShowModal={setIsShowModal}/>}
    </>
  )
}

export default Search;