import Button from "../Button";
import Input from "../Input";

const Reservation = () => {
  return (
    <div className={`bg-reservation-image md:py-48 py-10 px-5 md:px-0`}>
      <form
        action=""
        className="md:max-w-5xl w-full bg-dark/95 mx-auto px-3 md:px-36 py-3 md:py-32 bg-black"
      >
        {/* top heading */}
        <div className="text-center">
          <h3 className="text-white text-lg font-medium font-josefin border-y border-cream inline-block py-1">
            RESERVATION
          </h3>
          <h1 className="text-white text-2xl md:text-[40px] font-bold font-Cormorant mt-3 mb-4">
            Book your table now
          </h1>
          <p className="text-white text-base md:ext-xl text-center font-normal my-5 font-josefin">
            {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
          </p>
        </div>
        {/* input field */}
        <div className="grid md:grid-cols-12 gap-3 md:gap-7 font-josefin">
          <Input className={"col-span-6"} placeholder={"Name"} type={"text"} />
          <Input
            className={"col-span-6"}
            placeholder={"Email"}
            type={"Email"}
          />
          <Input
            className={"md:col-span-4 col-span-6"}
            placeholder={"Parson"}
            type={"Number"}
          />
          <Input
            className={"md:col-span-4 col-span-6 invert text-black outline-none"}
            placeholder={"Timing"}
            type={"time"}
          />
          <Input
            className={"md:col-span-4 col-span-6 invert text-black"}
            placeholder={"Date"}
            type={"date"}
          />
        </div>
        <div className="text-center mt-8">
          <Button title={"Book a Table"} />
        </div>
      </form>
    </div>
  );
};
export default Reservation;
