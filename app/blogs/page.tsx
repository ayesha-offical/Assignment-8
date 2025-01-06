import React from 'react'
import { client} from '@/sanity/lib/client'
import Image from 'next/image'

interface Blogdata {
    title: string
    author: string
    image: string
    publishedAt: string
    content: string
}

async function Blog() {
    const queries =`*[_type == "post"]{
  title,author,"slug":slug.current,"image":Image.asset->url,publishedAt,content}`
  const data = await client.fetch(queries)
  const blogData = data [0].blogData;
  console.log(blogData)

  return (
    <section className="text-gray-600 body-font overflow-hidden  ">
    <div className="container px-5 py-24 mx-auto grid lg:grid-cols-2 grid-cols-1">
        {data.map((postdata:Blogdata, iteration:number) =>(
      <div className="flex flex-wrap ">
        <div className="p-12  flex flex-col items-start ">
         <Image className='rounded-md'
          alt="Blog image"
          src={postdata.image}
          width={400}
          height={400}

         />
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
            {postdata.title}
          </h2>
          <p className="leading-relaxed mb-8">
            {postdata.content.trim( ).slice(0, 200)}
          </p>
          <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <a className="text-indigo-500 inline-flex items-center">
              Learn More
            
            </a>
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              6
            </span>
          </div>
          <a className="inline-flex items-center">
            <Image
              alt="blog"
              src="/pic2.svg"
              width={103}
              height={103}
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">
                {postdata.author}
              </span>
              <span className="text-gray-400 text-xs tracking-widest mt-0.5">
            {postdata.publishedAt}
              </span>
            </span>
          </a>
        </div>
        
      </div>
    ))}
    </div>
  </section>
  
  )
}

export default Blog