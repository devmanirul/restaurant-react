import Button from "../Button";
import Input from "../Input";

const Reservation = () => {
  return (
    <div className={`bg-reservation-image py-48`}>
      <form
        action=""
        className="max-w-5xl bg-dark/95 mx-auto px-36 py-32 w-full  bg-black"
      >
        {/* top heading */}
        <div className="text-center">
          <h3 className="text-white text-lg font-medium font-josefin border-y border-cream inline-block py-1">
            RESERVATION
          </h3>
          <h1 className="text-white text-2xl md:text-[40px] font-bold font-Cormorant mt-3 mb-4">
            Book your table now
          </h1>
          <p className="text-black text-base md:ext-xl text-center font-normal mt-3 font-josefin">
            {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
          </p>
        </div>
        {/* input field */}
        <div className="grid grid-cols-12 gap-7 font-josefin">
          <Input className={"col-span-6"} placeholder={"Name"} type={"text"} />
          <Input
            className={"col-span-6"}
            placeholder={"Email"}
            type={"Email"}
          />
          <Input
            className={"col-span-4"}
            placeholder={"Parson"}
            type={"Number"}
          />
          <Input
            className={"col-span-4 invert text-black"}
            placeholder={"Timing"}
            type={"time"}
          />
          <Input
            className={"col-span-4 invert text-black"}
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
