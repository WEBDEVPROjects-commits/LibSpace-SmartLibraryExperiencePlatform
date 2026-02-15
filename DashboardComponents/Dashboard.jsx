import React from 'react'
import {HomeContext} from '../Context/Context.jsx'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Books from './Books.jsx';
function Dashboard() {
  const props=useContext(HomeContext);
  return (
   <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-100 shrink-0 shadow-sm">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold">
            <span className="text-gray-800">Lib</span>
            <span className="text-emerald-500">Space</span>
          </h1>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-2 flex flex-col h-[calc(100vh-88px)]">
          <a href="#attendance" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
            <span>Attendance</span>
          </a>
          
          <a href="#hotdrinks" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
            </svg>
            <span>Hot Drinks</span>
          </a>
          
          <a href="#books" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-all font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <span>Books</span>
          </a>
          
          <div className="flex-1"></div>
          
          <button 
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all font-medium" 
            onClick={() => props.setIsLoggedIn(false)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
            <span>Logout</span>
          </button>
        </nav>
      </aside>
    <main className="flex-1 bg-gray-50 overflow-y-scroll">
     <Books/>
    </main>
    
  </div>
  )
}

export default Dashboard
