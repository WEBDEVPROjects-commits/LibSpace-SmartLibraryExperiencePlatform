import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import { HomeContext } from '../Context/Context';
import { useContext } from 'react';
const ProtectedRoute=() => {
    const props=useContext(HomeContext)
    const token=props.isLoggedIn;
        return token? <Outlet/>:<Navigate to="/Login"/>;
}

export default ProtectedRoute