import React, { useState } from "react";

const Register = ({setlogin}) => {


  const [users , setusers] = useState([])
  const [formdata , setformdata ] = useState({})
  const handlechange = (e)=>{
    let {name,value} = e.target
setformdata({...formdata , [name] : value})
  }
  const handlesubmit = (e)=>{
    e.preventDefault()
      setusers([...users,formdata])
  console.log(users)

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handlesubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Full Name</label>
            <input onChange={handlechange}
            name="name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input onChange={handlechange}
            name="email"
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Password</label>
            <input onChange={handlechange}
            name="password"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a onClick={()=>{
            setlogin(true)
          }} href="#" className="text-green-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;