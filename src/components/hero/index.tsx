"use client";
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
// import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
// import { TbBrandLinkedinFilled } from 'react-icons/tb';


const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const roles = [
    "Full-Stack Developer",
    "Backend Developer",
    "Frontend Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % roles.length);
    }, 3500)

    return () => clearInterval(interval);
  }, [])

  
  return (
    <div className='h-screen flex items-center justify-center flex-col md:flex-row w-full relative'>

      <section className='flex flex-col items-center justify-center text-center'>
        {/* Profile image */}
        <Image
          src="/gourav.png"
          alt='Gourav Malviya'
          className='rounded-full w-36 h-36 md:w-52 md:h-52  object-cover mb-5'
          width={200}
          height={200}
        />

        {/* Job Role */}
        <motion.h1
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={cn(
            'text-xl md:text-4xl font-bold text-center md:text-left flex justify-center items-center',
          )}
        >
          <span className='text-text-secondary'>Hi, I&apos;m a </span>
          <motion.button 
            key={roles[index]}
            initial={{ width: 0 }}
            animate={{ width: "fit-content" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            type='button'
            className={cn(
              "animate-title inline-block overflow-hidden ml-2",
              "rounded-md text-nowrap dark:bg-gradient-to-br dark:from-gradient-end dark:to-gradient-start dark:text-transparent dark:bg-clip-text"
            )}>
              {roles[index]}
            </motion.button>
          <div className='px-0.5 rounded-2xl py-4.5 ml-1 bg-white'/>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='text-md md:text-xl w-xs md:w-md text-text-secondary text-center md:mt-2'
        >
          I&apos;m a full-stack developer with a passion for building web applications.
        </motion.p>

        <motion.div className='flex items-center justify-center gap-1 mt-5'>
          <motion.button
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={cn(
              "animate-title inline-block overflow-hidden ml-2 px-3 py-1 font-semibold text-lg",
              "rounded-md text-nowrap dark:bg-gradient-to-br dark:from-gradient-end/40 dark:to-gradient-start/70",
              "dark:hover:from-gradient-start/70 dark:hover:to-gradient-end/40", 
              "transition-all duration-200 ease-linear cursor-pointer",
              "active:scale-[1.05]"
            )}
          >
            <Link href="/projects">Proof of work</Link>
          </motion.button>

          <motion.button
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, type: "bounce" }}
            className={cn(
              "animate-title inline-block overflow-hidden ml-2 px-3 py-1 font-semibold text-lg",
              "rounded-md text-nowrap dark:border dark:border-accent/60 cursor-pointer dark:text-text-secondary dark:hover:text-text-primary",
              "active:scale-[1.05] transition-all duration-200 ease-linear"
            )}
          >
            {/* TODO: Add Resume Link */}
            View Resume
          </motion.button>
        </motion.div>        
      </section>  

      {/* Social Links */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className={cn(
          "absolute top-1/3 text-3xl right-10 transform",
          "flex items-center justify-center gap-2"
        )}
      >
        <Link href="https://x.com/gouravdotcom" target='_blank'>
          <FaSquareXTwitter className='dark:text-[#000] dark:bg-white rounded-md' />
        </Link>
        <Link href="https://instagram.com/https.gouravxx._" target='_blank'>
          <FaSquareInstagram className='dark:text-pink-500 dark:bg-white rounded-md'/>
        </Link>
        <Link href="https://github.com/gouravmalviya445" target='_blank'>
          <FaSquareGithub className='dark:text-[#000] dark:bg-white rounded-md'/>
        </Link>
        <Link href="https://linkedin.com/in/gouravmalviya" target='_blank'>
          <TbBrandLinkedinFilled className='dark:text-blue-500 dark:bg-white rounded-md'/>
        </Link>
      </motion.div> */}
    
    </div>
  )
}

export default HeroSection