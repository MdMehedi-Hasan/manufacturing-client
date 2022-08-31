import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
import image1 from "../../../images/slider image/Driller.jpg"
import image2 from "../../../images/slider image/rsz_630ef4b59048b.jpg"
import image3 from "../../../images/slider image/house-tools.jpg"
import image4 from "../../../images/slider image/industrial-tool.jpg"
import image5 from "../../../images/slider image/wrench.jpg"
import image6 from "../../../images/slider image/cutting-tools.jpg"


const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="p-5 bg-white" alt="" width="100%" src={image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="p-5 bg-white" alt="" width="100%" src={image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="p-5 bg-white" alt="" width="100%" src={image3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="p-5 bg-white" alt="" width="100%" src={image4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="p-5 bg-white" alt="" width="100%" src={image5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="p-5 bg-white" alt="" width="100%" src={image6} />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;