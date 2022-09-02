import React from 'react';

const MAp = () => {
    return (
        <div className='mt-36 mx-10'>
            <div className='grid lg:grid-cols-2 gap-16'>
                <div>
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116811.3781736735!2d90.374144!3d23.805952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1653551520736!5m2!1sen!2sbd" height="350" width="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='relative'></iframe>
                    <div className='flex justify-end'>
                    <div className='bg-amber-500 w-96 h-80 mt-[-250px]'></div>
                    </div>
                </div>
                <div>
                    <h1 className='text-6xl text-amber-500 '>We locate here</h1>
                    <div className='w-8/12 bg-slate-400 rounded h-1 mb-10 mt-2'></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias earum et mollitia fugiat suscipit explicabo provident officia obcaecati hic. Mollitia fuga deserunt ullam vel veritatis totam ducimus dolorem suscipit.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil commodi repellendus earum impedit alias? Omnis, officia dolor ipsum temporibus praesentium cumque sunt magnam doloribus libero delectus, nobis obcaecati ipsa deleniti.</p>
                </div>
            </div>
        </div>
    );
};

export default MAp;