"use client"
import React, {useState} from 'react'
import Link from 'next/link';

const Navbar = () => {
    const [isNavVisible, setNavVisible] = useState(false);
    const toggleNav = () => {
      setNavVisible(!isNavVisible);
    }
  return (
    <div className="bg-[#120081] text-[#F9F9FA] flex py-[25px] px-20 justify-between">
      <Link href='/'>MyBlog</Link>
      <div className="flex mx">
        <div className='mx-2'>Blog</div>
        <div className='mx-2'>About</div>
      </div>
    </div>
  )
}

export default Navbar
