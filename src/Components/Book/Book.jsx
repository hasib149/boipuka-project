import React from "react";
import { IoStarHalfOutline } from "react-icons/io5";
import { Link } from "react-router";

const Book = ({ book }) => {
  console.log(book);
  const { bookName, author, image, category, publisher, rating, bookId } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl border ">
        <figure className="bg-gray-100 p-8 rounded-2xl w-11/12 mx-auto mt-5">
          <img className="h-64 rounded-md" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center gap-3">
            {bookName}
            <div className="badge ">{publisher}</div>
          </h2>
          <p>By:{author}</p>
          <div className="border-t-2 border-dotted"></div>
          <div className="card-actions justify-between mt-5">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <IoStarHalfOutline />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
