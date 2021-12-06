import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import bg from "../../public/assets/cover.jpg";
import { InfoProvider } from "../../components/dataContext";

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
      <div className="h-[1000px]">
        <div
          className="h-screen max-h-[300px]"
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
          <div className="rounded-[50%] w-[200px]  border-4 border-white -mt-24">
            <Image
              height="1000"
              width="1000"
              src="/assets/dp.jpg"
              className="rounded-full w-[300px]  object-contain"
            />
          </div>
        </div>
        <div className="md:pl-16 md:pr-24 flex justify-center md:justify-start w-full">
          <div className="border-gray-800 flex flex-col justify-center items-center border-2 mt-10 rounded-3xl w-[270px] p-6">
            <p className="font-semibold text-[30px]">
              {state.user ? state.user.name : ""}
            </p>
            <span className="mt-2 text-[13px]">
              <p>
                Satoru Gojo (五条悟 Gojō Satoru?) is one of the main
                protagonists of Jujutsu Kaisen. He is a special grade jujutsu
                sorcerer and a teacher at the Tokyo Jujutsu High.{" "}
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
