import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  formatPrice,
  hasAvailableCopies,
  getReleaseDate,
  getAuthors,
  getGenres,
  getReleaseYear,
  getTags,
} from "utils/helpers";
import "./bookDetails.scss";

import {
  UserFeedBack,
  GoBackLink,
  LargeCartButton,
  MobileLargeCartButton,
  Loading,
} from "components";

import { GET_SINGLE_BOOK } from "graphql/queries";

const BookDetails = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_SINGLE_BOOK, {
    variables: { id },
  });

  return (
    <div className="bookItem__details">
      {loading ? (
        <Loading />
      ) : (
        <article className="bookItem__info">
          <section className="bookItem__tradeInfo">
            <div className="">
              <GoBackLink linkText="Back" useAsLink={true} to="/" />
              <figure>
                <img src={data.book.image_url} alt="big-magic-cover" />
                <figcaption>
                  <span
                    id={`${
                      hasAvailableCopies(data.book.available_copies)
                        ? "available"
                        : "unavailable"
                    }`}
                    className="availability__copy"
                  >
                    {hasAvailableCopies(data.book.available_copies)
                      ? `${data.book.available_copies} Copies Available`
                      : "Out of stock"}
                  </span>

                  <span className="book__price">
                    {formatPrice(data.book.price)}
                  </span>
                  <LargeCartButton buttonText="Add to Cart" />
                </figcaption>
              </figure>
            </div>
          </section>
          <div className="bookItem__tradeInfo__text">
            <section>
              <h1>
                {data.book.title}: {data.book.subtitle}
              </h1>
              <div className="author mb-md">
                <span className="label fw-600">
                  {getAuthors(data.book.authors)}
                </span>
                <span className="mt-md">
                  {getReleaseYear(data.book.release_date)}
                </span>
              </div>

              <div className="table-format">
                <UserFeedBack
                  className="featuredBook__item"
                  likes={data.book.likes}
                  purchases={data.book.number_of_purchases}
                  rating={data.book.rating}
                />
                <div className="genreAndTags">
                  <span className="field">
                    <span className="label fw-600">Genre</span>
                    <span className="mt-md fw-400">
                      {getGenres(data.book.genres)}
                    </span>
                  </span>
                  <span className="field">
                    <span className="label fw-600">Tags</span>
                    <span className="mt-md fw-400">
                      {getTags(data.book.tags)}
                    </span>
                  </span>
                </div>
                <div className="publisher__releaseDate">
                  <span className="field">
                    <span className="label fw-600">Publisher</span>
                    <span className="mt-md fw-400">{data.book.publisher}</span>
                  </span>
                  <span className="field">
                    <span className="label fw-600">Released</span>
                    <span className="mt-md fw-400">
                      {getReleaseDate(data.book.release_date)}
                    </span>
                  </span>
                </div>
              </div>
              <div className="book__description">
                {data.book.full_description}
              </div>
            </section>
          </div>
          <MobileLargeCartButton />
        </article>
      )}
    </div>
  );
};

export default BookDetails;
