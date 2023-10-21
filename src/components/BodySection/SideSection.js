import Image from "next/image";
import {
  AiFillSkype,
  AiOutlineFilePdf,
  AiOutlineFileWord,
} from "react-icons/ai";
import MemberTile from "@/components/MemberDetails/MemberTile";
import SideMenu from "@/components/SideMenu/SideMenu";

const member = {
  name: "Jennifer Willinger, Ph.D",
  title: "MSED, MA, LMHP, CPC",
  details:
    "I'm a New York based psychologist and I was born and raised in New Jersey. I completed my Masters in Clinical Psychology from Rutgers University, New Jersey in 1987, and have a diploma in Cognitive Psychology and Neurosciences.",
  imageUrl:
    "https://firebasestorage.googleapis.com/v0/b/next-js-ecommerce-2023-5d8d1.appspot.com/o/ecommerce%2Fimage51.jpg?alt=media&token=c61f50b8-1c69-44b5-aa55-28701abbfdc3",
};

const SideSection = () => {
  return (
    <>
      <div className="w-[270px] flex flex-col gap-6">
        <div>
          <SideMenu />
        </div>
        <div className="bg-white shadow-md">
          <MemberTile item={member} />
        </div>
        <div className="bg-[#129acd] shadow-md  flex flex-row justify-between items-center py-2 px-3 ">
          <p className=" text-white text-lg">Skype Call</p>
          <AiFillSkype className="text-4xl text-[#e3e8eb65]" />
        </div>
        <div className="bg-white shadow-md p-4">
          <div className=" flex flex-col">
            <p className=" text-gray-700 text-lg font-bold">Forms</p>
            <p className=" text-gray-400 text-sm font-semibold py-4">
              Before our first session, kindly take some time to print & fill
              out relevant forms as well as you can.
            </p>
            <div className="border p-2 flex flex-row mb-3 cursor-pointer">
              <AiOutlineFilePdf className="text-lg text-gray-600 mr-2" />
              <p className=" font-bold text-xs text-gray-600">
                Financial Agreement
              </p>
            </div>
            <div className="border p-2 flex flex-row cursor-pointer">
              <AiOutlineFileWord className="text-lg text-gray-600 mr-2 " />
              <p className=" font-bold text-xs text-gray-600">
                Release of Information
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md p-4">
          <div className=" flex flex-col">
            <p className=" text-gray-700 text-lg font-bold mb-3">
              Verifications
            </p>
            <div className=" flex flex-col gap-y-3">
              <div className="border flex justify-center items-center opacity-70 hover:opacity-100">
                <Image
                  className=""
                  src="/Verification1.png"
                  alt=""
                  height={80}
                  width={400}
                />
              </div>
              <div className="border flex justify-center items-center opacity-70 hover:opacity-100">
                <Image
                  className=""
                  src="/Verification2.png"
                  alt=""
                  height={80}
                  width={400}
                />
              </div>
              <div className="border flex justify-center items-center opacity-70 hover:opacity-100">
                <Image
                  className=""
                  src="/Verification3.png"
                  alt=""
                  height={80}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSection;
