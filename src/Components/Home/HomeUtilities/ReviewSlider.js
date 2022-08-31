import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";



const ReviewSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="p-28 bg-yellow-300">Slide 1</SwiperSlide>
                <SwiperSlide className="p-28 bg-yellow-300">Slide 2</SwiperSlide>
                <SwiperSlide className="p-28 bg-yellow-300">Slide 3</SwiperSlide>
                <SwiperSlide className="p-28 bg-yellow-300">Slide 4</SwiperSlide>
                <SwiperSlide className="p-28 bg-yellow-300">Slide 5</SwiperSlide>
                <SwiperSlide className="p-28 bg-yellow-300">Slide 6</SwiperSlide>
                <SwiperSlide className="p-28 bg-yellow-300">Slide 7</SwiperSlide>
                <SwiperSlide className="p-28 bg-yellow-300">Slide 8</SwiperSlide>
                <SwiperSlide className="p-28 bg-yellow-300">Slide 9</SwiperSlide>
            </Swiper>
        </>
    );
};

export default ReviewSlider;