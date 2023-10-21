"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ServiceTile2 = ({ image, className }) => {
  const router = useRouter();
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="h-32 w-full overflow-hidden">
        <Image
          className="object-cover"
          src={image.src}
          alt={image.alt}
          height={200}
          width={280}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className="text-sm font-bold text-gray-700 hover:text-[#129acd] hover:underline"
          onClick={() => router.push(image.link)}
        >
          {image.header}
        </h3>
        <p className="text-sm text-gray-400">{image.description}</p>
      </div>
      <button
        className="mb-2 flex justify-start"
        onClick={() => router.push(image.link)}
      >
        <p className="py-2 text-[#129acd] font-bold hover:underline">Read More</p>
      </button>
    </div>
  );
};

export default ServiceTile2;
