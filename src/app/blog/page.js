"use client";
import BlogTile from "@/components/Blogs/BlogTile";
import PaginationButton from "@/components/Buttons/PaginationButton";
import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import { allBlogs } from "@/utils/Blogs";
import { service3 } from "@/utils/Utils1";
import { useState } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeButton, setActiveButton] = useState("page1");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="">
      <div className="px-10 py-8 bg-white shadow-md w-full">
        <div className="flex flex-col gap-2 pb-6 mb-8 border-b">
          <h2 className=" font-bold text-3xl text-gray-700">Blog</h2>
          <p className=" text-sm text-gray-400">
            Dozen of articles. Improve your lifestyle now!
          </p>
        </div>

        {activeButton === "page1" && (
          <div className=" flex flex-col gap-y-10">
            {allBlogs && allBlogs.length
              ? allBlogs.slice(0, 10).map((blog, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <BlogTile blog={blog} />
                  </div>
                ))
              : null}
          </div>
        )}

        {activeButton === "page2" && (
          <div className=" flex flex-col gap-y-10">
            {allBlogs && allBlogs.length
            ? allBlogs.slice(11, 20).map((blog, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <div>
                    <BlogTile blog={blog} />
                  </div>
                ))
                : null
              }
          </div>
        )}

        <div className="w-full mt-6 pt-6 pb-4 flex flex-row justify-center gap-2 border-t">
          <PaginationButton
            onClick={() => handleButtonClick("page1")}
            className={` ${
              activeButton === "page1"
                ? "bg-[#27916c] text-white"
                : "bg-gray-200"
            }`}
          >
            1
          </PaginationButton>
          <PaginationButton
            onClick={() => handleButtonClick("page2")}
            className={` ${
              activeButton === "page2"
                ? "bg-[#27916c] text-white"
                : "bg-gray-200"
            }`}
          >
            2
          </PaginationButton>
        </div>
      </div>
      <ul className="flex flex-wrap w-full gap-4 justify-between mt-6">
        {service3.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <li className="w-[32%] relative">
            <ServiceTile3 item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
