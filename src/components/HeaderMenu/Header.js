"use client";
import Button1 from "@/components/Buttons/Button1";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaRegClock } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

const HeaderMenu = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full h-[80px] bg-gray-500" />
      <div className="w-full px-2 md:px-6 lg:px-10 xl:px-24 bg-transparent mb-6">
        <div className="bg-white flex flex-col lg:flex-row justify-center lg:justify-around py-2 lg:py-3 px-4 mt-[-50px] shadow-md">
          <div
            className="cursor-pointer w-full lg:w-60 h-auto overflow-hidden flex justify-center"
            onClick={() => router.push("/")}
          >
            <Image
              className="w-52 h-auto object-fill"
              src="/logo.png"
              alt=""
              width={210}
              height={60}
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-around gap-0 lg:gap-4">

            <div className="flex flex-row items-center justify-center text-gray-300 hover:text-gray-400 transition-all
              duration-[.5s] border-b border-t py-2 lg:py-0 lg:border-none">
              <IoIosHome className="text-3xl lg:text-5xl mr-4" />
              <div className="text-sm">
                <p className="font-bold text-gray-500 text-xs lg:text-sm">227 Marion Street</p>
                <p className="text-gray-400 text-xs lg:text-sm">Columbia, SC 29201</p>
              </div>
            </div>

            <div className="flex-row items-center text-gray-300 text-3xl font-thin hidden lg:flex">
              <p>|</p>
            </div>

            <div className="flex flex-row items-center justify-center text-gray-300 hover:text-gray-400 transition-all
              duration-[.5s] border-b py-2 lg:py-0 lg:border-none">
              <FaRegClock className="text-3xl lg:text-5xl mr-4" />
              <div className="text-sm">
                <p className="font-bold text-gray-500 text-xs lg:text-sm">
                  Mon - Sat 8.00 - 18.00
                </p>
                <p className="text-gray-400 text-xs lg:text-sm">Sunday CLOSED</p>
              </div>
            </div>

            <div className="flex-row items-center text-gray-300 text-3xl font-thin hidden lg:flex">
              <p>|</p>
            </div>

            <div className="flex flex-row items-center justify-center gap-x-2 border-b py-2 lg:py-0 lg:border-none">
              <div className="flex justify-center items-center h-8 w-8 lg:h-12 lg:w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-[.5s]">
                <FaFacebookF className=" text-gray-400 text-lg lg:text-2xl" />
              </div>
              <div className="flex justify-center items-center h-8 w-8 lg:h-12 lg:w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-[.5s]">
                <AiOutlineTwitter className=" text-gray-400 text-lg lg:text-2xl" />
              </div>
              <div className="flex justify-center items-center h-8 w-8 lg:h-12 lg:w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-[.5s]">
                <AiFillYoutube className=" text-gray-400 text-lg lg:text-2xl" />
              </div>
            </div>

            <div className="flex-row items-center text-gray-300 text-3xl font-thin hidden lg:flex">
              <p>|</p>
            </div>

            <div className="flex flex-row items-center pt-2 lg:pt-0 justify-center text-gray-300 hover:text-gray-400 transition-all duration-[.5s]">
              <Button1>1-888-123-4567</Button1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
