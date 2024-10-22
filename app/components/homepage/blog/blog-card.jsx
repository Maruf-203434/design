// "use client"
import { timeConverter } from '@/utils/time-converter'
import Image from 'next/image'
import Link from 'next/link'
import {BsHeartFill} from 'react-icons/bs'
import {FaCommentAlt} from 'react-icons/fa'

// // Animation
// import {Fade} from 'react-awesome-reveal'

function BlogCard ({blog})  {
  return (
    <div className='border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group'>
      <div className='h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg'>
        <Image
        src={blog?.cover_image}
        alt=''
        height={1080}
        width={900}
        className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className='m-3 sm:p-3 flex flex-col'>
        <div className='flex justify-between items-center text-white text-sm'>
          <p>{timeConverter(blog.published_at)}</p>
          <div className='flex items-center gap-3'>
            <p className='flex items-center gap-1'>
              <BsHeartFill/>
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
            <p className='flex items-center gap-1'>
              <FaCommentAlt/>
              <span>{blog.comments_count}</span>
            </p>
            }
          </div>
        </div>

        <Link target='_blank' href={blog.url}>
        <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
          {blog.title}
        </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-5 lg:pb-6 line-clamp-3 '>
          {blog.description}
        </p>
        <p className='mb-2 text-sm absolute bottom-2 pb-5   right-5 text-[#16f2b3]'>
            {`${blog.reading_time_minutes} Min Read`}
        </p>


      </div>
    </div>
  )
}

export default BlogCard
