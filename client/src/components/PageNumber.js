import {memo} from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";

const noActive = 'w-[46px] h-[48px] flex items-center justify-center bg-white hover:bg-gray-300 rounded-md';
const Active = 'w-[46px] h-[48px] flex items-center justify-center bg-[#f13427] hover:opacity-90 text-white rounded-md';

const PageNumber = ({text, curPage, icon, setCurPage}) => {
    // navigate
    const navigate = useNavigate();

    // create query parameters (by using createSearchParams) in URL
    const handleChangePage = () => {
        if (text) {
            setCurPage(+text);
            navigate({
                pathname: "/",
                search: createSearchParams({
                    page: text
                }).toString()
            });
        }
    }

    return (
        <div 
            className={+text === +curPage ? Active : `${noActive} ${text? 'cursor-pointer' : 'cursor-text'}`}
            onClick={handleChangePage}
        >
            {icon || text}
        </div>
    );
}

export default memo(PageNumber);