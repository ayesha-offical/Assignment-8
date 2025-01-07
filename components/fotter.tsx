import React from 'react'
import Link from 'next/link'
const Fotter = () => {
  return (
    <div><footer className="text-black body-font bg-slate-400">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    
          <span className="font-bold text-xl">Blog Ghost </span>
        </a>
        <p className="mt-2 text-sm ">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores adipisci magnam perspiciatis iste consectetur cupiditate sed soluta repellendus veniam. 
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
           Links
          </h2>
          <nav className="list-none mb-10">
            <li>
              <a href='./' className="text-black hover:text-cyan-800">Home</a>
            </li>
            <li>
              <a href='./blogs' className="text-black hover:text-cyan-800">Blogs</a>
            </li>
            <li>
              <a href='./about' className="text-black hover:text-cyan-800">About</a>
            </li>
            <li>
              <a href='./signup' className="text-black hover:text-cyan-800">Sign Up</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            CATEGORIES
          </h2>
          <nav className="list-none mb-10">
            <li className="text-black hover:text-cyan-800">
         Tech
            </li>
            <li className="text-black hover:text-cyan-800">
             Space
            </li>
            <li className="text-black hover:text-cyan-800">
        AI
            </li>
            <li className="text-black hover:text-cyan-800">
            Metaverse
            </li>
          </nav>
        </div>
        
        </div>
        
 
    </div>
    <div className="bg-gray-100">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © 2025 Blog Ghost —
          <Link
            href="./"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
          >
            @Blog Ghost
          </Link>
        </p>
     
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Fotter