import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LSJjcDz40GfJSeugm9RDk7Fm3nANwNPbHDC8WbQW0Xvboj84gKKyY215xT8688zSTGLlfxD3vt9ZHfRzoXsGrzX00p5GTbgVC');
const Payment = () => {
    const { id } = useParams();
    const url = `https://immense-river-52979.herokuapp.com/booking/${id}`;

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
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  ">
                <h2 class="text-center font-bold text-purple-300">Please Pay for order id: {id}</h2>

                <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto w-80">

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{order.name}</h2>

                        <h2 class="font-bold text-center">Please Pay for {order.product}</h2>
                        <p>Your Phone: <span className='text-orange-700'>{order.phone}</span></p>
                        <p>Please pay: ${order.price}</p>

                    </div>
                </div>
            </div>
            <h2 className="font-bold text-center text-green-400 my-6"> Payment with card</h2>
            <div className='grid grid-cols-1 mt-12 p-24  mx-auto border '>

                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>



        </div>

    );
};

export default Payment;