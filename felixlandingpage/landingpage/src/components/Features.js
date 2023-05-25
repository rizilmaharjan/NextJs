import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div id="feature" className="bg-gray-50 h-fit flex w-screen justify-center pt-20 pb-28 items-center gap-20">
        <div className="iphone">
          <Image src={"/feature-img.png"} width={400} height={400} />
        </div>
        <div className="feature-desc w-1/3 h-screen flex flex-col justify-around">
          <h1 className="capitalize font-bold text-4xl">accomplish more, <br/>every day.</h1>
          <div className="descriptions">
            <div className="flex justify-around items-center gap-8">
              <span className="text-7xl text-red-400">4K</span>
              <span>
                <p className="font-bold text-xl capitalize">ionicons</p>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum, hic officiis commodi</p>
              </span>
            </div>
            <div className="flex justify-around items-center gap-8 my-20" >
              <span className="text-7xl text-red-400">2X</span>
              <span>
              <p className="font-bold text-xl capitalize">smart responsive</p>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum, hic officiis commodi</p>
              </span>
            </div>
            <div className="flex justify-around items-center gap-4">
              <span className="text-7xl text-red-400">4%</span>
              <span>
              <p className="font-bold text-xl capitalize">multipurpose</p>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas harum, hic officiis commodi</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
