import React from 'react';

const MAp = () => {
    return (
        <div className='container mx-auto mt-36 mb-20'>
            <div className='grid lg:grid-cols-2 gap-16'>
                <div>
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116811.3781736735!2d90.374144!3d23.805952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1653551520736!5m2!1sen!2sbd" height="350" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='relative w-full lg:w-[450px]'></iframe>
                    <div className='flex justify-end'>
                    <div className='bg-gradient-to-r from-amber-400 to-amber-100 w-96 h-80 mt-[-250px] hidden lg:block'></div>
                    </div>
                </div>
                <div className='p-5'>
                    <h1 className='text-6xl text-amber-500 '>We locate here</h1>
                    <div className='w-8/12 bg-slate-400 rounded h-1 mb-10 mt-2'></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias earum et mollitia fugiat suscipit explicabo provident officia obcaecati hic. Mollitia fuga deserunt ullam vel veritatis totam ducimus dolorem suscipit.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil commodi repellendus earum impedit alias? Omnis, officia dolor ipsum temporibus praesentium cumque sunt magnam doloribus libero delectus, nobis obcaecati ipsa deleniti.</p>
                </div>
            </div>
        </div>
    );
};

export default MAp;