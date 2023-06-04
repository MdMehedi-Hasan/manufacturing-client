import React from 'react';
import image from '../../../images/b1.jpg'
import Slider from './Slider';

const Categories = () => {
    return (
        <div className='h-[500px]' style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }}>
            <div className='bg-[#000000b8] h-full'>
                <div className='container mx-auto lg:h-full w-auto flex flex-col lg:flex-row lg:items-center lg:justify-between px-10'>
                    <div className='lg:w-6/12 bg-transparent pb-2 pr-3 text-white'>
                        <h1 className='text-4xl lg:text-6xl font-semibold mb-10 text-center lg:text-left'>Categories</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a provident alias totam dolore, odio unde quisquam natus consectetur porro laboriosam doloribus officiis illum deserunt cum nostrum recusandae? Expedita, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui vel quo, culpa, repellat temporibus quidem quod magni dolores, laborum perferendis error deleniti nesciunt ipsa numquam inventore voluptatem commodi eum.</p>
                    </div>
                    <div className='w-4/12'>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;