import React from 'react';
import { useState, useEffect } from 'react';
import SingleRow from './SingleRow'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [updateDelete, setUpdateDelete] = useState(false)
    const [updateQnty, setUpdateQnty] = useState(false)
    console.log(updateDelete);
    // ===================================== Getting all products ====================================
    useEffect(() => {
        fetch("https://blooming-ravine-00694.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [updateDelete || updateQnty])
    const handleDelete = (id) => {
        fetch('https://blooming-ravine-00694.herokuapp.com/products', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.acknowledged == true) {
                    if (updateDelete) {
                        setUpdateDelete(false)
                    }
                    else {
                        setUpdateDelete(true)
                    }
                }
            })
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Available Stock</th>
                        <th>Update Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <SingleRow key={product._id} product={product} setUpdateQnty={setUpdateQnty} updateQnty={updateQnty}></SingleRow>)
                    }
                </tbody>
                {/* handleDelete={() => handleDelete(product._id)} */}
            </table>
        </div >
    );
};

export default ManageProducts;