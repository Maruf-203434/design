"use client"
import Image from "next/image"
import Link from "next/link"

// Animation
import {Fade} from 'react-awesome-reveal'



function navbar  ()  {
  return (
    <nav className="bg-transparent">

<Fade direction='down' delay={400} cascade damping={1e-1} triggerOnce={true}>


        <div className="flex items-center lg:justify-between justify-center py-5">
            <div className="flex flex-shrink-0 items-center">
                <Link href='/'>
                <Image
                src='/logo.png'
                alt="logo"
                width='56'
                height='56'
                
                />
                </Link>
            </div>
            <ul  className="mt-4 lg:flex h-screen hidden max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id='navbar-default'>
              <li>
                <Link href="/#about" className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase">
                <div className="text-sm transition-colors duration-300 hover:text-pink-600">ABOUT</div>
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase">
                <div className="text-sm transition-colors duration-300 hover:text-pink-600">AWARDS</div>
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase">
                <div className="text-sm transition-colors duration-300 hover:text-pink-600">Skills</div>
                </Link>
              </li>
              <li>
                <Link href="/#education" className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase">
                <div className="text-sm transition-colors duration-300 hover:text-pink-600">Offers</div>
                </Link>
              </li>

              <li>
                <Link href="/#blog" className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase">
                <div className="text-sm transition-colors duration-300 hover:text-pink-600">Blogs</div>
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="block px-4 py-2 no-underline outline-none hover:no-underline uppercase">
                <div className="text-sm transition-colors duration-300 hover:text-pink-600">Testimonials</div>
                </Link>
              </li>
            
            </ul>
        </div>
        </Fade>
    </nav>
  )
}

export default navbar;

