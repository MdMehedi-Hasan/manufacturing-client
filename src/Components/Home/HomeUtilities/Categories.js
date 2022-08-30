import React from 'react';
import image from '../../../images/b1.jpg'
import Slider from './Slider';

const Categories = () => {
    return (
        <div className='h-[500px]' style={{ backgroundImage: `url('${image}')`, backgroundSize: 'cover' }}>
            <div className='h-full w-auto bg-[#000000b8] flex items-center justify-between px-10'>
            <div className='w-6/12 bg-transparent pb-2 pr-3 text-white'>
                <h1 className='text-6xl font-semibold mb-10'>Categories</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a provident alias totam dolore, odio unde quisquam natus consectetur porro laboriosam doloribus officiis illum deserunt cum nostrum recusandae? Expedita, nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui vel quo, culpa, repellat temporibus quidem quod magni dolores, laborum perferendis error deleniti nesciunt ipsa numquam inventore voluptatem commodi eum.</p>
            </div>
            <div className='w-4/12'>
                <Slider/>
            </div>
            </div>
        </div>
    );
};

export default Categories;