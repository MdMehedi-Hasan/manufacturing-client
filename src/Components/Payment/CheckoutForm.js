import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const CheckoutForm = ({ productDetails }) => {
    const [user] = useAuthState(auth);
    console.log(productDetails);
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [success,setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const { productName, productPrice } = productDetails
    let price = parseInt(productPrice)

    useEffect(() => {
        if (price) {
            fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
        }
        
    }, [productPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error.message);
        } else {
            setCardError('')
        }

        setSuccess('');
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productName,
                        email:user?.email,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            console.log(paymentIntent);
            setSuccess('Congratulations! Your payment is completed.')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-accent mt-5 w-24' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {success && <p className='text-green-600'>{success}</p>}
        </div>
    );
};

export default CheckoutForm;