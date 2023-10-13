import { useState, useEffect } from 'react';
import { Province, ItemSidebar, RelatedPost } from '../../components';
import { List, Pagination } from '.';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { formatVietnameseToString } from '../../utils/Common/formatVietnameseToString';

const Rental = () => {
  // get categories, prices, areas from appReducer in redux store
  const { categories, prices, areas } = useSelector(state => state.app);

  // location
  const location = useLocation();

  // state
  const [categoryCode, setCategoryCode] = useState('');
  const [categoryCurrent, setCategoryCurrent] = useState({});

  // get categoryCode by pathname
  useEffect(() => {
    let category = categories?.find(item => `/${formatVietnameseToString(item.value)}` === location.pathname);

    setCategoryCurrent(category);

    if (category) {
      setCategoryCode(category.code);
    }
  }, [location, categories]);

  return (
    <div className='w-full flex flex-col gap-3'>
      <div>
        <h1 className='text-[28px] font-bold'>{categoryCurrent?.header}</h1>
        <p className='text-base text-gray-700'>{categoryCurrent?.subheader}</p>
      </div>
      <Province />
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List categoryCode={categoryCode} />
          <Pagination />
        </div>
        <div className='w-[30%] flex flex-col justify-start gap-4'>
          <ItemSidebar isDouble={true} type={'priceCode'} content={prices} title={'Xem theo gia'} />
          <ItemSidebar isDouble={true} type={'areaCode'} content={areas} title={'Xem theo dien tich'} />
          <RelatedPost />
        </div>
      </div>
    </div>
  )
}

export default Rental;
