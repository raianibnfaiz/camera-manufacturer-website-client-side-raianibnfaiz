import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profileInfo, setProfileInfo] = useState([]);

    const { data: profileOwner, isLoading, refetch } = useQuery('profileOwner', () => fetch(`https://immense-river-52979.herokuapp.com/profile/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data, profileOwner);
            setProfileInfo(data);
        }));
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`https://immense-river-52979.herokuapp.com/profile/${user.email}`,
    //         {
    //             method: 'GET',
    //             headers: {

    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             },

    //         }
    //     )

    //         .then(res => res.json())
    //         .then(data => setProfileInfo(data))
    // }, [user])
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        const linkedIn = event.target.linkedIn.value;
        const profile = { name, email, education, location, phone, linkedIn }
        console.log(profile);
        event.target.education.value = " ";
        event.target.location.value = " ";
        event.target.phone.value = " ";
        event.target.linkedIn.value = " ";
        fetch(`https://immense-river-52979.herokuapp.com/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast('Your profile information is added!')
            })

    }
    return (

        <div class="card w-96 bg-base-100 shadow-xl mx-auto">

            <div class="card-body items-center text-center">
                <h2 class="card-title">Your Name: {user.displayName}</h2>
                <p>Your Email: {user.email}</p>
                <h4>Your Location: {profileInfo.location}</h4>
                <h4>Your Eduction: {profileInfo.education}</h4>
                <h4>Your Phone No. {profileInfo.phone}</h4>
                <h4>Your LinkedIn Profile: {profileInfo.linkedIn}</h4>
                <div class="card-actions">


                    <label for="my-modal-3" class="btn modal-button">Edit Profile</label>


                    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box relative ">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form className='mb-2 grid grid-cols-1 gap-3 justify-items-center mt-2 ' style={{ fontFamily: 'Mate SC' }} onSubmit={handleSubmit}>

                                <input type="text" name="education" placeholder='Your eduction' className="input input-bordered w-full max-w-xs" required />
                                <input type="text" name="location" placeholder='Your Location' className="input input-bordered w-full max-w-xs" required />
                                <input type="text" name="phone" placeholder='Your Phone Number' className="input input-bordered w-full max-w-xs" required />
                                <input type="text" name="linkedIn" placeholder='Your LinkedIn Profile' className="input input-bordered w-full max-w-xs" required />
                                <input type="submit" value="Add to profile" className="btn btn-primary w-full max-w-xs" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default MyProfile;