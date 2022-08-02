import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://immense-river-52979.herokuapp.com/booking?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json();
                })
                .then(data => setOrders(data))
        }
    }, [user]);
    return (
        <div>
            <h2 className='font-bold text-2xl my-1' style={{ color: "tomato" }}>My Orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}$</td>
                                    <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-xs btn-success'>Pay</button></Link>}</td>
                                    <td>{(order.price && order.paid) && <span className=' text-success'>Paid</span>}</td>
                                </tr>


                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;