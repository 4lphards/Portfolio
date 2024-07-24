"use client";

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#303030] flex pl-8 pr-8 justify-between items-center w-full relative">
      <div>
        <Link href="#home"><Image src="/Image/WhiteLogo.png" alt="" height={50} width={50}></Image></Link>
      </div>
      <div className="w-full flex justify-end items-center md:justify-center">
        <ul className="hidden md:flex gap-8">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#portfolio">Portfolio</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <button className="flex flex-col gap-2 md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? (
            <>
              <div className="w-12 h-1.5 bg-white rounded-md transition-transform transform rotate-45 translate-y-1.5"></div>
              <div className="w-12 h-1.5 bg-white rounded-md transition-transform transform -rotate-45 -translate-y-1.5"></div>
            </>
          ) : (
            <>
              <div className="w-12 h-1.5 bg-white rounded-md transition-transform"></div>
              <div className="w-12 h-1.5 bg-white rounded-md transition-transform"></div>
              <div className="w-12 h-1.5 bg-white rounded-md transition-transform"></div>
            </>
          )}
        </button>
      </div>
      <div className={`fixed top-0 right-0 h-16 bg-[#303030] pt-16 pr-6 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <ul className="flex flex-col gap-8">
          <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="#portfolio" onClick={toggleMenu}>Portfolio</Link></li>
          <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div id="home" className="h-screen flex items-center justify-center bg-[#303030]">
      <div className="text-center">
        <h1 className="text-6xl">Maulana Yusuf</h1>
        <p className="text-2xl">Software Engineer</p>
      </div>
    </div>
  )
}