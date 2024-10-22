"use client"
import Image from 'next/image'
import React from 'react'
import BlogCard from './blog-card'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

// Animation
import {Fade} from 'react-awesome-reveal'

function Blog ({blogs}) {
  return (
    <div id='blogs' className='relative z-50 border-t my-12 lg:my-24 border-[#25213b]'>
      <Image
        src='/section.svg'
        alt='Hero'
        width={1572}
        height={795}
        className='absolute top-0 -z-10'
      />
      <div className='flex justify-center -translate-y-[1px]'>
        <div className='w-3/4'>
          <div className='h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full' />
        </div>
      </div>

      <Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true}>

      <div className='text-pink-500 text-[14px] my-24 flex justify-center uppercase tracking-widest'>
        [Blogs]
      </div>
      </Fade>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10'>
      <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
       {
        blogs.slice(0,6).map((blog,i)=>(
          blog?.cover_image &&
          <BlogCard blog={blog} key={i}/>
        ))
       }
       </Fade>
      </div>

      <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>

      <div className='flex justify-center mt-5 lg:mt-12'>
        <Link
        className='flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold'
        role='button'
        href='/blog'
        >

          <span>View More</span>
          <FaArrowRight/>

        </Link>
      </div>
      </Fade>
    </div>
  )
}

export default Blog
