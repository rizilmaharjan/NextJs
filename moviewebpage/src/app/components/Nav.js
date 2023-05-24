import Link from "next/link"
const Nav = () => {
  return (
    <>
        <nav>
            <ul className="flex gap-x-8">
                <Link href="/">
                <li className="font-semibold">Home</li>

                </Link>
                <Link href="/about">
                <li className="font-semibold">About</li>

                </Link>
                <Link href="/movie">
                <li className="font-semibold">Movie</li>

                </Link>
                <Link href="/contact">
                <li className="font-semibold">Contact</li>

                </Link>
               
            </ul>
        </nav>
      
    </>
  )
}

export default Nav
