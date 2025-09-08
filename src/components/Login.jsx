import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center  p-10 ">
      <div className="w-full md:w-1/2 lg:w-1/3 shadow-lg rounded-lg p-8 border border-gray-400">
        <h2 className="text-2xl text-red-500 font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-gray-700">Don't have an Account? </span>
          <button onClick={() => navigate('/register')} className="text-red-600 font-semibold hover:underline">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
