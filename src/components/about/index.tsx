"use client";

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'
import { skills } from "@/constants"
import Button from '../Button';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const AboutSection = () => {

  return (
    <div
      className='px-5 w-ull flex flex-col items-center justify-center mt-[12rem] mb-15'
    >
      <div className='flex flex-col items-center space-y-6'>
        <motion.h3
          initial={{opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='text-2xl text-center md:text-4xl font-bold text-gradient'
        >About Me</motion.h3> 

        <motion.p
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            'max-w-3xl border-border border p-3 rounded-md',
            "text-sm md:text-base text-gradient"
          )}
        >
          Hello! I'm Gourav Malviya, a passionate Full Stack Web Developer and a BCA student at the University of Kota. With a strong foundation in both front-end and back-end development, I bring a unique blend of creativity and a knack for crafting efficient, user-centric applications.
          My journey into tech is fueled by a desire to learn, innovate, and contribute to projects that make a difference. I thrive in collaborative environments and am always excited to tackle new challenges.
        </motion.p>

        <Link href={'/about'}>
          <Button variant='ghost' className='group/link'>
            More About Me
            <FaArrowRight className='group-hover/link:translate-x-1 text-sm transition-all ease-in duration-150'/>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AboutSection