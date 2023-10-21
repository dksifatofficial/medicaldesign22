"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceTile3 = ({ item, className }) => {
  const router = useRouter();
  return (
    <div className={`flex flex-col gap-4 bg-white ${className}`}>
      <div className="relative overflow-hideen aspect-w-1 aspect-h-1">
        <Image
          className="h-auto object-cover w-full"
          src={item.src}
          alt=""
          width="400"
          height="400"
        />
      </div>
      <div className="absolute top-0 left-0 m-2 bg-[#27916c]">
        <div className="rounded-full text-[10px] px-2 py-1 uppercase text-white">
          <p>{item.tag}</p>
        </div>
      </div>
      <div className="mt-2 flex w-full px-4 flex-col items-start justify-between bg-white">
        <div className="overflow-hidden">
          <h3 className="text-gray-700 text-lg font-semibold line-clamp-2">
            {item.header}
          </h3>
        </div>
        <div className="">
          <h3 className="text-gray-400 text-sm my-2">{item.description}</h3>
        </div>
        <button className="mb-2" onClick={() => router.push("/")}>
          <p className="py-2 text-[#129acd] font-bold hover:underline">
            Read More
          </p>
        </button>
      </div>
    </div>
  );
};

export default ServiceTile3;
