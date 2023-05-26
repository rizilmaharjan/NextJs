import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <div id="feature" className="bg-gray-50 h-fit sm:flex sm:justify-center pb-28 sm:items-center sm:gap-20">
        <div className="grid place-items-center">
          <Image src={"/feature-img.png"} width={400} height={400} />
        </div>
        <div className="mt-36 sm:w-1/3 sm:h-screen sm:flex sm:flex-col sm:justify-around">
          <h1 className="font-bold text-xl text-center sm:text-4xl">Accomplish More,Every Day.</h1>
          <div className="mt-28 px-10">
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
