import {memo} from 'react';
import { createSearchParams, useSearchParams, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const noActive = 'w-[46px] h-[48px] flex items-center justify-center bg-white hover:bg-gray-300 rounded-md';
const Active = 'w-[46px] h-[48px] flex items-center justify-center bg-[#f13427] hover:opacity-90 text-white rounded-md';

const PageNumber = ({text, curPage, icon, setCurPage}) => {
    // navigate
    const navigate = useNavigate();

    // query parameters
    const [params] = useSearchParams();

    // location
    const location = useLocation();
    
    const append = () => {
        let paramsSearch = [];

        // add parameters query into array
        params.append('page', +text);  
        
        // get all parameters query in URL before and after press
        for (let ps of params.entries()) paramsSearch.push(ps);   

        // convert arr to obj
        let paramsSearchObj = paramsSearch.reduce((obj, i) => {
            if (Object.keys(obj)?.some(item => item === i[0] && item !== 'page')) return {...obj, [i[0]]: [...obj[i[0]], i[1]]}
            return {...obj, [i[0]]: [i[1]]}
          }, {});

        return paramsSearchObj;
    }

    // create query parameters (by using createSearchParams) in URL
    const handleChangePage = () => {
        if (text) {
            setCurPage(+text);
            navigate({
                pathname: location.pathname,
                search: createSearchParams(append()).toString()
            });
        }
    }

    return (
        <button 
            className={+text === +curPage ? Active : `${noActive} ${text? 'cursor-pointer' : 'cursor-text'}`}
            onClick={handleChangePage}
        >
            {icon || text}
        </button>
    );
}

export default memo(PageNumber);