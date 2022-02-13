import "./home.scss";
import React from "react";
import { Header, FeaturedBooks } from "components";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="main__container">
        <FeaturedBooks />
      </main>
    </div>
  );
};

export default Home;
