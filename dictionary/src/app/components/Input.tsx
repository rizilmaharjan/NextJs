"use client";
import { AiOutlineSearch } from "react-icons/ai";
import Body from "./Body";
import { useState } from "react";
import classNames from 'classnames'
type inputPorps = {
    dark : boolean
}
const Input = ({dark}: inputPorps) => {
  const [val, setVal] = useState<string>("");
  const [searchedWord, setSearchedWord] = useState<string>("");
  const handleClick = () => {
    if (val) {
      setSearchedWord(val);
      setVal("")
    }
  };
  return (
    <>
      <div className="w-1/2 relative flex justify-center mt-4 md:w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={classNames("border py-2 rounded-lg px-2 bg-[#E4E6EB] font-bold outline-0 w-full",{
            "text-black" : dark === true || false,
           

          })}
        />
        <AiOutlineSearch
          className="absolute top-3 text-2xl text-purple-800 right-8 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <Body word={searchedWord} />
    </>
  );
};

export default Input;
