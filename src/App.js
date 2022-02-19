import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import { Home, Error, BookDetails } from "pages";
import { Header, Cart } from "components";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const homeRef = useRef();

  const showCartHandler = () => {
    setIsCartOpen(!isCartOpen);
    hideScrollonCartOpen();
  };

  const hideScrollonCartOpen = () => {
    !isCartOpen
      ? homeRef.current.classList.add("scrollbar-hidden")
      : homeRef.current.classList.remove("scrollbar-hidden");
  };

  return (
    <BrowserRouter>
      <Cart isCartOpen={isCartOpen} showCartHandler={showCartHandler} />
      <Header cartHandler={showCartHandler}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isCartOpen={isCartOpen}
                showCartHandler={showCartHandler}
                ref={homeRef}
              />
            }
          />

          <Route
            path="/books/:id"
            element={
              <BookDetails
                sCartOpen={isCartOpen}
                showCartHandler={showCartHandler}
              />
            }
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
