import { Icon } from '@iconify/react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../images/4.png'


const MyPortfolio = () => {
    AOS.init();
    return (
        <div className='bg-sky-900'>
            <div className='flex justify-between h-96 text-white items-end'>
                <div className='mb-36 lg:ml-20'><h1 className='lg:text-4xl mb-5 font-bold' data-aos="fade-right" data-aos-duration="1000">Hi, I am Md. Mehedi Hasan.</h1>
                <p className='lg:text-2xl' data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">I am a full stack web developer.I use MERN stack to develope apps.</p></div>
                <div className="avatar">
                    <div className="w-48 h-48 rounded-full">
                    <img src={image} alt="" />
                    </div>
                </div>
            </div>
            <h1 className='text-center text-black text-6xl mt-36 mb-5'>Technologies i use</h1>
            <div className='w-1/4 h-1 bg-cyan-900 mb-20 rounded mx-auto'></div>
            <div className='grid max-w-full grid-cols-4 gap-10 mb-28'>
                <div className="card-body lg:text-6xl lg:mx-auto bg-transparent max-w-sm hover:translate-y-4">
                    <Icon icon="logos:nodejs" />
                </div>
                <div className="card-body lg:text-6xl lg:mx-auto bg-transparent max-w-sm hover:translate-y-4">
                    <Icon icon="logos:mongodb" />
                </div>
                <div className="card-body lg:text-6xl lg:mx-auto bg-transparent max-w-sm hover:translate-y-4">
                    <Icon icon="logos:react" />
                </div>
                <div className="card-body lg:text-6xl lg:mx-auto bg-transparent max-w-sm hover:translate-y-4">
                    <Icon icon="logos:javascript" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                <div className="card bg-base-100 shadow-xl">
                    <figure className='text-8xl pt-20'><Icon icon="akar-icons:dental" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center mb-5">Dazzle Dentist</h2>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary"><a target="_blank" href="https://assignment-10-d24c7.web.app/"> Visit website</a> </button>
                        </div>
                    </div>
                </div><div className="card bg-base-100 shadow-xl">
                    <figure className='text-8xl pt-20'><Icon icon="noto:wood" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center mb-5">Eastwood</h2>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary"><a target="_blank" href="https://eastwood-e0b30.web.app/"> Visit website</a> </button>
                        </div>
                    </div>
                </div><div className="card bg-base-100 shadow-xl">
                    <figure className='text-8xl pt-20'><Icon icon="ph:buildings-duotone" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center mb-5">Builders</h2>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary"><a target="_blank" href="https://mohammadia-developer.netlify.app/"> Visit website</a> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl text-white pb-5 lg:ml-40 pt-36'>Personal information</h1>
                <div className='pb-5 lg:ml-40 ml-12 text-white'><span className=' fontbold text-2xl'>Name: </span><span> Md. Mehedi Hasan</span></div>
                <div className='pb-5 lg:ml-40 ml-12 text-white'><span className=' fontbold text-2xl'>Email: </span><span> mh19115@gmail.com</span></div>
                <div className='pb-5 lg:ml-40 ml-12 text-white'><span className=' fontbold text-2xl'>Education: </span> B.B.A honours (Undergraduate)<span></span></div>

            </div>
        </div>
    );
};

export default MyPortfolio;