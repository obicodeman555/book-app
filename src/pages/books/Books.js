import React from "react";
import { UnderlinedSectionHeaderTitle, Book } from "components";
import "./books.scss";
import theEffectEngineerImage from "assets/img/the-effective-engineer-cover_bgj7u4.jpg";
import theEffectPhythonImage from "assets/img/effective-python-cover_s7dahh.jpg";

const Books = () => {
  return (
    <>
      <UnderlinedSectionHeaderTitle title="All books" />
      <section className="books">
        <Book
          image={theEffectEngineerImage}
          bookTitle="The Effect Engineer"
          publisher="Edmond Lau - 2009"
          category="Motivational"
          price="$29.99"
          isAvailable={true}
          copies={23}
        />
        <Book
          image={theEffectPhythonImage}
          bookTitle="Effect Engineer"
          publisher="Diomidis Spinellis"
          category="Motivational"
          price="$29.99"
          isAvailable={false}
          copies={0}
        />
      </section>
    </>
  );
};

export default Books;
