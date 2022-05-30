import React from 'react'

export default function Lofplatform() {
  return (
    <>
    <section className="text-white body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="basis-4/4 md:basis-2/4  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-7xl tracking-wide text-3xl mb-4 font-bold text-white">LOF <span className='text-[#D8AAF8]'> Platform</span></h1>
      <p className="mb-8 leading-relaxed">Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack. </p>
      <p className="mb-8 leading-relaxed">We have listened to the experts of this subject - the users and content creators alike, to provide what is missing. We found out that there’s a huge amount of them. 
 </p>
     
     
      <div className="flex lg:flex-row md:flex-col">
        <button className=" inline-flex py-3 px-5  items-center h">
          <img src="/assets/icons/in-love.png" alt="" />
          <span className="ml-4 flex items-start flex-col leading-none">
          
            <span className="title-font font-medium text-white">MORE FEATURES</span>
          </span>
        </button>
        <button className=" inline-flex py-3 px-5 items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 ">
        <img src="/assets/icons/money.png" alt="" />
          <span className="ml-4 flex items-start flex-col leading-none">
           
            <span className="title-font font-medium text-white">MORE INCOME</span>
          </span>
        </button>
      </div>
      <div className="flex lg:flex-row md:flex-col my-8">
        <button className=" inline-flex py-3 px-5  items-center ">
        <img src="/assets/icons/collaboration.png" alt="" />
          <span className="ml-4 flex items-start flex-col leading-none">
         
            <span className="title-font font-medium text-white">MORE FREEDOM</span>
          </span>
        </button>
        <button className=" inline-flex py-3 px-5  items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 ">
        <img src="/assets/icons/privacy.png" alt="" />
          <span className="ml-4 flex items-start flex-col leading-none">
         
            <span className="title-font font-medium text-white">MORE PRIVACY</span>
          </span>
        </button>
      </div>
      <div className="flex lg:flex-row md:flex-col">
        <button className="inline-flex py-3 px-5  items-center ">
        <img src="/assets/icons/support.png" alt="" />
          <span className="ml-4 flex items-start flex-col leading-none">
        
            <span className="title-font font-medium text-white">MORE SUPPORT</span>
          </span>
        </button>
        </div>
    </div>
    <div className=" basis-4/4 md:basis-2/4 ">
      <img className="object-cover object-center rounded" alt="hero" src="/assets/home/lof-pl-img.png" />
    </div>
  </div>
</section>
    
    </>
  )
}
