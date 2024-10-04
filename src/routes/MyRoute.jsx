import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import OurMenu from "../pages/OurMenu";
import ErrorPage from "../pages/Error";
import Reservation from "../pages/Reservation";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Faq from "../pages/Faq";
import ChangeLog from "../pages/ChangeLog";
import Password from "../pages/Password";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/menu",
    element: <OurMenu />,
  },
  {
    path: "/reservation",
    element: <Reservation />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/changelog",
    element: <ChangeLog />,
  },
  {
    path: "/password",
    element: <Password />,
  },
]);

export default router;
