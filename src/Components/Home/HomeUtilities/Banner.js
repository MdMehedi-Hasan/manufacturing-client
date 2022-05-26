import React from 'react';
import banner from '../../../images/banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'


const Banner = () => {
    AOS.init();
    return (
        <div className='h-96' style={{ backgroundImage: `url('${banner}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {/* <img src={banner} alt="" className='w-full h-80'/> */}
            <div className='w-full h-full overlay'>
                <div className='w-2/3 h-full flex justify-center items-center'>
                    <h1 className='text-orange-100 text-4xl ml-10' data-aos="fade-right" data-aos-once="false" data-aos-duration="1000" data-aos-easing="ease-in-out"
                        data-aos-mirror="true">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptatum dolores autem temporibus, accusamus dolorem omnis harum eius! Asperiores expedita nam amet cum natus itaque, sed modi ipsam illum et. </h1>
                </div>
            </div>


        </div>
    );
};

export default Banner;