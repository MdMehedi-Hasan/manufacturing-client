import React, { useEffect, useState } from 'react';
import ProductsRow from './ProductsRow';

const MyOrders = () => {
  const [product, setProduct] = useState([])
  const [reFetch,setReFetch] = useState(false)
  useEffect(() => {
    fetch('http://localhost:5000/purchase')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [reFetch])
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/purchase/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id}),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
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
      <div class="overflow-x-auto">
        <table class="table w-full">
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