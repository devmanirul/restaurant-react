import Input from "../Shared/Input";

const ProtectedPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-5 py-20">
      <div className="bg-lightCream py-20 px-40 border border-cream text-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="">
            <img
              src={"https://i.ibb.co.com/d0JhHFW/Icon.png"}
              alt=""
              className="bg-black rounded-full p-7"
            />
          </div>
          <h1 className="font-bold text-3xl font-Cormorant border-b border-b-cream inline">
            Protected Page
          </h1>
        </div>
        <p className="font-josefin mt-3">
          This page is password protected. If you are the website admin, or have
          access to this page, please type your password below.{" "}
        </p>
        <Input
          className={"text-black"}
          type={"password"}
          placeholder={"Enter Your Password"}
        />
      </div>
    </div>
  );
};
export default ProtectedPage;
