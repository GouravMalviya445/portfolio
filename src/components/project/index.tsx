"use client";
import React from 'react'
import { motion } from 'motion/react'
import ProjectCard from './ProjectCard';
import Button from '../Button';
import Link from 'next/link';

const ProjectSection = () => {

  return (
    <div className='w-full h-screen flex flex-col gap-5 items-center justify-around px-3'>
      <motion.div className='flex flex-col gap-2 items-center mb-5'>
        <motion.h3
          whileInView={{ scale: [0, 1] }}
          initial={{ scale: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl md:text-4xl font-bold dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent dark:from-green-400 dark:to-cyan-400 text-transparent"
          viewport={{ once: true }}
        >
          My Projects
        </motion.h3>
        <motion.p className='text-sm md:text-base max-w-sm sm:max-w-md md:max-w-2xl text-center dark:text-text-muted mt-2'>
          A showcase of my recent work, personal projects, and experiments. Each card displays the project's key information and technology stack
        </motion.p>
      </motion.div>


      {/* project cards */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-5'>
        {/* TODO: Add project cards  */}
        <ProjectCard
          title='Project 1'
          description='Description of project 1 Description of project 1'
          imgSrc='/gourav.png'
          projectUrl='#'
          githubUrl='#'
          techStack={["React", "Nextjs", "TailwindCSS", "Framer Motion"]}
        />
        <ProjectCard
          title='Project 1'
          description='Description of project 1'
          imgSrc='/gourav.png'
          projectUrl='#'
          githubUrl='#'
          techStack={["React", "Nextjs", "TailwindCSS", "Framer Motion"]}
        />
        <ProjectCard
          title='Project 1'
          description='Description of project 1'
          imgSrc='/gourav.png'
          projectUrl='#'
          githubUrl='#'
          techStack={["React", "Nextjs", "TailwindCSS", "Framer Motion"]}
        />
      </div>

      {/* view all projects */}
      <motion.div>
        <Link href="/projects">
          <Button className='text-xl sm:text-2xl px-4 py-1 border-none border-bim-animation rounded-full' variant='outline'>See All</Button>
        </Link>
      </motion.div>
    </div>
  )
}

export default ProjectSection