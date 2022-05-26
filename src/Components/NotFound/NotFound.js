import React from 'react';
import image from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-48 lg:mt-0'>
            <img className='w-2/4 mx-auto' src={image} alt="" />
            <h1 className='text-2xl text-amber-500 text-center'>Opps..! The page you are searching for does not exist.</h1>
        </div>
    );
};

export default NotFound;