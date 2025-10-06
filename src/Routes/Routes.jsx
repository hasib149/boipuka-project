// import React from "react";
import { createBrowserRouter } from "react-router";
import Error from "../Components/Error/Error";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
]);
