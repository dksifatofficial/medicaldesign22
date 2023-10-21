"use client";

import { menuBarService } from "@/components/SideMenu/MenuBarLists";
import { usePathname, useRouter } from "next/navigation";
import { IoMdArrowDropright } from "react-icons/io";
import classes from "./classes.module.css";

export default function SideMenu() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="relative my-0 bg-white shadow-md w-[270px]">
      <nav className="p-4 w-[270px]">
        <div className="">
          <p className="uppercase text-xs border px-4 py-3 text-gray-400">
            Navigation
          </p>
        </div>
        <ul
          className={`m-0 p-0 py-4 rounded-lg bg-white list-none ${classes.mcdMenu}`}
        >
          <li
            className={`${
              pathName === "/"
                ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
                : "text-[#686766] bg-white"
            }`}
            onClick={() => router.push("/")}
          >
            <p>Home</p>
          </li>
          <li
            className={`${
              pathName === "/service"
                ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
                : "text-[#686766] bg-white"
            }`}
          >
            <div className="relative w-full flex flex-row">
              <p>Service</p>
              <span
                className={`absolute top-[50%] -translate-y-2/4 right-[-20px] text-2xl hidden ${classes.arrow1}`}
              >
                <IoMdArrowDropright />
              </span>
            </div>
            <ul
              className="absolute pl-6 transition-all duration-300 ease-linear z-[999] top-0 px-0 left-[295px] 
                   bg-transparent opacity-0 invisible" //opacity-0 invisible
            >
              <div
                className="h-[298px] w-[230px] transition-all 
                 duration-300 ease-linear z-[1000] top-0 px-0 py-2 
                 bg-white"
              >
                {menuBarService.map((list, index) => (
                  <li
                    className="text-[#686766]"
                    onClick={() => router.push(list.path)}
                    key={index}
                  >
                    <p>{list.title}</p>
                  </li>
                ))}
              </div>
            </ul>
          </li>
          <li
            className={`${
              pathName === "/about-me"
                ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
                : "text-[#686766] bg-white"
            }`}
            onClick={() => router.push("/about-me")}
          >
            <p>About Me</p>
          </li>
          <li
            className={`${
              pathName === "/blog"
                ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
                : "text-[#686766] bg-white"
            }`}
            onClick={() => router.push("/blog")}
          >
            <p>Blog</p>
          </li>
          {/* <li
            className={`${
              pathName === "/shop"
                ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
                : "text-[#686766] bg-white"
            }`}
            onClick={() => router.push("/shop")}
          >
            <p>Shop</p>
          </li> */}
          <li
            className={`${
              pathName === "/contact-us"
                ? "text-[#e67e22] bg-[rgba(212,214,214,0.38)]"
                : "text-[#686766] bg-white"
            }`}
            onClick={() => router.push("/contact-us")}
          >
            <p>Contact Us</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
