import React from 'react'
import {HomeContext} from '../Context/Context.jsx'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const props=useContext(HomeContext);
  return (
  <div className="flex h-screen">
    <aside className="w-64 bg-white border-r border-gray-200">
      <nav className="p-4 space-y-2 flex flex-col h-full">
        <a href="#attendance" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition">
          <span className="font-medium">Attendance</span>
        </a>
        <a href="#hotdrinks" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition">
          <span className="font-medium">Hot Drinks</span>
        </a>
        <a href="#books" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition">
          <span className="font-medium">Books</span>
        </a>
        <div className="flex-1"></div>
        <button className="px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition font-medium text-left" onClick={() => {
          props.setIsLoggedIn(false)
        }}>
          Logout
        </button>
      </nav>
    </aside>
    <main className="flex-1 bg-gray-50">
    </main>
    
  </div>
  )
}

export default Dashboard
