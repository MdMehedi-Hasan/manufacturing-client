import React from 'react';
import allTools from '../../../images/allTools.jpg'
import saw from '../../../images/saw.png'
import hammer from '../../../images/hammer.jpg'
import drill from '../../../images/drill.png'
import screw from '../../../images/screwDriver.png'

const Categories = () => {
    return (
        <div className='py-24'>
            <div className='bg-amber-500' style={{ backgroundImage: `url('${allTools}')`, backgroundSize: 'cover' }}>
                <h1 className='lg:text-6xl text-4xl py-4 ml-10 text-white'>Our Categories</h1>
                <div className='grid grid-cols-4 lg:gap-10 gap-2 h-28 py-5'>
                    <div className='flex flex-col items-center bg-white border border-amber-500 h-36 lg:h-72'><img className='w-full lg:h-48 h-16' src={drill} alt="" /> <h1 className='lg:text-2xl lg:font-bold text-center my-8'>Measuring tools</h1>
                    </div>
                    <div className='flex flex-col items-center bg-white border border-amber-500 h-36 lg:h-72'><img className='w-full lg:h-48 h-16' src={screw} alt="" /> <h1 className='lg:text-2xl lg:font-bold text-center my-8'>Holding tools</h1>
                    </div>
                    <div className='flex flex-col items-center bg-white border border-amber-500 h-36 lg:h-72'><img className=' w-full lg:h-48 h-16' src={saw} alt="" /><h1 className='lg:text-2xl lg:font-bold text-center my-8'>Cutting tools </h1>
                    </div>
                    <div className='flex flex-col items-center bg-white border border-amber-500 h-36 lg:h-72'><img className='w-full lg:h-48 h-16' src={hammer} alt="" /><h1 className='lg:text-2xl lg:font-bold text-center my-8'>Hammering tools</h1> </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;