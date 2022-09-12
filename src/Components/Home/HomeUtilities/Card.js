import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
    const { productName,productImage, details, productPrice,productQnty,productMinOrder } = product
    const navigate = useNavigate();
    const handleBuy = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-auto shadow-2xl lg:mx-2 mb-4" data-aos="zoom-in" data-aos-duration="1000">
            <figure className="max-h-46 p-5 bg-white">
                <img width="200px" height="200px" src={productImage} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body bg-gradient-to-t from-amber-400 to-amber-100 glass hover:bg-gradient-to-t hover:from-amber-400 hover:to-amber-100 p-4 pl-6 text-left text-[#1A222B]">
                <h2 className="card-title">{productName}</h2>
                <p>{details.split(".",2).join(". ")}</p>
                <p><span className='font-bold'>Available:</span> {productQnty} pcs <sub>(minimum {productMinOrder} pcs)</sub></p>
                <p><span className='font-bold'>Price:</span> {productPrice}</p>
                <div className="card-actions mx-auto w-2/4">
                    <button onClick={() => handleBuy(product._id)} className="btn btn-outline border-white text-white w-full mt-5 hover:bg-yellow-400 hover:text-black hover:border-yellow-500 hover:shadow-2xl">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;