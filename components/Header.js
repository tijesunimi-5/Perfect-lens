import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div className="flex fixed top-0 left-0 right-0 justify-between align-middle bg-black w-full h-12 border-b-orange-500 border-b-[1px]  z-10">
      <div className="text-3xl mt-1 ml-4 font-bold text-orange-500">
        <Link href={"/"}>
          <img src="/lenslogo.png" width={100} />
        </Link>
      </div>

      <ul className="hidden md:flex mt-5 text-white">
        <li className="pr-4">Works</li>
        <li className="pr-4">Location</li>
        <li className="pr-4">Contact</li>
        <li className="pr-4">Book a snap</li>
      </ul>

      <div className="text-xl mt-4 font-medium mr-3 text-white">
        Book now
      </div>
    </div>
  );
}

export default Header
