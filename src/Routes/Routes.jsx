// import React from "react";
import { createBrowserRouter } from "react-router";
import Error from "../Components/Error/Error";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import About from "../Pages/About/About";
import BooksDetails from "../Pages/BooksDetails/BooksDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BooksDetails,
      },
    ],
  },
]);
