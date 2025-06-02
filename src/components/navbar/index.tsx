"use client";

import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Button from '../Button';
import { IoIosArrowDown } from 'react-icons/io';
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from 'react-icons/tfi';
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';
import { TbBrandLinkedinFilled } from 'react-icons/tb';

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

  const socialAccounts = [
    {
      name: "Github",
      href: "https://github.com/gouravmalviya445",
      icon: <FaSquareGithub />
    },
    {
      name: "Twitter",
      href: "https://x.com/gouravdotcom",
      icon: <FaSquareXTwitter />
    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/in/gouravmalviya",
      icon: <TbBrandLinkedinFilled />
    },
    {
      name: "Instagram",
      href: "https://instagram.com/https.gouravxx._",
      icon: <FaSquareInstagram />
    }
  ]

  const [hovered, setHovered] = useState<number | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{
          width: "70%",
          opacity: 0,
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
        className={cn("max-w-7xl hidden lg:flex fixed top-0 left-1/2 -translate-x-1/2 z-50 justify-between items-center rounded-full px-4 py-3", scrolled && "shadow-dark dark:shadow-none dark:border dark:border-[#04bd92]/10 dark:bg-bg-secondary")}
      >
        {/* logo */}
        <Link href="/">
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

        <div className='hidden md:block relative'
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setShowDropdown(false)}
        >
          <Button
            variant='outline' className='text-sm '
          >
            <IoIosArrowDown /> Let&apos;s connect
          </Button>

          {showDropdown && (
            <div className='dark:bg-bg-surface overflow-hidden rounded-lg absolute top-[130%] w-full flex flex-col items-center '>
                {socialAccounts.map((account, index) => (
                  <Link href={account.href} key={index} className='w-full py-0.5 hover:bg-accent/60 text-center transition-all rounded-lg'>
                    <span>{account.name}</span>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </motion.nav>

      
      {/* Mobile Navbar */}
      <motion.nav
        initial={{y: -100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className={cn(
          "lg:hidden",
          "flex items-center justify-between px-3 py-1.5",
          "fixed w-[90%] top-3 left-1/2 -translate-x-1/2 z-50 rounded-full",
          scrolled && "shadow-dark dark:shadow-none dark:border dark:border-[#04bd92]/10 dark:bg-bg-secondary"
        )}
      >
        {/* logo */}
        <Link href="/">
          <h1 className='text-lg sm:text-xl cursor-pointer font-bold text-neutral-700  animate-logo'>Gourav Malviya</h1>
        </Link>

        {/* Menu button */}
        <Button
          variant='ghost'
          size='md'
          className='sm:text-xl px-2'
        >
          <CiMenuFries
            onClick={() => setMobileMenu(true)}
          />
        </Button>
        
        {/* open mobile menu */}
        {mobileMenu && (
          <motion.div
            layout
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={cn(
              'fixed h-[95vh] w-[70vw] top-0 right-[-20px] z-50 dark:bg-bg-secondary rounded-l-3xl',
              "px-4 pt-12 pb-5 flex flex-col justify-between"
            )}
          >
            {/* close mobile menu button */}
            <div className='flex justify-end absolute right-4 top-4'>
              <Button variant='ghost' className='p-2'>
                <TfiClose  onClick={() => setMobileMenu(false)}/>
              </Button>                
            </div>

            {/* links of other pages */}
            <div className='flex flex-col gap-3'>
              <div >
                <Link href="/" className='dark:text-text-secondary'>
                  <Button className='text-lg sm:text-xl dark:text-accent'>
                    Home
                  </Button>
                </Link>

                {navItems.map((item, index) => (
                  <Link
                    href={item.href}
                    key={item.href}
                  >
                    <Button className='text-lg sm:text-xl dark:text-text-accent '>
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            {/* social links */}
            <div className='flex flex-col gap-2'>
              <span className='text-sm dark:text-text-muted font-semibold'>
                Connect with me:
              </span>

              <div className='flex items-center gap-2 text-accent'>
                {socialAccounts.map((account, index) => (
                  <Link key={index} href={account.href} target='_blank' className='text-3xl sm:text-4xl'>
                    {account.icon}
                  </Link>
                ))}
              </div>
            </div>

          </motion.div>
        )} 
      </motion.nav>
      
    </>
  )
}

export default Navbar