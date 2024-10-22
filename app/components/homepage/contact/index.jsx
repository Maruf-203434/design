"use client"
import { personalData } from '@/utils/data/personal-data'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaFacebook, FaStackOverflow } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoGithub, IoMdCall } from 'react-icons/io'
import { TbMailForward } from 'react-icons/tb'
import { useState } from 'react'

// Animation
import {Fade} from 'react-awesome-reveal'
function ContactSection () {

  const initialFormData = {
    firstName:'',
    email:'',
    message:'',
  }


  const [formData,setFormData] = useState(initialFormData)

  const  handleChange  = (event)=>{
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  console.log(formData)

  const handleSubmit  = async (event)=>{
    event.preventDefault()
    if(!formData.firstName ||  !formData.email) return;
   try {
    const  response  = await fetch('/api/send',{
      method:"POST",
      body:JSON.stringify({...formData}),

    })
   } catch (error) {
    
   }
  }


  return (
    <div id='contact' className='relative mt-24  my-12 lg:my-16 text-white'>
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

      <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>

      <div className='flex justify-center my-5 lg:py-8'>
        <div className='flex items-center'>
          <span className='text-pink-500 text-[14px]  uppercase tracking-widest'>
            [Contact]
          </span>
        </div>
      </div>
      </Fade>
      <div className='flex flex-col justify-center gap-8 lg:gap-16 items-center'>

      <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>

        <p className='font-medium text-[#16f2b3] text-xl uppercase'>
          Contact With me
        </p>
</Fade>

<Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>

        <div className='max-w-2xl text-white rounded-lg border border-[#463c6a] p-24'>
          <p className='text-sm text-[#d3d8ea]'>
            {
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur commodi repellat tempora aut nisi molestias? Ut quia quae voluptas laborum, ad, nemo velit assumenda natus, soluta deleniti error'
            }
          </p>
          {/* {Form} */}
          <div className='mt-6 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='text-base'>Your Name</label>
              <input
                className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2'
                type='text'
                maxLength='100'
                required={true}
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-base'>Your Email:</label>
              <input
                className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2'
                type='email'
                maxLength='100'
                name='email'
                required={true}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-base'>Your Message:</label>
              <textarea
                className='bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2'
                type='message'
                maxLength='500'
                rows='4'
                name='message'
                required={true}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col items-center gap-2 mt-6'>
              <Link
                href='#contact'
                className='bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600'
              >
                <button
                
                 className='px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3'>
                  <span onSubmit={handleSubmit}>Contact me</span>
                  <TbMailForward size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
</Fade>

<Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>


        <div className='flex items-center gap-5 lg:gap-10'>
          <Link target='_blank' href={personalData.github}>
            <IoLogoGithub
              className='bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
              size={48}
            />
          </Link>

          <Link target='_blank' href={personalData.facebook}>
            <FaFacebook
              className='bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
              size={48}

            />
          </Link>

          <Link target='_blank' href={personalData.linkedIn}>
            <BiLogoLinkedin
            className='bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
            size={48}
            />

            </Link>

            <Link target='_blank' href={personalData.twitter}>
            <FaXTwitter
            className='bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
            size={48}
            />

            </Link>
            <Link target='_blank' href={personalData.stackOverflow}>
            <FaStackOverflow
            className='bg-white p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer'
            size={48}
            />

            </Link>
        </div>
        </Fade>
      </div>
      <p className='mt-12 text-center'>Develop by Codedeny</p>
    </div>
  )
}

export default ContactSection
