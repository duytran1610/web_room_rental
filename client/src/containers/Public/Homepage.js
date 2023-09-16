import {text} from '../../utils/constant';
import { Province, ItemSidebar } from '../../components';
import {List, Pagination} from '../Public';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { actionApp } from '../../store/actions';

const Homepage = () => {
    // query parameters
    const [params] = useSearchParams();

    // get categories from appReducer in redux store
    const {categories} = useSelector(state => state.app);

    return (
        <div className='border border-red-500 w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold'>{text.HOMEPAGE_TITLE}</h1>
                <p className='text-base text-gray-700'>{text.HOMEPAGE_DESCRIPTION}</p>
            </div>
            <Province />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List page={params.get('page')}/>
                    <Pagination page={params.get('page')}/>
                </div>
                <div className='w-[30%] border border-green-500 flex flex-col justify-start gap-4'>
                    <ItemSidebar content={categories} title={'List rental'}/>
                    <ItemSidebar title={'Xem theo gia'}/>
                    <ItemSidebar title={'Xem theo dien tich'}/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

