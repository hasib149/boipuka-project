import React from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // console.log(data);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-4">
      {data.map((book) => (
        <Book key={book.bookId} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
