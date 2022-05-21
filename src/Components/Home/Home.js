import React, { useEffect, useState } from 'react';
import Card from './HomeUtilities/Card';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://blooming-ravine-00694.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    console.log(services)
    return (
        <div className='grid grid-cols-4 gap-8'>
            {
                services.map(service=><Card></Card>)
            }
        </div>
    );
};

export default Home;