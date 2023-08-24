import {Search} from '../Public';
import {text} from '../../utils/constant';

const Homepage = () => {
    return (
        <div className='border border-red-500 w-full flex flex-col gap-3'>
            <Search />
            <div>
                <h1 className='text-[28px] font-bold'>{text.HOMEPAGE_TITLE}</h1>
                <p className='text-sm text-gray-700'>{text.HOMEPAGE_DESCRIPTION}</p>
            </div>
        </div>
    )
}

export default Homepage;

