import React from 'react';
import { useEffect, useState } from 'react';
import PerReview from '../PerReview/PerReview';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://immense-river-52979.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='my-28'>
            <div className="text-center">
                <h3 className='text-primary text-xl font-bold uppercase'>What people say about us</h3>
                <h2 className='text-4xl'>Latest Reviews</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12">
                {
                    reviews.map(review => <PerReview key={review._id} perReview={review}></PerReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;