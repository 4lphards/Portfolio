import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <Navbar />
    </>
  )
}

function Navbar() {
  return (
    <nav className="bg-[#303030] flex pl-8">
      <Image src="/Image/WhiteLogo.png" alt="" width={60} height={60} />
      <div className="container " >
        <ul className="flex justify-center gap-12 h-full items-center">
          <li><Link rel="stylesheet" href="#home">Home</Link></li>
          <li><Link rel="stylesheet" href="#about">About</Link></li>
          <li><Link rel="stylesheet" href="#portolio">Portfolio</Link></li>
          <li><Link rel="stylesheet" href="#Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}
