import React from "react";
import Book from "./Book";
import "../styles/Booklist.css";

// Use spread to access books in array
const allBooks = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71QuWEIWHlL._AC_UL200_SR200,200_.jpg",
    title: "Dog Man: Mothering Heights",
    author: "Dav Pilkey",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/816ZcMz1R3L._AC_UL200_SR200,200_.jpg",
    title: "The Women of the Bible Speak",
    author: "Shannon Bream",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81e53xsxj8L._AC_UL200_SR200,200_.jpg",
    title: "How to Do the Work",
    author: "Dr. Nicole LePera",
  },
];
const Booklist = () => {
  return (
    <div className='booklist'>
      {allBooks.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );
};

export default Booklist;
