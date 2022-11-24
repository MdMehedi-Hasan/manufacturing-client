import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import image from '../../../images/yellow-comma.png'

const ReviewSlider = () => {
    const [feedbacks, setFeedbacks] = useState([])
    useEffect(() => {
        /* fetch('https://blooming-ravine-00694.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setFeedbacks(data)) */
            const fetchData = async () => {
                const data = await fetch('https://blooming-ravine-00694.herokuapp.com/reviews');
                const json = await data.json();
                setFeedbacks(json)
            }
                fetchData()
                .catch(console.error);;
    }, [])
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                centeredSlides={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={false}
                modules={[Navigation, Autoplay]}
                className="mySwiper !pt-16"
            >
                {feedbacks.map(feedback =>
                    <SwiperSlide className="h-full">
                        <div key={feedback._id} className='bg-white text-black rounded-lg'>
                            <div className="avatar flex justify-center">
                                <div className="w-24 rounded-full ring ring-white ring-offset-base-100 ring-offset-2 mt-[-50px]">
                                    <img src={feedback.image} alt='' />
                                </div>
                            </div>
                            <h1 className='text-center font-semibold pt-4'>{feedback.name}</h1>
                            <h5 className='text-center text-sm text-slate-300 pb-5'>{feedback.email}</h5>
                            <div className="flex justify-center items-center px-5">
                                <div className="grid border-t w-full mr-0 border-amber-200 place-items-center"></div>
                                <img className="divider divider-horizontal w-24 m-0 mb-5" src={image} alt="" />
                                <div className="grid border-t w-full mr-0 border-amber-200 place-items-center"></div>
                            </div>
                            <p className='px-5 text-center'>{feedback.feedback}</p>
                            <div className='flex justify-center py-4'><Icon icon="emojione:star" /><Icon icon="emojione:star" /><Icon icon="emojione:star" /><Icon icon="emojione:star" /><Icon icon="emojione:star" /></div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
};

export default ReviewSlider;