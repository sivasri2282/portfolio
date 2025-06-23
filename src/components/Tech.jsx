import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiJavascript, SiPython } from 'react-icons/si'
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Tech = () => {
    return (
        <div className='border-b border-neutral-100 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-2 border-neutral-500 p-3.5 flex flex-col items-center">
                    <span className='text-lg font-semibold'>JavaScript</span>
                    <SiJavascript className='text-4xl text-yellow-500 mt-2' />
                </motion.div>
                <motion.div
                    variants={iconVariants(8)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-2 border-neutral-500 p-3.5 flex flex-col items-center">
                    <span className='text-lg font-semibold'>ReactJS</span>
                    <RiReactjsLine className='text-4xl text-blue-500 mt-2' />
                </motion.div>
                <motion.div
                    variants={iconVariants(5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-2 border-neutral-500 p-3.5 flex flex-col items-center">
                    <span className='text-lg font-semibold'>NodeJS</span>
                    <FaNodeJs className='text-4xl text-green-500 mt-2' />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-2 border-neutral-500 p-3.5 flex flex-col items-center">
                    <span className='text-lg font-semibold'>Python</span>
                    <SiPython className='text-4xl text-blue-500 mt-2' />
                </motion.div>
                <motion.div
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                    className="rounded-3xl border-2 border-neutral-500 p-3.5 flex flex-col items-center">
                    <span className='text-lg font-semibold'>MongoDB</span>
                    <SiMongodb className='text-4xl text-green-500 mt-2' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Tech
