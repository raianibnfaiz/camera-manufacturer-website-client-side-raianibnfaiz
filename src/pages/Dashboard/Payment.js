import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 class="text-center font-bold text-purple-300">Please Pay for order id: {id}</h2>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 text-center">
                <div class="card-body ">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 class="font-bold text-center">Please Pay for {order.product}</h2>
                    <p>Your Phone: <span className='text-orange-700'>{order.phone}</span></p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;