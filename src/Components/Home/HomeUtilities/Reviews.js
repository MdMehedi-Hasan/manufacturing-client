import React, { useEffect, useState } from 'react';
import ReviewSlider from './ReviewSlider';

const Reviews = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        fetch('https://blooming-ravine-00694.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])
    return (
        <div className='py-36'>
            <h1 className='text-center text-4xl text-amber-500 '>We always admire customer feedbacks</h1>
            <p className=' text-center font-bold'>Some of our happy cilents</p>
            <div className='w-12 bg-slate-400 rounded h-1 mx-auto mb-10 mt-2'></div>
            <ReviewSlider/>
            {/* <div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5'>
                {feedbacks.map(feedback =>
                    <div key={feedback._id} className="card w-auto shadow-xl p-5 bg-amber-500">
                        <div className='flex items-center'>
                            <div className="avatar">
                                <div className="w-24 h-24 rounded-full">
                                    <img src={feedback.image} alt="" />
                                </div>
                            </div>
                            <div className='ml-5'>
                                <h2 className="card-title text-left">{feedback.name}</h2>
                                <sub>{feedback.email}</sub>
                            </div>
                        </div>
                        <div className="card-body p-2">

                            <p>{feedback.feedback}</p>
                            <p><span className='font-bold'>Ratings:</span> {feedback.ratings} star</p>
                        </div>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default Reviews;