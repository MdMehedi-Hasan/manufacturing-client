import { Icon } from '@iconify/react';
import React from 'react';
import map from '../../../images/map.jpg'

const Summary = () => {
    return (
        <div className='bg-white my-52' style={{ backgroundImage: `url('${map}')`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <h1 className='lg:w-2/4 text-4xl lg:ml-14 ml-5 py-12' data-aos="zoom-out-right" data-aos-duration="1000">Our professional team works to increase productivity and cost effectiveness on the market.</h1>
        <div className='flex justify-center'>
            <div className="stats stats-vertical lg:stats-horizontal text-center w-11/12 bg-transparent mb-10">

                <div className="stat">
                    <div className="mx-auto text-4xl text-amber-500"><Icon icon="akar-icons:cart" /></div>
                    <div className="text-amber-500 font-bold text-xl">Orders</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat">
                <div className="mx-auto text-4xl text-amber-500"><Icon icon="bxs:purchase-tag" /></div>
                    <div className="text-amber-500 font-bold text-xl">New Buyers</div>
                    <div className="stat-value">4,200</div>
                </div>

                <div className="stat">
                <div className="mx-auto text-4xl text-amber-500"><Icon icon="fluent:people-community-28-filled" /></div>
                    <div className=" text-amber-500 font-bold text-xl">Existing Buyers</div>
                    <div className="stat-value">1,200</div>
                </div>

                </div>
                
            </div>
            <div className='grid grid-cols-4 lg:gap-4 gap-2 lg:mx-10'>
                <div className='lg:mb-[-100px] mb-[-15px] h-16 lg:h-40 text-4xl hover:-translate-y-2 duration-200 bg-gradient-to-t from-amber-400 to-amber-100 shadow flex items-center justify-center p-5 lg:p-0'><Icon icon="logos:booqable" /></div>
                <div className='lg:mb-[-100px] mb-[-15px] h-16 lg:h-40 text-4xl hover:-translate-y-2 duration-200 bg-gradient-to-t from-amber-400 to-amber-100 shadow flex items-center justify-center p-5 lg:p-0'><Icon icon="logos:chargebee" /></div>
                <div className='lg:mb-[-100px] mb-[-15px] h-16 lg:h-40 text-4xl hover:-translate-y-2 duration-200 bg-gradient-to-t from-amber-400 to-amber-100 shadow flex items-center justify-center p-5 lg:p-0'><Icon icon="logos:delighted" /></div>
                <div className='lg:mb-[-100px] mb-[-15px] h-16 lg:h-40 text-4xl hover:-translate-y-2 duration-200 bg-gradient-to-t from-amber-400 to-amber-100 shadow flex items-center justify-center p-5 lg:p-0'><Icon icon="logos:behance" /></div>
            </div>
            </div>
    );
};

export default Summary;