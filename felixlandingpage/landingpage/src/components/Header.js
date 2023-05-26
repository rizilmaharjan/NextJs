import Image from "next/image";
import Button from "./Button";
const Header = () => {
  return (
    <>
      <div id="header" className="px-3 sm:flex sm:justify-around sm:items-center">
        <div className="my-10 sm:ml-10 sm:w-1/2 sm:text-center sm:relative">
          <h1 className="font-bold text-6xl">Felix <span className="block sm:inline">Innovations</span></h1>
          <p className="font-bold py-4 text-xl sm:mt-6 sm:ml-[-3.3rem]">
            Present your product, app, service and more
          </p>
          <div className="sm:absolute sm:left-36">
            <Button title="get start now" />
          </div>
        </div>
        <Image className="hidden sm:block" src="/logo.png" width={700} height={100} />
      </div>
    </>
  );
};

export default Header;
