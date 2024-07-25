"use client";

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
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
              <div className="w-10 h-1 bg-white rounded-md transition-transform transform rotate-45 translate-y-1.5"></div>
              <div className="w-10 h-1 bg-white rounded-md transition-transform transform -rotate-45 -translate-y-1.5"></div>
            </>
          ) : (
            <>
              <div className="w-10 h-1 bg-white rounded-md transition-transform"></div>
              <div className="w-10 h-1 bg-white rounded-md transition-transform"></div>
              <div className="w-10 h-1 bg-white rounded-md transition-transform"></div>
            </>
          )}
        </button>
      </div>
      <div className={`z-40 fixed top-0 right-0 h-16 bg-transparent pt-16 pr-6 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
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
    <div id="home" className="h-screen flex items-center justify-center bg-[#303030] relative overflow-hidden shadow-xl md:justify-between">
      <div className="absolute -bottom-8 w-full h-5/6 overflow-hidden md:ml-[335px] md:h-[90%] md:mb-12">
        <Image className="object-contain w-full h-full rotate-6" src="/Image/BgHandDrawn.png" alt="Background Image" layout="fill" />
      </div>
      <div className="absolute bottom-0 w-11/12 h-[75%] overflow-hidden md:ml-96 md:h-[101%]">
        <Image className="object-contain filter grayscale contrast-125" src="/Image/Photo Me.png" alt="Overlay Image" layout="fill" />
      </div>
      <div className="z-10 pt-8 md:pl-28 md:pt-0 md:pb-16">
        <div className="text-white text-2xl pt-72 pl-4 relative z-10 md:pt-0 md:text-4xl ">
          <h1>I'M <span className="text-[#FFA234] text-4xl md:text-6xl">Maulana Yusuf</span></h1>
          <p>Software Developer</p> 
        </div>
        <div className="pl-4 mt-2">
          <button className={`border-2 md:border-[3px] w-32 h-12 z-10 text-lg rounded-lg md:rounded-lg text-[#FFA234] border-[#FFA234] transition duration-300 ease-in-out transform hover:bg-[#FFA234] hover:text-[#ffffff] hover:scale-105`}>
            <Link href="#contact">Contact Me</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div>

    </div>
  )
}