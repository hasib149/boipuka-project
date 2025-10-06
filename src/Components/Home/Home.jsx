import React from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-4xl font-semibold text-center mt-10 p-7">Books</h2>
      <Books data={data}></Books>
    </div>
  );
};

export default Home;
