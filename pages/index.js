import BlogCard from "../components/blogCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

const axiosInit = axios.create({
  baseURL: "https://sheltered-hollows-40615.herokuapp.com/",
});

const handleApi = (action1) => {
  axiosInit
    .get("/blog")
    .then((res) => {
      // console.log(res.data.data);
      action1(res.data.data);
    })
    .catch((err) => console.log(err));
};

const Home = () => {
  const [blogData, setData] = useState([]);
  const [newKey, setNewKey] = useState([]);

  // divides the data into 2-d array of 3 elements in each row.
  useEffect(() => {
    const keyNewArr = [[]];
    const keyLen = blogData.length;
    let key = 0;
    for (let i = 1; i <= keyLen; i++) {
      if (i % 3) {
        keyNewArr[key].push(blogData[i - 1]);
      } else {
        keyNewArr[key].push(blogData[i - 1]);
        keyNewArr.push([]);
        key++;
      }
    }
    setNewKey(keyNewArr);
    console.log("hello");
  }, [blogData]);

  //sets data
  useEffect(() => {
    handleApi(setData);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center font-bold text-[40px] m-4">
        Welcome to the Blog
      </div>
      <span className="flex  justify-center items-center p-10">
        {blogData.length !== 0 ? (
          <span className="flex flex-col items-center justify-center space-y-4 md:space-x-4 md:space-y-6">
            {newKey.map((a) => (
              <span className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0">
                {a.map((data, x) => (
                  <BlogCard
                    title={data.title}
                    smallDes={data.smallDes}
                    author={data.author}
                    img={data.imgUrl}
                  />
                ))}
              </span>
            ))}
          </span>
        ) : (
          <Image
            src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif"
            width="100"
            height="100"
            className="object-contain max-w-sm rounded-t-md"
          />
        )}
      </span>
      {/* <span className="flex justify-center items-center space-x-9 mt-16">
        <BlogCard
          title="The tale of the White Wolf"
          smallDes="The Witcher is a mutant in the mediveal time who also uses some demon arts tricks."
          author="Geralt of Rivia"
          img="https://cdn.discordapp.com/attachments/881530050120413194/883411597303881768/The_Witcher_3_Screenshot_2021.09.03_-_20.11.15.63.png"
        />
        <BlogCard
          title="King of curses"
          smallDes="According to a legend, during the golden age of jujutsu over 1,000 years ago, Sukuna was an Imaginary Demon"
          author="Roymen Sukuna"
          img="https://cdn.discordapp.com/attachments/881530050120413194/881539136748683264/wallhaven-y8mmrk_3840x2160.png"
        />
      </span> */}
    </>
  );
};

export default Home;
