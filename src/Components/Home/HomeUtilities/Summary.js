import { Icon } from '@iconify/react';
import React from 'react';
import map from '../../../images/map.jpg'

const Summary = () => {
    return (
        <div className='bg-white my-52' style={{ backgroundImage: `url('${map}')`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <h1 className='w-2/4 text-4xl ml-14 py-12' data-aos="zoom-out-right">Our professional team works to increase productivity and cost effectiveness on the market.</h1>
        <div className='flex justify-center'>
            <div className="stats stats-vertical lg:stats-horizontal text-center w-11/12 bg-transparent mb-10">

                <div className="stat">
                    <div className="mx-auto text-4xl"><Icon icon="akar-icons:cart" /></div>
                    <div className="stat-title">Orders</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat">
                <div className="mx-auto text-4xl"><Icon icon="bxs:purchase-tag" /></div>
                    <div className="stat-title">New Buyers</div>
                    <div className="stat-value">4,200</div>
                </div>

                <div className="stat">
                <div className="mx-auto text-4xl"><Icon icon="fluent:people-community-28-filled" /></div>
                    <div className="stat-title">Existing Buyers</div>
                    <div className="stat-value">1,200</div>
                </div>

                </div>
                
            </div>
            <div className='grid grid-cols-4 gap-4 mx-10'>
                <div className='mb-[-100px] h-40 text-4xl hover:-translate-y-2 duration-200 bg-amber-100 shadow flex items-center justify-center'><Icon icon="logos:booqable" /></div>
                <div className='mb-[-100px] h-40 text-4xl hover:-translate-y-2 duration-200 bg-amber-100 shadow flex items-center justify-center'><Icon icon="logos:chargebee" /></div>
                <div className='mb-[-100px] h-40 text-4xl hover:-translate-y-2 duration-200 bg-amber-100 shadow flex items-center justify-center'><Icon icon="logos:delighted" /></div>
                <div className='mb-[-100px] h-40 text-4xl hover:-translate-y-2 duration-200 bg-amber-100 shadow flex items-center justify-center'><Icon icon="logos:behance" /></div>
            </div>
            </div>
    );
};

export default Summary;