import React from 'react'
import { HomeContext } from '../Context/Context'
import { useContext } from 'react'
import { Outlet ,Navigate} from 'react-router-dom'

function ProtectedRoute1() {
    const props=useContext(HomeContext)
    return (props.isLoggedIn)?<Navigate to="/Dashboard" replace/>:<Outlet/>;
}

export default ProtectedRoute1
