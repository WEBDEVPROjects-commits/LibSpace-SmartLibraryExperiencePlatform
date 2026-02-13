import React from 'react'

function Memberships() {
  return (
   <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16" id="Memberships">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
      <p className="text-gray-600 text-lg">Select the perfect membership for your library needs</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Basic Plan */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-800">Free</span>
        </div>
        <p className="text-gray-600 mb-6">Perfect for casual readers</p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">2 books at a time</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">14 days borrow period</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">Basic catalog access</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">Attendance tracking</span>
          </li>
          <li className="flex items-start gap-3 opacity-40">
            <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <span className="text-gray-400">Priority booking</span>
          </li>
          <li className="flex items-start gap-3 opacity-40">
            <svg className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <span className="text-gray-400">E-book access</span>
          </li>
        </ul>
        
        <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-300">
          Current Plan
        </button>
      </div>
      
      {/* Premium Plan */}
      <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 border-2 border-emerald-600 transform scale-105 shadow-2xl relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full text-emerald-600 text-sm font-semibold">
          Most Popular
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">₹299</span>
          <span className="text-emerald-100">/month</span>
        </div>
        <p className="text-emerald-50 mb-6">For avid readers</p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-white">5 books at a time</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-white">30 days borrow period</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-white">Full catalog access</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-white">Priority booking</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-white">Unlimited e-books</span>
          </li>
          <li className="flex items-start gap-3 opacity-40">
            <svg className="w-5 h-5 text-emerald-100 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <span className="text-emerald-100">Private study rooms</span>
          </li>
        </ul>
        
        <button className="w-full px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg">
          Upgrade Now
        </button>
      </div>
      
     {/* Elite PLan */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Elite</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-800">₹599</span>
          <span className="text-gray-600">/month</span>
        </div>
        <p className="text-gray-600 mb-6">Ultimate library experience</p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">Unlimited books</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">60 days borrow period</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">Full catalog + archives</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">24/7 priority support</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">Unlimited e-books</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span className="text-gray-700">Private study rooms</span>
          </li>
        </ul>
        
        <button className="w-full px-6 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg">
          Get Elite
        </button>
      </div>
      
    </div>
    
  </section>
  )
}

export default Memberships
