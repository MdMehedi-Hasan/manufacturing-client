import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [reFetch, setRefetch] = useState(false)
    useEffect(() => {
        fetch('https://blooming-ravine-00694.herokuapp.com/purchase')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [reFetch])
    const handleDelete = (id) => {
        fetch(`https://blooming-ravine-00694.herokuapp.com/purchase/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged == true) {
                    if (reFetch) {
                        setRefetch(false)
                    }
                    else {
                        setRefetch(true)
                    }
                }
            })
    }
    const handleUpdateStatus = (id) => {
        fetch('https://blooming-ravine-00694.herokuapp.com/updateStatus', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged == true) {
                    if (reFetch) {
                        setRefetch(false)
                    }
                    else {
                        setRefetch(true)
                    }
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Order quantity</th>
                        <th>Buyer <small>(email)</small></th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => <tr>
                        <th></th>
                        <td>{order?.products?.productName}</td>
                        <td>{order?.orderQnty}</td>
                        <td>{order?.email ? order?.email : "N/A"}</td>
                        <td>{(order?.paid && order?.status == "pending") ? <button className="btn bg-warning" onClick={() => handleUpdateStatus(order._id)}>Pending</button> : <button className="btn bg-green-600">Shipped</button>} <button className="btn bg-red-600" onClick={() => handleDelete(order._id)}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;