import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { Icon } from '@iconify/react';
import image from '../../images/delivery-bg.png'
const PurchaseDetails = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user, loading, error);
    const [products, setProducts] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row items-start">
                <img src={products?.image} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div className='border-l-2 pl-5'>
                    <h1 className="text-5xl font-bold">{products?.name}</h1>
                    <p className="py-6">{products?.details}</p>
                    <button className="btn btn-primary">Place order</button>
                </div>
                <div className='border-l-2 pl-2'>
                    <img src={image} alt="" />
                    <div>
                        <div className='flex items-center'><span className='text-orange-500 '><Icon icon="bi:person-fill" /></span><span>{user?.displayName}</span></div>
                        <div className='flex items-center'><span><Icon icon="dashicons:email" /></span><span>{user?.email}</span></div>
                        <div><span><Icon icon="carbon:phone-filled" /></span><span></span></div>
                        <div><span><Icon icon="el:map-marker" /></span><span></span></div>
                        <div><span></span><span></span></div>
                        <div><span></span><span></span></div>
                        <div><span></span><span></span></div>
                        <div><span></span><span></span></div>
                        <div><span></span><span></span></div>
                        <div><span></span><span></span></div>
                    </div>
                <div class="card flex-shrink-0 max-w-sm">
                    <div class="card-body">
                        <div class="form-control">
                            {/* <label class="label">
                                <span class="label-text">Email</span>
                            </label> */}
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            {/* <label class="label">
                                <span class="label-text">Password</span>
                            </label> */}
                            <input type="text" placeholder="password" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Update info</button>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default PurchaseDetails;