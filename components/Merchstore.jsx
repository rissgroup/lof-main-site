import React from 'react';

const Merchstore = () => {
  return (
    <>
  <section className="text-white body-font pt-24">
  <div className="container mx-auto flex px-0 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 md:pt-10 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold tracking-wider  text-white">LOF</h1>
      <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold tracking-wider text-[#D8AAF8]">Merch Store </h1>
      <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium tracking-wider text-white">Always Hot Regardless of Temprature</h1>
      
      <p className="mb-8 leading-8">Our plan is to revolutionize the whole industry with the LOF platform, which will be the crown jewel of our ecosystem. The entry level release already packs a huge array of features – many of which other platforms lack.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white  border-2 border-[#D8AAF8] py-1 px-6   rounded-lg text-lg">Shop now!</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
  </div>
</section>
    </>
  );
}

export default Merchstore;