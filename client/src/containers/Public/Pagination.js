import React from 'react';
import { PageNumber } from '../../components';
import { useSelector } from 'react-redux';
import icons from '../../utils/icons';

const {GrNext} = icons;

const Pagination = ({number}) => {
    // get count, posts from postReudcer in redux store
    const {count, posts} = useSelector(state => state.post);

    const handlePageNumber = () => {
        let max = Math.floor(count / posts.length);
        let arrNum = [];

        for (let i = 1; i <= max; i++) {
            arrNum.push(i);
        }

        return arrNum.length > 3 ? arrNum.filter(i => i < 4) : arrNum
    }

    return (
        <div className='flex items-center justify-center gap-2 py-5'>
            {handlePageNumber().length > 0 && handlePageNumber().map(item =>
                <PageNumber 
                    key={item}
                    number={item}
                />
            )}
            <PageNumber number={'...'} />
            <PageNumber number={<GrNext />} />
        </div>
    );
}

export default Pagination;