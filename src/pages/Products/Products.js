import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://immense-river-52979.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-28'>
            <div className="text-center">
                <h3 className='text-primary text-xl font-bold uppercase'>Our Products</h3>
                <h2 className='text-4xl'>Products We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;