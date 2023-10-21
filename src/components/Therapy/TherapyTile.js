import Image from "next/image";

const TherapyTile = ({ item }) => {
  return (
    <>
      <div className="flex flex-col gap-2 pb-6 mb-6 border-b">
        <h2 className=" font-bold text-3xl text-gray-700">{item.header}</h2>
      </div>
      <div className="w-full flex flex-row">
        <div className="w-[50%]">
          <p className=" text-sm text-gray-400 pr-4">
            {item.details1}
            <br />
            <br />
            {item.details2}
          </p>
        </div>
        <div className="w-[50%]">
          <div className="flex flex-col gap-y-4 justify-start ml-6">
            <Image
              className="w-full overflow-hidden object-cover"
              src={item.image1}
              alt=""
              height={400}
              width={800}
            />
            <Image
              className="w-full overflow-hidden object-cover"
              src={item.image2}
              alt=""
              height={400}
              width={800}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TherapyTile;
