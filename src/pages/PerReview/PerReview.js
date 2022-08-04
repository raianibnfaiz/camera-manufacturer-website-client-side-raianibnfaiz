import React from 'react';

const PerReview = ({ perReview }) => {

    const { name, email, rate, review } = perReview;
    return (
        <div className='card lg:max-w-lg bg-base-100 shadow-xl '>
            <div className='p-6'>
                <h5><span className='text-blue-500 '>Name:</span> {name} </h5>
                <h5><span className='text-blue-500 '>Email:</span> {email} </h5>
                <h6 className="font-bold"><span className='text-blue-500 mr-2'>FeedBack:</span>{review}</h6>
                <h6><span className='text-blue-500 mr-2'>Rating:</span> <span className='text-yellow-500 ml-3'>{rate} star</span></h6>
            </div>



        </div>
    );
};

export default PerReview;