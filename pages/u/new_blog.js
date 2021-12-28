import { InfoProvider } from "../../components/dataContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BlogSpace } from "../blog/[blogId]";

const handlePostApi = async (e, data, setSuccess, isSuccess) => {
  e.preventDefault();
  console.log(data);
};

const NewBlog = () => {
  const [state, dispatch] = InfoProvider();
  const [isSuccess, setSuccess] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    time: "",
    thePara: "",
    id: "Gojo_God",
    title: "weathering with you",
    thePara:
      "Satoru Gojo (五条悟 Gojō Satoru?) is one of the main protagonists of Jujutsu Kaisen. He is a special grade jujutsu sorcerer and a teacher at the Tokyo Jujutsu High. ",
    author: "Gojo",
    imgUrl: "/assets/1052807.png",
    userName: "",
  }); // some dummy data already set to see some shit

  useEffect(() => {
    // console.log(bg.src);
    // const id = router.query.userId;
    if (state.user == null) {
      // router.replace("/");
    } else {
      setData({ ...data, userName: state.user.name });
    }
  }, [state]);
  return (
    <>
      <div className="h-[60px]"></div>

      {/*
        TRY: Preview type components try in figma [✅Done]        
        TODO: Create a Form to store and create new blogs with given details 
            - author name [✅Done]
            - small des [❗Pending]
            - full para [✅Done]
            - title [✅Done]
            - cover image [✅Done]
            - id [✅Done]
        > Data sent by default:
            - username [✅Done]
            - time of creation [❗Pending]
          
      */}
      <div className="pt-4 flex justify-evenly min-h-screen items-center w-full p-24 space-x-10">
        {/*
          - Live preview component 
          - Reused component from /blog/[blogId].js
        */}
        <div className="max-w-2xl flex  justify-center flex-col mt-10">
          <div className="border flex text-red-500 items-center -mb-9 justify-center border-red-500 rounded-md w-max p-2">
            {" "}
            <div className="h-2 animate-pulse bg-red-500 rounded-full w-2"></div>
            <p className="pl-[5px]">Live Preview</p>
          </div>
          <BlogSpace data={data} />
        </div>
        <form className="flex mb-10 flex-col space-y-4 p-10 mt-10 border items-center justify-center border-gray-400 rounded-md max-w-[400px] w-full">
          <input
            type="url"
            value={data.imgUrl}
            required
            onChange={(event) => {
              setData({ ...data, imgUrl: `${event.target.value}` });
            }}
            placeholder="Image"
            className="input__tags"
          />
          <input
            type="text"
            value={data.title}
            onChange={(event) => {
              setData({ ...data, title: `${event.target.value}` });
            }}
            placeholder="Title"
            className="input__tags"
          />
          <input
            type="text"
            value={data.author}
            onChange={(event) => {
              setData({ ...data, author: `${event.target.value}` });
            }}
            placeholder="Author"
            className="input__tags"
          />
          <textarea
            col="2"
            value={data.smallDes}
            onChange={(event) => {
              setData({ ...data, smallDes: `${event.target.value}` });
            }}
            placeholder="Small Description"
            className="input__tags"
          />
          <textarea
            col="6"
            value={data.thePara}
            onChange={(event) => {
              setData({ ...data, thePara: `${event.target.value}` });
            }}
            placeholder="Write your para here!!"
            className="input__tags"
          />
          <input
            type="text"
            value={data.id}
            onChange={(event) => {
              setData({ ...data, id: `${event.target.value}` });
            }}
            placeholder="UID"
            className="input__tags"
          />
          <span>
            <button
              className="mt-4 p-2 bg-green-500 rounded-md hover:bg-green-600 text-white font-semibold w-24"
              onClick={(e) => {
                handlePostApi(e, data, setSuccess, isSuccess);
              }}
            >
              Submit
            </button>
          </span>
        </form>
      </div>
    </>
  );
};

export default NewBlog;
