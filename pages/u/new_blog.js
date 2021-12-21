import { InfoProvider } from "../../components/dataContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const handlePostApi = async (data, setSuccess, isSuccess) => {};

const NewBlog = () => {
  const [state, dispatch] = InfoProvider();
  const [isSuccess, setSuccess] = useState(false);
  const router = useRouter();
  const [data, setData] = useState({
    imgUrl: "",
    title: "",
    author: "",
    id: "",
    time: "",
    smallDes: "",
    thePara: "",
  });

  useEffect(() => {
    // console.log(bg.src);
    // const id = router.query.userId;
    if (state.user == null) {
      // router.replace("/");
    }
  }, [state]);
  return (
    <>
      <div className="h-[60px]"></div>

      {/*
        TRY: Preview type components try in figma        
        TODO: Create a Form to store and create new blogs with given details
            - author name
            - small des
            - full para
            - title
            - cover image 
            - id
        > Data sent by default:
            - username
            - time of creation
      */}
      <div className="pt-4 flex justify-center min-h-screen items-center w-full font-bold flex-col">
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
              onClick={() => {
                handlePostApi(data, setSuccess, isSuccess);
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
