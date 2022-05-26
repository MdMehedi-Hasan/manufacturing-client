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
        <div className="card w-full bg-base-100 shadow-xl" data-aos="zoom-in">
            <figure className="px-10 pt-10">
                <img src={productImage} alt="Image" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{details}</p>
                <p><span className='font-bold'>Available:</span> {productQnty} pcs <sub>(minimum {productMinOrder} pcs)</sub></p>
                <p><span className='font-bold'>Price:</span> {productPrice}</p>
                {/* <p>{productMinOrder}</p> */}
                <div className="card-actions mx-auto">
                    <button onClick={() => handleBuy(service._id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;