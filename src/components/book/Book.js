import React from "react";
import "./book.scss";
import { Link } from "react-router-dom";

import { UserFeedBack } from "components";
import { AddToCartButton } from "components";

const Book = ({
  image,
  bookTitle,
  publisher,
  category,
  price,
  isAvailable,
  copies,
}) => {
  return (
    <article className="book">
      <Link to="/books/id">
        <div className="book__imageContainer">
          <img src={image} alt="book graphics cover" />
        </div>
        <div className="book__detailsContainer">
          <h2 className="book__title">{bookTitle}</h2>
          <div className="book__author">
            <span className>{publisher}</span>
            <span>{category}</span>
          </div>
          <UserFeedBack />
          <div className="book__stock">
            <span className="book__stock__price">{price}</span>
            <span
              className={`${
                isAvailable && copies !== 0
                  ? "book__stock__availability available"
                  : "book__stock__availability unavailable"
              }`}
            >
              {(copies === 0) & !isAvailable
                ? "Out of stock"
                : `${copies} Copies Available`}
            </span>
          </div>
          <AddToCartButton />
        </div>
      </Link>
    </article>
  );
};

export default Book;
