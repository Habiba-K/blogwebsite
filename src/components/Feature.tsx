import React from 'react'

const Feature = () => {
  return (
    <div>
      <section className='pb-8 bg-neutral-50 mb-10'>
        <div className='h-[300px] bg-[url("/images/bg.avif")] bg-cover bg-center'>
        <h2 className='text-center text-3xl font-bold md:text-4xl pt-20 animation-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>Welcome to Tech Code Blog!Your Gateway to the World of Coding & Technology </h2>
      <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animation-fade-in-up delay-100'>Stay updated with the latest coding tutorials, programming guides, and tech news that will empower you to build, learn, and grow. Whether you're just starting out or you're an advanced developer, we provide practical insights and resources to help you thrive in the tech industry.</p>
      </div>
      <div className='mx-auto max-w-7xl px-5'>
        <h1 className='text-3xl font-bold text-center my-8 text-red-600 animation-color-change'>Our Categories</h1>
      <div className='grid grid-cols-2 gap-6  sm:grid-cols-3 lg:grid-cols-6 animation-fade-in-up delay-100'>
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "Tailwind CSS",
          "Next Js",
          "Node Js",
          "API Integration",
          "Git & GitHub",
          "Python",
          
        ].map((category,index)=>(
          <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600 '>
            <p className='text-center text-lg font-semibold'>{category}</p>
            <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-2'>
            </div>
          </div>
        ))}
      </div>
      </div>
      <p className='text-sm md:text-base text-black mb-6 px-4 animation-fade-in-down delay-100 mt-10 '>Each of these technologies plays a critical role in the development of modern applications, whether you’re building websites, server-side systems. On Tech Code Blog, we provide resources to help you learn and master these tools and frameworks.</p>
      </section>
    </div>
  )
}

export default Feature
