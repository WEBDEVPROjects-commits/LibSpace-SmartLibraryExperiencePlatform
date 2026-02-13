import React from 'react'

function ContactUs() {
  return (

  <footer className="bg-gray-900 text-gray-300"id ="About">
    
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        
        <div className="lg:col-span-2">
          <h3 className="text-white text-xl font-bold mb-4">
            <span className="text-white">Lib</span><span className="text-emerald-500">Space</span>
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            We are a private library situated in <span className="text-emerald-400 font-medium">[Your Location]</span>, dedicated to creating the perfect study environment for ambitious students.
          </p>
          <div className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-700">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">[Owner Name]</span><br/>
              <span className="text-emerald-400">[Qualifications]</span>
            </p>
            <p className="text-xs text-gray-400 mt-2">
              [X years] of experience in education and library management
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Issue Books</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Hot Drinks</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Attendance Tracking</span>
            </div>
          </div>
        </div>
       
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#memberships" className="hover:text-emerald-400 transition-colors">Memberships</a>
            </li>
            <li>
              <a href="#books" className="hover:text-emerald-400 transition-colors">Books</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>
        
       
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 mb-1">Phone</p>
                <a href="tel:+919876543210" className="hover:text-emerald-400 transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 mb-1">Email</p>
                <a href="mailto:contact@libspace.com" className="hover:text-emerald-400 transition-colors break-all">
                  contact@libspace.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 mb-1">Instagram</p>
                <a href="https://instagram.com/libspace" target="_blank" className="hover:text-emerald-400 transition-colors">
                  @libspace
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <div>
                <p className="text-xs text-gray-500 mb-1">Location</p>
                <p className="text-sm">
                  [Your Address]<br/>
                  [City, State - PIN]
                </p>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-800">
        <div className="bg-linear-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-center">
          <p className="text-white text-lg font-medium">
            Thank you for choosing our library! We're grateful to have you as part of our learning community. Your dedication to growth inspires us every day. 📚✨
          </p>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 LibSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
    
  </footer>
  )
  
}

export default ContactUs
