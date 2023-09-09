import {useEffect, useState} from 'react';
import { PageNumber } from '../../components';
import { useSelector } from 'react-redux';
import icons from '../../utils/icons';

const {GrNext, GrPrevious} = icons;

const Pagination = ({page}) => {
    // get count, posts from postReudcer in redux store
    const {count, posts} = useSelector(state => state.post);

    // control list pages
    const [arrPage, setArrPage] = useState([]);

    // page current
    const [curPage, setCurPage] = useState(+page || 1);

    const [isHideStart, setIsHideStart] = useState(false);
    const [isHideEnd, setIsHideEnd] = useState(false);

    useEffect(() => {
        let maxPage = Math.floor(count / posts.length);
        let start = curPage - 1 > 1 ? curPage - 1 : 1;
        let end = curPage + 1 > maxPage ? maxPage : curPage + 1;
        let temp = [];

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
            {!isHideEnd && <PageNumber icon={<GrNext />} text={Math.floor(count / posts.length)} setCurPage={setCurPage} />}
        </div>
    );
}

export default Pagination;