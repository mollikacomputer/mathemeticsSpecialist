import React from 'react';
const Banner = () => {
    const bannerImage = `https://i.ibb.co/Wxsr3R6/pic2.jpg`
    return (
        <div className='banner'>
            <img className='vw-100' src={bannerImage} alt="" />
        </div>
    );
};

export default Banner;