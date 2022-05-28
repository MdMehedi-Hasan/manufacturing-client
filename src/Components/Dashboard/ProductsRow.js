import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsRow = ({ product,handleDelete }) => {
  const [details,setDetails]=useState([])
  console.log(product);
  // console.log(product);
  useEffect(() => {
    fetch(`https://blooming-ravine-00694.herokuapp.com/purchase/${product._id}`)
    .then(res=>res.json())
    .then(data=>setDetails(data))
  },[])
    return (
      <>
         <tr>
        <th></th>
        <td>{product?.products?.productName}</td>
        <td>${product?.products?.productPrice}</td>
        <td>${product?.products?.productPrice * product?.orderQnty}</td>
        <td>{details.transactionId}</td>
        <td>{details.paid ? <button className="btn btn-accent" disabled>Paid</button> : <button className="btn btn-accent"><Link to={`/payment/${product._id}`}>Pay</Link></button>} {!details.paid && <label for="confirmation-modal" className='btn bg-red-600' onClick={()=>handleDelete(product._id)}>Cancel</label>}</td>
        {/* onClick={()=>handleDelete(product._id)} */}
        
        </tr>
       {/*  <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label for="confirmation-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Are you sure to cancel the order?</h3>
              <p className="py-4">Once you confirm this can't be undone!</p>
              <button className="btn bg-red-600" onClick={()=>handleDelete(product._id)}>Confirm?</button>
            </div>
          </div> */}
      </>
    );
};

export default ProductsRow;