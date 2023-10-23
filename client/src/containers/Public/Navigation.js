import { useEffect, useRef} from 'react';
import {NavLink} from 'react-router-dom';
import { formatVietnameseToString } from '../../utils/Common/formatVietnameseToString';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import * as actions from '../../store/actions';



const Active = 'bg-secondary2 px-4 flex items-center';
const noActive = 'hover:bg-secondary2 px-4 flex items-center';

const Navigation = ({isSystem}) => {
    // dispatch
    const dispatch = useDispatch();

    // get categories from appReducer in redux store
    const {categories} = useSelector(state => state.app);

    // query params
    const [params] = useSearchParams();

    // Manipulating the DOM with a ref 
    const navRef = useRef();

    // Do not write or read ref.current during rendering.
    // You can read or write refs from event handlers or effects instead.
    useEffect(() => {
        // scrolling list item into view
        navRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }, [params]);

    useEffect(() => {
        dispatch(actions.getAllCategories());
    }, [dispatch]);
    return (
        <div ref={navRef} className={`w-full flex ${isSystem? 'justify-start' : 'justify-center'} h-[40px] bg-secondary1 text-white sticky top-0 z-10`}>
            <div className='w-4/5 lg:w-1100 flex content-stretch text-sm font-medium'>
                <NavLink
                    to={'/'}
                    className={({isActive}) => isActive ? Active : noActive}
                >
                    Home
                </NavLink>
                {categories?.length > 0 && categories.map(item => 
                    <div key={item.code} className='flex'>
                        <NavLink
                            to={`/${formatVietnameseToString(item.value)}`}
                            className={({isActive}) => isActive ? Active : noActive}
                        >
                            {item.value}
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navigation;