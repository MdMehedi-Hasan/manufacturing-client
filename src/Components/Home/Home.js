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
        fetch('https://blooming-ravine-00694.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='bg-sky-800'>
            <Banner></Banner>
            <div className='py-28 text-center'>
                <h1 className='border-b-2 border-emerald-900 inline-block text-4xl text-amber-500 font-bold mb-16'>Products we manufacture</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 '>
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