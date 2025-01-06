import React from 'react'
import { Button } from '@/components/ui/button'
const Signup = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-gray-900">
Here You can Sign Up and Get Tech Blogs!
        </h1>
        <p className="leading-relaxed mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt minus repellat nisi cumque dolorum suscipit ad distinctio officia sunt architecto corrupti quisquam odit perspiciatis sapiente labore nobis, iste earum?
        </p>
      </div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <Button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        SignUp
        </Button>
        <p className="text-xs text-gray-500 mt-3">
You are Sign Up in Blog Ghost.
        </p>
      </div>
    </div>
  </section>
  </div>
  )
}
export default Signup