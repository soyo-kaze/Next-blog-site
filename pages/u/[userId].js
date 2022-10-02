import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import bg from "../../public/assets/cover.jpg";
import BlogCard from "../../components/blogCard";
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";
import { userState } from "../../store/authSlice";

const axiosInit = axios.create({
  baseURL: "https://sheltered-hollows-40615.herokuapp.com/",
});

const handleApi = (action1, req) => {
  console.log(req);
  axiosInit
    .post("/blog/user-blog", req)
    .then((res) => {
      action1(res.data);
    })
    .catch((err) => console.log(err));
};

const Dashboard = () => {
  const [id, setId] = useState();
  const state = useSelector(userState)
  const [blogData, setData] = useState([]);
  const [newBlogData, setNewData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // console.log(bg.src);
    const newArr = [[]];
    const keyLen = blogData.length;
    let key = 0;
    for (let i = 1; i <= keyLen; i++) {
      if (i % 2) {
        newArr[key].push(blogData[i - 1]);
      } else {
        newArr[key].push(blogData[i - 1]);
        newArr.push([]);
        key++;
      }
    }
    setNewData(newArr);
    console.log(blogData);
    if (Object.keys(state.user).length == 0) {
      router.replace("/");
    }
  }, [state, blogData]);

  useEffect(() => {
    const id = router.query.userId;
    handleApi(setData, { userName: id });
  }, []);

  return (
    <>
      <div className="pb-4">
        <div
          className="h-[45vh] max-h-[100vh]"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/*This is cover page Image*/}
        </div>
        <div className="flex justify-center md:justify-start md:pl-24 w-full">
          <div className="rounded-[50%] w-[200px] h-[200px]  border-4 border-white -mt-24">
            <Image
              height="1000"
              width="1000"
              src="/assets/dp2.jpg"
              className="rounded-full w-[300px] object-cover"
            />
          </div>
        </div>
        <div className="md:pl-16 md:pr-24 flex-col md:flex-row flex justify-evenly items-center md:items-start md:justify-start w-full space-y-10 md:space-y-0">
          <div className="max-w-[300px] w-full flex flex-col items-center justify-center">
            <div className="border-gray-800 flex flex-col h-full justify-center items-center border-2 mt-10 rounded-3xl w-full max-w-[300px] p-6">
              <p className="font-semibold text-[30px]">
                {Object.keys(state.user).length !== 0 ? state.user.name : "User Name"}
              </p>
              <span className="mt-2 text-[13px]">
                <p>
                  Satoru Gojo (五条悟 Gojō Satoru?) is one of the main
                  protagonists of Jujutsu Kaisen. He is a special grade jujutsu
                  sorcerer and a teacher at the Tokyo Jujutsu High.{" "}
                </p>
              </span>
            </div>
            <Link href="/u/new_blog">
              <button className="mt-8 w-full bg-green-500 text-white font-semibold p-3 rounded-xl shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-200">
                + Create new Blog
              </button>
            </Link>
          </div>
          <div className="flex w-full flex-col justify-center items-center space-x-0 space-y-10 md:space-y-10 md:space-x-10 pl-4 pr-4 md:pl-10">
            {newBlogData.map((a, x) => (
              <span
                key={x}
                className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0"
              >
                {a.map((data, x) => (
                  <BlogCard
                    id={data["_id"]}
                    title={data.title}
                    smallDes={data.smallDes}
                    author={data.author}
                    img={data.imgUrl}
                  />
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
