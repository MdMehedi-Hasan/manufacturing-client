import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [product, setProduct] = useState([])
    console.log(product);
    useEffect(() => {
        fetch('http://localhost:5000/purchase')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            {product.map(p => <div className="card lg:card-side bg-orange-100 shadow-xl mb-5">
                <figure><img className='lg:w-24' src={p.productImage} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{p.productName}</h2>
                    <p>{p.details}</p>
                    <div className="card-actions justify-end items-center">
                        <button className="btn btn-accent">Paid</button>
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default MyOrders;