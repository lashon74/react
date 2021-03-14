import React from "react";
import "../styles/Book.css";

const Book = ({ img, title, author }) => {
  const handleClick = () => {
    alert("Hello lashon");
  };
  //When you must pass input in inline click 
  const moreComplexExample = (author) => {
    console.log(author);
  }

  return (
    <article className='book' onMouseOver={() => {
      console.log(title)
    }}>
      <img src={img} alt='' />
      <h3 onClick={() => console.log(title)}>{title}</h3>
      <h4>{author}</h4>
      <button type='button' onClick={handleClick}>
        Click me
      </button>
      <button type='button' onClick={() => moreComplexExample(author)}>
       More Complex
      </button>
    </article>
  );
};

export default Book;
