"use client";
import React from 'react'
import { motion } from "motion/react";

const Lamp = () => {
  return (
    <div className='flex items-center justify-center absolute -top-80 left-1/2 -translate-x-1/2'>
      <motion.div
        initial={{
          width: 0,
          height: 0
        }}
        animate={{
          width: 500,
          height: 80
        }}
        transition={{
          duration: 1,
          ease: "linear",
          delay: 1
        }}
        className='rounded-full dark:shadow-[0px_100px_300px_1px_#21945b,0px_100px_300px_1px_#027075]' layoutId="lamp" />
    </div>
  )
}

export default Lamp