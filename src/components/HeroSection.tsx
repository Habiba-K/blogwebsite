import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Arrow from './arrow'
const HeroSection = () => {
  return (
    <div className="bg-[#FAFAFA]  mt-2">
    <div className="text-center ">
          <h2 className="text-lg md:text-2xl font-bold mb-2">
          Popular Blogs
          </h2>
    </div>
    {/* Breadcrumb */}
    <div className="w-full h-[15px] flex justify-center px-20">
        <div className="flex items-center gap-[15px] ">
          <div className="font-bold text-[14px] leading-[24px] text-[#252B42]">
            Home
          </div>
          <Arrow></Arrow>
          <h6 className="font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
            Blog
          </h6>
        </div>
      </div>
    <section className="py-12 md:py-5">
        <div className=" mx-auto px-4 sm:px-32">
          {/* Title */}
          {/* Grid */}
          <div className=" grid grid-cols-1  lg:grid-cols-3 gap-3 w-full lg:max-w-[1440px] mx-auto mt-2 ">
            {/* First Column (MEN) */}
            <div className="relative flex justify-center">
              <Link href="./Blog">
              <Image
                src="/images/blog.jpg"
                alt="blog"
                width={424}
                height={400}
                className=" md:w-[510px] md:h-[400px] object-cover "
              />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
              <div className="underline absolute w-full top-1/2 left-1/2 transform -translate-x-1/2   text-white text-md font-bold  p-2 rounded-md">
              Senate Committee Urges PTA to Lower Taxes on Mobile Phones Amid Affordability Concerns
            </div>
              </Link>
            </div>

            {/* Second Column  */}
            <div className="sm:grid grid-rows-1 lg:grid-rows-2 gap-4 justify-center ">
              
              <div className="relative ">
              <Link href="./Blog">
                <Image
                  src="/images/latestblog2.jpg"
                  alt="team2"
                 
                  width={424}
                  height={424}
                  className="object-cover md:w-[510px] md:h-[200px]"
                />
               <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                <div className="underline absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-md font-bold p-2 rounded-md">
                2024’s Top 8 Gadgets  
                </div>
                </Link>
              </div>
           
              <div className="relative">
              <Link href="./Blog">
                <Image
                  src="/images/blog3.jpg"
                  alt="team3"
                  width={424}
                  height={424}
                  className="object-cover md:w-[510px] md:h-[185px]"
                />
                 <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                <div className="underline absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-md font-bold p-2 rounded-md">
                Pta And Huawei Pakistan Sign Mou To Strengthen Collaboration In It And Telecom Sector
                </div>
                </Link>
              </div>
            </div>

            {/* Third Column with Two Rows */}
            <div className="grid grid-rows-1 lg:grid-rows-2 gap-4 justify-center ">
              
              <div className="relative ">
              <Link href="./Blog">
                <Image
                  src="/images/blog4.jpg"
                  alt="team4"
                  width={424}
                  height={424}
                  className="object-cover md:w-[510px] md:h-[200px]"
                />
                 <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                <div className="underline absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-md font-bold p-2 rounded-md">
                Sri Lanka Police and Government Accounts Hit by Cyberattack
                </div>
                </Link>
              </div>

              <div className="relative">
              <Link href="./Blog">
                <Image
                  src="/images/blog5.jpg"
                  alt="team5"
                  width={424}
                  height={424}
                  className="object-cover md:w-[510px] md:h-[185px]"
                />
            </Link>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                <div className="underline absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-md font-bold p-2 rounded-md">
                Top Tech Moments for Pakistan in 2024
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default HeroSection
