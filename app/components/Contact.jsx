"use client";
import React, { useState } from 'react'

const Contact = () => {


  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5b27c17b-2e61-4eb9-bd9e-561106aa1253");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className=' w-full px-[12%] py-10 scroll-mt-20'>
      
      <h4 className='text-center mb-2 text-lg font-Playfair_Display'>Contact with me</h4>
      <h2 className='text-center text-5xl font-Playfair_Display'>Get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb+12 font-Poppins'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi exercitationem non temporibus molestiae quos ipsam rem vero aut deserunt voluptates iure officia esse, unde, modi, cumque delectus quibusdam iusto magni.</p>

        <form onSubmit={onSubmit}  className='max-w-2xl mx-auto'>

            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input  type="text" placeholder='Enter your name' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-primary rounded-md bg-white' name='name'/>
                <input type="email" placeholder='Enter your email' required 
                className='flex-1 p-3 outline-none border-[0.5px] border-primary rounded-md bg-white' name='email'/>
            </div>
            <textarea rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-primary rounded-md bg-white mb-6' name='message'></textarea>
            <button type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-primary text-gold rounded-full mx-auto hover:bg-gold hover:text-primary duration-500 '>Submit now</button>

            <p className='mt-4'>{result}</p>
        </form>

    </div>
  )
}


export default Contact
