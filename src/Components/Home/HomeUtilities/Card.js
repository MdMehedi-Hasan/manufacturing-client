import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ service }) => {
    const navigate = useNavigate();
    const handleBuy = (id) => {
        console.log(id)
        navigate(`/purchase/${id}`)
    }
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button onClick={() => handleBuy(service._id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;