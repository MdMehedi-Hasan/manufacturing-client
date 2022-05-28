import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { Icon } from '@iconify/react';
import image from '../../images/delivery-bg.png'
const PurchaseDetails = () => {
    const [user] = useAuthState(auth);
    const [info, setInfo] = useState([])
    const [error, setError] = useState('')
    const [products, setProducts] = useState([]);
    const [orderInfo, setOrderInfo] = useState({})
    const { id } = useParams();
    const email = user?.email
    const status = 'pending'
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`https://blooming-ravine-00694.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        fetch('https://blooming-ravine-00694.herokuapp.com/user', {
            method: "GET",
            headers: {
                'authorization': `${localStorage.getItem('accessToken')}`,
                'email': `${user.email}`
            }
        })
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])
    const handleOrder = (e) => {
        e.preventDefault();
        const orderQnty = e.target.orderQnty.value;
        fetch('https://blooming-ravine-00694.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ products, orderQnty, email, status }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setOrderInfo(data)
            })
        e.target.reset()
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        const address = e.target.address.value
        const number = e.target.number.value
        const email = user.email
        fetch('https://blooming-ravine-00694.herokuapp.com/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address, number, email }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        e.target.reset();
    }
    const handleOrderQnt = (e) => {
        if (e.target.value < parseInt(products.productMinOrder)) {
            return setError("Minimum order quantity hasn't reached.")
        }
        else if (e.target.value > parseInt(products.productQnty)) {
            return setError("Maximum order quantity exceeded.")
        }
        else (
            setError(false)
        )
    }
    if (orderInfo?.insertedId) {
        navigate(`/payment/${orderInfo.insertedId}`)
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row items-start">
                <img src={products?.productImage} className="lg:max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className='pl-5  lg:border-l-2'>
                    <h1 className="text-5xl font-bold">{products?.productName}</h1>
                    <p className="py-6">{products?.details}</p>
                    <p className='mt-5'><span className='font-bold'>Price:</span>  {products?.productPrice}</p>
                    <p className='mt-5'><span className='font-bold'>Avilable:</span>  {products?.productQnty} pcs</p>
                    <p className='mt-5 mb-5'><span className='font-bold'>Minimum order:</span>  {products?.productMinOrder} pcs</p>
                    <form onSubmit={handleOrder} className="flex flex-col">
                        <input onChange={handleOrderQnt} type="text" name='orderQnty' className='input input-bordered w-24 mb-5' />
                        {error && <span className='mb-3 text-red-500'>({error})</span>}
                        <input type="submit" value="Place order" className="btn btn-warning w-28" disabled={error} />
                    </form>
                </div>
                <div className='lg:border-l-2 pl-2'>
                    <img src={image} alt="" />
                    <div>
                        <div className='flex items-center'><span className='text-orange-500 mr-2'><Icon icon="bi:person-fill" /></span><span>{user?.displayName}</span></div>
                        <div className='flex items-center'><span className='text-orange-500 mr-2'><Icon icon="dashicons:email" /></span><span>{user?.email}</span></div>
                        <div className='flex items-center'><span className='text-orange-500 mr-2'><Icon icon="carbon:phone-filled" /></span><span>{info ? info.number : "N/A"}</span></div>
                        <div className='flex items-center'><span className='text-orange-500 mr-2'><Icon icon="el:map-marker" /></span><span>{info ? info.address : "N/A"}</span></div>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm">
                        <div className="card-body p-2 mt-5">
                            <form onSubmit={handleUpdate}>
                                <div className="form-control">
                                    <input type="text" name="address" placeholder="Your address" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-3">
                                    <input type="number" name="number" placeholder="Phone number" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Update Info" className="btn btn-warning" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseDetails;