import { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { apiGetAllCatgorries } from '../../services/categoryService';
import { formatVietnameseToString } from '../../utils/Common/formatVietnameseToString';



const Active = 'bg-secondary2 px-4 flex items-center';
const noActive = 'hover:bg-secondary2 px-4 flex items-center';

const Navigation = () => {
    // state
    // categories
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await apiGetAllCatgorries();
            
            if (response?.data.err === 0) {
                setCategories(response.data.data);
            }
        }
        fetchCategories();
    }, []);
    return (
        <div className="w-screen flex justify-center items-stretch h-[40px] bg-secondary1 text-white">
            <div className='w-4/5 lg:w-3/5 flex items-stretch text-sm font-medium'>
                <NavLink
                    to={'/'}
                    className={({isActive}) => isActive ? Active : noActive}
                >
                    Home
                </NavLink>
                {categories?.length > 0 && categories.map(item => 
                    <div key={item.code} className='flex'>
                        <NavLink
                            to={`${formatVietnameseToString(item.value)}`}
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