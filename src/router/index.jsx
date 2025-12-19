import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Create from "../pages/Create";
import AppLayout from "../components/templates/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,   // 👈 layout principal
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
      { path: "about-us", element: <AboutUs /> }  // 👈 aquí conectas AboutUs
    ]
  }
]);