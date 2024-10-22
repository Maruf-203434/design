import { projectsData } from "@/utils/data/project-data"
import Image from "next/image"
import ProjectCard from "./project-card"

function Projects () {
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
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

      <div className="sticky top-10">

      <div className='text-pink-500 text-[14px] my-24 flex justify-center uppercase tracking-widest'>
        [Testimonials]
      </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
            {
                projectsData.slice(0,4).map((project,index)=>(
                    <div key={index}
                    id={`sticky-card-${index + 1}`}
                    className="sticky-card w-full mx-auto sticky"
                    >
                        <ProjectCard project={project}/>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Projects
