import React from 'react';
import Card from './Card'
import WebCard from './WebCard';

const MyPortfolio = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
                <div>
                    <h1></h1>
                    <p></p>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-10'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className='flex justify-around'>
                <div>
                    <h1>Image here</h1>
                </div>
                <div className='flex flex-col w-1/2'>
                    <progress class="progress progress-accent w-full mb-10 h-5" value="0" max="100"></progress>
                    <progress class="progress progress-accent w-full mb-10 h-5" value="10" max="100"></progress>
                    <progress class="progress progress-accent w-full mb-10 h-5" value="40" max="100"></progress>
                    <progress class="progress progress-accent w-full mb-10 h-5" value="70" max="100"></progress>
                    <progress class="progress progress-accent w-full mb-10 h-5" value="100" max="100"></progress>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-10">
            <WebCard></WebCard>
            <WebCard></WebCard>
            <WebCard></WebCard>
            </div>
            <div>
                Personal information
            </div>
        </div>
    );
};

export default MyPortfolio;