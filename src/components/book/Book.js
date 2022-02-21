import React from "react";
import "./book.scss";
import {
  formatPrice,
  getAuthors,
  getReleaseYear,
  getTags,
  hasAvailableCopies,
} from "utils/helpers";
import { Link } from "react-router-dom";

import { UserFeedBack, AddToCartButton } from "components";

const Book = ({ book }) => {
  return (
    <article className="book">
      <Link to={`/books/${book.id}`}>
        <div className="book__imageContainer">
          <img src={book.image_url} alt={book.title} />
        </div>
        <div className="book__detailsContainer">
          <h2 className="book__title">{book.title}</h2>
          <div className="book__author">
            <span className>
              <span>{getAuthors(book.authors)}</span>
              <span>-</span>
              <span>{getReleaseYear(book.release_date)}</span>
            </span>
            <span>{getTags(book.tags)}</span>
          </div>
          <UserFeedBack
            likes={book.likes}
            purchases={book.number_of_purchases}
            rating={book.rating}
          />
          <div className="book__stock">
            <span className="book__stock__price">
              {formatPrice(book.price)}
            </span>
            <span
              id={`${
                hasAvailableCopies(book.available_copies)
                  ? "available"
                  : "unavailable"
              }`}
            >
              {hasAvailableCopies(book.available_copies)
                ? `${book.available_copies} Copies Available`
                : "Out of stock"}
            </span>
          </div>
        </div>
      </Link>

      <AddToCartButton
        bookId={book.id}
        availableCopies={book.available_copies}
      />
    </article>
  );
};

export default Book;
