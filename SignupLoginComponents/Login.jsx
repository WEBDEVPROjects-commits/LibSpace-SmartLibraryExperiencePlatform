import React from 'react'
import { HomeContext } from '../Context/Context.jsx'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const props=useContext(HomeContext);
    const navigate=useNavigate();
    // localStorage.setItem("email",props.email) 
    // localStorage.setItem("password",props.password) 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="w-full max-w-md p-8">
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-500 text-sm">Sign in to your account</p>
      </div>
      <form className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition"
            placeholder="you@example.com"
            value={props.mail}
            onChange={(e) => {
              props.setEmail(() =>e.target.value)
            }}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition"
            placeholder="••••••••"
            value={props.password}
            onChange={(e) => {
              props.setPassword(() =>e.target.value)
            }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-900" />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-gray-900 hover:text-gray-700 font-medium">
            Forgot password?
          </a>
        </div>

        <button
          type="button"
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200 "
          onClick={() => {
            props.setIsLoggedIn(true);
            navigate("/Dashboard")
          }}
        >
        Sign in
        </button>
      </form>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <button className="w-full border border-gray-200 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition duration-200 flex items-center justify-center gap-2" onClick={() => {
          localStorage.setItem("email",props.email) 
          localStorage.setItem("password",props.password)  
      }}>
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Google
      </button>

      <p className="text-center text-sm text-gray-600 mt-6">
        Don't have an account? 
        <a href="#" className="text-gray-900 font-medium hover:text-gray-700">Sign up</a>
      </p>
    </div>
  </div>
</div>
  )
}

export default Login
