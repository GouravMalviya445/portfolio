"use client";
import React from 'react'
import { motion } from 'motion/react';
import { techIcons } from './icons';
import { cn } from '@/lib/utils';

const TechStackMarquee = () => {

  
  return (
    <div className='overflow-x-hidden max-w-screen border-y mt-10 border-accent/10 absolute left-0'>
      <motion.div
        initial={{
          translateX: "0%"
        }}
        animate={{
          translateX: "-50%"
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          delay: 0.5,
        }}
        className='h-30 flex items-center gap-20'>
      {[...techIcons, ...techIcons, ...techIcons].map((icon, index) => (
        <motion.div whileHover={{ scale: 1.1 }} className={cn(
          'text-4xl rounded-full',
          "dark:bg-radial from-accent/30 to-accent/20 backdrop-blur-3xl text-accent shadow-accent/30 shadow-[0_0_15px]"
        )} key={index} >
          {icon} {/* icon is reactIcons component */}
        </motion.div>
      ))}
      </motion.div>
    </div>
  )
}

export default TechStackMarquee