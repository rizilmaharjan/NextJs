"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
  const [hamBurger, setHamBurger] = useState(false);
  const handleClick = () => {
    setHamBurger(!hamBurger);
  };
  return (
    <>
      <nav>
        <ul className="hidden md:gap-x-8 md:flex ">
          <Link href="/">
            <li className="font-semibold">Home</li>
          </Link>
          <Link href="/about">
            <li className="font-semibold">About</li>
          </Link>
          <Link href="/movie">
            <li className="font-semibold">Movie</li>
          </Link>
          <Link href="/contact">
            <li className="font-semibold">Contact</li>
          </Link>
        </ul>
        {/* for mobile devices */}
        <div className="block w-full relative z-50 md:hidden">
          {hamBurger ? (
            <RxCross1 className="text-4xl text-white" onClick={handleClick} />
          ) : (
            <GiHamburgerMenu className="text-4xl" onClick={handleClick} />
          )}
        </div>

        {hamBurger ? (
          <div className="bg-black h-screen absolute inset-0 grid place-items-center ease-in-out duration-300">
            <ul>
              <Link href="/">
                <li className="font-semibold text-white text-4xl py-4"onClick={handleClick}>Home</li>
              </Link>
              <Link href="/about">
                <li className="font-semibold text-white text-4xl py-4"onClick={handleClick}>
                  About
                </li>
              </Link>
              <Link href="/movie">
                <li className="font-semibold text-white text-4xl py-4"onClick={handleClick}>
                  Movie
                </li>
              </Link>
              <Link href="/contact">
                <li className="font-semibold text-white text-4xl py-4"onClick={handleClick}>
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        ):(

          <div className="bg-black h-screen absolute left-[-200%] grid place-items-center ease-in-out duration-300">
          <ul>
            <Link href="/">
              <li className="font-semibold text-white text-4xl py-4">Home</li>
            </Link>
            <Link href="/about">
              <li className="font-semibold text-white text-4xl py-4">
                About
              </li>
            </Link>
            <Link href="/movie">
              <li className="font-semibold text-white text-4xl py-4">
                Movie
              </li>
            </Link>
            <Link href="/contact">
              <li className="font-semibold text-white text-4xl py-4">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        )
      
      }
      </nav>
    </>
  );
};

export default Nav;
