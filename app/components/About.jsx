import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Playfair_Display'>Introduction</h4>
      <h2 className='text-center text-5xl font-Playfair_Display'>About me</h2>


       <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.userj}  alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-2'>
        <p className='mb-10 max-w-2xl font-Lato'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti iusto quam quae magnam, repellat ipsam eveniet optio quos pariatur unde dolor fugiat officia nobis iste exercitationem perferendis rerum accusantium animi?

        </p>

        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl items-stretch '>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
                <li key={index} className='group border border-gold rounded-xl p-6 cursor-pointer shadow-md hover:shadow-lg  hover:bg-beige hover:-translate-y-1  transform transition-all duration-300'>
                     <Image src={icon} alt={title} className='w-7 mt-3 bg-transparent mix-blend-multiply' />
                      <h3 className='my-4 font-semibold text-dark group-hover:text-primary bg-transparent'> {title} </h3>
                      <p className='text-dustyRose text-sm group-hover:text-dark bg-transparent'> {description} </p>
                </li>

            ))}
        </ul>

        <h4 className='my-6  text-dark font-Poppins'> Tools i use</h4>
       
        <ul className='flex items-center gap 3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square   cursor-pointer group border border-gold rounded-xl  shadow-md hover:shadow-lg  hover:bg-cream hover:-translate-y-1  transform transition-all duration-300' key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>

                </li>
            ))}
        </ul>

        </div>
       </div>
    </div>
  )
}

export default About
