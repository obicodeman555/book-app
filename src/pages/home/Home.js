import "./home.scss";
import React from "react";
import { Header, FeaturedBooks } from "components";
import { Books } from "pages";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main__container">
        <FeaturedBooks />
        <Books />
      </main>
    </div>
  );
};

export default Home;
