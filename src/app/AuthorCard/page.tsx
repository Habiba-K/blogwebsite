import React from 'react'

const AuthorCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
        <img 
        className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500' 
        src="../images/profile.jfif" 
        alt="Author Image" />
        
        <div>
          <h3 className='text-xl font-bold'>Habiba Khan</h3>
          <p className='text-slate-500'>Software Engineer | SEO Expert | Web Developer  </p>
        </div>
      </div>

      <p className='mt-4 text-black leading-relaxed'>Habiba Khan is an experienced software engineer with a passion for web development and sharing knowledge through articles</p>
      <div className='mt-4 flex space-x-3'>
        <a 
        href="https://www.linkedin.com/in/habiba-khan-7ba46329b/"
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
          Linkedin</a>
        <a 
        href="https://github.com/Habiba-K/"
        className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>
          GitHub</a>
      </div>
    </div>
  )
}

export default AuthorCard
