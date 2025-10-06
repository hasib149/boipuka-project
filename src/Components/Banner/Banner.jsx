import React from "react";
import bookimage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-gray-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-30">
        <img src={bookimage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-13">
          <h1 className="text-5xl font-bold lending-[80px]">
            Books to freshen
            <br /> up your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
