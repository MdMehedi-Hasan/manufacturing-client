import React from 'react';
import { Link } from 'react-router-dom';

const WebCard = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary"><Link to="https://assignment-10-d24c7.web.app/"> Visit website</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebCard;