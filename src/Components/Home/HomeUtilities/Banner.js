import React from 'react';
import banner from '../../../images/banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'


const Banner = () => {
    AOS.init();
    return (
        <div className='h-96' style={{ backgroundImage: `url('${banner}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full overlay'>
                <div className='lg:w-2/3 flex flex-col justify-center items-center pt-5'>
                    <h1 className='text-orange-100 lg:text-4xl lg:text-left lg:ml-10 text-center text-xl' data-aos="fade-right" data-aos-once="false" data-aos-duration="500" data-aos-easing="ease-in"
                        data-aos-mirror="true"> Welcome to Wrench &amp; Screws! We manufacture tools for your daily needs.
                    </h1>
                </div>
                <p data-aos="fade-right" data-aos-once="false" data-aos-duration="1000" data-aos-easing="ease-in"
                    data-aos-mirror="true" data-aos-delay="500" className='lg:ml-10 text-center lg:text-left text-white  mt-10 lg:w-3/4'>From manufacturing tools, such as box wrenches and other work tools, electric cutting tools such as cable cutters and various industrial edged tools to machine parts, we provide development, design, manufacturing, inspection and packaging services of all OEM, import and export products.</p>
            </div>


        </div>
    );
};

export default Banner;