import { IoIosCall } from "react-icons/io";
const Button1 = ({children, className}) => {
  return (
    <>
    <button className={`${className} px-4 py-2 bg-[#f06366] text-white flex flex-row items-center justify-center
     rounded-full text-xs font-bold`}>
        <IoIosCall className="text-xl mr-1" />
        {children}
    </button>
    </>
  )
}

export default Button1