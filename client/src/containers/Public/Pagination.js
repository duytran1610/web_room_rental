import { useEffect, useState } from 'react';
import { PageNumber } from '../../components';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import icons from '../../utils/icons';

const { GrNext, GrPrevious } = icons;

const Pagination = () => {
    // query parameters
    const [params] = useSearchParams();

    // get count, posts from postReudcer in redux store
    const { count, posts } = useSelector(state => state.post);

    // control list pages
    const [arrPage, setArrPage] = useState([]);

    // page current
    const [curPage, setCurPage] = useState(1);

    const [isHideStart, setIsHideStart] = useState(false);
    const [isHideEnd, setIsHideEnd] = useState(false);

    // Update value for page
    useEffect(() => {
        let page = params.get('page');
        page && +page !== curPage && setCurPage(+page);
        !page && setCurPage(1);
    }, [params, curPage]);

    // set value for list pages
    useEffect(() => {
        let maxPage = Math.ceil(count / process.env.REACT_APP_LIMIT_POSTS);
        let start = curPage - 1 > 1 ? curPage - 1 : 1;
        let end = curPage + 1 > maxPage ? maxPage : curPage + 1;
        let temp = [];
        
        if (maxPage <= 5) {
            start = 1;
            end = maxPage;
        }

        for (let i = start; i <= end; i++) temp.push(i);

        setArrPage(temp);

        start === 1 ? setIsHideStart(true) : setIsHideStart(false);
        end === maxPage ? setIsHideEnd(true) : setIsHideEnd(false);

    }, [count, posts, curPage]);

    return (
        <div className='flex items-center justify-center gap-2 py-5'>
            {!isHideStart && <PageNumber icon={<GrPrevious />} text={1} setCurPage={setCurPage} />}
            {!isHideStart && <PageNumber icon={'...'} />}
            {arrPage.length > 0 && arrPage.map(item =>
                <PageNumber
                    key={item}
                    text={item}
                    setCurPage={setCurPage}
                    curPage={curPage}
                />
            )}
            {!isHideEnd && <PageNumber icon={'...'} />}
            {!isHideEnd && <PageNumber icon={<GrNext />} text={Math.ceil(count / process.env.REACT_APP_LIMIT_POSTS)} setCurPage={setCurPage} />}
        </div>
    );
}

export default Pagination;