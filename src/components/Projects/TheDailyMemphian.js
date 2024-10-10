import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";

const TheDailyMemphian = () => {
  const Navigate = useNavigate();
  return (
    <div>


      <div className='md:my-24 my-16'>
         <button onClick={()=> Navigate('/projects')} className='mb-5 font-bold text-[#D35400]  tracking-wider text-[18px] flex items-center'>
         <MdKeyboardArrowLeft className='text-[25px] font-bold'/>Projects</button>
          <h1 className='my-10 lg:text-5xl md:text-4xl text-3xl font-bold leading-snug md:leading-snug'>The Daily Memphian</h1>
          <p className='lg:w-[60%] md:w-[80%] text-justify font-medium leading-7 tracking-wide md:text-[20px] text-[18px] my-5'>The job: help a team of veteran reporters, photographers and publishers revive journalism in Memphis and create a unique new model for local news organizations. Our role: designing a user experience on par with The Washington Post and New York Times, from scratch, in 90 days.</p>

          <div className='w-[100%] h-[100%] lg:my-28 my-20'>
            <img src="/assets/dailymemphianImage.jpg" alt="dailymemphianImage" className='w-[100%] h-[100%] '/>
          </div>

          <div className='lg:py-20 py-10'>

          <p className='lg:w-[60%] md:w-[80%] mx-auto text-justify font-medium leading-7 tracking-wide md:text-[20px] text-[18px] md:my-14 mb-24'>We had a ton of work to do in order to design and build the site, and the launch deadline was crazy tight, so we relied on our <span className='text-[#d35400]'>trusted process</span>. We hosted workshops, architected the site, and wrote functional requirements for the design and development teams. We also designed and built front-end code for more than 20 page templates using a modular design system.</p>


          <p className='lg:w-[60%] md:w-[80%] mx-auto text-justify font-medium leading-7 tracking-wide md:text-[20px] text-[18px] md:my-14 mb-24'>The site is managed on a custom CMS, and the Memphian's staff were some of the site's most important users. We worked with them to understand their publishing workflow and content needs. Along with our sister agency, Clear Function, we designed a system that handles complex rules and publishing guidelines to produce a flawless front-end experience for readers.</p>


          <p className='lg:w-[60%] md:w-[80%] mx-auto text-justify font-medium leading-7 tracking-wide md:text-[20px] text-[18px] md:my-14 mb-24'>The site launched on September 17th, 2018. It performs flawlessly across devices so readers get what they’re after—local, important and engaging news. It’s easy to share and easy to get around. It gives the publishers the tools they need, and is engineered to grow and evolve with the publication.</p>


          <p className='lg:w-[60%] md:w-[80%] mx-auto text-justify font-medium leading-7 tracking-wide md:text-[20px] text-[18px] md:my-14 mb-24'>As people with a vested interest in Memphis, we’re humbled to be a part of this movement and can’t wait to read the next issue, and the next, and the next.</p>

          </div>

          <span className='pb-10 flex items-center justify-center'><a href="https://dailymemphian.com/" rel="noreferrer" target='_blank' className='mb-5 font-bold text-[#D35400] hover:text-[#e48e54]  tracking-wider md:text-[22px] text-[18px]'>Visit The Daily Memphian</a></span>
      </div>
    </div>
  )
}

export default TheDailyMemphian
