import {memo} from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";

const PageNumber = ({number}) => {
    // navigate
    const navigate = useNavigate();

    // create query parameters (by using createSearchParams) in URL
    const handleChangePage = () => {
        navigate({
            pathname: "/",
            search: `?${createSearchParams({
                page: number
            })}`
        });
    }

    return (
        <div 
            className='px-[18px] py-[15px] bg-white hover:bg-gray-300 hover:text-white rounded-md cursor-pointer'
            onClick={handleChangePage}
        >
            {number}
        </div>
    );
}

export default memo(PageNumber);