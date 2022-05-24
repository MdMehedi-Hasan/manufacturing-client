import React from 'react';
import './AddProducts.css'

const AddProducts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const productName = e.target.name.value;
        const productPrice = e.target.price.value;
        const productQnty = e.target.quantity.value;
        const productMinOrder = e.target.minOrder.value;
        const productImage = e.target.image.value;
        const productDescription = e.target.description.value;
        const product = { productName, productPrice, productQnty, productMinOrder, productImage, productDescription }
        console.log(product);
        fetch('http://localhost:5000/products', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
        e.target.reset();
    }
    return (
        <div className="hero h-screen">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-between">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Product name:</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="flex justify-between">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Price:</span>
                                </label>
                                <input type="number" name="price" placeholder="$" className="input input-bordered" />
                            </div>
                            <div className="flex justify-between">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Quantity:</span>
                                </label>
                                <input type="number" name="quantity" placeholder="00" className="input input-bordered" />
                            </div>
                            <div className="flex justify-between">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Min-order:</span>
                                </label>
                                <input type="number" name="minOrder" placeholder="-pcs" className="input input-bordered" />
                            </div>
                            <div className="flex justify-between">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Upload image:</span>
                                </label>
                                <input type="text" name="image" placeholder="https://" className="input input-bordered" />
                            </div>
                            <div className="flex justify-between">
                                <label className="label">
                                    <span className="label-text font-bold text-base">Description:</span>
                                </label>
                                <textarea cols="22" name="description" className="input input-bordered"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Add product" className="btn btn-accent" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;