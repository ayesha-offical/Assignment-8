import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <div><section className="text-gray-600 body-font ">
    <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
      <Image
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="/about.jpg"
        width={720}
        height={600}
      />
      <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1 className="text-black title-font sm:text-4xl font-semibold text-3xl mb-4  ">
Welcome To Tech World
        </h1>
        <p className="mb-8 leading-relaxed text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur beatae aspernatur, minima, nihil, incidunt praesentium pariatur inventore placeat ad voluptas reprehenderit quo alias itaque a officiis mollitia dolore asperiores?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur beatae aspernatur, minima, nihil, incidunt praesentium pariatur inventore placeat ad voluptas reprehenderit quo alias itaque a officiis mollitia dolore asperiores?
          
        </p>
        </div>
    </div>
  </section>
  </div>
  )
}

export default About