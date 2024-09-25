import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center mt-6 justify-center'>
        <ul className='flex gap-16'>
            <li className='cursor-pointer hover:text-pink-600 '> <Link href="/">Home</Link></li>
            <li className='cursor-pointer hover:text-pink-600 '> <Link href="/about">About me</Link></li>
            <li className='cursor-pointer hover:text-pink-600 '> <Link href="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar