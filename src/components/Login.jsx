import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate()

  const LoginHandler = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || []

    // check if user exists
    const matchedUser = users.find(
      u => u.username === data.username && u.password === data.password
    )

    if (matchedUser) {
      localStorage.setItem("currentUser", JSON.stringify(matchedUser))

      // 🔥 Tell Navbar user logged in
      window.dispatchEvent(new Event("authChange"))

      toast.success(`Welcome back, ${matchedUser.username}`)
      navigate("/")
    }else {
      toast.error("Invalid Username or Password")
    }

    reset()
  }
  return (
    <div className="flex items-center justify-center  p-10 ">
      <div className="w-full md:w-1/2 lg:w-1/3 shadow-lg rounded-lg p-8 border border-gray-400">
        <h2 className="text-2xl text-red-500 font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(LoginHandler)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Username</label>
            <input {...register("username", { required: true })}
              className="w-full px-3 py-2 border border-gray-400 rounded"
              type="text"
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input {...register("password", { required: true })}
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