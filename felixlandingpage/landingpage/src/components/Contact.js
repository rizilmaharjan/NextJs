
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const Contact = () => {
  return (
    <>
        <div id="contact" className="text-center pt-36">
            <h1 className="text-5xl font-bold capitalize">try launch today</h1>
            <p className="p-8 text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className="text-center">
            <button className="border-2 border-red-400 capitalize py-4 px-12 bg-red-400 font-bold text-white rounded-full">get started</button>
        </div>
        <div className="flex justify-evenly pt-16">
            <AiFillFacebook className="text-7xl"/>
            <AiOutlineGoogle className="text-7xl"/>
            <AiOutlineInstagram className="text-7xl"/>
            <AiOutlineTwitter className="text-7xl"/>
        </div>
        <div className="pt-40">
            <h1 className="font-bold text-4xl text-center">Subscribe</h1>
            <p className="pt-7 text-center text-2xl text-gray-700">Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="pt-14 flex justify-center">
            <input type="text" placeholder="Email address" className=" w-2/3 sm:w-1/3 border-2 border-red-400 py-4 px-3 rounded-l-3xl"/>
            <button className="text-[0.7rem] border-2 px-10 border-red-400 bg-red-400 text-white font-bold py-4 sm:px-12 rounded-r-3xl hover:bg-white hover:text-red-400 hover:ease-in-out hover:duration-300">SUBSCRIBE</button>

        </div>

      
    </>
  )
}

export default Contact
