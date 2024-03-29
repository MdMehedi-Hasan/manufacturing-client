import React from 'react';
import banner from '../../../images/banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css'
import { Icon } from '@iconify/react';


const Banner = () => {
    AOS.init();
    return (
        <div className='h-screen lg:flex items-center' style={{ backgroundImage: `url('${banner}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='container mx-auto h-fit lg:w-11/12 mb-24'>
                <div className='lg:w-2/3 pt-5'>
                    <h1 className='text-orange-100 lg:text-4xl text-left lg:ml-10 text-xl mt-10 lg:mt-0' data-aos="fade-right" data-aos-once="false" data-aos-duration="500" data-aos-easing="ease-in"
                        data-aos-mirror="true"> <span className='block lg:text-6xl text-4xl ml-5 lg:ml-0'><span className='block lg:text-4xl text-3xl pb-5'>Welcome to</span> <span className='text-amber-400'>Wrench</span> &amp; <span>Screws!</span></span> <span className='pt-5 block lg:text-2xl text-xl mx-3 lg:mx-0 ml-5'>We manufacture tools for your daily needs.</span>
                    </h1>
                </div>
                <p data-aos="fade-right" data-aos-once="false" data-aos-duration="1000" data-aos-easing="ease-in"
                    data-aos-mirror="true" data-aos-delay="500" className='lg:ml-10 lg:text-left text-white leading-8 mt-10 lg:w-3/4 text-sm lg:text-base mx-5'>From manufacturing tools, such as box wrenches and other work tools, <br /> electric cutting tools such as cable cutters and various industrial edged tools <br /> to machine parts, we provide development, design, manufacturing, inspection <br /> and packaging services of all OEM, import and export products.</p>
                <button className="btn btn-outline btn-warning lg:ml-10 lg:mt-5 mt-10 mx-auto flex">Learn More<Icon className="text-lg ml-2" icon="akar-icons:circle-chevron-right-fill" /></button>
            </div>
        </div>
    );
};

export default Banner;