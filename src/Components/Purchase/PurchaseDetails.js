import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PurchaseDetails = () => {
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res=>res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            This is purchase
        </div>
    );
};

export default PurchaseDetails;