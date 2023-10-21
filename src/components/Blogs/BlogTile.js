import Image from "next/image";

const BlogTile = ({ blog, onClick }) => {
  return (
    <>
      <div className="w-full">
        <div className="w-full overflow-hidden rounded-md pb-8">
          <Image
            className="w-full object-cover rounded-md"
            src={blog.image}
            alt=""
            height={600}
            width={1000}
          />
        </div>
        <div className="flex flex-row gap-2 lg:gap-3 items-center">
          <div className="bg-[#27916c]">
            <p className="text-[8px] lg:text-[10px] px-2 py-1 uppercase text-white">
              {blog.tag}
            </p>
          </div>
          <p className="text-[10px] lg:text-xs text-gray-400 font-semibold">
            {blog.motherTag}
          </p>
          <p className="text-[10px] lg:text-xs text-gray-400 font-semibold">|</p>
          <p className="text-[10px] lg:text-xs text-gray-400 font-semibold">{blog.date}</p>
          <p className="text-[10px] lg:text-xs text-gray-400 font-semibold">|</p>
          <p className="text-[10px] lg:text-xs text-gray-400 font-semibold">
            By {blog.author}
          </p>
        </div>
        <h2 className="text-xl text-gray-700 font-bold py-4">{blog.header}</h2>
        <p className="text-base text-gray-500">{blog.body}</p>
        <button className="mt-4" onClick={onClick}>
          <p className="py-2 text-[#129acd] font-bold hover:underline">
            Read More
          </p>
        </button>
      </div>
    </>
  );
};

export default BlogTile;
