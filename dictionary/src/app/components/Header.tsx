"use client";
import { BiBook } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useState } from "react";
import Body from "./Body";
import classNames from "classnames";

const Header = () => {
  const [dark, setDark] = useState(false);
  const handleDarkMode = () => {
    setDark(!dark);
  };
  return (
    <>
      <div
        className={classNames("h-screen", {
          "bg-black": dark === true,
          "text-white": dark === true,
        })}
      >
        <header>
          <div className="md:w-3/5 md:mx-auto py-4 px-2 flex justify-around items-center">
            <BiBook className="text-4xl" />
            {dark ? (
              <MdDarkMode onClick={handleDarkMode} className="text-3xl" />
            ) : (
              <CiDark onClick={handleDarkMode} className="text-3xl" />
            )}
          </div>
        </header>
        <Body dark={dark} />
      </div>
    </>
  );
};

export default Header;
