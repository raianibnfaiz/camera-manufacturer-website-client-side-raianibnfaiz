import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://immense-river-52979.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-purple-400'>All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}

                            ></UserRow>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;