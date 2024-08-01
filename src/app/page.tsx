"use client";

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Typewriter from "typewriter-effect"

export default function Page() {

  useEffect(() => {
    // Force dark mode by adding the 'dark' class to the <html> element
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <nav className="bg-black text-white">
    <>
      <Navbar />
      <Home />
      <About />    
    </>
    </nav>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  let lastScrollY = 0;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setMenuOpen(false);
    lastScrollY = currentScrollY;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={` fixed bg-transparent flex pl-8 pr-8 justify-between items-center w-full z-10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
        <button className="flex flex-col gap-2 md:hidden z-20" onClick={toggleMenu}>
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
      <div className={`z-10 fixed top-0 right-0 h-16 bg-transparent pt-16 pr-6 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
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
    <div id="home" className="h-[667px] md:h-screen flex items-center justify-center bg-white/20 relative overflow-hidden shadow-xl md:justify-between">
      <div className="absolute -bottom-8 w-full h-5/6 overflow-hidden md:ml-[335px] md:h-[85%] md:mb-12">
        <Image className="object-contain w-full h-full rotate-6" src="/Image/BgHandDrawn.png" alt="Background Image" layout="fill" />
      </div>
      <div className="absolute bottom-0 w-11/12 h-[75%] overflow-hidden md:ml-96 md:h-[95%]">
        <Image className="object-contain filter contrast-125" src="/Image/Photo Me.png" alt="Overlay Image" layout="fill" />
      </div>
      <div className=" pt-8 md:pl-28 md:pt-0 md:pb-16">
        <div className="text-white text-2xl pt-72 pl-4 relative md:pt-0 md:text-4xl ">
          <h1>I’M <span className="text-[#FFA234] text-4xl md:text-6xl">Maulana Yusuf</span></h1>
          <div className="flex gap-2"> a <Typewriter 
            options={{
              strings: ['Software Engineer', 'Fullstack Developer', 'Tech Enthusiast'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          /> </div>
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
    <div id="about" className="h-[667px] md:h-screen bg-[#303030] flex flex-col gap-8">
      <div className="p-5 text-[35px] flex flex-col md:pl-40 md:pr-40 md:pt-20 md:text-4xl md:gap-2">
        <p>About</p>
        <div className="flex gap-4">
          <div className="h-1 w-9 bg-[#FFA234] flex-shrink-0 mt-3 md:w-16 md:h-[4px] md:mt-4"/> 
          <p className="text-lg text-justify md:text-2xl">
            I’m an aspiring programmer who thrives on learning new things. 
            My attention to detail and problem-solving skills allow me to tackle challenges effectively. 
            Whether it’s debugging code or designing elegant solutions, 
            I’m passionate about creating efficient and reliable software.
          </p>
        </div>
      </div>
      <div className="gap-10 flex flex-col">
        <div className="flex items-center text-[35px] flex-col gap-2 md:text-4xl md:gap-4">
          <p>My Skills</p>
          <div className="w-44 h-1 bg-[#FFA234] md:h-[4px] md:w-56"/>
        </div>
        <div className="md:justify-center md:gap-[70px] gap-[50px] flex overflow-x-auto h-[175px] min-w-[115px] text-center leading-[110px">
          <div className="custom-shadow rounded-[20px] bg-opacity-20 bg-white h-[135px] min-w-[115px] text-center leading-[20px] ml-11 shadow">
            <div className="flex flex-col items-center mt-5 gap-2">
              <Image src="/Image/Flutter.png" alt="Flutter" width={66} height={66} />
              <p className="text-xl">Flutter</p>
            </div>
          </div>
          <div className="custom-shadow rounded-[20px] bg-opacity-20 bg-white h-[135px] min-w-[115px] text-center leading-[20px]">
            <div className="flex flex-col items-center mt-5 gap-2">
              <Image src="/Image/CSharp.png" alt="CSharp" width={66} height={66} />
              <p className="text-xl">C#</p>
            </div>
          </div>
          <div className="custom-shadow rounded-[20px] bg-opacity-20 bg-white h-[135px] min-w-[115px] text-center leading-[20px]">
            <div className="flex flex-col items-center mt-5 gap-2">
              <Image src="/Image/Html.png" alt="HTMl" width={66} height={66} />
              <p className="text-xl">HTML</p>
            </div>
          </div>
          <div className="custom-shadow rounded-[20px] bg-opacity-20 bg-white h-[135px] min-w-[115px] text-center leading-[20px]">
            <div className="flex flex-col items-center mt-5 gap-2">
              <Image src="/Image/Python.png" alt="Python" width={66} height={66} />
              <p className="text-xl">Python</p>
            </div>
          </div>
          <div className="custom-shadow rounded-[20px] bg-opacity-20 bg-white h-[135px] min-w-[115px] text-center leading-[20px] mr-11">
            <div className="flex flex-col items-center mt-5 gap-2">
              <Image src="/Image/JavaScript.png" alt="JavaScript" width={66} height={66} />
              <p className="text-xl">JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}