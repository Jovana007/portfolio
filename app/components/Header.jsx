import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
<div className='w-11/12 max-w-2xl text-center mx-auto min-h-screen pt-40 flex flex-col items-center justify-start gap-6 '>
      <div>
        <Image  src={assets.profilej} alt='' className='rounded-full w-32'/>
      </div>
              <h3 className='flex  items-end gap-2 text-xl lg:text-2xl mb-3 font-Playfair_Display'>Hi! I'm Jovana Samouković <Image src={assets.hand_icon} alt=''  className='w-6'/></h3>
<h1 className=' text-xl sm:text-6xl md:text-[56px] font-Playfair_Display'> Fronted web developer based in Pale.</h1>
<p className='max-w-2xl mx-auto font-Playfair_Display'>
    I'm fronted developer from Bosnia and Herzegovina, with 5 years of experiende in multiple companies like Microsoft, Tesla and Apple.
</p>
<div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-4'>
    <a href="#contact" className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>Contact me  <Image  src={assets.right_arrow_white} alt='' className=' w-4'/></a>
     <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' >my resume <Image  src={assets.download_icon} alt='' className=' w-4'/></a>

 </div>
    </div>
  )
}

export default Header
