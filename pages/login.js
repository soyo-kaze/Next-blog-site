import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setAuthState } from "../store/authSlice";
const axiosInit = axios.create({
  baseURL: "https://sheltered-hollows-40615.herokuapp.com/",
});

const Login = () => {
  const [user, setUser] = useState({ username: "", pass: "" });
  const [head, setHead] = useState("Login");
  const router = useRouter();
  const dispatch = useDispatch()
  const toastOptions = {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data: loginData } = await axiosInit.post("/user/login", {
        userId: user.username,
        password: user.pass,
      });
      //TODO: Implement useReducer and add data to the data-layer
      loginData.isPass
        ? (async () => {
            const { data: userStuff } = await axiosInit.post(
              "/user/user-data",
              {
                userId: user.username,
              }
            );

            dispatch(setAuthState({ type: "USER_LOGIN", user: { ...userStuff.data[0] } }));
            toast.success(loginData.message, toastOptions);
            setTimeout(() => router.push("/"), 2500);
            // router.push("/");
          })()
        : (() => {
            setUser({ username: "", pass: "" });
            toast.warn(loginData.message, toastOptions);
            // setHead("Error");
          })();
    } catch (e) {
      //TODO: Implement toastify
      // setHead("Error");
      toast.error(e.message, toastOptions);
      // console.error(`Error: ${e}`);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex h-screen justify-center items-center pl-4 pr-4">
        <ToastContainer />
        <div className="p-6 max-w-md flex-col space-y-10 w-full border-2 h-[400px] rounded-md shadow-lg border-gray-300 flex justify-center items-center">
          <p className="text-[40px] font-bold">{head}</p>
          <form
            className=" flex justify-center flex-col space-y-6 items-center w-full"
            onSubmit={(e) => handleLogin(e)}
          >
            <input
              type="text"
              value={user.username}
              placeholder="Username"
              className="border-[1px] p-2 w-[80%] rounded-md"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
            <input
              type="password"
              value={user.pass}
              placeholder="Password"
              onChange={(e) => setUser({ ...user, pass: e.target.value })}
              className="border-[1px] p-2 w-[80%] rounded-md"
              required
            />
            <button className="bg-green-500 text-white font-semibold p-2 rounded-md shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-200">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
