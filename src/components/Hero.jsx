import React from 'react'
import {HERO_CONTENT} from "../constants"

import { motion } from "framer-motion";
const container= (delay) => ({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})
import profilePic from "../assets/srii.jpg"
const Hero = () => {
  return (
    <div className='border-b border-neutral-100 pb-10 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className='pt-12 pb-6 text-6xl font-thin tracking-tight lg:mt-24 lg:text-7xl'>
                    Sivasri G

                </motion.h1>
                <motion.span variants={container(0.5)}
                initial="hidden"
                animate="visible"className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent '>Software Developer</motion.span>
            <motion.p variants={container(0.5)}
                initial="hidden"
                animate="visible"className='my-2 max-w-xl py-6 leading-relaxed text-xl  tracking-tighter '>{HERO_CONTENT}</motion.p>
<motion.a
  href="/Sivasri Resume.pdf"
  download
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="inline-block px-6 py-2 font-semibold text-black-600 border-2 border-grey-600 
             rounded-lg shadow-md transition-all duration-300 
             hover:bg-white-600 hover:text-white hover:shadow-lg hover:border-white-700"
>
  Download CV
</motion.a>


            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center '>
                    <motion.img initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                     transition={{duration:1,delay:1.2} }
                     src={profilePic} alt="" className='ml-30 w-2/3 object-cover rounded-xl'/ >

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero