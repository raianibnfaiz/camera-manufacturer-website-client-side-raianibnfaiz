import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import OrderRow from './OrderRow';
const AllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://immense-river-52979.herokuapp.com/allBooking', {
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
            <h2 className='text-3xl font-bold text-purple-400'>All Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}

                            ></OrderRow>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;