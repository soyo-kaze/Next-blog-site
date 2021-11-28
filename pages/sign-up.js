import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({ username: "", pass: "", name: "" });
  const handleForm = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
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
