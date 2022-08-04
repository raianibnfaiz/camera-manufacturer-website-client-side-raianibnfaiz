import React from 'react';

const ExtraSections = () => {
    return (
        <div>

            <div class="hero min-h-screen bg-gray-100 mb-8 rounded">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1613047503507-b8d01ce6af26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaHklMjBjYW1lcmF8ZW58MHx8MHx8&w=1000&q=80" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Vintage Collection!</h1>
                        <p class="py-6">You will find supreme vintage camera parts collections from our store. We do care about <span style={{ color: "tomato" }}>quality </span> of the product. </p>

                    </div>
                </div>
            </div>


            <div class="hero min-h-screen bg-gray-100 mb-8 rounded">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">Don't miss!<span style={{ color: "tomato" }}> Buy Today!</span></h1>
                        <p class="py-6">We are one of the only places you will find the collection of camera parts that you are really looking for!</p>

                    </div>
                </div>
            </div>
        </div >

    );
};

export default ExtraSections;