import { createBrowserRouter, Router } from "react-router"
import Home from "../components/pages/Home"
import AboutUs from "../components/pages/AboutUs"

export const router = createBrowserRouter([
    {
      path:"/",
      Component: Layout,
      children: [
        {      index: true,
                Component: Home
        },
        {
                  path:"/about-us",
                 Component: AboutUs
        },
        {
                  path:"/contact",
                Component: Contact
        }
      ]

      }
    
    ])