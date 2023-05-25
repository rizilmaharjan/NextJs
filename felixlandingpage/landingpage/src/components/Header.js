import Image from "next/image";
import Button from "./Button";
const Header = () => {
  return (
    <>
      <div id="header" className="image w-screen h-auto flex justify-around items-center">
        <div className="headings ml-10 w-1/2 text-center relative">
          <h1 className="capitalize font-bold text-6xl">felix innovations</h1>
          <p className="font-bold text-xl mt-6 ml-[-3.3rem]">
            present your product, app, service and more
          </p>
          <div className="btn absolute left-36">
            <Button title="get start now" />
          </div>
        </div>
        <Image src="/logo.png" width={700} height={100} />
      </div>
    </>
  );
};

export default Header;
