import React from "react";
import { UnderlinedSectionHeaderTitle, Book } from "components";
import "./books.scss";

const Books = () => {
  return (
    <>
      <UnderlinedSectionHeaderTitle title="All books" />
      <section className="books">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </>
  );
};

export default Books;
