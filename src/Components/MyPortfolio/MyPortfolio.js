import { Icon } from '@iconify/react';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../../images/4.png'


const MyPortfolio = () => {
    AOS.init();
    return (
        
        <div>
            <iframe className='h-screen w-full d-block' title='Portfolio' src="https://mehedihasan21.netlify.app/" frameborder="0" ></iframe>
        </div>
    );
};

export default MyPortfolio;