import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
       <nav className="flex justify-around items-start mt-12">
          <div className="heading">
            <h1 className="text-4xl">Felix</h1>
          </div>
          <ul className="flex justify-end">
            <li className="pr-9 text-xl"><Link href="#header" scroll={false}>Home</Link></li>
            <li className="pr-9 text-xl"><Link href="#about" scroll={false}>About</Link></li>
            <li className="pr-9 text-xl"><Link href="#feature" scroll={false}>Features</Link></li>
            <li className="pr-9 text-xl"><Link href="#price" scroll={false}>Prices</Link></li>
            <li className="pr-9 text-xl"><Link href="#review" scroll={false}>Reviews</Link></li>
            <li className="pr-9 text-xl"><Link href="#contact" scroll={false}>Contacts</Link></li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar
