import React from 'react'

export default function Footer() {
  return (
    <>
  <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
    {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
    Term and Conditions        
    </a>
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
           Personal Data Privacy policy             
    </a>
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
           Risk disclosure policy       
    </a> */}
    <a className="text-gray-400">
    Term and Conditions 
      </a>
      <a className="ml-3 text-gray-400">
      Personal Data Privacy policy 
      </a>
      <a className="ml-3 text-gray-400">
      Risk disclosure policy 
      </a>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      © LOF CRYPTO, 2022.
    </span>
  </div>
</footer>
    
    </>
  )
}
