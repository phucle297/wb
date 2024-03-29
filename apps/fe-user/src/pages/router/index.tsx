import { createBrowserRouter } from "react-router-dom";
import { GeneralErrorElement } from "@ui/components/general-error-fallback/general-error-fallback";

import AboutUs from "../(routes)/about-us";
import BlogDetail from "../(routes)/blog-detail";
import Blogs from "../(routes)/blogs";
import ContactUs from "../(routes)/contact-us";
import Donate from "../(routes)/donate";
import Home from "../(routes)/home";
import ShortReviews from "../(routes)/short-reviews";
import Layout from "@fe-user/components/layout";
import { PATH } from "@fe-user/configs/path";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: PATH.BLOGS,
        element: <Blogs />,
      },
      {
        path: PATH.BLOGS_DETAIl,
        element: <BlogDetail />,
      },
      {
        path: PATH.DONATE,
        element: <Donate />,
      },
      {
        path: PATH.CONTACT_US,
        element: <ContactUs />,
      },
      {
        path: PATH.SHORT_REVIEWS,
        element: <ShortReviews />,
      },
    ],
  },
  {
    path: "*",
    element: <GeneralErrorElement isNotFound />,
  },
]);
