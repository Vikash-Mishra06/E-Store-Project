import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Register = () => {
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate()

  const RegisterHandler = (data) => {
    // get users from localStorage or empty array
    const users = JSON.parse(localStorage.getItem("users")) || []

    const userExists = users.find(u => u.username === data.username)

    if (userExists) {
      toast.error("User already exists with this email")
      return
    }

    // add new user
    users.push(data)
    localStorage.setItem("users", JSON.stringify(users))

    toast.success("Registered Successfully")
    navigate('/login')
    reset()
  }

  return (
    <div className="flex items-center justify-center p-10">
      <div className="w-full md:w-1/2 lg:w-1/3 shadow-lg rounded-lg p-8 border border-gray-400">
        <h2 className="text-2xl text-red-500 font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit(RegisterHandler)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              {...register("username", { required: true })}
              className="w-full px-3 py-2 border border-gray-400 rounded"
              type="text"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border border-gray-400 rounded"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              {...register("password", { required: true })}
              className="w-full px-3 py-2 border border-gray-400 rounded"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <span className="text-gray-700">Already have an Account? </span>
          <button onClick={() => navigate('/login')} className="text-red-600 font-semibold hover:underline">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
