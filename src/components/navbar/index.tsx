"use client";

import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from 'next/link';
import { cn } from '@/lib/utils';

function Navbar() {
  const navItems = [
    {
      title: "About me",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
  ]

  const [hovered, setHovered] = useState<number | null>(null);

  const { scrollY } = useScroll();
  
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  })
  return (
    <motion.nav
      initial={{
        width: "70%",
        opacity: 0
      }}
      animate={{
        width: scrolled ? "60%" : "80%",
        y: scrolled ? 20 : 0,
        opacity: 1
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      layoutId='navbar'
      className={cn("max-w-7xl flex fixed top-0 left-1/2 -translate-x-1/2 z-50 justify-between items-center rounded-full px-4 py-3", scrolled && "shadow-dark dark:shadow-none dark:border dark:border-[#04bd92]/20")}
    >
      {/* logo */}
      <Link className='' href="/">
        {/* {
          isScrolled ? (
            <Image src="/logo.png" alt="logo" width={60} height={60} className='rounded-full '/>
          ) : (
            <h1 className='text-xl uppercase cursor-pointer font-bold  text-neutral-700'>Gourav</h1>
          )
        } */}
        <h1 className='text-xl cursor-pointer font-bold text-neutral-700  animate-logo'>Gourav Malviya</h1>
      </Link>
    
      {/* nav items */}
      <div className="flex items-center">
        {navItems.map((item, index) => (
          <Link
            href={item.href}
            key={item.href}
            className="text-center dark:text-accent/95 dark:hover:text-green-400 relative px-3 py-1 transition-all ease-linear duration-150"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            { hovered === index &&
              <motion.span
              layoutId="hovered-span"
              className='h-full w-full -z-10 rounded-lg absolute inset-0 dark:bg-green-600/10 bg-neutral-100' />
            }
            {item.title}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar