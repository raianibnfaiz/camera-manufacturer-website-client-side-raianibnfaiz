import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const [rating, setRating] = useState(" ");
    const [user] = useAuthState(auth);
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = user.email;
        const name = user.displayName;
        const review = event.target.review.value;
        const rate = rating;
        const myReview = { name, email, review, rate }
        console.log(myReview);
        fetch('https://immense-river-52979.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(myReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success!', data);
                if (data) {
                    toast.success(`We got your review! Thank you! `);
                }
                event.target.reset();

            })

        // 
        // 
    }
    function onChangeValue(event) {
        setRating(event.target.value);
        console.log(event.target.value);
    }
    return (
        <div>
            <h2 className='font-bold text-purple-500 my-3'>Add Review</h2>


            <form className='mb-2 grid grid-cols-1 gap-3 justify-items-center mt-2 ' style={{ fontFamily: 'Mate SC' }} onSubmit={handleSubmit}>

                <input type="text" name="review" placeholder='Please write something about us' className="input input-bordered w-full max-w-xs" required />
                <h3 className='text-primary'> PLease give us your rating <br /></h3>
                <div class="rating" onChange={onChangeValue} >

                    <input type="radio" value='1' name="rating-2" class="mask mask-star-2 bg-orange-400 " required />
                    <input type="radio" value='2' name="rating-2" class="mask mask-star-2 bg-orange-400" required />
                    <input type="radio" value='3' name="rating-2" class="mask mask-star-2 bg-orange-400" required />
                    <input type="radio" value='4' name="rating-2" class="mask mask-star-2 bg-orange-400" required />
                    <input type="radio" value='5' name="rating-2" class="mask mask-star-2 bg-orange-400" required />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
            </form>

        </div>
    );
};

export default MyReview;