import './App.css'
import { HomeContext } from '../Context/Context.jsx'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import HomePage from '../HomePageComponents/HomePage.jsx'
import Login from '../SignupLoginComponents/Login.jsx';
import Signup from '../SignupLoginComponents/Signup.jsx';
import { useState } from 'react';
import Dashboard from '../DashboardComponents/Dashboard.jsx';
function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  return (
    <>
    
    <HomeContext.Provider value={{email,setEmail,password,setPassword}}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
          {/* <Route path='/Login' element={<HomePage/>}></Route> */}
          {/* <Route path='/Dashboard' element={<Dashboard/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </HomeContext.Provider>
    </>
  )
}

export default App
