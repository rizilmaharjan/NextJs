import classNames from 'classnames';
import { AiOutlineSearch } from "react-icons/ai";
type myinputprops = {
    val: string;
    setVal: React.Dispatch<React.SetStateAction<string>>;
    dark: boolean;
    handleClick: () => void;
}

const MyInput = ({val,setVal, dark, handleClick}: myinputprops) => {
  return (
    <>
         <div className="w-1/2 relative flex justify-center mt-4 md:w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className={classNames("border py-2 rounded-lg px-2 bg-[#E4E6EB] font-bold outline-0 w-full",{
            "text-black" : dark === true || false,
           

          })}
        />
        <AiOutlineSearch
          className="absolute top-3 text-2xl text-purple-800 right-8 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      
    </>
  )
}

export default MyInput
