import BlogCard from "../components/blogCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { InfoProvider } from "../components/dataContext";

const axiosInit = axios.create({
  baseURL: "https://sheltered-hollows-40615.herokuapp.com/",
});

const handleApi = (action1) => {
  axiosInit
    .get("/blog")
    .then((res) => {
      action1(res.data.data);
    })
    .catch((err) => console.log(err));
};

const Home = () => {
  const [blogData, setData] = useState([]);
  const [newKey, setNewKey] = useState([]);
  const hello = InfoProvider();

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
      <div className="h-[60px]"></div>
      <div className="flex justify-center items-center font-bold text-[40px] m-4">
        {`Welcome to the Blog`}
      </div>
      <span className="flex  justify-center items-center p-10">
        {blogData.length !== 0 ? (
          <span className="flex flex-col items-center justify-center space-y-4 md:space-x-4 md:space-y-6">
            {newKey.map((a) => (
              <span className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0">
                {a.map((data, x) => (
                  <BlogCard
                    id={data.id}
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
    </>
  );
};

export default Home;
