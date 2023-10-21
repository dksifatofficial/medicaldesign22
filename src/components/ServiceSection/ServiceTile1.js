'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceTile1 = ({ image }) => {
    const router = useRouter()
  return (
    <div className=" flex flex-row gap-4">
      <div className="h-16 w-48 overflow-hidden">
        <Image
          className=" object-cover"
          src={image.src}
          alt={image.alt}
          height={100}
          width={180}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold text-gray-700 hover:text-[#129acd] hover:underline"
        onClick={() => router.push(image.link)}
        >{image.header}</h3>
        <p className="text-sm text-gray-400">{image.description}</p>
      </div>
    </div>
  );
};

export default ServiceTile1;
