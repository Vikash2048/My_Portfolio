import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className=' pt-8 xl:pb-20 xl:pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen ' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vh] ' fill='blue' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='purple' />
      </div>

      {/* grid  */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[69vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic web magic with next.js</h2>

          <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl'
          words='Transforming Concepts into Seamless User Expreiences'/>

          <p className='text-center md:tracking-wider mb-4 text0sm md:text-lg lg:text-2xl'>
            Hi, I&apos;m Vikash, a Web Developer and UI Designer
          </p>

          <a href="#about">
            <MagicButton title='See my projects'
            icon={<FaLocationArrow />}
            position='right'/>
          </a>
        </div>

        
      </div>

    </div>



  )
}

export default Hero