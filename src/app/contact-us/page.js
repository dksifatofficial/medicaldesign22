"use client";
import InputComponent from "@/components/FormElements/InputComponent";
import TextareaComponent from "@/components/FormElements/TextareaComponent";
import ServiceTile3 from "@/components/ServiceSection/ServiceTile3";
import { sendMessageformControls, service3 } from "@/utils/Utils1";
import { useRouter } from "next/navigation";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <>
      <div className="px-4 md:px-8 lg:px-10 py-8 bg-white shadow-md">
        {/* header section */}
        <div className="flex flex-col gap-2 pb-6 mb-6 border-b">
          <h2 className=" font-bold text-3xl text-gray-700">Contact Us</h2>
          <p className=" text-sm text-gray-400">
            We are waiting you to get in touch with us.
          </p>
        </div>

        {/* map section */}
        <div className="pb-12 pt-6">
          <iframe
            className="w-full h-[300px] md:h-[500px] lg:h-[600px]"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1840.1496038862115!2d90.36165957939811!3d22.71711765793655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzAwLjQiTiA5MMKwMjEnNDAuNiJF!5e0!3m2!1sen!2sbd!4v1697403288666!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* address section */}
        <div className="w-full flex flex-col gap-y-8 lg:flex-row">
          <div className="w-full lg:w-[33%]">
            <div className="flex flex-col justify-start gap-3">
              <p className="uppercase text-sm font-bold text-gray-700">
                MENTALPRESS LTD.
              </p>
              <p className="text-sm text-gray-400">
                Jennifer Armstrong, Ph.D
                <br />
                227 Marion Street
                <br />
                Columbia, SC 29201
              </p>
              <p className="text-sm text-gray-400">
                1-888-123-4567
                <br />
                1-888-123-4567
              </p>
              <p className="text-sm text-[#1ea0da] hover:underline cursor-pointer">
                aminulkibria@gmail.com
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[66%]">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:w-[50%] flex flex-col gap-4">
                {sendMessageformControls.map((controlItem) =>
                  controlItem.componentType === "input" ? (
                    // eslint-disable-next-line react/jsx-key
                    <InputComponent
                      placeholder={controlItem.placeholder}
                      type={controlItem.type}
                    />
                  ) : null
                )}
              </div>
              <div className="w-full lg:w-[50%]">
                {sendMessageformControls.map((controlItem) =>
                  controlItem.componentType === "textarea" ? (
                    // eslint-disable-next-line react/jsx-key
                    <TextareaComponent
                      placeholder={controlItem.placeholder}
                      type={controlItem.type}
                    />
                  ) : null
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="mb-2 bg-[#886dbd] px-4 rounded-sm mt-4"
                onClick={() => router.push("/")}
              >
                <p className="py-2 text-white text-left text-xs font-bold uppercase">
                  Send Message
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Tile section */}
      <ul className="flex flex-col lg:flex-row lg:flex-wrap w-full gap-4 justify-between mt-6">
        {service3.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <li className="w-full lg:w-[48%] xl:w-[32%] relative">
            <ServiceTile3 item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default page;
