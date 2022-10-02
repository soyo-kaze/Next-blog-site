import Link from "next/link";
import { useEffect } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useSelector,useDispatch } from "react-redux";
import { userState,setAuthState } from "../store/authSlice";

const Header = () => {

  const state = useSelector(userState)

  const dispatch = useDispatch();

  const handleSignOut = () => {
    console.log("Hi I am called")
    dispatch(setAuthState({ type: "USER_LOGOUT" }));
  };

  useEffect(() => {
    console.log(Object.keys(state.user).length == 0 ? state.user._id : "");
  }, [state]);

  return (
    <>
      <div className="p-4 w-full fixed flex items-center justify-between bg-gray-200 z-20">
        <Link href="/">
          <div className="cursor-pointer">BlogSite</div>
        </Link>
        <Link href={Object.keys(state.user).length !== 0 ? `/u/${state.user._id}` : ""}>
          <p className="cursor-pointer">{Object.keys(state.user).length !== 0 ? state.user.name : ""}</p>
        </Link>
        <div className="flex space-x-2">
          <Link href={Object.keys(state.user).length == 0 ? "/login" : ""}>
            <span
              className="p-2 cursor-pointer text-white bg-green-500 rounded-md"
              onClick={handleSignOut}
            >
              {Object.keys(state.user).length == 0 ? "Login" : "Logout"}
            </span>
          </Link>
          <Link href="/sign-up">
            <span
              className="p-2 cursor-pointer text-white bg-blue-500 rounded-md"
              hidden={Object.keys(state.user).length == 0 ? false : true}
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
