import React from "react";
import "./book.scss";
import { Link } from "react-router-dom";
import theEffectEngineerImage from "assets/img/the-effective-engineer-cover_bgj7u4.jpg";
import { UserFeedBack } from "components";
import { AddButtonToCart } from "components";

const Book = () => {
  return (
    <article className="book">
      <Link to="/books/id">
        <div className="book__imageContainer">
          <img src={theEffectEngineerImage} alt="" srcset="" />
        </div>
        <div className="book__detailsContainer">
          <h2 className="book__title">The Effect Engineer</h2>
          <div className="book__author">
            <span className>Edmond Lau - 2009</span>
            <span>Motivational</span>
          </div>
          <UserFeedBack />
          <div className="book__stock">
            <span className="book__stock__price">$29.99</span>
            <span className="book__stock__availability isAvailable">
              23 Copies Available
            </span>
          </div>
          <AddButtonToCart />
        </div>
      </Link>
    </article>
  );
};

export default Book;
