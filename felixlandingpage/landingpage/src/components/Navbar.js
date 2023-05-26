import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex items-center justify-between px-3 relative py-8 sm:justify-around lg:items-start lg:mt-12">
        <div className="heading">
          <h1 className="text-4xl">Felix</h1>
        </div>
        <ul className="hidden lg:flex lg:justify-end ">
          <li className="pr-9 text-xl">
            <Link href="#header" scroll={false}>
              Home
            </Link>
          </li>
          <li className="pr-9 text-xl">
            <Link href="#about" scroll={false}>
              About
            </Link>
          </li>
          <li className="pr-9 text-xl">
            <Link href="#feature" scroll={false}>
              Features
            </Link>
          </li>
          <li className="pr-9 text-xl">
            <Link href="#price" scroll={false}>
              Prices
            </Link>
          </li>
          <li className="pr-9 text-xl">
            <Link href="#review" scroll={false}>
              Reviews
            </Link>
          </li>
          <li className="pr-9 text-xl">
            <Link href="#contact" scroll={false}>
              Contacts
            </Link>
          </li>
        </ul>

        {/* for mobile devices */}

        <div className="lg:hidden z-30">
          {nav ? (
            <RxCross1 className="text-4xl text-white" onClick={toggleNav} />
          ) : (
            <GiHamburgerMenu
              className="text-4xl text-black"
              onClick={toggleNav}
            />
          )}
        </div>
        {nav ? (
          <div className="bg-black absolute left-0 right-0 bottom-0 top-0 h-screen flex items-center justify-center z-10 ease-in-out duration-300">
            <ul className="text-white">
              <li className=" text-3xl">
                <Link href="#header" scroll={false} onClick={toggleNav}>
                  Home
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#about" scroll={false} onClick={toggleNav}>
                  About
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#feature" scroll={false} onClick={toggleNav}>
                  Features
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#price" scroll={false} onClick={toggleNav}>
                  Prices
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#review" scroll={false} onClick={toggleNav}>
                  Reviews
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#contact" scroll={false} onClick={toggleNav}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="bg-black w-full absolute left-[-200%] right-0 bottom-0 top-0 h-screen flex items-center justify-center z-10 ease-in-out duration-300">
            <ul className="text-white flex items-center flex-col">
              <li className=" text-3xl">
                <Link href="#header" scroll={false}>
                  Home
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#about" scroll={false}>
                  About
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#feature" scroll={false}>
                  Features
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#price" scroll={false}>
                  Prices
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#review" scroll={false}>
                  Reviews
                </Link>
              </li>
              <li className="text-3xl py-2">
                <Link href="#contact" scroll={false}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
