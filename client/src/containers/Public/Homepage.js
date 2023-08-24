import {text} from '../../utils/constant';
import { Province } from '../../components';

const Homepage = () => {
    return (
        <div className='border border-red-500 w-full flex flex-col gap-3'>
            <div>
                <h1 className='text-[28px] font-bold'>{text.HOMEPAGE_TITLE}</h1>
                <p className='text-base text-gray-700'>{text.HOMEPAGE_DESCRIPTION}</p>
            </div>
            <Province />
        </div>
    )
}

export default Homepage;

