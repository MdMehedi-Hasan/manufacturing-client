import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ service }) => {
    const {name,image,details,price}= service
    const navigate = useNavigate();
    const handleBuy = (id) => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <button onClick={() => handleBuy(service._id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;