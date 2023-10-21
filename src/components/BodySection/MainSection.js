"use client";
import { images1, service1, service3 } from "@/utils/Utils1";
import { useRouter } from "next/navigation";
import { FaComments } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import ImageSlider from "../ImageSlider/ImageSlider";
import ServiceTile1 from "../ServiceSection/ServiceTile1";
import ServiceTile2 from "../ServiceSection/ServiceTile2";
import ServiceTile3 from "../ServiceSection/ServiceTile3";
import Link from "next/link";

const MainSection = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex justify-center mb-6">
        <ImageSlider images={images1} />
      </div>
      <div className="px-10 py-8 bg-white shadow-md w-full">
        {/* wellcome section */}
        <div className="flex flex-row w-full gap-6">
          <div className=" space-y-6 w-[50%]">
            <h2 className="text-2xl font-bold text-gray-700">
              Welcome to my Practice
            </h2>
            <p className="text-sm text-gray-400">
              As a psychologist and a cognitive behavioral therapist I have
              worked with hundreds of patients and understand the intricacies of
              various psychological issues that people face.
              <br />
              <br />
              My work revolves around being friendly, disciplined and organized
              yet flexible. I approach my patients and help them resolve their
              emotional issues of the past and the present, to open the door to
              a brighter and confident future.
            </p>
            <button
              className="mb-2"
              onClick={() => router.push("/")}
            >
              <p className="py-2 text-[#129acd] font-bold hover:underline">
                Read More
              </p>
            </button>
          </div>
          <div className="flex flex-col gap-6 justify-start w-[50%]">
            {service1.map((image, index) => (
              // eslint-disable-next-line react/jsx-key
              <ServiceTile1 image={image} />
            ))}
          </div>
        </div>

        {/* policy & book Button section */}
        <div className="flex flex-row gap-8 mt-4 w-full">
          <div
            className="p-4 border flex flex-row justify-between items-center w-[50%] cursor-pointer hover:border-gray-300"
            onClick={() => router.push("/")}
          >
            <div className="">
              <p className=" text-gray-700 uppercase text-xs font-bold">
                PRIVACY POLICY
              </p>
              <p className=" text-gray-400 text-xs">
                Between Doctors and Patients
              </p>
            </div>
            <div>
              <IoMdArrowDropright className=" text-xl text-gray-400" />
            </div>
          </div>
          <div
            className="p-4 border flex flex-row justify-between items-center w-[50%] cursor-pointer hover:border-gray-300"
            onClick={() => router.push("/")}
          >
            <div>
              <p className=" text-gray-700 uppercase text-xs font-bold">
                BOOK RECOMMENDATIONS
              </p>
              <p className=" text-gray-400 text-xs">
                Couple of Books We Recommend You
              </p>
            </div>
            <div>
              <IoMdArrowDropright className=" text-xl text-gray-400" />
            </div>
          </div>
        </div>

        {/* Service section */}
        <ul className="flex flex-wrap gap-6 w-full justify-between mt-12">
          {service1.map((image, index) => (
            // eslint-disable-next-line react/jsx-key
            <li>
              <ServiceTile2 className="w-60" image={image} />
            </li>
          ))}
        </ul>

        {/* Testimonials section */}
        <div className="bg-gray-100 flex flex-col justify-center p-12 mt-12">
          <h2 className=" text-gray-700 text-2xl mb-8 font-bold text-center">
            Testimonials
          </h2>
          <div className="bg-white shadow-sm relative">
            <p className="w-full text-center text-sm px-16 py-12 text-gray-400">
              We&apos;ve had a lot of financial troubles over the years; loss of
              physical health, job and bankruptcy. Laura&apos;s coaching gave us
              hope and a new sense of vision so we can create our lives
              together.
            </p>
            <div className="absolute top-8 left-0 h-12 w-12 bg-[#73bfa6] flex justify-center items-center">
              <FaComments className="text-2xl text-white" />
            </div>
          </div>
          <p className="mt-8 uppercase text-gray-700 text-xs font-bold text-center">
            ANASTACIA ROCKAFELLER
          </p>
          <p className="text-gray-400 text-xs text-center">Mother of two.</p>
        </div>

        {/* Questions section */}
        <div className="mt-12">
          <h2 className=" text-gray-700 text-2xl mb-8 font-bold text-center">
            Frequently Asked Questions
          </h2>
          <ul className="flex flex-wrap gap-8 w-full justify-between mt-6">
            <li className="w-56 flex flex-col justify-start">
              <p className="text-sm text-gray-400 font-semibold mb-4">
                What can I expect in the first session when I see a therapist?
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate
                sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue
                eleifend in.
              </p>
              <button
                className="mb-2 flex justify-start"
                onClick={() => router.push("/")}
              >
                <p className="py-2 text-[#129acd] font-bold hover:underline">
                  Read More
                </p>
              </button>
            </li>
            <li className="w-56 flex flex-col justify-start">
              <p className="text-sm text-gray-400 font-semibold mb-4">
                What are the signs of being abused by partner?
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Morbi volutpat velit ac sem vulputate sollicitudin. Aliquam
                tincidunt finibus leo, eget suscipit augue eleifend in. Aliquam
                erat volutpat.
              </p>
              <button
                className="mb-2 flex justify-start"
                onClick={() => router.push("/")}
              >
                <p className="py-2 text-[#129acd] font-bold hover:underline">
                  Read More
                </p>
              </button>
            </li>
            <li className="w-56 flex flex-col justify-start">
              <p className="text-sm text-gray-400 font-semibold mb-4">
                What can I expect in the first session when I see a therapist?
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Aliquam erat volutpat. Morbi volutpat velit ac sem vulputate
                sollicitudin. Aliquam tincidunt finibus leo, eget suscipit augue
                eleifend in.
              </p>
              <button
                className="mb-2 flex justify-start"
                onClick={() => router.push("/")}
              >
                <p className="py-2 text-[#129acd] font-bold hover:underline">
                  Read More
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Service Tile section */}
      <ul className="flex flex-wrap w-full gap-4 justify-between mt-6">
        {service3.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <li className="w-[32%] relative">
            <ServiceTile3 item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainSection;
