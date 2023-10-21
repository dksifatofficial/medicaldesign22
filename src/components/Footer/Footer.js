"use client";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const navigationMenu = [
  {
    name: "Service",
    url: "/",
  },
  {
    name: "About Me",
    url: "/",
  },
  {
    name: "Blog",
    url: "/",
  },
  {
    name: "Shop",
    url: "/",
  },
  {
    name: "make an Appointment",
    url: "/",
  },
  {
    name: "Contact Us",
    url: "/",
  },
];
const ServicesMenu = [
  {
    name: "Depression",
    url: "/",
  },
  {
    name: "Anxiety",
    url: "/",
  },
  {
    name: "Couoles",
    url: "/",
  },
  {
    name: "Individual",
    url: "/",
  },
  {
    name: "Post-Divorce",
    url: "/",
  },
  {
    name: "Children",
    url: "/",
  },
];

import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="h-[2px] w-full bg-[linear-gradient(to_right,#5031a7,#0d9488,#35a1a5,#f85606)] text-[#35a1a5]" />
      <div className="bg-white w-full">

        <div className="w-full flex flex-col lg:flex-row gap-x-4 gap-y-8 px-4 md:px-10 lg:px-24 py-12">
          {/* Footer left */}
          <div className="w-full lg:w-[33%]">
            <div className="flex flex-col justify-start">
              <h4 className="uppercase text-xl font-bold text-gray-700">
                A LITTLE SOMETHING ABOUT US
              </h4>
              <p className="text-sm text-gray-400 py-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <button className="mb-0 lg:mb-2" onClick={() => router.push("/")}>
                <p className="py-2 text-[#129acd] text-left font-bold hover:underline">
                  Read More
                </p>
              </button>
            </div>
          </div>

          {/* Footer middle */}
          <div className="w-full lg:w-[33%]">
            <div className="w-full flex flex-row">
              <div className="w-[50%]">
                <h4 className="uppercase text-xl font-bold text-gray-700">
                  NAVIGATION
                </h4>
                <ul className="mt-4 flex flex-col justify-start gap-2">
                  {navigationMenu.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <li
                      className="text-xs uppercase font-bold text-gray-400 hover:underline cursor-pointer"
                      onClick={() => router.push(item.url)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[50%]">
                <h4 className="uppercase text-right lg:text-left text-xl font-bold text-gray-700">
                  OUR SERVICES
                </h4>
                <ul className="mt-4 flex flex-col justify-start gap-2">
                  {ServicesMenu.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <li
                      className="text-xs text-right lg:text-left uppercase font-bold text-gray-400 hover:underline cursor-pointer"
                      onClick={() => router.push(item.url)}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer right */}
          <div className="w-full lg:w-[33%]">
            <div className="">
              <h4 className="uppercase text-xl font-bold text-gray-700">
                BUY NOW
              </h4>
              <p className="text-sm text-gray-400 py-4">
                If you come all the way down here, you probably really like our
                MentalPress theme. To save you all the troubles finding where to
                buy this theme, we have a solution for that too. Just click the
                button below.
              </p>
              <button
                className="mb-2 bg-[#886dbd] px-4 rounded-sm"
                onClick={() => router.push("/")}
              >
                <p className="py-2 text-white text-left text-xs font-bold uppercase">
                  Read More
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mx-4 md:mx10 lg:mx-24 py-4">
          <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between gap-y-4">
            <div className="w-full flex justify-center">
              <Image
                className="w-52 cursor-pointer h-auto object-cover"
                src="/LogoFooter.png"
                alt=""
                width={500}
                height={100}
                onClick={() => router.push("/")}
              />
            </div>
            <div className="flex gap-2 flex-row items-center">
              <p className=" text-xs text-gray-400 mr-2">PAYMENT METHODS:</p>
              <FaCcVisa className="text-gray-400 text-5xl rounded-md" />
              <FaCcMastercard className="text-gray-400 text-5xl rounded-md" />
              <div className="bg-gray-400 rounded-md w-[50px] overflow-hidden flex justify-center">
                <SiAmericanexpress className="text-gray-400 text-4xl bg-white" />
              </div>
              <FaCcPaypal className="text-gray-400 text-5xl rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
