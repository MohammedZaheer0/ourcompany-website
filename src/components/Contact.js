import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
      <div className='md:w-[80%] w-[90%] mx-auto md:my-24 my-4'>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-start'>

                <div className='mb-10 md:mb-0'>
                <p className='text-[#898A91] font-bold tracking-widest md:mb-10 mb-5'>CONTACT</p>

                <h1 className='md:text-4xl lg:text-6xl text-3xl font-bold mb-5'>Lets get to work.</h1>

                <p className='homeparentHeading text-[#D35400] my-10 lg:text-3xl text-[1.3rem] font-bold gap-3'><span className='UnderlineStyle' ><span>hi@simplefocus.com</span></span></p>

                <h2 className='md:text-4xl lg:text-5xl text-3xl font-bold md:my-14 my-8'>Looking for a career?</h2>

                <p className='homeparentHeading text-[#D35400] my-5 lg:text-3xl text-[1.3rem] font-bold gap-3'><span className='UnderlineStyle' ><Link to='/career'>View Openings</Link></span></p>

                </div>


            <div className=''>

              <h2 className='font-bold text-2xl mb-5'>Contact Form</h2>
              <form onSubmit={(e)=>{
                  e.preventDefault();
              }}>
                <div>

                  <div className='w-[100%] grid md:grid-cols-2 mb-8 gap-5 grid-cols-1 justify-between items-center'>

                  <div className='flex flex-col font-bold'>
                      <label htmlFor="name">Name <span className='text-[#898A91] font-bold'>(Required)</span></label>
                      <input type="text" id='name' required className='inputborderbottom bg-gray-200 border-none outline-none py-2 px-3 text-[18px]'/>
                  </div>
                
                  <div className='flex flex-col font-bold '>
                      <label htmlFor="email">Email <span className='text-[#898A91] font-bold'>(Required)</span></label>
                      <input type="email" id='email' required className='inputborderbottom bg-gray-200 border-none outline-none py-2 px-3 text-[18px]'/>
                  </div>
                  </div>



                  <div className='w-[100%] grid md:grid-cols-2 mb-8 gap-5 grid-cols-1 justify-between items-center'>

                  <div className='flex flex-col font-bold '>
                      <label htmlFor="companyname">Company Name</label>
                      <input type="text" id='companyname' className='inputborderbottom bg-gray-200 border-none outline-none py-2 px-3 text-[18px]'/>
                  </div>

                  <div className='flex flex-col font-bold '>
                      <label htmlFor="phonenumber">Phone Number</label>
                      <input type="text" id='phonenumber' className='inputborderbottom bg-gray-200 border-none outline-none py-2 px-3 text-[18px]'/>
                  </div>
                  </div>


                  <div className='flex flex-col mb-8 w-[100%] font-bold '>
                      <label htmlFor="hearaboutus">How did you hear about us?</label>
                      <input type="text" id='hearaboutus' className='inputborderbottom bg-gray-200 border-none outline-none py-2 px-3 text-[18px]'/>
                  </div>



                    <div className='flex mb-8 flex-col w-[100%] font-bold'>
                    <label htmlFor="message">Message <span className='text-[#898A91] font-bold'>(Required)</span></label>
                      <textarea name="message" id="messsage" cols={3} rows={4} required className='inputborderbottom bg-gray-200 border-none outline-none py-2 px-3 text-[18px]' placeholder='Project goals, timeline, budget'>

                      </textarea>
                    </div>


                  <button type='submit' className='border-[#D35400] border-[2px] py-3 text-[#D35400] font-bold text-[20px] px-8 hover:border-[#d4834d] hover:text-[#d4834d]'>Send Message</button>


                </div>
              
              </form>

            </div>


        </div>
    </div>
  )
}

export default Contact
