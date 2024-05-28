import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h2>Dashboard</h2>
            <ul>
                <NavLink to='/dashboard'>Profile</NavLink>
                <NavLink to='/dashboard/manage-products'>Manage Products</NavLink>
                <NavLink to='/dashboard/add-products'>Add Products</NavLink>
            </ul>
        </div>
    );
};

export default Sidebar;