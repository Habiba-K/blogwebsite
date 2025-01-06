import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="title-font font-medium flex items-center text-gray-900">
        <span className="ml-3 text-xl">Write For Us Technology</span>
      </a>
      <p className="mt-2 text-sm text-gray-500 ml-5">We accept Guest Post on Write For Us Technology, here anyone can Submit a Guest Post related to technology and get Published in less than few hours.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUICK LINKS</h2>
        <nav className="list-none mb-10">
          <li>
            <a href='#' className="text-blue-400 hover:text-gray-800">Home</a>
          </li>
          <li>
            <a href='./AuthorCard' className="text-blue-400 hover:text-gray-800">About</a>
          </li>
          <li>
            <a href='./Blog' className="text-blue-400 hover:text-gray-800">Blog</a>
          </li>
          <li>
            <a href='./Contact' className="text-blue-400 hover:text-gray-800">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-blue-400 hover:text-gray-800">Technology</a>
          </li>
          <li>
            <a className="text-blue-400 hover:text-gray-800">HTML</a>
          </li>
          <li>
            <a className="text-blue-400 hover:text-gray-800">CSS</a>
          </li>
          <li>
            <a className="text-blue-400 hover:text-gray-800">Tailwind CSS</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-blue-400 hover:text-gray-800">JavaScript</a>
          </li>
          <li>
            <a className="text-blue-400 hover:text-gray-800">TypeScript</a>
          </li>
          <li>
            <a className="text-blue-400 hover:text-gray-800">Next Js</a>
          </li>
          <li>
            <a className="text-blue-400 hover:text-gray-800">Node Js</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-blue-400 hover:text-gray-800">API Integration</a>
          </li>
          <li>
            <a className="text-blue-400 hover:text-gray-800">Git Hub</a>
          </li>
          <li>
            <a className=" text-blue-400 hover:text-gray-800">Python</a>
          </li>
         
        </nav>
      </div>
    </div>
  </div>

</footer>
  )
}

export default Footer
