import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsRow = ({ product,handleDelete }) => {
  const [details,setDetails]=useState([])
  console.log(product);
  // console.log(product);
  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${product._id}`)
    .then(res=>res.json())
    .then(data=>setDetails(data))
  },[])
    return (
            <tr>
        <th></th>
        <td>{product?.products?.productName}</td>
        <td>${product?.products?.productPrice}</td>
        <td>${product?.products?.productPrice * product?.orderQnty}</td>
        <td>{details.transactionId}</td>
        <td>{details.paid ? <button className="btn btn-accent" disabled>Paid</button> : <button className="btn btn-accent"><Link to={`/payment/${product._id}`}>Pay</Link></button>} {!details.paid && <button className='btn bg-red-600' onClick={()=>handleDelete(product._id)}>Cancel</button>}</td>
      </tr>
    );
};

export default ProductsRow;