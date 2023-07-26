

import React from 'react'
import LottieAnimation from './LottieAnimation'

const Hero = () => {
  return (
    <section id="hero" className="px-6 mx-auto mt-10">
    
      <div
        className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
      >
         <div className="bg-gradient-to-r md:w-1/2  py-10 text-black">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm MOHAMED NASSIR</h1>
        <p className="text-xl mb-8">I'm a Frontend Engineer</p>
        <p className="text-lg mb-8 space-x-0.5">
        "I love building responsive and user-friendly web applications using the power of React, Tailwind CSS, webflow, wordpress, and modern web technologies.
         My passion for frontend development drives me to create delightful experiences for users."
        </p>
        <button className="px-6 py-3 rounded-lg bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white">
          Get in touch
        </button>
      </div>
    </div>
    <div className="flex-1 flex items-center justify-center md:mt-0 md:h-0 md:overflow-visible">
          <div className="md:-mt-10">
            <LottieAnimation />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero