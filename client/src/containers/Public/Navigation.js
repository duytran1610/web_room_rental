import { useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { formatVietnameseToString } from '../../utils/Common/formatVietnameseToString';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';



const Active = 'bg-secondary2 px-4 flex items-center';
const noActive = 'hover:bg-secondary2 px-4 flex items-center';

const Navigation = ({isSystem}) => {
    // dispatch
    const dispatch = useDispatch();

    // get categories from appReducer in redux store
    const {categories} = useSelector(state => state.app);

    useEffect(() => {
        dispatch(actions.getAllCategories());
    }, [dispatch]);
    return (
        <div className={`w-full flex ${isSystem? 'justify-start' : 'justify-center'} h-[40px] bg-secondary1 text-white`}>
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