import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <nav className="max-w-7xl mx-auto px-8 py-5">
      <div className="flex items-center justify-between">
        
        <div className="text-2xl font-bold">
          <span className="text-gray-800">Lib</span><span className="text-emerald-500">Space</span>
        </div>
        
        <div className="flex items-center gap-10">
          <a href="#Home" className="group text-gray-600 font-medium relative py-2 transition-all duration-300 hover:text-emerald-500">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#Memberships" className="group text-gray-600 font-medium relative py-2 transition-all duration-300 hover:text-emerald-500">
            Memberships
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
         
          <a href="#About" className="group text-gray-600 font-medium relative py-2 transition-all duration-300 hover:text-emerald-500">
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-400 to-emerald-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/Signup" className="px-6 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300">
            SignUp
          </Link>
          <Link to="/Login" className="px-6 py-2.5 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5">
            Login
          </Link>
        </div>
        
      </div>
    </nav>
  </header>
  );
}

export default Header;
