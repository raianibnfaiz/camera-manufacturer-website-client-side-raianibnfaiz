import React from 'react';
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product.image} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <h3>Price: {product.price}$</h3>
                    <h3>Available Quantity: {product.availableQuantity}</h3>
                    <h3>Minimum Order Quantity: {product.minimumOrderQuantity}</h3>
                    <h3><span style={{ color: "tomato" }}>Description:</span>  {product.description}</h3>
                    <button onClick={() => navigateToPurchase(product._id)} class='btn btn-primary btn-sm'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;