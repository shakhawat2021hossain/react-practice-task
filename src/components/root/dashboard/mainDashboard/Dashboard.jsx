import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;