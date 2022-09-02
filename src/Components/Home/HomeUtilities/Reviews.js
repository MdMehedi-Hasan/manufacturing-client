import React from 'react';
import ReviewSlider from './ReviewSlider';

const Reviews = () => {
    return (
        <div className='py-36 bg-gradient-to-t from-amber-500 to-amber-100'>
            <h1 className='text-center text-4xl text-amber-500 '>We always admire customer feedbacks</h1>
            <p className=' text-center font-bold'>Some of our happy cilents</p>
            <div className='w-12 bg-slate-400 rounded h-1 mx-auto mb-10 mt-2'></div>
            <ReviewSlider/>
        </div>
    );
};

export default Reviews;