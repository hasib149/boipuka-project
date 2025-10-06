import React from "react";
import { useLoaderData, useParams } from "react-router";

const BooksDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);
  const { bookName, author, image, category, review, publisher, rating } =
    singleBook;

  //   console.log(data);
  //   console.log(id);
  return (
    <div className="card lg:card-side bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl mx-auto flex flex-col lg:flex-row">
      <figure className="w-full lg:w-1/3 h-64 lg:h-auto overflow-hidden bg-gray-200 p-4 lg:p-0 flex-shrink-0">
        <img
          src={image}
          alt="Album"
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>

      <div className="card-body flex flex-col justify-between p-6 lg:p-8 flex-1">
        <div>
          <h2 className="card-title text-2xl font-bold mb-3">{bookName}</h2>
          <p className="text-gray-600 text-base">{review}</p>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn  px-6 py-2 rounded-lg shadow-md hover:brightness-95">
            Read
          </button>
          <button className="btn btn-primary px-6 py-2 rounded-lg shadow-md hover:brightness-95">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
