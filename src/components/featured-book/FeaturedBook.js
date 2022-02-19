/* eslint-disable jsx-a11y/img-redundant-alt */
import "./featuredBook.scss";
import React from "react";
import { Link } from "react-router-dom";
import {
  hasAvailableCopies,
  getReleaseYear,
  getAuthors,
  getGenres,
  getTags,
} from "utils/helpers";
import { UserFeedBack } from "components";

const FeaturedBook = ({ book }) => {
  return (
    <Link to="/books/id" className="featuredBookLinked">
      <span className="featuredBook__imageBox">
        <img
          className="featuredBook__image"
          src={book.image_url}
          alt="featured picture One"
        />
        <span className="featuredBook__hoverCard">
          <span className="isAvailable featuredBook__item">
            {hasAvailableCopies(book) && "Available"}
          </span>

          <span className="featuredBook__item ">
            <span className="bookTitle fw-600">{book.title}</span>
            <span className="author fw-600">{getAuthors(book.authors)}</span>
            <span className="publishedYear fw-100">
              {getReleaseYear(book.realease_date)}
            </span>
          </span>
          <span className="featuredBook__item">
            <label className="bookGenre fw-600">Genre</label>
            <span className="bookGenre__category fw-100">
              {getGenres(book.genres)}
            </span>
          </span>
          <span className="featuredBook__item">
            <label className="bookTag fw-600">Tags</label>
            <span className="bookTag__category">{getTags(book.tags)}</span>
          </span>
          <UserFeedBack
            className="featuredBook__item"
            likes={book.likes}
            purchases={book.number_of_purchases}
          />
        </span>
      </span>
    </Link>
  );
};

export default FeaturedBook;
