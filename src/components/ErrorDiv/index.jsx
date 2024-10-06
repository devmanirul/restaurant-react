import { Link } from "react-router-dom";

const ErrorDiv = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 md:py-0 md:pb-28">
      {/* top */}
      <div className="flex flex-row justify-center items-center">
        <h1 className="md:text-[290px] text-9xl font-bold font-Cormorant">4</h1>

        <div className="w-48">
          <img
            src="https://i.ibb.co.com/n3t5HB7/Image.png"
            alt=""
            className=""
          />
        </div>

        <h1 className="md:text-[290px] text-9xl font-bold font-Cormorant">4</h1>
      </div>
      {/* down */}
      <div className="flex flex-col justify-center items-center gap-7 px-5 md:px-0 text-center">
        <h1 className="font-Cormorant text-2xl md:text-5xl font-bold ">
          Whoops, Nothing delicious to find here!
        </h1>
        <p className="font-josefin">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to={"/reservation"}
          className="bg-cream text-black text-xl font-semibold p-3 md:py-5 px-8 md:px-14"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};
export default ErrorDiv;
