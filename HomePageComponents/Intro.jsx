import React from 'react'

function Intro() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-32 text-center" id="Home">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
      LibSpace-A <span className="text-emerald-500">Smart</span> Library Experience<br className="hidden sm:block"/>
      platform for the students
    </h1>
    <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-16">
      A smart platform to manage your daily library experience — from attendance to services — all in one place
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      
      <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2">
        <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
          <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Issue a Book</h3>
        <p className="text-gray-600 mb-6">Browse and borrow books instantly from our digital library catalog</p>
        <button className="w-full px-6 py-3 bg-gray-50 text-gray-700 font-medium rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300">
          Get Started
        </button>
      </div>

      <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2">
        <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
          <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Mark your Attendance</h3>
        <p className="text-gray-600 mb-6">Quick and easy check-in to track your library visits seamlessly</p>
        <button className="w-full px-6 py-3 bg-gray-50 text-gray-700 font-medium rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300">
          Check In
        </button>
      </div>
    
      <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-2">
        <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
          <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Try our Membership</h3>
        <p className="text-gray-600 mb-6">Unlock premium features and exclusive benefits with our plans</p>
        <button className="w-full px-6 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg">
          Explore Plans
        </button>
      </div>
      
    </div>
  </section>
  )
}

export default Intro
