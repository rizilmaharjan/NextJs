import Image from "next/image";
import Button from "./Button";
const Header = () => {
  return (
    <>
      <div id="header" className="px-3 sm:m-0 sm:p-0 sm:flex sm:w-screen">
        <div className="my-10 sm:w-1/2 sm:px-3 lg:ml-10 lg:w-1/2 sm:relative">
          <h1 className="font-bold text-6xl">Felix <span className="block">Innovations</span></h1>
          <p className="font-bold py-4 text-xl sm:mt-6">
            Present your product, app, service and more
          </p>
          <div>
            <Button title="get start now" />
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/2">
        <Image src="/logo.png" width={700} height={100} />

          
        </div>
      </div>
    </>
  );
};

export default Header;
