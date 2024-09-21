import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import avater1 from "../../assets/images/avater/avater-1.svg";
import avater2 from "../../assets/images/avater/avater-2.svg";
import avater3 from "../../assets/images/avater/avater-3.svg";
import popularDishes1 from "../../assets/images/offer/popular1.png";
import popularDishes2 from "../../assets/images/offer/popular2.png";
import popularDishes3 from "../../assets/images/offer/popular3.png";
import popularDishes4 from "../../assets/images/offer/popular4.png";
import blog1 from "../../assets/images/blog/blog1.png";
import blog2 from "../../assets/images/blog/blog2.png";

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
    img: popularDishes1,
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 2,
    title: "Chicken Manjoori",
    img: popularDishes2,
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 3,
    title: "Chicken Manjoori",
    img: popularDishes3,
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
  {
    id: 4,
    title: "Chicken Manjoori",
    img: popularDishes4,
    description: `Lorem Ipsum is that it has a 
  more-or-less normal`,
    price: 15,
  },
];

const blogData = [
  {
    id: 1,
    img: blog1,
    restaurants: "Restaurants",
    date: "Feb 22, 2022",
    title: "The Most Popular Delicious Food Of Mediterranean Cuisine",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
  },
  {
    id: 1,
    img: blog2,
    restaurants: "Restaurants",
    date: "Feb 22, 2022",
    title: "TElegant Dessert: 10 Tips How to Make It at Home",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
  },
];
export { storyList, testimonialData, popularDishesData, blogData };
