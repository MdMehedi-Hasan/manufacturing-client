import React, { useEffect, useState } from 'react';
import Banner from './HomeUtilities/Banner';
import Card from './HomeUtilities/Card';
import Footer from './HomeUtilities/Footer';
import Summary from './HomeUtilities/Summary';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            
            <h1 className='text-8xl text-center'>Products</h1>
            <div className='grid grid-cols-4 gap-8'>
            {
                services.map(service=><Card service={service} key={service._id}></Card>)
            }
            </div>
            <h1 className='text-8xl text-center'>Summary</h1>
            <Summary></Summary>
            <h1 className='text-8xl text-center'>Reviews</h1>
            <h1 className='text-8xl text-center'>Top buyers</h1>
            <h1 className='text-8xl text-center'>Map</h1>
            <Footer></Footer>
            </div>
    );
};

export default Home;