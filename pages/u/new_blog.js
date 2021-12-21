import { InfoProvider } from "../../components/dataContext";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NewBlog = () => {
  const [state, dispatch] = InfoProvider();
  const router = useRouter();

  useEffect(() => {
    // console.log(bg.src);
    // const id = router.query.userId;
    if (state.user == null) {
      router.replace("/");
    }
  }, [state]);
  return (
    <>
      {/* <div className="h-[60px]"></div> */}

      {/*
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
      <div className="pt-4 flex justify-center items-center h-screen w-full font-bold text-5xl">
        This is Blog form
      </div>
    </>
  );
};

export default NewBlog;
