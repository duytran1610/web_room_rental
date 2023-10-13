
import {text} from '../../utils/constant';
import { Province, ItemSidebar, RelatedPost } from '../../components';
import {List, Pagination} from '../Public';
import { useSelector } from 'react-redux';

const Homepage = () => {
    // get categories, prices, areas from appReducer in redux store
    const {categories, prices, areas} = useSelector(state => state.app);

    return (
        <div className='w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold'>{text.HOMEPAGE_TITLE}</h1>
                <p className='text-base text-gray-700'>{text.HOMEPAGE_DESCRIPTION}</p>
            </div>
            <Province />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List />
                    <Pagination />
                </div>
                <div className='w-[30%] flex flex-col justify-start gap-4'>
                    <ItemSidebar content={categories} title={'List rental'}/>
                    <ItemSidebar isDouble={true} type={'priceCode'} content={prices} title={'Xem theo gia'}/>
                    <ItemSidebar isDouble={true} type={'areaCode'} content={areas} title={'Xem theo dien tich'}/>
                    <RelatedPost />
                </div>
            </div>
        </div>
    )
}

export default Homepage;

