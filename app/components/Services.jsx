import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services"  className='w-full px-[12%] py-10 scroll-mt-20'>
   
      <h4 className='text-center mb-2 text-lg font-Playfair_Display'>What i offer</h4>
      <h2 className='text-center text-5xl font-Playfair_Display'>My Services</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb+12 font-Poppins'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi exercitationem non temporibus molestiae quos ipsam rem vero aut deserunt voluptates iure officia esse, unde, modi, cumque delectus quibusdam iusto magni.</p>

        <div className=' grid grid-cols-auto gap-6 my-10 '> 
{serviceData.map(({icon, title, description, link}, index)=> (
    <div key={index} className='border border-primary rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-primary hover:-translate-y-1 duration-500'>
        
       <Image src={icon} alt='' className='w-10'/>
        <h3 className='text-lg my-4 text-dark'>{title}</h3>
        <p className='text-sm text-dark leading-5'>
            {description}
        </p>
        <a href={link} className='flex items-center gap-2 text-sm  mt-5'>
            Read more <Image  alt='' src={assets.right_arrow} className='w-4'/>
        </a>
         </div>

))}
        </div>
    </div>
  )
}

export default Services
