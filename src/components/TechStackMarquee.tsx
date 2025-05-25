"use client";
import React from 'react'
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { motion } from 'motion/react';

const TechStackSlider = () => {
  const techIcons = [
    <FaReact className='backdrop:blur-2xl' />,
    <RiNextjsFill className='backdrop:blur-2xl'/>,
    <BiLogoTypescript className='backdrop:blur-2xl'/>,
    <SiMongodb className='backdrop:blur-2xl'/>,
    <RiJavascriptFill className='backdrop:blur-2xl'/>,
    <BiLogoPostgresql className='backdrop:blur-2xl'/>,
    <RiTailwindCssFill className='backdrop:blur-2xl'/>,
    <BsGithub className='backdrop:blur-2xl'/>
  ]
  
  return (
    <div className='overflow-hidden border-y border-accent/10 absolute left-0'>
      <motion.div
        initial={{
          x: "0"
        }}
        animate={{
          x: "-50%"
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          delay: 0.5,
        }}
        className='h-30 flex items-center gap-20'>
      {[...techIcons, ...techIcons, ...techIcons].map((icon, index) => (
        <div className='text-4xl text-text-primary/90 rounded-full p-1 dark:bg-green-400/40 shadow-[0_0_20px_#00C16E]  dark:shadow-400/30' key={index}>
          {icon}
        </div>
      ))}
      </motion.div>
    </div>
  )
}

export default TechStackSlider