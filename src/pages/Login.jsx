import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="h-[calc(100vh-144px)] sm:h-[calc(100vh-108px)] flex items-center justify-center w-full ">
            <div className=" shadow-md rounded-lg px-8 py-6 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-4 text-baseblack">Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                        <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-primary600 focus:outline-none focus:ring-primary100 focus:border-primary" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">Password</label>
                        <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-primary600 focus:outline-none focus:ring-primary100 focus:border-primary"  placeholder="Enter your password" required />
                        <Link to='/join-us' className="block text-sm font-medium text-neutral-700 mt-2 place-self-end underline hover:text-primary">New here?</Link>
                    </div>
      
 
                    <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary200">
                        Login
                    </button>
                </form>
            </div>
        </div>
  )
}
