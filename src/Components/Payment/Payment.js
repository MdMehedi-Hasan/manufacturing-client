import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L49RlFe25ae7mIGo8kRbbSJjD0R3QjaU9r8J613UKKOnPrABY9dVuEBq1Jq3iJL8ZPzTUMC451uLeUIvB7ZiOrU00wPWHDkNv');

const Payment = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orderDetails, setOrderDetails] = useState({})
    const [productDetails, setProductDetails] = useState({})
    // console.log(orderDetails);
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://blooming-ravine-00694.herokuapp.com/purchase/${id}`)
            .then(res => res.json())
            .then(data => {
                setOrderDetails(data);
                setProductDetails(data?.products);
            })
    }, [])
    return (
        <div>
            <div className="hero">
                <div className="hero-content">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold">Hello {user?.email}</h1>
                        <p className="py-2 mt-4"><span className='font-bold'>You are going to pay for:</span>  {orderDetails?.products?.productName}</p>
                        <p className="py-2"><span className='font-bold'>Order Id: </span> {orderDetails?._id}</p>
                        <p className="py-2"><span className='font-bold'>Order Quantity:</span>  {orderDetails?.orderQnty} pcs</p>
                        <p className="py-2"><span className='font-bold'>Total amount:</span>  {parseInt(orderDetails?.orderQnty) * parseInt(orderDetails?.products?.productPrice)} (USD)</p>
                        <p className="py-2"><span className='font-bold'>Estimated delivery:</span>  within 15 days. </p>
                    </div>
                </div>
            </div>
            <div className="card max-w-md mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm productDetails={productDetails} orderDetails={orderDetails} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;