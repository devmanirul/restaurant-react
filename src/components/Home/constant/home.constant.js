import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

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
    img: "https://i.ibb.co.com/mvRW7rq/avater-1.png",
    name: "Daniyal Sppra",
    country: "Newyork",
    comment:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.",
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/Hr4N0m0/avater-2.png",
    name: "Natasha D",
    country: "Salt Lake City",
    comment:
      "It is professional, considers everyone's time, can think about the  There are many variations of passages.",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/9GsJrms/avater-3.png",
    name: "Jack Sparrow",
    country: "San Diego",
    comment:
      "It is professional, considers everyone's time, can think about the  There are many  passages whole probls small niche, friendly.",
  },
  {
    id: 4,
    img: "https://i.ibb.co.com/mvRW7rq/avater-1.png",
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
    img: "https://i.ibb.co.com/QNZt1pg/chicken-Manjoori1.png",
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 2,
    title: "Chicken Manjoori",
    img: "https://i.ibb.co.com/h15b306/chicken-Manjoori2.png",
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 3,
    title: "Chicken Manjoori",
    img: "https://i.ibb.co.com/Wc9qPkT/chicken-Manjoori3.png",
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 4,
    title: "Chicken Manjoori",
    img: "https://i.ibb.co.com/5YPj9nF/chicken-Manjoori4.png",
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
];

const blogData = [
  {
    id: 1,
    img: "https://i.ibb.co.com/Xz3f5JT/blog1.png",
    restaurants: "Restaurants",
    date: "Feb 22, 2022",
    title: "The Most Popular Delicious Food Of Mediterranean",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
  },
  {
    id: 1,
    img: "https://i.ibb.co.com/9vrfPWD/blog2.png",
    restaurants: "Restaurants",
    date: "Feb 22, 2022",
    title: "TElegant Dessert: 10 Tips How to Make It at Home",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
  },
];

const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Menu", path: "/menu" },
  { id: 4, title: "Reservation", path: "/reservation" },
  { id: 5, title: "Gallery", path: "/gallery" },
  { id: 6, title: "Blog", path: "/blog" },
  { id: 7, title: "Contact", path: "/contact" },
];
export { storyList, testimonialData, popularDishesData, blogData, navItems };
