import React from 'react';
import pageNotFound from '../../images/notFound.png'

const NotFound = () => {
    return (
        <div className='my-5 py-2' >
            <h2> Opsssss! Page not Found</h2>
            <img src={pageNotFound} alt="" />
        </div>
    );
};

export default NotFound;