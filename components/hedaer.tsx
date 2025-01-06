import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'


const Header = () => {
  return (
    <div><header className="text-gray-600 bg-slate-400 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
        <span className="ml-3 font-bold text-xl">Blog Ghost</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
        <a href="./about" className="mr-5 text-black hover:text-cyan-800">About</a>
        <a href="./blogs" className="mr-5 text-black hover:text-cyan-800">Blogs</a>
        <a href="./" className="mr-5 text-black hover:text-cyan-800">Home</a>

      </nav>
     <Link href="/signup">
      <Button className="inline-flex items-center bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700">
        Sign Up
      </Button>
      </Link>
    </div>
  </header>
  </div>
  )
}

export default Header