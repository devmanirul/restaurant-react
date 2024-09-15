import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import avater1 from "../../assets/images/avater/avater-1.svg";
import avater2 from "../../assets/images/avater/avater-2.svg";
import avater3 from "../../assets/images/avater/avater-3.svg";

const storyList = [
  {
    id: "locate-us",
    icon: CiLocationOn,
    title: "Locate Us",
    description: "Riverside 25, San Francisco, California",
  },
  {
    id: "Open Hours",
    icon: MdOutlineSpeed,
    title: "Open Hours",
    description: "Mon To Rri 9:00 AM - 9:00 PM",
  },
  {
    id: "Reservation",
    icon: CiViewList,
    title: "Reservation",
    description: "hirestaurantate@gmail.com",
  },
];

const testimonialData = [
  {
    id: 1,
    img: avater1,
    name: "Daniyal Sppra",
    country: "Newyork",
    comment:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
  },
  {
    id: 2,
    img: avater2,
    name: "Natasha D",
    country: "Salt Lake City",
    comment:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages.",
  },
  {
    id: 3,
    img: avater3,
    name: "Jack Sparrow",
    country: "San Diego",
    comment:
      "It is professional, considers everyone's time, can think about the  There are many  passages whole probls small niche, friendly.",
  },
];

export { storyList, testimonialData };
