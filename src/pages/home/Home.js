import "./home.scss";
import React from "react";
import { FeaturedBooks, Loading } from "components";
import { Books } from "pages";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "graphql/queries";

//request

const Home = () => {
  const { loading, data } = useQuery(GET_BOOKS);

  const getFeaturedBooks = () => {
    const featuredBooks = data.books.filter((book) => book.featured === true);
    return featuredBooks;
  };

  return (
    <div className="home">
      <main className="main__container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <FeaturedBooks books={getFeaturedBooks()} />

            <Books books={data.books} />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
