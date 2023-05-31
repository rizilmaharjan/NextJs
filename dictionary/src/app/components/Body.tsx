"use client";
import { FetchData } from "../hooks/FetchData";

type BodyProps = {
    word: string
}

type Data = {
    list:{
        word: string;
        definition: string;
        permalink: string;

    }[];
}

const Body = ({word}: BodyProps) => {
  const { data, error } = FetchData(
    `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${!word ? "welcome" : word}`
  )as {data: Data | null, error: any} ;
  if(error){
    console.log(error)
  }
  if (!data) {
    return (
       <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
    )}

  return (
    <>
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
            <p><span className="text-gray-400">Source:</span> <span className="underline">{data.list[0].permalink}</span></p>
        </div>
      </div>
    </>
  );
};

export default Body;
