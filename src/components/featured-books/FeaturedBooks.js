import React from "react";
import { FeaturedBook, Carousel } from "components";
const FeaturedBooks = ({ books }) => {
  return (
    <Carousel>
      {books.map((book) => (
        <FeaturedBook key={book.id} book={book} />
      ))}
    </Carousel>
  );
};

export default FeaturedBooks;
