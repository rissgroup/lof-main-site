import React from 'react'

export default function Contact() {
  return (
    <>
    <section className="text-white  body-font">
  <div className="container px-5 py-24 mx-auto flex  items-center">
    
    <div className="lg:w-2/6 md:w-1/2 basis-1/2 text-center rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
     
      <div className="relative mb-4">
       
        <input type="text" id="full-name" name="full-name" className="w-2/3 h-12 drop-shadow-[0px 0px 20px #000000] bg-[#121016]  focus:bg-transparent   rounded   text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your Name " />
      </div>
      <div className="relative mb-4">
       
      <input type="text" id="full-name" name="full-name" className="w-2/3 h-12 bg-[#121016]  focus:bg-transparent   rounded   text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your Name " />
      </div>
      <div className="relative mb-4">
       <textarea name="" id="" cols="42" rows="4" className=' bg-[#121016]   focus:bg-transparent   rounded   text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ' placeholder="write Something Here "></textarea>
      {/* <input type="text" id="full-name" name="full-name" className="w-full h-28 bg-black  focus:bg-transparent   rounded   text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Your Name " /> */}
      </div>
      <button className="text-white w-32  py-2 px-3 border-2 border-[#D8AAF8] md:ml-24  rounded-xl text-lg">Button</button>
    
    </div>
    <div className="lg:w-3/5  basis-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-bold text-6xl text-white">Drop us a line will <br/> be <span className='text-[#D8AAF8]'>glad to here <br/> from you </span></h1>
      <p className="leading-relaxed mt-4 text-lg">Lorem Ipsum is simply dummy text of the printing and </p>
      <p className="leading-relaxed mt-4 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
when an unknown printer took a galley. </p>
    </div>
  </div>
</section>
    
    
    
    
    </>
  )
}
