import React, { useState } from 'react';

const SingleRow = ({ product, handleDelete, updateQnty, setUpdateQnty }) => {
    const { productName, productQnty, productImage, _id } = product

    const [newQuantity, setNewQuantity] = useState(0)
    let updatedQuantity = parseInt(productQnty) + parseInt(newQuantity);
    const handleUpdate = (id) => {
        // console.log("newQuantity", newQuantity,id)
        fetch('https://blooming-ravine-00694.herokuapp.com/products', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ updatedQuantity, id }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
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
                <label htmlFor="delete-product" className="btn modal-button btn-accent">Delete</label>
            </th>
            {/* <!-- The button to open modal --> */}
            {/* <label htmlFor="my-modal-3" className="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-product" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="delete-product" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure to delete this product?</h3>
                    <p className="py-4">You are trying to delete {productName}. Once you confirm this can't be undone.</p>
                    <button onClick={() => handleDelete(_id)} className="btn btn-accent float-right">Confirm</button>
                </div>
            </div>
        </tr>
    );
};

export default SingleRow;