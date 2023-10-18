import React, {useState} from 'react';
import { SearchItem, Modal } from "../../components";
import icons from "../../utils/icons";
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

const {BsChevronRight, CiLocationOn, TbReportMoney, RiCrop2Line, GiFamilyHouse, BsSearch} = icons;

const Search = () => {
  // get categories, provinces, prices, areas from appReducer in redux store
  const {categories, provinces, prices, areas} = useSelector(state => state.app);

  // dispatch
  const dispatch = useDispatch();

  //state
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState([]);
  const [queries, setQueries] = useState({});          // contains the information query parameters you want to search
  const [rangePercent, setRangePersent] = useState({});    // contain % for show two range slider (price, area)

  // handle show modal
  const handleShowModal = (content, name) => {
    setIsShowModal(true);
    setContent(content);
    setName(name);
  }

  // handle Confirm query parameters
  const handleConfirm = (query, newRange) => {
    setQueries(prev => ({...prev, ...query}));
    setIsShowModal(false);
    newRange && setRangePersent(prev => ({...prev, ...newRange}));
  }

  // handle Search to filter posts
  const handleSearch = () => {
    // get query parameters contain 'Code'
    const arrQueries = Object.entries(queries).filter(item => item[0].includes('Code'));
    
    // convert arr to obj
    const paramsSearchObj = arrQueries.reduce((obj, i) => ({...obj, [i[0]]: i[1]}), {});
    
    dispatch(actions.getPostsLimit(paramsSearchObj));
  }

  return (
    <>
      <div className='w-4/5 lg:w-1100 my-3 p-[10px] bg-[#febb02] rounded-lg flex lg:flex-row flex-col items-center justify-around gap-2'>
        <span 
          className='cursor-pointer flex-1'
          onClick={() => handleShowModal(categories, 'category')}
        >
          <SearchItem IcStart={<GiFamilyHouse />} IcEnd={<BsChevronRight />} fontWeight text={queries.category} defaultText='Phòng trọ, nhà trọ' />
        </span>
        <span 
          className='cursor-pointer flex-1'
          onClick={() => handleShowModal(provinces, 'province')}
        >
          <SearchItem IcStart={<CiLocationOn />} IcEnd={<BsChevronRight />} text={queries.province} defaultText='Toàn quốc' />
        </span>
        <span 
          className='cursor-pointer flex-1'
          onClick={() => handleShowModal(prices, 'price')}
        >
          <SearchItem IcStart={<TbReportMoney />} IcEnd={<BsChevronRight />} text={queries.price} defaultText='Chọn giá' />
        </span>
        <span 
          className='cursor-pointer flex-1'
          onClick={() => handleShowModal(areas, 'area')}
        >
          <SearchItem IcStart={<RiCrop2Line />} IcEnd={<BsChevronRight />} text={queries.area} defaultText='Chọn diện tích' />
        </span>
        <button 
          onClick={handleSearch}
          className="outline-none p-2 flex-1 bg-secondary1 text-[12px] flex items-center justify-center text-white gap-2 font-medium"
        >
          <BsSearch />
          <span>Search</span>
        </button>
      </div>

      {isShowModal && 
      <Modal 
        handleConfirm={handleConfirm} 
        queries={queries} 
        content={content} 
        name={name} 
        setIsShowModal={setIsShowModal}
        rangePercent={rangePercent}
      />}
    </>
  )
}

export default Search;