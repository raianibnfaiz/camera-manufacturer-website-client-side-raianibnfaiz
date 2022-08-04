import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (

        <div class="card w-96 bg-base-100 shadow-xl mx-auto">

            <div class="card-body items-center text-center">
                <h2 class="card-title">{user.displayName}</h2>
                <p>{user.email}</p>
                <div class="card-actions">
                    <button class="btn btn-primary ">Edit Profile</button>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;