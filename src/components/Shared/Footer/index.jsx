import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import footer from "../../../assets/images/footer/footerLogo.png";
import { Link } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
const Footer = () => {
  return (
    <div className="bg-black pt-5 md:pt-10">
      {/* Top footer */}
      <div className=" md:px-0 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20 font-josefin container mx-auto">
        {/* left */}
        <div className="w-full flex flex-row justify-center md:justify-between items-center text-xl font-medium">
          <p className="underline text-white text-start cursor-pointer md:inline">
            Instagram Feed
          </p>
        </div>
        {/* mid */}
        <div className="w-full flex items-center justify-center">
          <img src={footer} alt="" className="w-44 md:w-[300px]" />
        </div>

        {/* right  */}
        <div className="w-full flex flex-row items-center justify-center md:justify-end gap-5 text-[#DEDEDE] text-2xl">
          <Link to={"#"}>
            <FaInstagram />
          </Link>
          <Link to={"#"}>
            <FaFacebook />
          </Link>
          <Link to={"#"}>
            <FaTwitter />
          </Link>
          <Link to={"#"}>
            <FaPinterest />
          </Link>
        </div>
      </div>
      {/* footer down */}
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-normal items-center md:items-start gap-5 container mx-auto leading-10 py-5 md:py-16">
        {/* left */}
        <div className="md:w-3/12 text-center md:text-start">
          <h3 className="text-white text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
            CONTACT
          </h3>
          <p className="text-white">
            5 Rue Dalou, 75015 Paris <br />{" "}
            <span className="text-cream">Call</span> - +33 156 78 89 56 <br />
            <span className="text-cream">benoit@mail.com</span>
          </p>
        </div>
        {/* mid */}
        <div className="md:w-6/12">
          <p className="text-center text-white leading-8 mb-5">
            {" "}
            Join our mailing list for updates, <br /> Get news & offers events.
          </p>
          <div className="flex md:flex-row flex-col gap-5 md:gap-0 justify-center items-center">
            <Input placeholder={"Email"} />
            <Button title={"Subscribe"} />
          </div>
        </div>
        {/* right */}
        <div className="md:w-3/12 text-center md:text-end">
          <h3 className="text-white text-lg font-semibold font-josefin border-y border-cream inline-block py-1">
            WORKING HOURS
          </h3>
          <p className="text-white">
            <span className="text-cream">Mon - Fri</span>: 7.00am - 6.00pm{" "}
            <br />
            <span className="text-cream">Sat:</span> 7.00am - 6.00pm
            <br />
            <span className="text-cream">Sun</span>8.00am - 6.00pm
          </p>
        </div>
      </div>
      {/* copyright */}
      <div className="border-t">
        <div className="py-5 px-5 md:px-0 container mx-auto flex flex-col md:flex-row gap-5 items-center justify-between text-center md:text-start text-white">
          <p className="">
            © Copyright - Restaurantate | Designed by{" "}
            <Link className="text-cream">VictorFlow</Link> Templates - Powered
            by
            <Link className="text-cream"> Webflow</Link>
          </p>
          <p className="">Styleguide / Licenses</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
