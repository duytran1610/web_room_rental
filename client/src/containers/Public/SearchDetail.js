import { Province, ItemSidebar, RelatedPost } from '../../components';
import { List, Pagination } from '.';
import { useSelector } from 'react-redux';

const SearchDetail = () => {
  // get categories, prices, areas from appReducer in redux store
  const { prices, areas } = useSelector(state => state.app); 

  return (
    <div className='w-full flex flex-col gap-3'>
      <div>
        <h1 className='text-[28px] font-bold'>RESULT SEARCH:</h1>
      </div>
      <Province />
      <div className='w-full flex gap-4'>
        <div className='w-[70%]'>
          <List />
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

export default SearchDetail;
