import React from 'react';

const MAp = () => {
    return (
        <div className='mt-36'>
            <h1 className='text-6xl text-center text-amber-500 '>We locate here</h1>
            <div className='w-12 bg-slate-400 rounded h-1 mx-auto mb-10 mt-2'></div>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116811.3781736735!2d90.374144!3d23.805952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1653551520736!5m2!1sen!2sbd" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
        </div>
    );
};

export default MAp;