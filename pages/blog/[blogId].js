import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const axiosInit = axios.create({
  baseURL: "http://localhost:8000/",
});

const handleApi = async (id, action) => {
  // Promises can also be handled via async await but wrap them into try/catch
  try {
    const { data } = await axiosInit.post("/blog", { id: id });
    action(data.data[0]);
  } catch (e) {
    console.error(
      `%cGot ${e}`,
      "font-size:30px;color:#03A062;text-shadow: 2px 2px black"
    );
  }
  //Request for blog data via post verb and attaching id of the desired content
};

const Blog = () => {
  const router = useRouter();
  const [data, setData] = useState();

  //invoked on the basis of router value change. invoked twice once at render then after router value change
  useEffect(() => {
    // The id is retrived by the Dynamic routing. [slug].js
    const id = router.query.blogId;
    handleApi(id, setData);
  }, [router]);

  // -if- data is undefined with it is at first render then show loading gif -else- show the blog
  return data === undefined ? (
    <div className="flex h-screen justify-center items-center">
      <Image
        src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif"
        width="100"
        height="100"
        className="object-contain max-w-sm rounded-t-md"
      />
    </div>
  ) : (
    <>
      <div class="p-6 pt-14 md:pl-96  md:pr-96">
        <p class="font-semibold text-6xl mb-4">{data.title}</p>
        <hr className="text-gray-200"></hr>
        <p class="italic text-gray-500 mt-4 font-semibold text-lg">
          {data.author}
        </p>
        <span class="flex items-center w-full max-w-6xl justify-center mt-10">
          <Image
            class="w-full object-contain"
            src={data.imgUrl}
            alt="Roymen Sukuna"
            width="1920"
            height="1080"
          />
        </span>
        <p class="mt-10">{data.thePara}</p>
        <span class="w-full flex  items-center justify-center mt-4">
          <Link href="/">
            <button class="mt-4 p-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold w-24">
              Home
            </button>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Blog;
