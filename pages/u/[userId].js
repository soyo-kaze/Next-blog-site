import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import bg from "../../public/assets/cover.jpg";
import { InfoProvider } from "../../components/dataContext";
import BlogCard from "../../components/blogCard";

const Dashboard = () => {
  const [id, setId] = useState();
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
          <div className="border-gray-800 flex flex-col h-full justify-center items-center border-2 mt-10 rounded-3xl w-full max-w-[300px] p-6">
            <p className="font-semibold text-[30px]">
              {state.user ? state.user.name : "User Name"}
            </p>
            <span className="mt-2 text-[13px]">
              <p>
                Satoru Gojo (五条悟 Gojō Satoru?) is one of the main
                protagonists of Jujutsu Kaisen. He is a special grade jujutsu
                sorcerer and a teacher at the Tokyo Jujutsu High.{" "}
              </p>
            </span>
          </div>
          <div className="flex w-full flex-col md:flex-row justify-evenly items-center space-x-0 space-y-10 md:space-y-0 md:space-x-10 pl-4 pr-4 md:pl-10">
            <BlogCard
              id="Gojo_God"
              title="weathering with you"
              smallDes="Satoru Gojo (五条悟 Gojō Satoru?) is one of the main protagonists of Jujutsu Kaisen. He is a special grade jujutsu sorcerer and a teacher at the Tokyo Jujutsu High. "
              author="Gojo"
              img="/assets/1052807.png"
            />
            <BlogCard
              id="Gojo_God"
              title="weathering with you"
              smallDes="Satoru Gojo (五条悟 Gojō Satoru?) is one of the main protagonists of Jujutsu Kaisen. He is a special grade jujutsu sorcerer and a teacher at the Tokyo Jujutsu High. "
              author="Gojo"
              img="/assets/cover.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
