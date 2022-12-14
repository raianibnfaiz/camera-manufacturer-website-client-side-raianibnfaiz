import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        localStorage.removeItem('accessToken');
        signOut(auth);
    }
    const menuItems =
        <>
            <li className='font-bold'><Link to='/home'>Home</Link></li>

            <li className='font-bold'><Link to='/about'>About</Link></li>
            <li className='font-bold'><Link to='/portfolio'>Portfolio</Link></li>
            <li className='font-bold'><Link to='/blog'>Blogs</Link></li>
            {
                user && <li className='font-bold'><Link to='/dashboard'>Dashboard</Link></li>
            }
            <li className='font-bold'> {user ? <button class="btn btn-outline btn-error" onClick={logout}>logout</button> : <Link to='/login'>Login</Link>}</li>

        </>
    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-primary-content">Camera Manufacturer Products</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end lg:hidden" >
                <label tabindex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;