import React from 'react';
import './Service.css'
const Service = (props) => {
    const {title, price, description,picture} = props.service;
    return (
        <div className='my-5'>
            <img className='img-fluid' src={picture} alt="" />
            <h2> {title} </h2>
            <h5> {description}  </h5>
        </div>
    );
};

export default Service;