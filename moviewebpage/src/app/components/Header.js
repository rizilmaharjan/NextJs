import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
const Header = () => {
  return (
    <>
      <header className="bg-white drop-shadow-2xl py-4 px-10 flex justify-between items-center ">
        <div>
            <Link href="/">
                <Image src="/netflix.png" alt="my logo name" width={40} height={40} />
            </Link>
        </div>
        <Nav />

      </header>
    </>
  )
}

export default Header
