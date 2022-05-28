import React from 'react';
import { Link } from 'react-router-dom';

const WebCard = () => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary"><Link to="https://assignment-10-d24c7.web.app/"> Visit website</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebCard;