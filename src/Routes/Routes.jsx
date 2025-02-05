import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ContactPage from "../Pages/ContactPage/ContactPage";
import MyProjects from "../Pages/MyProjects/MyProjects";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects",
        element: <MyProjects></MyProjects>,
      },
      {
        path: "/contacts",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
      },
    ],
  },
]);

export default router;
