import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PerReview from '../PerReview/PerReview';
import AllReviews from './AllReviews';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://immense-river-52979.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const latestSixItems = reviews.slice(-6);
    return (
        <div className='my-28 bg-gray-50 py-6 px-4 mx-8 rounded'>
            <div className="text-center">
                <h3 className='text-primary-focus text-2xl mb-2 font-bold uppercase'>What people say about us</h3>
                <h2 className='text-4xl'>Latest Reviews</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 mx-4">
                {
                    latestSixItems.map(review => <PerReview key={review._id} perReview={review}></PerReview>)
                }
            </div>
            <div className="review-button mb-6">
                <Link to='/review' element={<AllReviews></AllReviews>}>
                    <button class="bg-orange-300 hover:bg-pink-200 text-gray-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Show All Review
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Reviews;