"use client";
import React from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import { techStackIcons } from '../icons';
import { ImGithub } from 'react-icons/im';
import Link from 'next/link';
import { LuLink } from 'react-icons/lu';
import { cn } from '@/lib/utils';

interface ProjectPageCardProps {
  title: string;
  description: string;
  imgSrc: string;
  projectUrl: string;
  githubUrl: string;
  techStack: string[];
}


const ProjectPageCard = ({ title, description, projectUrl, githubUrl, imgSrc, techStack }: ProjectPageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='max-w-5xl flex flex-col gap-2 sm:justify-between sm:flex-row-reverse rounded-3xl overflow-hidden dark:bg-bg-secondary sm:px-4'>
      <div className='w-full sm:w-[40%] md:p-3 sm:flex justify-center md:justify-end items-center'>
        <Image
          src={imgSrc}
          alt={title}
          width={200}
          height={200}
          className={cn(
            'w-full h-[200px] sm:rounded-2xl object-cover',
            "sm:shadow-[0_0_15px] dark:shadow-green-400/40"
          )}
        />
      </div>


      {/* Bio of a particular project */}
      <div className='flex flex-col md:justify-between'>

        {/* Project info */}
        <div className='px-3 py-5 space-y-3'>
          {/* title and description */}
          <div className='space-y-0.5'>
            <h4
              className='text-lg sm:text-xl md:text-2xl font-bold dark:text-text-primary'
            >{title}</h4>
            <p
              className='text-sm sm:text-base dark:text-text-secondary md:mt-2'
            >{description}</p>
          </div>

          {/* tech stack */}
          <div className='md:mt-2'>
            <span className="text-sm dark:text-text-primary mb-2 hidden md:block">Tech Stack:</span>
            <div className='flex gap-2 flex-wrap'>
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className='text-sm px-1.5 py-0.5 rounded-lg border dark:border-border dark:bg-bg-surface flex items-center gap-2'
                >
                  {techStackIcons[tech]} {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
        
        {/* links  */}
        <div className='flex w-full items-center pl-4 mb-3 justify-center sm:justify-start'>
          <div className='flex gap-3'>
            {/* github link */}
            <Link href={githubUrl} target='_blank'>
              <span className='flex items-center gap-1 dark:text-slate-400'>
                <ImGithub /> See code
              </span>
            </Link>
            {/* project link */}
            <Link href={projectUrl} target='_blank'>
              <span className='flex items-center gap-1 dark:text-accent'>
                <LuLink /> Live link
              </span>
            </Link>
          </div>
        </div>
      </div>

    </motion.div>
  )
};

export default ProjectPageCard;
