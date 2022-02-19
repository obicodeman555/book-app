import React from "react";
import "./books.scss";

import { UnderlinedSectionHeaderTitle, Book } from "components";

const Books = ({ books }) => {
  return (
    <>
      <UnderlinedSectionHeaderTitle title="All books" />
      <section className="books">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </section>
    </>
  );
};

export default Books;
