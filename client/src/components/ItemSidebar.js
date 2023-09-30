import React, {memo} from 'react';
import icons from '../utils/icons';
import { formatVietnameseToString } from '../utils/Common/formatVietnameseToString';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";


const {GrNext} = icons;

// isDouble (user create name) - thuộc tính đế biết rằng cần hiện thị chia làm 2 cột
const ItemSidebar = ({content, title, isDouble, type}) => {
    // dispatch
    const dispatch = useDispatch();

    // navigate
    const navigate = useNavigate();

    // location
    const location = useLocation();

    const formatContent = () => {
        const oddEl = content?.filter((item, index) => index%2 !== 0);
        const evenEl = content?.filter((item, index) => index%2 === 0);
        const formatContent = evenEl?.map((item, index) => ({
            left: item,
            right: oddEl[index]
        }));

        return formatContent;
    }

    const handleFilterPost = (code) => {
        dispatch(actions.getPostsLimit({[type]: code}));
        navigate({
            pathname: location.pathname,
            search: createSearchParams({
                type: code
            }).toString()
        });
    }

    return (
        <div className='p-4 rounded-md bg-white'>
            <h3 className='text-lg font-semibold mb-3'>{title}</h3>
            {
                isDouble ? 
                <div className='flex flex-col gap-2'>
                    {content?.length > 0 && formatContent().map((item, index) => 
                        <div key={index} className='flex items-center '>
                            <div 
                                className='flex flex-1 gap-1 items-center cursor-pointer hover:text-orange-600 border-b border-gray-200 pb-1 border-dashed'
                                onClick={() => handleFilterPost(item.left.code)}
                            >
                                <GrNext size='10px'/>
                                <p>{item?.left.value}</p>
                            </div>
                            <div 
                                className='flex flex-1 gap-1 items-center cursor-pointer hover:text-orange-600 border-b border-gray-200 pb-1 border-dashed'
                                onClick={() => handleFilterPost(item.right.code)}
                            >
                                <GrNext size='10px'/>
                                <p>{item?.right.value}</p>
                            </div>
                        </div>
                    )}
                </div>
                :
                <div className='flex flex-col gap-2'>
                    {content?.length > 0 && content.map((item, i) => 
                        <Link 
                            to={`${formatVietnameseToString(item.value)}`}
                            key={i} 
                            className='flex gap-1 items-center cursor-pointer hover:text-orange-600 border-b border-gray-200 pb-1 border-dashed'
                        >
                            <GrNext size='10px'/>
                            <p>{item.value}</p>
                        </Link>
                    )}
                </div>
            }
        </div>
    );
}

export default memo(ItemSidebar);