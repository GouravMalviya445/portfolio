import Image from 'next/image';
import React from 'react'
import { motion } from 'motion/react';
import Link from 'next/link';
import Button from '../Button';
import { cn } from '@/lib/utils';
import { techStackIcons } from '../icons';
import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowRight } from 'react-icons/bs';

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
  projectUrl: string;
  githubUrl: string;
  techStack?: string[];
}

const ProjectCard = ({ title, description, imgSrc, projectUrl, githubUrl, techStack }: ProjectCardProps) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
      className='project-card group/project-card'
      whileHover={{ translateY: -6 }}
      initial={{ opacity: 0, scale: 0.8 }}
    >
      {/* image of project image */}
      <div className='w-full h-[200px] relative flex items-center justify-center overflow-hidden object-cover rounded-lg dark:bg-tag-bg'>
        {/* TODO add project images */}
        <Image
          src={imgSrc}
          alt={title}
          width={300} height={200}
          className='w-full h-full object-cover group-hover/project-card:scale-[1.1] transition-all duration-150 ease-linear'
        />
        <motion.div className={cn(
          'absolute inset-0 w-full h-full transition-all duration-200 ease-in-out',
          "dark:group-hover/project-card:bg-gradient-to-bl from-green-400/10 to-black/30"
        )} />
        
        {/* project links */}
        <motion.div
          className='group-hover/project-card:flex hidden items-center absolute bottom-2 left-2 space-x-2 z-10'
        >
          <Link href={projectUrl} target='_blank'>
            <Button
              variant='ghost'
              className='project-card-link group/link'
            >
              Live link 
              <BsArrowRight
                className='-rotate-45 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-all ease-linear'
              /> 
            </Button>
          </Link>
          <Link href={githubUrl} target='_blank'>
            <Button
              variant='ghost'
              className='project-card-link group/link'
            >
              Github 
              <BsArrowRight
                className='-rotate-45 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-all ease-linear'
              /> 
            </Button>
          </Link>
        </motion.div>
      </div>

      <div>
        <span className='text-lg font-semibold dark:text-accent'>{title}</span>
        <p className='text-sm'>{description}</p>
      </div>

      {/* project stack */}
      <motion.div
        className='flex items-center space-x-[-10px] hover:space-x-[1px] w-fit'>
      {techStack?.map((tech, index) => (
        <Button
          variant='ghost'
          className='rounded-full p-2'
          key={index}
          tooltip
          tooltipValue={tech}
        >
          {techStackIcons[tech.toLowerCase()]}
        </Button>
      ))}
    </motion.div>

    </motion.div>
  )
}

export default ProjectCard