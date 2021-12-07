import Link from "next/link";
import { useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { InfoProvider } from "./dataContext";

const Header = () => {
  const [state, dispatch] = InfoProvider();
  const handleSignOut = () => {
    dispatch({ type: "USER_LOGOUT" });
  };
  useEffect(() => {
    console.log(state.user ? state.user._id : "");
  }, [state]);
  return (
    <>
      <div className="p-4 w-full fixed flex items-center justify-between bg-gray-200 z-20">
        <Link href="/">
          <div className="cursor-pointer">BlogSite</div>
        </Link>
        <Link href={state.user ? `/u/${state.user._id}` : ""}>
          <p className="cursor-pointer">{state.user ? state.user.name : ""}</p>
        </Link>
        <div className="flex space-x-2">
          <Link href={!state.user ? "/login" : ""}>
            <span
              className="p-2 cursor-pointer text-white bg-green-500 rounded-md"
              onClick={handleSignOut}
            >
              {!state.user ? "Login" : "Logout"}
            </span>
          </Link>
          <Link href="/sign-up">
            <span
              className="p-2 cursor-pointer text-white bg-blue-500 rounded-md"
              hidden={state.user == null ? false : true}
            >
              SignUp
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
