import React from 'react';
import {ColorRing} from 'react-loader-spinner';

// component create hiệu ứng load
const Loading = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#ccc', '#ccc', '#ccc', '#ccc', '#ccc']}
        />
    );
}

export default Loading;