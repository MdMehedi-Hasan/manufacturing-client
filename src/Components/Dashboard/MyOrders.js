import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProductsRow from './ProductsRow';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([])
  const [reFetch, setReFetch] = useState(false)
  useEffect(() => {
    fetch('https://blooming-ravine-00694.herokuapp.com/purchaseIndiviual', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'email': `${user?.email}`,
      },
    })
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [reFetch])
  const handleDelete = (id) => {
    fetch(`https://blooming-ravine-00694.herokuapp.com/purchase/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.acknowledged == true) {
          if (reFetch) {
            setReFetch(false)
          }
          else {
            setReFetch(true)
          }
        }
      })
  }
  return (
    <div className='bg-cyan-900'>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price (per unit)</th>
              <th>Total amount</th>
              <th>Transaction id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {product.map(p => <ProductsRow key={p._id} product={p} handleDelete={() => handleDelete(p._id)}></ProductsRow>)}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyOrders;