"use client";
import Button1 from "@/components/Buttons/Button1";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaRegClock } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import CommonModal from "../CommonModal/CommonModal";
import { menuBarService } from "../SideMenu/MenuBarLists";

const NavItems = ({ isModalView = false, router }) => {
  const pathName = usePathname();
  return (
    <div
      className={`items-center justify-between w-full ${
        isModalView ? "" : "hidden"
      }`}
      // id="nav-items"
    >
      <ul className="py-4 flex flex-col gap-3 rounded-lg bg-white list-none">
        <li
          className={`cursor-pointer px-4 text-xs uppercase font-semibold rounded-md ${
            pathName === "/"
              ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
              : "text-[#535352] bg-white"
          }`}
          onClick={() => router.push("/")}
        >
          <p className="py-1">Home</p>
        </li>
        <li className="cursor-pointer px-4 text-xs font-semibold rounded-md">
          <p className="uppercase text-[#838280]">Service</p>
          <ul className="py-4 flex flex-col gap-2 rounded-lg bg-white list-none">
            {menuBarService.map((list, index) => (
              <li
                className={`cursor-pointer px-4 text-xs rounded-md ${
                  pathName === list.path
                    ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
                    : "text-[#838280] bg-white"
                }`}
                onClick={() => router.push(list.path)}
                key={index}
              >
                <p>{list.title}</p>
              </li>
            ))}
          </ul>
        </li>
        <li
          className={`cursor-pointer px-4 text-xs uppercase font-semibold rounded-md ${
            pathName === "/about-me"
              ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
              : "text-[#535352] bg-white"
          }`}
          onClick={() => router.push("/about-me")}
        >
          <p>About Me</p>
        </li>
        <li
          className={`cursor-pointer px-4 text-xs uppercase font-semibold rounded-md ${
            pathName === "/blog"
              ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
              : "text-[#535352] bg-white"
          }`}
          onClick={() => router.push("/blog")}
        >
          <p>Blog</p>
        </li>
        <li
          className={`cursor-pointer px-4 text-xs uppercase font-semibold rounded-md ${
            pathName === "/contact-us"
              ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
              : "text-[#535352] bg-white"
          }`}
          onClick={() => router.push("/contact-us")}
        >
          <p>Contact Us</p>
        </li>
      </ul>
    </div>
  );
};

const HeaderMenu = () => {
  const [showNavModal, setShowNavModal] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="w-full h-[80px] bg-gray-500" />
      <div className="w-full px-2 md:px-6 lg:px-10 xl:px-24 bg-transparent mb-6">
        <div className="bg-white flex flex-col lg:flex-row justify-center lg:justify-around py-2 lg:py-3 px-4 mt-[-50px] shadow-md">
          <div className="cursor-pointer w-full lg:w-60 h-auto overflow-hidden flex justify-between">
            <Image
              className="w-52 h-auto object-fill"
              onClick={() => router.push("/")}
              src="/logo.png"
              alt=""
              width={210}
              height={60}
            />
            {/* Menu for small device */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center px-2 py-1 text-sm text-gray-500 lg:hidden focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowNavModal(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-around gap-0 lg:gap-4">
            <div
              className="flex flex-row items-center justify-center text-gray-300 hover:text-gray-400 transition-all
              duration-[.5s] border-b border-t py-2 lg:py-0 lg:border-none"
            >
              <IoIosHome className="text-3xl lg:text-5xl mr-4" />
              <div className="text-sm">
                <p className="font-bold text-gray-500 text-xs lg:text-sm">
                  227 Marion Street
                </p>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Columbia, SC 29201
                </p>
              </div>
            </div>

            <div className="flex-row items-center text-gray-300 text-3xl font-thin hidden lg:flex">
              <p>|</p>
            </div>

            <div
              className="flex flex-row items-center justify-center text-gray-300 hover:text-gray-400 transition-all
              duration-[.5s] border-b py-2 lg:py-0 lg:border-none"
            >
              <FaRegClock className="text-3xl lg:text-5xl mr-4" />
              <div className="text-sm">
                <p className="font-bold text-gray-500 text-xs lg:text-sm">
                  Mon - Sat 8.00 - 18.00
                </p>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Sunday CLOSED
                </p>
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
      <CommonModal
        showModalTitle={false}
        show={showNavModal}
        mainContent={<NavItems router={router} isModalView={true} />}
        setShow={setShowNavModal}
      />
    </>
  );
};

export default HeaderMenu;
