import "./home.scss";
import React, { useState } from "react";
import { Header, FeaturedBook, Cart, Carousel } from "components";
import { Books } from "pages";
import {} from "components/index";

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(!isCartOpen);
    hideScrollonCartOpen();
  };

  const hideScrollonCartOpen = () => {
    !isCartOpen
      ? document.querySelector(".home").classList.add("scrollbar-hidden")
      : document.querySelector(".home").classList.remove("scrollbar-hidden");
  };

  return (
    <div className="home">
      <Header cartHandler={showCartHandler} />
      <Cart isCartOpen={isCartOpen} showCartHandler={showCartHandler} />
      <main className="main__container">
        <Carousel>
          <FeaturedBook />
          <FeaturedBook />
          <FeaturedBook />
          <FeaturedBook />
          <FeaturedBook />
          <FeaturedBook />
        </Carousel>

        <Books />
      </main>
    </div>
  );
};

export default Home;
