import React, { useState } from 'react';

const SingleRow = ({ product, handleDelete, updateQnty, setUpdateQnty }) => {
    const { productName, productQnty, productImage, _id } = product

    const [newQuantity, setNewQuantity] = useState(0)
    let updatedQuantity = parseInt(productQnty) + parseInt(newQuantity);
    const handleUpdate = (id) => {
        fetch('https://blooming-ravine-00694.herokuapp.com/products', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ updatedQuantity, id }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.modifiedCount == 1) {
                    if (updateQnty) {
                        setUpdateQnty(false)
                    }
                    else {
                        setUpdateQnty(true)
                    }
                }
            })
    }
    return (
        <tr>
            <th>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>{productQnty}</td>
            <td><input onChange={(e) => setNewQuantity(e.target.value)} type="number" className='input input-bordered' /><button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">Update</button></td>
            <th>
                <button onClick={() => handleDelete(product._id)} className="btn bg-red-800">Delete</button>
            </th>
        </tr>
    );
};

export default SingleRow;