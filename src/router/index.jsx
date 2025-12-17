import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Create from "../pages/Create";
import Layout from "../layout/Layout";
import { Component } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: Home 
      },
      {
        path: "/create",
        element: Create 
      },
      {
        path: "/about-us",
        element: AboutUs
      }
    ]
  }
]);



