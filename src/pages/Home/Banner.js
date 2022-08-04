import React, { useState } from 'react';
import './Banner.css';
const Banner = () => {

    return (
        <div>
            <div className="hero min-h-screen mb-12 bg-gray-100 p-2 my-1 rounded-sm">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51H9gKdHwlL.jpg" />
                    <div>
                        <h1 className="text-5xl font-bold">Camera Parts <span style={{ color: "darkCyan" }}>Manufacturer</span> Store</h1>
                        <p className="py-6">When you come to our store you will experience great customer service.  We are one of the top rated <span style={{ color: "tomato" }}>Camera </span>Parts Manufacturer Stores  in Bangladesh.</p>

                    </div>
                </div>
            </div>





        </div>
    );
};

export default Banner;