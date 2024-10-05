import { Link } from "react-router-dom";

const ProtectedPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-5 py-20">
      <div className="bg-lightCream py-24 px-20 border border-cream text-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="bg-black rounded-full p-10">
            <img
              src={"https://i.ibb.co.com/d0JhHFW/Icon.png"}
              alt=""
              className=""
            />
          </div>
          <h1 className="font-bold text-3xl font-Cormorant border-b border-b-cream inline">
            Protected Page
          </h1>
        </div>
        <p className="font-josefin py-4">
          This page is password protected. If you are the website admin, or have
          access <br /> to this page, please type your password below.{" "}
        </p>
        <div className="flex flex-col items-center justify-between gap-5">
          <input
            className={
              "text-black md:py-5 px-8 md:px-9 outline-none border border-black"
            }
            type={"password"}
            placeholder={"Enter Your Password"}
          />
          <Link
            to={"/reservation"}
            className="bg-cream text-black text-xl font-semibold p-3 md:py-5 px-8 md:px-24"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProtectedPage;
