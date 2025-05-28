import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React from 'react'

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  variant?: "default" | "primary" | "secondary" | "link" | "outline" | "ghost" | "gradientText";
  size?: "sm" | "md" | "lg" | "default";
  tooltip?: boolean;
  tooltipValue?: string;
}

const defaultClass = "cursor-pointer flex items-center gap-2 px-2 py-0.5 rounded-sm transition-all ease-in duration-200 relative"

const customClasses = {
  variants: {
    default: "",
    primary: "dark:bg-accent dark:hover:bg-accent-hover dark:text-text-primary",  
    gradientText: "bg-gradient-to-br from-green-400 to-cyan-400 dark:from-green-600 dark:to-cyan-600 bg-clip-text text-transparent",
    secondary: "dark:bg-gradient-to-br dark:from-gradient-start dark:to-gradient-end dark:text-surface dark:hover:from-gradient-end dark:hover:to-gradient-start",
    link: "group/button-link px-0 py-1.5 text-sm font-semibold",
    outline: "dark:border dark:border-accent/80 dark:hover:text-text-primary dark:text-text-secondary rounded-md",
    ghost: "dark:hover:bg-bg-secondary dark:border dark:border-border rounded-lg",
  },
  sizes: {
    sm: "text-xs px-1 py-0.5",
    md: "text-base px-2.5 py-1",
    lg: "text-lg px-5 py-1.5",
    default: "",
  },
}

function Button({ 
  children,
  className = "",
  type = "button",
  variant = "default",
  size = "default",
  tooltip = false,
  tooltipValue = ""
}: ButtonProp) {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <button
      type={type}
      className={cn(
        defaultClass,
        customClasses.variants[variant],
        customClasses.sizes[size],
        className
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}

      {/* tooltip */}
      {tooltip === true && hovered && (
        <motion.span
          layout
          initial={{ opacity: 0,  y: 10 }}
          animate={{ opacity: 1,  y: 0 }}
          transition={{ type: "spring", opacity: 0, y: 0 }}
          className="w-max absolute bottom-[130%] left-1/2 -translate-x-1/2 px-2 py-0.5 border dark:border-border text-base dark:bg-bg-secondary text-text-primary cursor-text rounded-md"
        >
          { tooltipValue }
        </motion.span>
      )}

      {/* underline grow animation */}
      {variant === "link" && (
        <>
          <motion.div
            className='w-0 group-hover/button-link:w-full h-0.5 absolute bottom-0 left-0 bg-green-500 rounded-full transition-all ease-in duration-200'
          />
          {/* <motion.div
            className='w-0 group-hover:w-full h-0.5 absolute top-0 right-0 bg-accent rounded-full transition-all ease-in duration-200 '
          />
          <motion.div
            className='h-0 group-hover:h-full w-0.5 absolute top-0 left-0 bg-accent rounded-full transition-all ease-in duration-200 '
          />
          <motion.div
            className='h-0 group-hover:h-full w-0.5 absolute bottom-0 right-0 bg-accent rounded-full transition-all ease-in duration-200 '
          /> */}
        </>
      )}
    </button>
  )
}

export default Button