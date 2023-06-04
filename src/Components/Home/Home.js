import React, { useEffect, useState } from 'react';
import Categories from './HomeUtilities/Categories';
import Banner from './HomeUtilities/Banner';
import Card from './HomeUtilities/Card';
import Footer from './HomeUtilities/Footer';
import Summary from './HomeUtilities/Summary';
import Reviews from './HomeUtilities/Reviews';
import MAp from './HomeUtilities/MAp';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        /* fetch('https://wrench-and-screws.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data)) */
        const fetchData = async () => {
            const data = await fetch('https://wrench-and-screws.vercel.app/products');
            const json = await data.json();
            setProducts(json)
        }
        fetchData()
            .catch(console.error);;
    }, [])
    return (
        <div className='montserrat'>
            <Banner></Banner>
            <div className='container mx-auto py-28 text-center'>
                <p className='text-center text-amber-500'>Explore our products</p>
                <h1 className='text-4xl text-[#1A222B] font-bold'>Our Products</h1>
                <div className='w-12 h-1 rounded-lg bg-amber-400 mb-16 mt-3 mx-auto'></div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                    {
                        products.map(product => <Card product={product} key={product._id}></Card>)
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