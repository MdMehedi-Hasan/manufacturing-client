import React from 'react';
import ReviewSlider from './ReviewSlider';
import stars from '../../../images/star.png'

const Reviews = () => {
    return (
        <div className='pb-10 bg-gradient-to-t from-amber-400 to-amber-100'>
            <div className='py-24' style={{ backgroundImage: `url('${stars}')`, backgroundRepeat: 'no-repeat', backgroundPosition: "center"}}>
            <p className=' text-center font-bold'>Some of our happy cilents</p>
            <h1 className='text-center text-2xl font-semibold'>We always admire customer feedbacks</h1>
            <div className='w-12 bg-slate-400 rounded h-1 mx-auto mb-10 mt-2'></div>
            </div>
            <ReviewSlider/>
        </div>
    );
};

export default Reviews;