import React from 'react';

const Hero = () => {
  return (
    <>
    <section className="text-white body-font pt-24 " >
  <div className="container mx-auto flex px-0 py-24 md:flex-row flex-col items-center">
    <div className="basis-4/4 md:basis-2/4 md:pt-10   flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-7xl text-3xl mb-4 font-black tracking-wider text-[#D8AAF8]">Satisfying Fans.
      </h1>
      <h1 className="title-font sm:text-7xl text-3xl mb-4 font-black tracking-wider py-8 text-white">Empowering Creators.
      </h1>
      <p className="mb-8 leading-8">Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white  border-2 border-[#D8AAF8] py-1 px-6   rounded-lg text-lg">Buy LOF!</button>
        
      </div>
    </div>
    <div className="basis-4/4 md:basis-2/4">
      <img className="object-cover object-center rounded" alt="hero" src="/assets/home/hero-img.png" />
    </div>
  </div>
</section>
    </>
  );
}

export default Hero;

