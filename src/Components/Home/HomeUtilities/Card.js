import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ service }) => {
    const { productName,productImage, details, productPrice,productQnty,productMinOrder } = service
    console.log(service);
    const navigate = useNavigate();
    const handleBuy = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-auto bg-base-100 shadow-xl mx-2 mb-4" data-aos="zoom-in" data-aos-duration="1000">
            <figure className="px-10 pt-10">
                <img src={productImage} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body text-left bg-amber-500 text-white">
                <h2 className="card-title">{productName}</h2>
                <p>{details}</p>
                <p><span className='font-bold'>Available:</span> {productQnty} pcs <sub>(minimum {productMinOrder} pcs)</sub></p>
                <p><span className='font-bold'>Price:</span> {productPrice}</p>
                <div className="card-actions mx-auto w-2/4">
                    <button onClick={() => handleBuy(service._id)} className="btn btn-outline border-white text-white w-full mt-5 hover:bg-amber-400 hover:text-black ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;