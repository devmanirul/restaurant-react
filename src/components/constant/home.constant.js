import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import avater1 from "../../assets/images/avater/avater-1.svg";
import avater2 from "../../assets/images/avater/avater-2.svg";
import avater3 from "../../assets/images/avater/avater-3.svg";
import Menu1 from "../../assets/images/offer/menu1.jpg";
import Menu2 from "../../assets/images/offer/menu1.jpg";
import Menu3 from "../../assets/images/offer/menu1.jpg";
import Menu4 from "../../assets/images/offer/menu1.jpg";

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
  {
    id: 4,
    img: avater1,
    name: "Daniyal Sppra",
    country: "Newyork",
    comment:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
  },
];

const popularDishesData = [
  {
    id: 1,
    title: "Chicken Manjoori",
    img: Menu1,
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 2,
    title: "Chicken Manjoori",
    img: Menu2,
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 3,
    title: "Chicken Manjoori",
    img: Menu3,
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 4,
    title: "Chicken Manjoori",
    img: Menu4,
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
];

export { storyList, testimonialData, popularDishesData };
