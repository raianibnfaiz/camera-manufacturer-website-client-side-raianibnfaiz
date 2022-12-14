import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-4xl font-bold text-blue-400'>My Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li className='font-bold'><Link to='/dashboard'>Your Dashboard</Link></li>
                    {!admin && <>
                        <li className='font-bold'><Link to='/dashboard/myOrders'>My Orders</Link></li>
                        <li className='font-bold'><Link to='/dashboard/review'>Add Review</Link></li>
                    </>
                    }
                    <li className='font-bold'><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    {admin &&
                        <>
                            <li className='font-bold'><Link to="/dashboard/users">All Users</Link></li>
                            <li className='font-bold'><Link to="/dashboard/allOrders">All Orders</Link></li>
                            <li className='font-bold'><Link to="/dashboard/addProduct">Add Product</Link></li>
                            <li className='font-bold'><Link to="/dashboard/manageProduct">Manage Product</Link></li>

                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;