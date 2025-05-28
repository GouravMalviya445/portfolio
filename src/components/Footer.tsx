import Link from 'next/link'
import React from 'react'
import { FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6' 
import { TbBrandLinkedinFilled } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className='dark:bg-gradient-to-br dark:from-gradient-start  dark:to-gradient-end p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 '>
      <p className='text-base opacity-75'>
        Made with <span className='text-red-500'>❤</span> by Gourav Malviya
      </p>
      <div className='flex items-center gap-2'>

        <p className='text-sm opacity-75 uppercase dark:text-text-secondary'>Follow me:</p>
        
        <Link href="https://x.com/gouravdotcom" target='_blank'>
          <FaSquareXTwitter size={25} className='dark:text-[#000] dark:bg-white rounded hover:scale-110 transition-all ease-in duration-150' />
        </Link>
        <Link href="https://instagram.com/https.gouravxx._" target='_blank'>
          <FaSquareInstagram size={25} className='dark:text-pink-500 dark:bg-white rounded hover:scale-110 transition-all ease-in duration-150'/>
        </Link>
        <Link href="https://github.com/gouravmalviya445" target='_blank'>
          <FaSquareGithub size={25} className='dark:text-[#000] dark:bg-white rounded hover:scale-110 transition-all ease-in duration-150'/>
        </Link>
        <Link href="https://linkedin.com/in/gouravmalviya" target='_blank'>
          <TbBrandLinkedinFilled size={25} className='dark:text-blue-500 dark:bg-white rounded hover:scale-110 transition-all ease-in duration-150'/>
        </Link>
      </div>
    </footer>
  )
}

export default Footer