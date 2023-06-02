"use client";
import { useQuery } from "react-query";
import { useState } from "react";
import MyInput from "./MyInput";
type inputPorps = {
    dark : boolean
}
const Input = ({dark}: inputPorps) => {
  const [val, setVal] = useState<string>("");
  const [searchedWord, setSearchedWord] = useState<string>("");
 
  const { isLoading, isError, data, error, refetch } = useQuery(
   [ "dictionary", searchedWord],
    async () => {
      const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${!searchedWord ? "welcome" : searchedWord}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b4a4353689msh9a63c61d5b36c90p176047jsnaf301a4efec5',
          'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
      };
      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("🚀 ~ file: Input.tsx:28 ~ result:", result)
        return result
       
      } catch (error) {
        console.error(error);
      }
    }
  );
  const handleClick = () => {
    if (val) {
      setSearchedWord(val);
      setVal("")
      refetch();
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  if(isError){
    return <span>{(error as Error).message}</span>
  }
  return (
    <>
    <MyInput val={val} setVal={setVal} dark={dark} handleClick={handleClick} />
      <div>
        <div className="w-1/2 md:w-1/3 mx-auto mt-10">
          <span className="font-bold text-4xl capitalize">
            {data.list[3].word}
          </span>
        </div>
        <hr className="w-1/3 mx-auto mt-10" />

        <h2 className="w-1/2 mx-auto md:w-1/3 mt-8 text-gray-400">Meaning</h2>
        <div className="w-1/2 md:w-1/3 mx-auto mt-6">
          <ul className="list-disc px-8">
            <li>{data.list[2].definition}</li>
            <li>{data.list[4].definition}</li>
            <li>{data.list[5].definition}</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/3 mx-auto mt-10">
          <p>
            <span className="text-gray-400">Source:</span>
            <span className="underline">{data.list[0].permalink}</span>
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Input;
