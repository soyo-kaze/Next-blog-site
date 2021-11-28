import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="p-4 w-full fixed flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer">BlogSite</div>
        </Link>
        <div className="flex space-x-2">
          <Link href="/login">
            <span className="p-2 cursor-pointer text-white bg-green-500 rounded-md">
              Login
            </span>
          </Link>
          <Link href="/sign-up">
            <span className="p-2 cursor-pointer text-white bg-blue-500 rounded-md">
              SignUp
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
