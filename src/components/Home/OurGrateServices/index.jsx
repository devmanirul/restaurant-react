import ServiceCard from "../ServiceCard";

const servicesList = [
  {
    id: 1,
    title: "Opened 24/7",
    img: "https://i.ibb.co.com/30KdKKG/Icon3.png",
  },
  {
    id: 2,
    title: "Special Menus",
    img: "https://i.ibb.co.com/4ssC899/Icon1.png",
  },
  {
    id: 3,
    title: "Home Delivery",
    img: "https://i.ibb.co.com/BnvHJ2d/Icon2.png",
  },
];

const OurGrateServices = () => {
  return (
    <div className="bg-black lg:py-40 py-10">
      <div className="container mx-auto flex lg:flex-row  flex-col items-center justify-between gap-10">
        {/* heaction heading */}
        <div className="md:w-4/12 text-center md:text-start px-5 md:px-0">
          <h3 className="text-white text-xl font-semibold font-Cormorant border-y border-cream inline p-1">
            What we offer
          </h3>
          <h1 className="text-white text-2xl font-bold font-Cormorant mt-2">
            Our Great Services
          </h1>
          <p className="text-white text-base font-normal mt-3 font-josefin">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </p>
        </div>
        {/* information container */}
        <div className="md:w-8/12 flex lg:flex-row md:flex-row flex-col items-center gap-6 md:gap-10">
          {servicesList.map((item) => (
            <ServiceCard key={item.id} title={item.title} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGrateServices;
