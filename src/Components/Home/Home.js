import React, { useEffect, useState } from 'react';
import Categories from './HomeUtilities/Categories';
import Banner from './HomeUtilities/Banner';
import Card from './HomeUtilities/Card';
import Footer from './HomeUtilities/Footer';
import Summary from './HomeUtilities/Summary';
import Reviews from './HomeUtilities/Reviews';
import MAp from './HomeUtilities/MAp';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    console.log(services)
    return (
        <div className='bg-sky-800'>
            <Banner></Banner>
            <div className='py-28 text-center'>
            <h1 className='border-b-2 border-emerald-900 inline-block text-4xl text-amber-500 font-bold mb-16'>Products we manufacture</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
            {
                services.map(service=><Card service={service} key={service._id}></Card>)
            }
            </div>
            </div>
            <Categories></Categories>
            <Summary></Summary>
            <Reviews></Reviews>
            <MAp></MAp>
            <Footer></Footer>
            </div>
    );
};

export default Home;