import React from 'react';
import { useEffect, useState } from 'react';
import PerReview from '../PerReview/PerReview';
const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://immense-river-52979.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 p-4 ">
                {
                    reviews.map(review => <PerReview key={review._id} perReview={review}></PerReview>)
                }
            </div>
        </div>
    );
};

export default AllReviews;