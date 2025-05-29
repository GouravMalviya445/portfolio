"use client";
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { techStackIcons } from '../icons';
import Button from '../Button'

const SkillsSection = () => {
  const skills = Object.keys(techStackIcons);
  return (
    <div className='flex flex-col w-full items-center mt-16 dark:border-border dark:border-t py-10'>
        <h3
          className={cn(
            "text-2xl md:text-4xl text-center font-bold text-gradient mb-10",
          )}
        >
          Skills
        </h3>   

        {/* tech stack */}
        <div className='w-sm md:w-3xl grid grid-cols-4 justify-items-center md:grid-cols-5 gap-y-5'>
          {skills.map((skill) => (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key={skill}
            >
              <Button
                tooltip
                variant='ghost'
                tooltipValue={skill}
                className='text-3xl sm:text-4xl p-2'
              >{techStackIcons[skill]}</Button>
            </motion.div>
          ))}
        </div>

      </div>
  )
}

export default SkillsSection