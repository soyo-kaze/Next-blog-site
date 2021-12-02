import { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
const axiosInit = axios.create({
  baseURL: "https://sheltered-hollows-40615.herokuapp.com/",
});

const SignUp = () => {
  const [user, setUser] = useState({ username: "", pass: "", name: "" });
  const router = useRouter();

  const handleForm = async (e) => {
    e.preventDefault();
    const {
      data: { data: isAdded },
    } = await axiosInit.post("/user/add-user", {
      name: user.name,
      _id: user.username,
      password: user.pass,
    });
    if (isAdded.success) {
      console.log("success");
      toast.success(isAdded.message, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => router.push("/"), 1500);
    } else {
      console.log(`Not Successful. Message: ${isAdded.message}`);
    }
    console.log(isAdded);
  };
  return (
    <>
      <Head>
        <title>SignUp</title>
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="flex h-screen justify-center items-center pl-4 pr-4">
        <div className="p-6 max-w-md flex-col space-y-10 w-full border-2 rounded-md shadow-lg border-gray-300 flex justify-center items-center">
          <p className="text-[40px] font-bold">Register</p>
          <form
            className=" flex justify-center flex-col space-y-6 items-center w-full"
            onSubmit={(e) => handleForm(e)}
          >
            <input
              type="text"
              value={user.name}
              name="name"
              placeholder="Name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="border-[1px] p-2 w-[80%] rounded-md"
              required
            />
            <input
              type="text"
              value={user.username}
              name="username"
              placeholder="Username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="border-[1px] p-2 w-[80%] rounded-md"
              required
            />
            <input
              type="password"
              value={user.pass}
              name="pass"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, pass: e.target.value })}
              className="border-[1px] p-2 w-[80%] rounded-md"
              required
            />
            <button className="bg-green-500 text-white font-semibold p-2 rounded-md shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-200">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
