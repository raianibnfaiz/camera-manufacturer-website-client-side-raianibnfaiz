
import React from 'react';
import { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const { price, name, email, _id } = order;
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        fetch('https://immense-river-52979.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log(error);
        }
        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        //confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);

        }
        else {
            setCardError(" ");
            setTransactionId(paymentIntent.id)
            console.log(paymentIntent);
            setSuccess('your payment is completed')
            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }
            console.log('before fetch');
            fetch(`https://immense-river-52979.herokuapp.com/bookingInfo/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }
            )
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            // fetch(`https://localhost:5000/booking/${_id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'content-type': 'application/json',
            //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            //     },
            //     body: JSON.stringify(payment)
            // }).then(res => res.json())
            //     .then(data => {
            //         setProcessing(false);
            //         console.log(data);
            //     })
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success  mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-orange-500 font-bold">{transactionId}</span> </p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;