import Image from "next/image";

const BlogCard = ({ title, smallDes, img, author }) => {
  return (
    <>
      <div className="max-w-md flex flex-col  shadow-lg rounded-xl">
        <Image
          src={img}
          width="1920"
          height="1080"
          className="object-contain max-w-md rounded-t-md"
        />
        <span id="card_info" className="flex flex-col p-5 space-y-2">
          <span className="font-bold text-sm">{title}</span>
          <hr className="text-gray-300"></hr>
          <span className=" text-sm">{smallDes}</span>
          <span className="italic text-gray-500 text-sm">{author}</span>
          <span className="pt-4">
            <button className="bg-green-500 text-white font-semibold p-2 rounded-md shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-200">
              Read more
            </button>
          </span>
        </span>
      </div>
    </>
  );
};

export default BlogCard;
