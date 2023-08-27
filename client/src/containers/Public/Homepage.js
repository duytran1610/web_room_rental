import {text} from '../../utils/constant';
import { Province } from '../../components';
import {List} from '../Public';

const Homepage = () => {
    return (
        <div className='border border-red-500 w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold'>{text.HOMEPAGE_TITLE}</h1>
                <p className='text-base text-gray-700'>{text.HOMEPAGE_DESCRIPTION}</p>
            </div>
            <Province />
            <div className='w-full flex gap-4'>
                <div className='w-[70%]'>
                    <List />
                </div>
                <div className='w-[30%] border border-green-500'>
                    Slidebar
                </div>
            </div>
        </div>
    )
}

export default Homepage;

